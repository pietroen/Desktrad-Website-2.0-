// Static pages share one shell so navigation stays consistent across the site.
const shellHeader = document.getElementById('site-header');
const shellMenu = document.getElementById('mobileMenu');
const shellFooter = document.querySelector('footer');
const pageName = window.location.pathname.split('/').pop() || 'index.html';
const specialtyPage = 'specialities.html';
const seoServiceData = {
    'traducao-tecnica-sao-paulo.html': { code: 'TECH / DOCUMENTATION', title: 'O que entra no escopo técnico', icon: 'fa-microchip', items: ['Manuais de operação e manutenção', 'Especificações de equipamentos', 'Procedimentos de segurança', 'Conteúdo de automação e tecnologia'], flow: ['Briefing técnico', 'Glossário do produto', 'Tradução e revisão', 'Arquivo pronto para uso'] },
    'traducao-juramentada-sao-paulo.html': { code: 'OFFICIAL / DOCUMENTS', title: 'Um fluxo claro para documentos oficiais', icon: 'fa-file-signature', items: ['Certidões e registros civis', 'Diplomas e históricos escolares', 'Contratos e documentos empresariais', 'Processos nacionais e internacionais'], flow: ['Recebimento do documento', 'Análise da finalidade', 'Tradução oficial', 'Entrega orientada'] },
    'interpretacao-sao-paulo.html': { code: 'LIVE / INTERPRETING', title: 'Escolha o formato do seu encontro', icon: 'fa-headset', items: ['Reuniões executivas e técnicas', 'Eventos e conferências', 'Treinamentos e visitas profissionais', 'Encontros presenciais ou remotos'], flow: ['Tema e participantes', 'Preparação terminológica', 'Interpretação no encontro', 'Acompanhamento final'] }
};
const seoService = seoServiceData[pageName];
if (seoService) {
    const seoColumns = document.querySelector('.seo-columns');
    if (seoColumns && !document.querySelector('.seo-command-panel')) {
        const panel = document.createElement('section');
        panel.className = 'seo-command-panel';
        panel.innerHTML = `<div class="seo-panel-heading"><span class="seo-panel-code">${seoService.code}</span><i class="fas ${seoService.icon}"></i><h2>${seoService.title}</h2><p>Uma visão organizada do serviço para você entender o que acontece antes, durante e depois da entrega.</p></div><div class="seo-panel-content"><div class="seo-scope-list"><span class="seo-panel-label">ESCOPO DO PROJETO</span>${seoService.items.map((item, index) => `<div><strong>0${index + 1}</strong><span>${item}</span></div>`).join('')}</div><div class="seo-flow"><span class="seo-panel-label">FLUXO DE OPERAÇÃO</span>${seoService.flow.map((item, index) => `<div><b>${index + 1}</b><span>${item}</span></div>`).join('')}</div></div><a class="cta-button" href="contact.html">Solicitar avaliação <i class="fas fa-arrow-right"></i></a>`;
        seoColumns.after(panel);
    }
}
const navItems = [
    ['index.html', 'Início'], ['about.html', 'Sobre'], [specialtyPage, 'Especialidades'],
    ['services.html', 'Serviços'], ['portfolio.html', 'Portfólio'], ['contact.html', 'Contato']
];
const navMarkup = navItems.map(([href, label]) => `<li><a href="${href}" class="${pageName === href ? 'active' : ''}">${label}</a></li>`).join('');
const languageMarkup = '<div class="language-switcher"><button class="lang-btn active" data-lang="pt">PT</button><button class="lang-btn" data-lang="en">EN</button><button class="lang-btn" data-lang="es">ES</button><button class="lang-btn" data-lang="zh">中文</button></div>';
const headerMarkup = `<div class="container header-container"><a href="index.html" class="logo"><i class="fas fa-language"></i><h1>Desktrad <span>Traduções</span></h1></a><div class="nav-container">${languageMarkup}<nav><ul>${navMarkup}</ul></nav></div><div class="menu-toggle" id="mobile-menu" aria-label="Abrir menu" role="button" tabindex="0"><span></span><span></span><span></span></div></div>`;
if (shellHeader && shellHeader.childElementCount === 0) shellHeader.innerHTML = headerMarkup;
if (shellMenu && shellMenu.childElementCount === 0) shellMenu.innerHTML = `${languageMarkup}<ul>${navMarkup}</ul><a href="contact.html" class="cta-button">Solicitar orçamento</a>`;
if (shellFooter && shellFooter.childElementCount === 0) shellFooter.innerHTML = `<div class="container"><div class="footer-container"><div class="footer-logo"><h3>Desktrad <span>Traduções</span></h3><p>Precisão técnica para conectar pessoas, produtos e mercados.</p><div class="social-links"><a href="tel:+551135641601" aria-label="Telefone"><i class="fas fa-phone"></i></a><a href="https://wa.me/551135641601" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a><a href="mailto:comercial@desktrad.com" aria-label="E-mail"><i class="fas fa-envelope"></i></a></div></div><div class="footer-links"><h4>Explorar</h4><ul><li><a href="services.html">Serviços</a></li><li><a href="${specialtyPage}">Especialidades</a></li><li><a href="portfolio.html">Portfólio</a></li></ul></div><div class="footer-links"><h4>Fale conosco</h4><ul><li><a href="contact.html">Solicitar orçamento</a></li><li><a href="mailto:comercial@desktrad.com">comercial@desktrad.com</a></li><li><a href="tel:+551135641601">+55 11 3564-1601</a></li></ul></div></div><div class="copyright"><p>&copy; 2026 Desktrad Traduções. Todos os direitos reservados.</p></div></div>`;
const loadTranslations = () => {
    if (!document.querySelector('script[src$="translations.js"]')) {
        const languageScript = document.createElement('script');
        languageScript.src = 'css/js/translations.js';
        document.body.appendChild(languageScript);
    }
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadTranslations, { once: true });
else loadTranslations();
document.querySelectorAll('footer').forEach(footer => {
    if (footer.querySelector('.site-credits')) return;
    const credits = document.createElement('div');
    credits.className = 'site-credits';
    credits.innerHTML = '<span>CRÉDITOS</span><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Imagens: Unsplash</a><a href="https://randomuser.me" target="_blank" rel="noopener noreferrer">Retratos: Random User Generator</a><a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Ícones: Font Awesome</a><a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">Fontes: Google Fonts</a><a href="https://threejs.org" target="_blank" rel="noopener noreferrer">Biblioteca 3D: Three.js</a>';
    footer.querySelector('.container')?.appendChild(credits) || footer.appendChild(credits);
});
document.querySelectorAll('img[src^="http"]').forEach(image => {
    if (image.parentElement.querySelector('.image-credit')) return;
    image.parentElement.classList.add('has-image-credit');
    const credit = document.createElement('a');
    credit.className = 'image-credit';
    credit.href = image.src;
    credit.target = '_blank';
    credit.rel = 'noopener noreferrer';
    credit.setAttribute('aria-label', 'Abrir fonte original da imagem');
    credit.innerHTML = '<i class="fas fa-link"></i><span>Fonte da imagem</span>';
    image.parentElement.appendChild(credit);
});

const floatingActions = document.createElement('div');
floatingActions.className = 'floating-actions';
floatingActions.innerHTML = '<button type="button" class="floating-language" aria-label="Trocar idioma"><i class="fas fa-globe"></i><span>PT</span></button><a class="floating-whatsapp" href="https://wa.me/551135641601" aria-label="Falar pelo WhatsApp"><i class="fab fa-whatsapp"></i></a>';
document.body.appendChild(floatingActions);
const floatingLanguage = floatingActions.querySelector('.floating-language');
if (floatingLanguage) floatingLanguage.addEventListener('click', () => { const next = ['pt', 'en', 'es', 'zh']; const current = localStorage.getItem('desktrad-lang') || 'pt'; const index = next.indexOf(current); window.dispatchEvent(new CustomEvent('desktrad:language', { detail: next[(index + 1) % next.length] })); });

const labTabs = document.querySelectorAll('.lab-tab');
const labStatusText = document.getElementById('lab-status-text');
const labSteps = ['ANÁLISE DE CONTEXTO EM CURSO', 'GLOSSÁRIO TERMINOLÓGICO SINCRONIZADO', 'REVISÃO HUMANA EM CURSO'];
let labStepIndex = 0;
let labTimer;
function advanceLab() {
    if (!labTabs.length) return;
    labStepIndex = (labStepIndex + 1) % labTabs.length;
    labTabs[labStepIndex].click();
    if (labStatusText) labStatusText.textContent = labSteps[labStepIndex];
}
function startLabCycle() { if (labTabs.length) labTimer = window.setInterval(advanceLab, 4200); }
labTabs.forEach(tab => tab.addEventListener('click', () => {
    labTabs.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.lab-panel').forEach(panel => panel.classList.remove('active'));
    tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
    const panel = document.querySelector(`[data-panel="${tab.dataset.step}"]`);
    if (panel) panel.classList.add('active');
}));
const labInterface = document.querySelector('.lab-interface');
if (labInterface) { labInterface.addEventListener('mouseenter', () => window.clearInterval(labTimer)); labInterface.addEventListener('mouseleave', startLabCycle); startLabCycle(); }

const answerQuestions = document.querySelectorAll('.answer-question');
const answerText = document.getElementById('answer-text');
const answerSearch = document.getElementById('answer-search');
const answerSearchButton = document.getElementById('answer-search-button');
const answerData = Array.from(answerQuestions).map(question => ({ question: question.textContent.toLowerCase(), answer: question.dataset.answer }));
function showAnswer(question, answer) {
    answerQuestions.forEach(item => item.classList.toggle('active', item === question));
    if (answerText) { answerText.classList.remove('answer-reveal'); void answerText.offsetWidth; answerText.textContent = answer; answerText.classList.add('answer-reveal'); }
}
answerQuestions.forEach(question => question.addEventListener('click', () => showAnswer(question, question.dataset.answer)));
function searchAnswers() {
    const query = answerSearch ? answerSearch.value.trim().toLowerCase() : '';
    if (!query) return;
    const match = answerData.find(item => item.question.includes(query) || item.answer.toLowerCase().includes(query));
    if (match) showAnswer(answerQuestions[answerData.indexOf(match)], match.answer);
    else showAnswer(null, 'Não encontramos uma resposta pronta para essa busca. Envie os detalhes do seu projeto e a equipe poderá orientar o próximo passo.');
}
if (answerSearchButton) answerSearchButton.addEventListener('click', searchAnswers);
if (answerSearch) answerSearch.addEventListener('keydown', event => { if (event.key === 'Enter') searchAnswers(); });

const header = document.getElementById('site-header');
if (header) window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 50); });
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuToggle = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
function toggleMenu() {
    if (!mobileMenu || !overlay) return;
    mobileMenu.classList.toggle('active'); overlay.classList.toggle('active');
    const isOpen = mobileMenu.classList.contains('active');
    document.body.classList.toggle('menu-open', isOpen);
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
}
if (mobileMenuToggle && mobileMenu && overlay) {
    mobileMenu.setAttribute('aria-hidden', 'true'); mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuToggle.addEventListener('click', toggleMenu);
    mobileMenuToggle.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') toggleMenu(); });
    overlay.addEventListener('click', toggleMenu);
}
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { if (mobileMenu && mobileMenu.classList.contains('active')) toggleMenu(); }));
document.querySelectorAll('a[href*="#"]').forEach(anchor => anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.includes('#')) { const target = document.getElementById(href.split('#')[1]); if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' }); } }
}));
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number'); const speed = 200;
    counters.forEach(counter => { const target = +counter.parentElement.getAttribute('data-count'); const suffix = counter.parentElement.getAttribute('data-suffix') || ''; const updateCount = () => { const current = +counter.innerText; const increment = target / speed; if (current < target) { counter.innerText = Math.ceil(current + increment); setTimeout(updateCount, 10); } else counter.innerText = target + suffix; }; updateCount(); });
}
const statsSection = document.querySelector('.stats-section');
if (statsSection) { const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) { animateCounters(); observer.disconnect(); } }, { threshold: 0.5 }); observer.observe(statsSection); }
const aosElements = document.querySelectorAll('[data-aos]');
const aosObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('aos-animate'); aosObserver.unobserve(entry.target); } }), { threshold: 0.1 });
aosElements.forEach(el => aosObserver.observe(el));
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
if (filterButtons.length) filterButtons.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter'); filterButtons.forEach(b => b.classList.remove('active')); btn.classList.add('active');
    portfolioItems.forEach(item => { if (filter === 'all' || item.getAttribute('data-category') === filter) { item.style.display = 'block'; item.classList.add('aos-animate'); } else item.style.display = 'none'; });
}));
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImg = lightbox.querySelector('img'); const lightboxCategory = lightbox.querySelector('#lightbox-category'); const lightboxLanguages = lightbox.querySelector('#lightbox-languages'); const lightboxScope = lightbox.querySelector('#lightbox-scope');
    const projectScopes = { documentacao: 'Análise do material, padronização terminológica e revisão de manuais, especificações ou documentos regulatórios para uso no mercado de destino.', interpretacao: 'Preparação de vocabulário e contexto para mediação clara em reuniões, conferências, treinamentos e decisões profissionais em tempo real.', legendagem: 'Tradução do roteiro, adaptação para leitura, sincronização com a imagem e conferência final para acessibilidade e compreensão.', narracao: 'Adaptação do roteiro, orientação de ritmo e gravação de voz para entregar um conteúdo natural, claro e alinhado ao público e ao objetivo.' };
    const translatedScopes = { en: { documentacao: 'Material analysis, terminology standardization and review of manuals, specifications or regulatory documents for the target market.', interpretacao: 'Vocabulary and context preparation for clear mediation in meetings, conferences, training sessions and professional decisions in real time.', legendagem: 'Script translation, reading adaptation, image synchronization and final review for accessibility and understanding.', narracao: 'Script adaptation, pace direction and voice recording to deliver natural, clear content aligned with its audience.' }, es: { documentacao: 'Análisis del material, normalización terminológica y revisión de manuales, especificaciones o documentos regulatorios para el mercado de destino.', interpretacao: 'Preparación de vocabulario y contexto para una mediación clara en reuniones, conferencias, capacitaciones y decisiones profesionales en tiempo real.', legendagem: 'Traducción del guion, adaptación para lectura, sincronización con la imagen y revisión final para accesibilidad y comprensión.', narracao: 'Adaptación del guion, orientación del ritmo y grabación de voz para entregar un contenido natural, claro y alineado con el público.' }, zh: { documentacao: '分析材料、统一术语并审校手册、规格或法规文件，使其适用于目标市场。', interpretacao: '准备术语和背景，为会议、研讨会、培训及专业决策提供清晰的实时语言协调。', legendagem: '翻译脚本、调整阅读节奏、同步画面，并进行最终审校以确保无障碍理解。', narracao: '调整脚本、指导节奏并录制配音，交付自然、清晰且符合受众的内容。' } };
    const projectTranslations = { en: { 'Documentação Técnica': ['Technical Documentation', 'Industrial manuals prepared for operation, training and maintenance.'], 'Interpretação Simultânea': ['Simultaneous Interpreting', 'Language mediation for conferences and professional communication in real time.'], 'Legendagem Corporativa': ['Corporate Subtitling', 'Audiovisual content adapted for training, communication and accessibility.'], 'Narração Profissional': ['Professional Voice-over', 'Voice and script aligned to present a message clearly in another language.'], 'Tradução Juramentada': ['Sworn Translation', 'Official documents handled faithfully and according to the purpose of the process.'], 'Interpretação Consecutiva': ['Consecutive Interpreting', 'Executive meeting with terminology preparation for decisions without noise.'], 'Conteúdo Farmacêutico': ['Pharmaceutical Content', 'Scientific and regulatory materials with terminological consistency.'], 'Vídeo de Produto': ['Product Video', 'Technical subtitling synchronized to demonstrate features and benefits.'], 'Treinamento Multilíngue': ['Multilingual Training', 'Voice-over and script adaptation for training teams in different markets.'] }, es: { 'Documentação Técnica': ['Documentación Técnica', 'Manuales industriales preparados para operación, capacitación y mantenimiento.'], 'Interpretação Simultânea': ['Interpretación Simultánea', 'Mediación lingüística para conferencias y comunicación profesional en tiempo real.'], 'Legendagem Corporativa': ['Subtitulación Corporativa', 'Contenido audiovisual adaptado para capacitación, comunicación y accesibilidad.'], 'Narração Profissional': ['Locución Profesional', 'Voz y guion alineados para presentar un mensaje con claridad en otro idioma.'], 'Tradução Juramentada': ['Traducción Jurada', 'Documentos oficiales tratados con fidelidad y atención al objetivo del proceso.'], 'Interpretação Consecutiva': ['Interpretación Consecutiva', 'Reunión ejecutiva con preparación terminológica para decisiones sin ruido.'], 'Conteúdo Farmacêutico': ['Contenido Farmacéutico', 'Materiales científicos y regulatorios con consistencia terminológica.'], 'Vídeo de Produto': ['Vídeo de Producto', 'Subtitulación técnica sincronizada para demostrar funciones y beneficios.'], 'Treinamento Multilíngue': ['Capacitación Multilingüe', 'Locución y adaptación de guion para capacitar equipos en distintos mercados.'] }, zh: { 'Documentação Técnica': ['技术文档', '为操作、培训和维护准备的工业手册。'], 'Interpretação Simultânea': ['同声传译', '为会议和专业沟通提供实时语言协调。'], 'Legendagem Corporativa': ['企业字幕', '为培训、沟通和无障碍体验改编的视听内容。'], 'Narração Profissional': ['专业配音', '配音与脚本协调，让信息以另一种语言清晰呈现。'], 'Tradução Juramentada': ['认证翻译', '根据流程目的准确处理官方文件。'], 'Interpretação Consecutiva': ['交替传译', '为执行会议准备术语，帮助决策清晰进行。'], 'Conteúdo Farmacêutico': ['医药内容', '保持术语一致性的科学与法规材料。'], 'Vídeo de Produto': ['产品视频', '同步技术字幕，清晰展示功能和优势。'], 'Treinamento Multilíngue': ['多语言培训', '为不同市场的团队培训进行配音和脚本适配。'] } };
    const categoryLabels = { documentacao: 'DOCUMENTAÇÃO', interpretacao: 'INTERPRETAÇÃO', legendagem: 'LEGENDAGEM', narracao: 'NARRAÇÃO' };
    const translatedCategories = { en: { documentacao: 'DOCUMENTATION', interpretacao: 'INTERPRETING', legendagem: 'SUBTITLING', narracao: 'VOICE-OVER' }, es: { documentacao: 'DOCUMENTACIÓN', interpretacao: 'INTERPRETACIÓN', legendagem: 'SUBTITULACIÓN', narracao: 'LOCUCIÓN' }, zh: { documentacao: '文件资料', interpretacao: '口译', legendagem: '字幕翻译', narracao: '配音' } };
    document.querySelectorAll('.portfolio-link').forEach(link => link.addEventListener('click', e => {
        e.preventDefault(); const item = link.closest('.portfolio-item'); const imgSrc = item.querySelector('img').src; const language = localStorage.getItem('desktrad-lang') || 'pt'; const originalTitle = item.dataset.title || 'Projeto do portfólio'; const translatedProject = projectTranslations[language]?.[originalTitle]; const displayTitle = translatedProject ? translatedProject[0] : originalTitle;
        lightboxImg.src = imgSrc; lightboxImg.alt = displayTitle; const caption = lightbox.querySelector('.lightbox-caption'); const description = lightbox.querySelector('.lightbox-description');
        if (caption) caption.textContent = `${displayTitle} · ${item.dataset.languages || ''}`; if (description) description.textContent = translatedProject ? translatedProject[1] : item.dataset.description || ''; if (lightboxCategory) lightboxCategory.textContent = translatedCategories[language]?.[item.dataset.category] || categoryLabels[item.dataset.category] || 'PROJETO'; if (lightboxLanguages) lightboxLanguages.textContent = item.dataset.languages || 'Idiomas sob consulta'; if (lightboxScope) lightboxScope.textContent = translatedScopes[language]?.[item.dataset.category] || projectScopes[item.dataset.category] || 'Escopo definido a partir do material, dos idiomas e do objetivo de comunicação.';
        lightbox.setAttribute('aria-hidden', 'false'); lightbox.style.display = 'flex';
    }));
    const closeLightbox = lightbox.querySelector('.lightbox-close'); if (closeLightbox) closeLightbox.addEventListener('click', () => { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden', 'true'); });
    lightbox.addEventListener('click', e => { if (e.target === lightbox) { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden', 'true'); } });
}
const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function(e) { e.preventDefault(); const successDiv = document.querySelector('.form-success'); if (successDiv) successDiv.style.display = 'block'; contactForm.reset(); setTimeout(() => { if (successDiv) successDiv.style.display = 'none'; }, 5000); });
const serviceButtons = document.querySelectorAll('.service-modal-btn');
const serviceModals = document.querySelectorAll('.modal');
serviceButtons.forEach(button => button.addEventListener('click', () => { const modal = document.getElementById(button.dataset.modal); if (modal) { modal.style.display = 'flex'; modal.setAttribute('aria-hidden', 'false'); return; } const card = button.closest('.service-card'); if (!card) return; const generatedModal = document.createElement('div'); generatedModal.className = 'modal'; generatedModal.style.display = 'flex'; generatedModal.innerHTML = `<div class="modal-content"><button class="modal-close" type="button" aria-label="Fechar">&times;</button><h2>${card.querySelector('h3').textContent}</h2><p>${card.querySelector('p').textContent}</p></div>`; document.body.appendChild(generatedModal); generatedModal.querySelector('.modal-close').addEventListener('click', () => generatedModal.remove()); generatedModal.addEventListener('click', event => { if (event.target === generatedModal) generatedModal.remove(); }); }));
serviceModals.forEach(modal => { modal.setAttribute('aria-hidden', 'true'); const close = modal.querySelector('.modal-close'); if (close) close.addEventListener('click', () => { modal.style.display = 'none'; modal.setAttribute('aria-hidden', 'true'); }); modal.addEventListener('click', event => { if (event.target === modal) modal.style.display = 'none'; }); });

// Global localization bootstrap: main.js is present on every page, so this
// single loader makes the four-language system consistent site-wide.
if (!document.querySelector('script[src$="site-localization.js"]')) {
    const localizationScript = document.createElement('script');
    localizationScript.src = 'css/js/site-localization.js';
    document.body.appendChild(localizationScript);
}
