(() => {
    'use strict';

    const KEY = 'desktrad-lang';
    const LANGS = ['pt', 'en', 'es', 'zh'];

    const content = {
        pt: {
            badge: '+30 Anos de Excelência',
            title: 'Rompendo <span>Barreiras Linguísticas</span> com Precisão',
            description: 'A Desktrad é especialista em tradução de textos técnicos, comerciais, financeiros e jurídicos, atendendo grandes empresas nacionais e multinacionais. Possuímos uma equipe de profissionais com mais de 30 anos de experiência em tradução, versão e interpretação.',
            services: 'Nossos Serviços',
            contact: 'Entre em Contato'
        },
        en: {
            badge: '+30 Years of Excellence',
            title: 'Breaking <span>Language Barriers</span> with Precision',
            description: 'Desktrad specializes in translating technical, commercial, financial and legal texts for major national and multinational companies. Our team of professionals brings more than 30 years of experience in translation, adaptation and interpreting.',
            services: 'Our Services',
            contact: 'Contact Us'
        },
        es: {
            badge: '+30 Años de Excelencia',
            title: 'Superando <span>Barreras Lingüísticas</span> con Precisión',
            description: 'Desktrad se especializa en la traducción de textos técnicos, comerciales, financieros y jurídicos para grandes empresas nacionales y multinacionales. Contamos con un equipo de profesionales con más de 30 años de experiencia en traducción, adaptación e interpretación.',
            services: 'Nuestros Servicios',
            contact: 'Contáctenos'
        },
        zh: {
            badge: '+30 年卓越经验',
            title: '突破<span>语言障碍</span>，实现精准沟通',
            description: 'Desktrad 专注于技术、商业、金融和法律文本翻译，为大型国内及跨国企业提供服务。我们的专业团队拥有超过 30 年的翻译、笔译和口译经验。',
            services: '我们的服务',
            contact: '联系我们'
        }
    };

    let originals = null;
    let observer = null;
    let applying = false;

    function getElements() {
        return {
            hero: document.querySelector('.hero-home'),
            badge: document.querySelector('.hero-home .hero-badge'),
            title: document.querySelector('.hero-home .hero-content > h1'),
            description: document.querySelector('.hero-home .hero-content > p'),
            buttons: document.querySelectorAll('.hero-home .hero-buttons .cta-button')
        };
    }

    function capture() {
        if (originals) return true;
        const el = getElements();
        if (!el.badge || !el.title || !el.description || el.buttons.length < 2) return false;

        originals = {
            badge: el.badge.innerHTML,
            title: el.title.innerHTML,
            description: el.description.textContent,
            services: el.buttons[0].textContent,
            contact: el.buttons[1].textContent
        };
        return true;
    }

    function apply(lang) {
        if (applying || !capture()) return;
        lang = LANGS.includes(lang) ? lang : 'pt';
        const el = getElements();
        const t = content[lang];
        applying = true;
        if (observer) observer.disconnect();

        el.badge.innerHTML = t.badge;
        el.title.innerHTML = t.title;
        el.description.textContent = t.description;
        el.buttons[0].textContent = t.services;
        el.buttons[1].textContent = t.contact;

        applying = false;
        if (el.hero && observer) observer.observe(el.hero, { childList: true, subtree: true, characterData: true });
    }

    function installObserver() {
        const el = getElements();
        if (!el.hero || observer) return;
        observer = new MutationObserver(() => {
            if (applying) return;
            const lang = LANGS.includes(localStorage.getItem(KEY)) ? localStorage.getItem(KEY) : 'pt';
            apply(lang);
        });
        observer.observe(el.hero, { childList: true, subtree: true, characterData: true });
    }

    function boot() {
        if (!capture()) {
            setTimeout(boot, 50);
            return;
        }

        installObserver();
        apply(localStorage.getItem(KEY) || 'pt');

        window.addEventListener('desktrad:language', event => {
            apply(event.detail);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
