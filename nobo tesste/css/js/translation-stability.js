(() => {
    'use strict';
    const KEY = 'desktrad-lang';
    const LANGS = ['pt', 'en', 'es', 'zh'];
    const extra = {
        en: {
            'Tradução para sistemas que precisam continuar funcionando.':'Translation for systems that need to keep working.',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.':'Interfaces, systems and specifications that preserve product logic and the user experience in another language.',
            'Tradução técnica para indústria de maquinários.':'Technical translation for the machinery industry.',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.':'Clear documentation for industrial equipment, processes and operations, with consistent terminology from project to maintenance.',
            'Tradução farmacêutica com precisão científica.':'Pharmaceutical translation with scientific precision.',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.':'Technical and regulatory content translated with rigor, confidentiality and attention to the scientific context of each material.',
            'Traduções legais e oficiais com atenção a cada formalidade.':'Legal and official translations with attention to every formality.',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.':'Official documents translated faithfully and with attention to the formal requirements of national and international processes.',
            'Traduzir sem perder a lógica do sistema.':'Translate without losing system logic.',
            'Rigor para materiais que exigem contexto científico.':'Rigor for materials that require scientific context.',
            'Clareza documental para decisões importantes.':'Document clarity for important decisions.',
            'Bulas, rótulos e materiais de uso.':'Leaflets, labels and use materials.',
            'Relatórios e documentação de pesquisa.':'Reports and research documentation.',
            'Registros e submissões documentais.':'Registrations and regulatory submissions.',
            'Procedimentos, avisos e responsabilidades.':'Procedures, warnings and responsibilities.',
            'Dados, unidades e componentes.':'Data, units and components.',
            'Área, público e finalidade.':'Field, audience and purpose.',
            'Glossário e referências do projeto.':'Project glossary and references.',
            'Termos, números e apresentação.':'Terms, numbers and presentation.',
            'Documentos empresariais e jurídicos.':'Business and legal documents.',
            'Certidões e documentos pessoais.':'Certificates and personal documents.',
            'Diplomas e históricos escolares.':'Diplomas and academic transcripts.',
            'Documento e finalidade.':'Document and purpose.',
            'Fidelidade ao conteúdo original.':'Faithfulness to the original content.',
            'Forma, nomes e referências.':'Format, names and references.',
            'Produto, público e terminologia.':'Product, audience and terminology.',
            'Sentido técnico para o mercado.':'Technical meaning for the market.',
            'Clareza, consistência e segurança.':'Clarity, consistency and safety.'
        },
        es: {
            'Tradução para sistemas que precisam continuar funcionando.':'Traducción para sistemas que deben seguir funcionando.',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.':'Interfaces, sistemas y especificaciones que preservan la lógica del producto y la experiencia de uso en otro idioma.',
            'Tradução técnica para indústria de maquinários.':'Traducción técnica para la industria de maquinaria.',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.':'Documentación clara para equipos, procesos y operaciones industriales, con terminología coherente desde el proyecto hasta el mantenimiento.',
            'Tradução farmacêutica com precisão científica.':'Traducción farmacéutica con precisión científica.',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.':'Contenido técnico y regulatorio traducido con rigor, confidencialidad y atención al contexto científico de cada material.',
            'Traduções legais e oficiais com atenção a cada formalidade.':'Traducciones legales y oficiales con atención a cada formalidad.',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.':'Documentos oficiales traducidos fielmente y con atención a los requisitos formales de procesos nacionales e internacionales.',
            'Traduzir sem perder a lógica do sistema.':'Traducir sin perder la lógica del sistema.',
            'Rigor para materiais que exigem contexto científico.':'Rigor para materiales que requieren contexto científico.',
            'Clareza documental para decisões importantes.':'Claridad documental para decisiones importantes.',
            'Bulas, rótulos e materiais de uso.':'Prospectos, etiquetas y materiales de uso.',
            'Relatórios e documentação de pesquisa.':'Informes y documentación de investigación.',
            'Registros e submissões documentais.':'Registros y presentaciones regulatorias.',
            'Procedimentos, avisos e responsabilidades.':'Procedimientos, avisos y responsabilidades.',
            'Dados, unidades e componentes.':'Datos, unidades y componentes.',
            'Área, público e finalidade.':'Área, público y finalidad.',
            'Glossário e referências do projeto.':'Glosario y referencias del proyecto.',
            'Termos, números e apresentação.':'Términos, números y presentación.',
            'Documentos empresariais e jurídicos.':'Documentos empresariales y jurídicos.',
            'Certidões e documentos pessoais.':'Certificados y documentos personales.',
            'Diplomas e históricos escolares.':'Diplomas y certificados académicos.',
            'Documento e finalidade.':'Documento y finalidad.',
            'Fidelidade ao conteúdo original.':'Fidelidad al contenido original.',
            'Forma, nomes e referências.':'Forma, nombres y referencias.',
            'Produto, público e terminologia.':'Producto, público y terminología.',
            'Sentido técnico para o mercado.':'Sentido técnico para el mercado.',
            'Clareza, consistência e segurança.':'Claridad, coherencia y seguridad.'
        },
        zh: {
            'Tradução para sistemas que precisam continuar funcionando.':'让系统持续运行的翻译。',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.':'通过翻译界面、系统和规格，保持产品逻辑与用户体验在另一种语言中的一致性。',
            'Tradução técnica para indústria de maquinários.':'机械工业技术翻译。',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.':'为工业设备、流程和操作提供清晰文档，确保从项目到维护的术语一致。',
            'Tradução farmacêutica com precisão científica.':'精准的医药翻译。',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.':'严谨、保密地翻译技术和法规内容，并关注每份材料的科学背景。',
            'Traduções legais e oficiais com atenção a cada formalidade.':'注重每项正式要求的法律与官方翻译。',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.':'忠实翻译官方文件，并关注国内和国际流程的正式要求。',
            'Traduzir sem perder a lógica do sistema.':'翻译时不丢失系统逻辑。',
            'Rigor para materiais que exigem contexto científico.':'为需要科学背景的材料提供严谨翻译。',
            'Clareza documental para decisões importantes.':'为重要决策提供清晰的文件。',
            'Bulas, rótulos e materiais de uso.':'说明书、标签和使用材料。',
            'Relatórios e documentação de pesquisa.':'报告和研究文档。',
            'Registros e submissões documentais.':'注册文件和法规提交材料。',
            'Procedimentos, avisos e responsabilidades.':'流程、警示和责任。',
            'Dados, unidades e componentes.':'数据、单位和组件。',
            'Área, público e finalidade.':'领域、受众和用途。',
            'Glossário e referências do projeto.':'项目术语表和参考资料。',
            'Termos, números e apresentação.':'术语、数字和呈现。',
            'Documentos empresariais e jurídicos.':'企业和法律文件。',
            'Certidões e documentos pessoais.':'证明文件和个人资料。',
            'Diplomas e históricos escolares.':'文凭和成绩单。',
            'Documento e finalidade.':'文件及其用途。',
            'Fidelidade ao conteúdo original.':'忠实于原始内容。',
            'Forma, nomes e referências.':'格式、姓名和引用。',
            'Produto, público e terminologia.':'产品、受众和术语。',
            'Sentido técnico para o mercado.':'面向目标市场的技术含义。',
            'Clareza, consistência e segurança.':'清晰、一致与安全。'
        }
    };

    const meta = {
        'especialidade-automacao.html': {
            en:['Automation and IT Translation | Desktrad','Translation for automation and IT: interfaces, software, systems and specifications with product logic and user experience preserved.'],
            es:['Traducción para Automatización Industrial y TI | Desktrad','Traducción para automatización y TI: interfaces, software, sistemas y especificaciones con la lógica del producto preservada.'],
            zh:['工业自动化与信息技术翻译 | Desktrad','自动化与信息技术翻译，保持界面、软件、系统和技术规格的逻辑与用户体验。']
        },
        'especialidade-maquinarios.html': {
            en:['Machinery Industry Translation | Desktrad','Technical translation for machinery: manuals, safety, specifications and operational documentation with consistent terminology.'],
            es:['Traducción para la Industria de Maquinaria | Desktrad','Traducción técnica para maquinaria: manuales, seguridad, especificaciones y documentación operativa con terminología coherente.'],
            zh:['机械工业翻译 | Desktrad','机械工业技术翻译，涵盖手册、安全、规格和操作文档，并保持术语一致。']
        },
        'especialidade-farmaceutica.html': {
            en:['Pharmaceutical Industry Translation | Desktrad','Pharmaceutical translation for leaflets, labels, clinical reports and regulatory documents, with terminology rigor and human review.'],
            es:['Traducción para la Industria Farmacéutica | Desktrad','Traducción farmacéutica para prospectos, etiquetas, informes clínicos y documentos regulatorios, con rigor terminológico y revisión humana.'],
            zh:['制药工业翻译 | Desktrad','为说明书、标签、临床报告和法规文件提供医药翻译，注重术语严谨和人工审校。']
        },
        'especialidade-legais.html': {
            en:['Legal and Official Translations | Desktrad','Legal and official translations for contracts, certificates, diplomas and national or international processes, with fidelity and formal accuracy.'],
            es:['Traducciones Legales y Oficiales | Desktrad','Traducciones legales y oficiales para contratos, certificados, diplomas y procesos nacionales e internacionales, con fidelidad y precisión formal.'],
            zh:['法律与官方翻译 | Desktrad','为合同、证明文件、文凭以及国内外流程提供忠实、规范的法律与官方翻译。']
        }
    };

    const norm = v => String(v || '').replace(/\s+/g,' ').trim();
    const records = [];
    const attrs = [];
    let installed = false;

    function reverse(lang){
        const out = Object.create(null);
        [window.translations?.[lang], window.remainingTranslationsBase?.[lang], extra[lang]].forEach(d => {
            if(!d) return;
            Object.entries(d).forEach(([source, translated]) => { if(norm(translated) && !out[norm(translated)]) out[norm(translated)] = source; });
        });
        return out;
    }
    function source(value, lang, rev){
        if(lang === 'pt') return value;
        const found = rev[norm(value)];
        if(!found) return value;
        const lead = String(value).match(/^\s*/)?.[0] || '';
        const trail = String(value).match(/\s*$/)?.[0] || '';
        return lead + found + trail;
    }
    function capture(){
        const lang = LANGS.includes(localStorage.getItem(KEY)) ? localStorage.getItem(KEY) : 'pt';
        const rev = reverse(lang);
        const known = new Set(records.map(r => r.node));
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while(walker.nextNode()){
            const node = walker.currentNode;
            if(!node.parentElement || node.parentElement.closest('script,style,noscript,.desktrad-entry') || known.has(node)) continue;
            const original = source(node.nodeValue, lang, rev);
            if(norm(original)) records.push({node, original});
        }
        document.querySelectorAll('img[alt],input[placeholder],textarea[placeholder],[title],[aria-label]').forEach(el => {
            ['alt','placeholder','title','aria-label'].forEach(attribute => {
                if(!el.hasAttribute(attribute)) return;
                if(attrs.some(a => a.el === el && a.attribute === attribute)) return;
                attrs.push({el,attribute,original:source(el.getAttribute(attribute),lang,rev)});
            });
        });
    }
    function restore(){
        records.forEach(r => { if(r.node.isConnected) r.node.nodeValue = r.original; });
        attrs.forEach(a => { if(a.el.isConnected) a.el.setAttribute(a.attribute,a.original); });
    }
    function applyExtra(lang){
        const d = extra[lang];
        if(d) records.forEach(r => { const t=d[norm(r.original)]; if(t && r.node.isConnected){ const lead=r.node.nodeValue.match(/^\s*/)?.[0]||''; const trail=r.node.nodeValue.match(/\s*$/)?.[0]||''; r.node.nodeValue=lead+t+trail; }});
        if(d) attrs.forEach(a => { const t=d[norm(a.original)]; if(t && a.el.isConnected) a.el.setAttribute(a.attribute,t); });
        const name = location.pathname.split('/').pop() || 'index.html';
        const m = meta[name]?.[lang];
        if(m){ document.title=m[0]; document.querySelector('meta[name="description"]')?.setAttribute('content',m[1]); document.querySelector('meta[property="og:title"]')?.setAttribute('content',m[0]); document.querySelector('meta[property="og:description"]')?.setAttribute('content',m[1]); }
    }
    function installTranslation(){
        if(installed || typeof window.translateText !== 'function') return;
        installed=true;
        capture();
        const legacy=window.translateText;
        window.translateText=function(lang){
            lang=LANGS.includes(lang)?lang:'pt';
            capture(); restore(); legacy(lang); applyExtra(lang); document.documentElement.lang=lang==='zh'?'zh-CN':lang; localStorage.setItem(KEY,lang);
        };
        window.changeLanguage=window.translateText;
    }
    function installClicks(){
        document.addEventListener('click',e=>{
            const button=e.target.closest?.('.lang-btn');
            if(button && LANGS.includes(button.dataset.lang)){
                e.preventDefault(); e.stopImmediatePropagation();
                window.dispatchEvent(new CustomEvent('desktrad:language',{detail:button.dataset.lang}));
            }
        },true);
    }
    function installHeader(){
        const style=document.createElement('style');
        style.textContent=`#site-header{z-index:3000!important;width:100%;}#site-header .header-container{min-height:56px;display:flex;align-items:center;gap:16px;}#site-header .logo{min-width:0;flex:1 1 auto;}#site-header .logo h1{min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;}#mobile-menu.menu-toggle{position:relative;display:none;width:44px;height:44px;min-width:44px;padding:10px;border:1px solid rgba(200,121,255,.38);background:rgba(23,5,40,.72);align-items:center;justify-content:center;gap:5px;z-index:3004;}#mobile-menu.menu-toggle span{display:block;width:22px;height:2px;flex:none;} .mobile-menu{z-index:3002!important;right:0!important;left:auto!important;transform:translateX(110%);opacity:1!important;visibility:hidden;pointer-events:none;transition:transform .3s ease,visibility 0s linear .3s!important;width:min(92vw,380px)!important;height:100dvh!important;max-height:100dvh;box-sizing:border-box;padding:calc(82px + env(safe-area-inset-top)) 24px calc(28px + env(safe-area-inset-bottom))!important;}.mobile-menu.active{transform:translateX(0);visibility:visible;pointer-events:auto;transition:transform .3s ease,visibility 0s!important;}.mobile-menu li a{display:block;width:100%;padding:13px 4px!important;line-height:1.35;}.overlay{z-index:3001!important;}body.menu-open{overflow:hidden;}@media(max-width:1024px){#site-header{padding:10px 0!important;}#site-header .nav-container{display:none!important;}#mobile-menu.menu-toggle{display:flex!important;flex:0 0 44px;}#site-header .logo h1{font-size:clamp(1rem,4vw,1.55rem);}#site-header .logo i{font-size:1.55rem;margin-right:7px;}}@media(min-width:1025px){#mobile-menu.menu-toggle{display:none!important;}.mobile-menu,.overlay{display:none!important;}}@media(max-width:600px){#site-header .header-container{padding:0 12px;gap:10px;}#site-header .logo i{display:none;}#site-header .logo h1{font-size:clamp(.92rem,5vw,1.3rem);letter-spacing:.2px;}#mobile-menu.menu-toggle{width:44px;height:44px;}.mobile-menu .language-switcher{justify-content:center;margin-bottom:18px;}.mobile-menu .lang-btn{min-width:44px;min-height:40px;}}`;
        document.head.appendChild(style);
        const toggle=document.getElementById('mobile-menu'), menu=document.getElementById('mobileMenu'), overlay=document.getElementById('overlay');
        if(!toggle||!menu||!overlay) return;
        const close=()=>{menu.classList.remove('active');overlay.classList.remove('active');document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');};
        const open=()=>{menu.classList.add('active');overlay.classList.add('active');document.body.classList.add('menu-open');toggle.setAttribute('aria-expanded','true');};
        toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-controls','mobileMenu');toggle.setAttribute('role','button');toggle.setAttribute('tabindex','0');
        document.addEventListener('click',e=>{if(e.target.closest?.('#mobile-menu')){e.preventDefault();e.stopImmediatePropagation();menu.classList.contains('active')?close():open();}else if(e.target.closest?.('#overlay')){e.preventDefault();e.stopImmediatePropagation();close();}},true);
        document.addEventListener('keydown',e=>{if(e.target.closest?.('#mobile-menu')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.stopImmediatePropagation();menu.classList.contains('active')?close():open();}if(e.key==='Escape')close();},true);
        menu.addEventListener('click',e=>{if(e.target.closest('a')) close();});
        window.addEventListener('resize',()=>{if(innerWidth>1024) close();},{passive:true});
    }
    function boot(){
        if(!LANGS.includes(localStorage.getItem(KEY))) localStorage.setItem(KEY,'pt');
        installTranslation(); installClicks(); installHeader();
    }
    if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();
