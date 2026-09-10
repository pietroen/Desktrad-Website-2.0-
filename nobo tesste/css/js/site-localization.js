/* Global localization compatibility layer.
 * The legacy translations.js is the active translator. This file intentionally
 * stays passive so it cannot intercept clicks, create overlays, or race with
 * the existing page scripts.
 */
(() => {
    'use strict';
    const STORAGE_KEY = 'desktrad-lang';
    const LANGS = ['pt', 'en', 'es', 'zh'];
    const current = localStorage.getItem(STORAGE_KEY);
    if (!LANGS.includes(current)) localStorage.setItem(STORAGE_KEY, 'pt');
})();
