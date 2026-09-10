/* Desktrad — global four-language localization layer. */
(() => {
    'use strict';
    const STORAGE_KEY = 'desktrad-lang';
    const LANGS = ['pt', 'en', 'es', 'zh'];
    const ATTRS = ['title', 'placeholder', 'aria-label', 'aria-placeholder', 'alt', 'data-answer', 'data-tooltip'];
    const originals = new WeakMap();
    let dictionary = null, applying = false, observer = null;

    const lang = () => {
        const value = localStorage.getItem(STORAGE_KEY) || 'pt';
        return LANGS.includes(value) ? value : 'pt';
    };

    function extractObject(source, name) {
        const marker = `const ${name}`;
        const start = source.indexOf(marker);
        if (start < 0) return null;
        const brace = source.indexOf('{', start);
        if (brace < 0) return null;
        let depth = 0, quote = null, escaped = false, template = false, lineComment = false, blockComment = false;
        for (let i = brace; i < source.length; i++) {
            const c = source[i], n = source[i + 1];
            if (lineComment) { if (c === '\n') lineComment = false; continue; }
            if (blockComment) { if (c === '*' && n === '/') { blockComment = false; i++; } continue; }
            if (quote) { if (escaped) { escaped = false; continue; } if (c === '\\') { escaped = true; continue; } if (c === quote) quote = null; continue; }
            if (c === '/' && n === '/') { lineComment = true; i++; continue; }
            if (c === '/' && n === '*') { blockComment = true; i++; continue; }
            if (c === '`') { template = !template; continue; }
            if (template) continue;
            if (c === '\"' || c === "'") { quote = c; continue; }
            if (c === '{') depth++;
            if (c === '}') { depth--; if (depth === 0) return source.slice(brace, i + 1); }
        }
        return null;
    }

    async function loadDictionary() {
        try {
            const response = await fetch('css/js/translations.js', { cache: 'no-store' });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const source = await response.text();
            const primaryLiteral = extractObject(source, 'translations');
            const remainingLiteral = extractObject(source, 'remainingTranslationsBase');
            const primary = primaryLiteral ? Function(`"use strict"; return (${primaryLiteral});`)() : {};
            const remaining = remainingLiteral ? Function(`"use strict"; return (${remainingLiteral});`)() : {};
            const merged = { pt: {}, en: {}, es: {}, zh: {} };
            LANGS.forEach(code => { Object.assign(merged[code], primary[code] || {}); Object.assign(merged[code], remaining[code] || {}); });
            const allKeys = new Set(LANGS.flatMap(code => Object.keys(merged[code])));
            allKeys.forEach(key => { if (!(key in merged.pt)) merged.pt[key] = key; });
            dictionary = merged;
        } catch (error) {
            console.warn('[Desktrad i18n] Dictionary load failed:', error);
            dictionary = { pt: {}, en: {}, es: {}, zh: {} };
        }
    }

    function translateValue(value, targetLang) {
        if (!value || !dictionary) return value;
        const table = dictionary[targetLang] || {};
        const trimmed = value.trim();
        if (table[trimmed]) return value.replace(trimmed, table[trimmed]);
        let result = value;
        Object.keys(table).filter(k => k && k.length > 2 && result.includes(k)).sort((a, b) => b.length - a.length).forEach(key => { result = result.split(key).join(table[key]); });
        return result;
    }

    function toPortuguese(value, currentLang) {
        if (!value || currentLang === 'pt' || !dictionary) return value;
        const table = dictionary[currentLang] || {};
        let result = value;
        Object.keys(table).filter(key => key && table[key] && key !== table[key] && result.includes(table[key])).sort((a, b) => String(table[b]).length - String(table[a]).length).forEach(key => { result = result.split(table[key]).join(key); });
        return result;
    }

    function setOriginal(target, key, value) {
        let map = originals.get(target);
        if (!map) { map = new Map(); originals.set(target, map); }
        if (!map.has(key)) map.set(key, toPortuguese(value, lang()));
        return map.get(key);
    }

    function applyToNode(node, targetLang) {
        if (!dictionary || !node) return;
        if (node.nodeType === Node.TEXT_NODE) {
            const parent = node.parentElement;
            if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE'].includes(parent.tagName)) return;
            const source = setOriginal(node, 'text', node.nodeValue || '');
            const translated = translateValue(source, targetLang);
            if (node.nodeValue !== translated) node.nodeValue = translated;
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.tagName)) return;
        ATTRS.forEach(attr => {
            if (!node.hasAttribute(attr)) return;
            const source = setOriginal(node, `attr:${attr}`, node.getAttribute(attr) || '');
            const translated = translateValue(source, targetLang);
            if (node.getAttribute(attr) !== translated) node.setAttribute(attr, translated);
        });
        node.childNodes.forEach(child => applyToNode(child, targetLang));
    }

    function applyMetadata(targetLang) {
        document.documentElement.lang = targetLang === 'zh' ? 'zh-CN' : targetLang;
        document.querySelectorAll('title, meta[name="description"], meta[name="keywords"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]').forEach(el => {
            const key = el.tagName === 'TITLE' ? 'text' : 'content';
            const value = el.tagName === 'TITLE' ? el.textContent : el.getAttribute('content');
            if (value == null) return;
            const source = setOriginal(el, key, value);
            const translated = translateValue(source, targetLang);
            if (el.tagName === 'TITLE') el.textContent = translated; else el.setAttribute('content', translated);
        });
    }

    function updateButtons(targetLang) {
        document.querySelectorAll('.lang-btn, .lang-link').forEach(button => {
            const active = button.dataset.lang === targetLang;
            button.classList.toggle('active', active);
            if (button.classList.contains('lang-btn')) button.setAttribute('aria-pressed', String(active));
        });
        const floating = document.querySelector('.floating-language span');
        if (floating) floating.textContent = targetLang === 'zh' ? '中文' : targetLang.toUpperCase();
    }

    function applyLanguage(targetLang = lang()) {
        if (!dictionary || applying) return;
        applying = true;
        const normalized = LANGS.includes(targetLang) ? targetLang : 'pt';
        localStorage.setItem(STORAGE_KEY, normalized);
        applyMetadata(normalized);
        if (document.body) document.body.childNodes.forEach(node => applyToNode(node, normalized));
        updateButtons(normalized);
        applying = false;
        window.dispatchEvent(new CustomEvent('desktrad:i18n-applied', { detail: normalized }));
    }

    function startObserver() {
        if (observer) observer.disconnect();
        observer = new MutationObserver(mutations => {
            if (applying || !dictionary) return;
            const current = lang();
            for (const mutation of mutations) {
                mutation.addedNodes.forEach(node => applyToNode(node, current));
                if (mutation.type === 'attributes' && mutation.target) applyToNode(mutation.target, current);
            }
            updateButtons(current);
        });
        if (document.body) observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ATTRS });
    }

    document.addEventListener('click', event => {
        const button = event.target.closest && event.target.closest('.lang-btn, .lang-link');
        if (!button || !button.dataset.lang) return;
        event.preventDefault();
        const targetLang = button.dataset.lang;
        localStorage.setItem(STORAGE_KEY, targetLang);
        if (dictionary) applyLanguage(targetLang);
        window.dispatchEvent(new CustomEvent('desktrad:language', { detail: targetLang }));
    });

    window.addEventListener('desktrad:language', event => {
        const targetLang = event.detail || lang();
        localStorage.setItem(STORAGE_KEY, targetLang);
        if (dictionary) applyLanguage(targetLang);
    });

    (async () => {
        await loadDictionary();
        applyLanguage(lang());
        startObserver();
        [100, 350, 800, 1600].forEach(delay => setTimeout(() => applyLanguage(lang()), delay));
    })();
})();
