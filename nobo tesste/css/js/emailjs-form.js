(() => {
    'use strict';

    function setupEmailForm() {
        const form = document.getElementById('contactForm');
        if (!form || form.dataset.emailjsReady === 'true') return;
        form.dataset.emailjsReady = 'true';

        const config = window.DESKTRAD_EMAILJS || {};
        const button = form.querySelector('button[type="submit"]');
        const success = document.querySelector('.form-success');
        const originalButtonText = button ? button.textContent : '';

        const showError = (message) => {
            let error = form.querySelector('.form-error');
            if (!error) {
                error = document.createElement('p');
                error.className = 'form-error';
                error.setAttribute('role', 'alert');
                form.appendChild(error);
            }
            error.textContent = message;
        };

        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            if (form.dataset.sending === 'true') return;

            if (!window.emailjs) {
                showError('O serviço de envio não foi carregado. Recarregue a página e tente novamente.');
                return;
            }
            if (!config.publicKey || config.publicKey === 'YOUR_PUBLIC_KEY' || !config.serviceId || config.serviceId === 'YOUR_SERVICE_ID' || !config.templateId || config.templateId === 'YOUR_TEMPLATE_ID') {
                showError('O formulário está pronto, mas os dados do EmailJS ainda precisam ser configurados em css/js/emailjs-config.js.');
                return;
            }

            form.dataset.sending = 'true';
            if (button) {
                button.disabled = true;
                button.setAttribute('aria-busy', 'true');
                button.textContent = 'Enviando...';
            }

            try {
                await emailjs.sendForm(config.serviceId, config.templateId, form);
                form.reset();
                if (success) success.style.display = 'block';
                const error = form.querySelector('.form-error');
                if (error) error.remove();
            } catch (error) {
                console.error('EmailJS error:', error);
                showError('Não foi possível enviar sua solicitação agora. Verifique a configuração do EmailJS e tente novamente.');
            } finally {
                form.dataset.sending = 'false';
                if (button) {
                    button.disabled = false;
                    button.removeAttribute('aria-busy');
                    button.textContent = originalButtonText;
                }
            }
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupEmailForm, { once: true });
    else setupEmailForm();
})();
