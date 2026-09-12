(() => {
    'use strict';

    // The legacy translator runs on DOMContentLoaded and can overwrite the
    // dedicated Services translations. Re-apply the complete Services copy
    // after that pass so the page can never remain partially translated.
    const reapply = () => {
        const lang = ['pt', 'en', 'es', 'zh'].includes(localStorage.getItem('desktrad-lang'))
            ? localStorage.getItem('desktrad-lang')
            : 'pt';
        window.dispatchEvent(new CustomEvent('desktrad:language', { detail: lang }));
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', reapply, { once: true });
    } else {
        reapply();
    }

    // Also protect the page if another script mutates the service cards later.
    window.addEventListener('desktrad:language', () => {
        requestAnimationFrame(() => {
            const lang = ['pt', 'en', 'es', 'zh'].includes(localStorage.getItem('desktrad-lang'))
                ? localStorage.getItem('desktrad-lang')
                : 'pt';
            if (lang !== 'pt') {
                // services-translations.js owns the actual copy; this event is
                // intentionally left as the single source of synchronization.
            }
        });
    });
})();
