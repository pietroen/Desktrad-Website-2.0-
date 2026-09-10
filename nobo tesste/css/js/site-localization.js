/* Global localization compatibility layer + safe page entrance.
 * The legacy translations.js remains the main translator. This layer only adds
 * missing specialty strings and a self-contained visual entrance sequence.
 */
(() => {
    'use strict';

    const STORAGE_KEY = 'desktrad-lang';
    const LANGS = ['pt', 'en', 'es', 'zh'];
    const current = localStorage.getItem(STORAGE_KEY);
    if (!LANGS.includes(current)) localStorage.setItem(STORAGE_KEY, 'pt');

    const completion = {
        en: {
            'SYSTEM NODE / AUTOMATION + IT': 'SYSTEM NODE / AUTOMATION + IT',
            'INDUSTRY NODE / MACHINERY': 'INDUSTRY NODE / MACHINERY',
            'SCIENCE NODE / PHARMA': 'SCIENCE NODE / PHARMA',
            'OFFICIAL NODE / LEGAL': 'OFFICIAL NODE / LEGAL',
            'Tradução para sistemas que precisam continuar funcionando.': 'Translation for systems that need to keep working.',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.': 'Interfaces, systems and specifications that preserve product logic and the user experience in another language.',
            'Tradução técnica para indústria de maquinários.': 'Technical translation for the machinery industry.',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.': 'Clear documentation for industrial equipment, processes and operations, with consistent terminology from project to maintenance.',
            'Tradução farmacêutica com precisão científica.': 'Pharmaceutical translation with scientific precision.',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.': 'Technical and regulatory content translated with rigor, confidentiality and attention to the scientific context of each material.',
            'Traduções legais e oficiais com atenção a cada formalidade.': 'Legal and official translations with attention to every formality.',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.': 'Official documents translated faithfully and with attention to the formal requirements of national and international processes.',
            'Traduzir sem perder a lógica do sistema.': 'Translate without losing system logic.',
            'Terminologia, mensagens de interface e documentação precisam conversar entre si. O projeto organiza referências para preservar função, clareza e experiência de uso.': 'Terminology, interface messages and documentation need to work together. The project organizes references to preserve function, clarity and user experience.',
            'Rigor para materiais que exigem contexto científico.': 'Rigor for materials that require scientific context.',
            'A linguagem farmacêutica pede consistência entre termos, instruções e referências. O trabalho preserva o sentido técnico sem substituir a validação especializada do cliente.': 'Pharmaceutical language requires consistency across terms, instructions and references. The work preserves technical meaning without replacing the client’s specialist validation.',
            'Clareza documental para decisões importantes.': 'Document clarity for important decisions.',
            'O trabalho considera a finalidade do documento, a estrutura formal e a necessidade de preservar nomes, datas, referências e responsabilidades.': 'The work considers the document purpose, formal structure and the need to preserve names, dates, references and responsibilities.',
            'Manuais e especificações orientam decisões reais. Por isso, o projeto combina leitura técnica, glossário do produto e revisão de unidades, alertas e instruções.': 'Manuals and specifications guide real decisions. The project combines technical reading, a product glossary and review of units, alerts and instructions.',
            'Bulas, rótulos e materiais de uso.': 'Leaflets, labels and use materials.',
            'Relatórios e documentação de pesquisa.': 'Reports and research documentation.',
            'Registros e submissões documentais.': 'Registrations and regulatory submissions.',
            'Procedimentos, avisos e responsabilidades.': 'Procedures, warnings and responsibilities.',
            'Dados, unidades e componentes.': 'Data, units and components.',
            'Área, público e finalidade.': 'Field, audience and purpose.',
            'Glossário e referências do projeto.': 'Project glossary and references.',
            'Termos, números e apresentação.': 'Terms, numbers and presentation.',
            'Documentos empresariais e jurídicos.': 'Business and legal documents.',
            'Certidões e documentos pessoais.': 'Certificates and personal documents.',
            'Diplomas e históricos escolares.': 'Diplomas and academic transcripts.',
            'Documento e finalidade.': 'Document and purpose.',
            'Fidelidade ao conteúdo original.': 'Faithfulness to the original content.',
            'Forma, nomes e referências.': 'Format, names and references.',
            'Produto, público e terminologia.': 'Product, audience and terminology.',
            'Sentido técnico para o mercado.': 'Technical meaning for the market.',
            'Clareza, consistência e segurança.': 'Clarity, consistency and safety.',
            'Escopo do campo': 'Field scope'
        },
        es: {
            'SYSTEM NODE / AUTOMATION + IT': 'NODO DE SISTEMA / AUTOMATIZACIÓN + TI',
            'INDUSTRY NODE / MACHINERY': 'NODO INDUSTRIAL / MAQUINARIA',
            'SCIENCE NODE / PHARMA': 'NODO CIENTÍFICO / FARMACIA',
            'OFFICIAL NODE / LEGAL': 'NODO OFICIAL / LEGAL',
            'Tradução para sistemas que precisam continuar funcionando.': 'Traducción para sistemas que deben seguir funcionando.',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.': 'Interfaces, sistemas y especificaciones que preservan la lógica del producto y la experiencia de uso en otro idioma.',
            'Tradução técnica para indústria de maquinários.': 'Traducción técnica para la industria de maquinaria.',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.': 'Documentación clara para equipos, procesos y operaciones industriales, con terminología coherente desde el proyecto hasta el mantenimiento.',
            'Tradução farmacêutica com precisão científica.': 'Traducción farmacéutica con precisión científica.',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.': 'Contenido técnico y regulatorio traducido con rigor, confidencialidad y atención al contexto científico de cada material.',
            'Traduções legais e oficiais com atenção a cada formalidade.': 'Traducciones legales y oficiales con atención a cada formalidad.',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.': 'Documentos oficiales traducidos fielmente y con atención a los requisitos formales de procesos nacionales e internacionales.',
            'Traduzir sem perder a lógica do sistema.': 'Traducir sin perder la lógica del sistema.',
            'Terminologia, mensagens de interface e documentação precisam conversar entre si. O projeto organiza referências para preservar função, clareza e experiência de uso.': 'La terminología, los mensajes de interfaz y la documentación deben funcionar juntos. El proyecto organiza referencias para preservar la función, la claridad y la experiencia de uso.',
            'Rigor para materiais que exigem contexto científico.': 'Rigor para materiales que requieren contexto científico.',
            'A linguagem farmacêutica pede consistência entre termos, instruções e referências. O trabalho preserva o sentido técnico sem substituir a validação especializada do cliente.': 'El lenguaje farmacéutico exige coherencia entre términos, instrucciones y referencias. El trabajo preserva el sentido técnico sin sustituir la validación especializada del cliente.',
            'Clareza documental para decisões importantes.': 'Claridad documental para decisiones importantes.',
            'O trabalho considera a finalidade do documento, a estrutura formal e a necessidade de preservar nomes, datas, referências e responsabilidades.': 'El trabajo considera la finalidad del documento, la estructura formal y la necesidad de preservar nombres, fechas, referencias y responsabilidades.',
            'Manuais e especificações orientam decisões reais. Por isso, o projeto combina leitura técnica, glossário do produto e revisão de unidades, alertas e instruções.': 'Los manuales y las especificaciones orientan decisiones reales. El proyecto combina lectura técnica, glosario del producto y revisión de unidades, alertas e instrucciones.',
            'Bulas, rótulos e materiais de uso.': 'Prospectos, etiquetas y materiales de uso.',
            'Relatórios e documentação de pesquisa.': 'Informes y documentación de investigación.',
            'Registros e submissões documentais.': 'Registros y presentaciones regulatorias.',
            'Procedimentos, avisos e responsabilidades.': 'Procedimientos, avisos y responsabilidades.',
            'Dados, unidades e componentes.': 'Datos, unidades y componentes.',
            'Área, público e finalidade.': 'Área, público y finalidad.',
            'Glossário e referências do projeto.': 'Glosario y referencias del proyecto.',
            'Termos, números e apresentação.': 'Términos, números y presentación.',
            'Documentos empresariais e jurídicos.': 'Documentos empresariales y jurídicos.',
            'Certidões e documentos pessoais.': 'Certificados y documentos personales.',
            'Diplomas e históricos escolares.': 'Diplomas y certificados académicos.',
            'Documento e finalidade.': 'Documento y finalidad.',
            'Fidelidade ao conteúdo original.': 'Fidelidad al contenido original.',
            'Forma, nomes e referências.': 'Forma, nombres y referencias.',
            'Produto, público e terminologia.': 'Producto, público y terminología.',
            'Sentido técnico para o mercado.': 'Sentido técnico para el mercado.',
            'Clareza, consistência e segurança.': 'Claridad, coherencia y seguridad.'
        },
        zh: {
            'SYSTEM NODE / AUTOMATION + IT': '系统节点 / 自动化 + 信息技术',
            'INDUSTRY NODE / MACHINERY': '工业节点 / 机械',
            'SCIENCE NODE / PHARMA': '科学节点 / 制药',
            'OFFICIAL NODE / LEGAL': '官方节点 / 法律',
            'Tradução para sistemas que precisam continuar funcionando.': '让系统持续运行的翻译。',
            'Interfaces, sistemas e especificações que mantêm a lógica do produto e a experiência de quem vai usá-lo em outro idioma.': '通过翻译界面、系统和规格，保持产品逻辑与用户体验在另一种语言中的一致性。',
            'Tradução técnica para indústria de maquinários.': '机械工业技术翻译。',
            'Documentação clara para equipamentos, processos e operações industriais, com terminologia consistente do projeto à manutenção.': '为工业设备、流程和操作提供清晰文档，确保从项目到维护的术语一致。',
            'Tradução farmacêutica com precisão científica.': '精准的医药翻译。',
            'Conteúdo técnico e regulatório traduzido com rigor, confidencialidade e atenção ao contexto científico de cada material.': '严谨、保密地翻译技术和法规内容，并关注每份材料的科学背景。',
            'Traduções legais e oficiais com atenção a cada formalidade.': '注重每项正式要求的法律与官方翻译。',
            'Documentos oficiais traduzidos com fidelidade e atenção às exigências formais de processos nacionais e internacionais.': '忠实翻译官方文件，并关注国内和国际流程的正式要求。',
            'Traduzir sem perder a lógica do sistema.': '翻译时不丢失系统逻辑。',
            'Terminologia, mensagens de interface e documentação precisam conversar entre si. O projeto organiza referências para preservar função, clareza e experiência de uso.': '术语、界面信息和文档必须相互一致。项目通过整理参考资料，保持功能、清晰度和使用体验。',
            'Rigor para materiais que exigem contexto científico.': '为需要科学背景的材料提供严谨翻译。',
            'A linguagem farmacêutica pede consistência entre termos, instruções e referências. O trabalho preserva o sentido técnico sem substituir a validação especializada do cliente.': '医药语言要求术语、说明和参考资料保持一致。翻译保留技术含义，同时不替代客户的专业审核。',
            'Clareza documental para decisões importantes.': '为重要决策提供清晰的文件。',
            'O trabalho considera a finalidade do documento, a estrutura formal e a necessidade de preservar nomes, datas, referências e responsabilidades.': '工作会考虑文件用途、正式结构，以及保留姓名、日期、引用和责任信息的需要。',
            'Manuais e especificações orientam decisões reais. Por isso, o projeto combina leitura técnica, glossário do produto e revisão de unidades, alertas e instruções.': '手册和规格会影响实际决策。因此，项目结合技术阅读、产品术语表以及单位、警示和说明的审校。',
            'Bulas, rótulos e materiais de uso.': '说明书、标签和使用材料。',
            'Relatórios e documentação de pesquisa.': '报告和研究文档。',
            'Registros e submissões documentais.': '注册文件和法规提交材料。',
            'Procedimentos, avisos e responsabilidades.': '流程、警示和责任。',
            'Dados, unidades e componentes.': '数据、单位和组件。',
            'Área, público e finalidade.': '领域、受众和用途。',
            'Glossário e referências do projeto.': '项目术语表和参考资料。',
            'Termos, números e apresentação.': '术语、数字和呈现。',
            'Documentos empresariais e jurídicos.': '企业和法律文件。',
            'Certidões e documentos pessoais.': '证明文件和个人资料。',
            'Diplomas e históricos escolares.': '文凭和成绩单。',
            'Documento e finalidade.': '文件及其用途。',
            'Fidelidade ao conteúdo original.': '忠实于原始内容。',
            'Forma, nomes e referências.': '格式、姓名和引用。',
            'Produto, público e terminologia.': '产品、受众和术语。',
            'Sentido técnico para o mercado.': '面向目标市场的技术含义。',
            'Clareza, consistência e segurança.': '清晰、一致与安全。'
        }
    };

    const pageMeta = {
        'especialidade-automacao.html': {
            pt: ['Tradução para Automação Industrial e TI | Desktrad', 'Tradução para automação industrial e TI: interfaces, softwares, sistemas e especificações com lógica e experiência de uso preservadas.'],
            en: ['Automation and IT Translation | Desktrad', 'Translation for automation and IT: interfaces, software, systems and specifications with product logic and user experience preserved.'],
            es: ['Traducción para Automatización Industrial y TI | Desktrad', 'Traducción para automatización y TI: interfaces, software, sistemas y especificaciones con la lógica del producto preservada.'],
            zh: ['工业自动化与信息技术翻译 | Desktrad', '自动化与信息技术翻译，保持界面、软件、系统和技术规格的逻辑与用户体验。']
        },
        'especialidade-maquinarios.html': {
            pt: ['Tradução para Indústria de Maquinários | Desktrad', 'Tradução técnica para indústria de maquinários: manuais, segurança, especificações e documentação de operação com consistência terminológica.'],
            en: ['Machinery Industry Translation | Desktrad', 'Technical translation for machinery: manuals, safety, specifications and operational documentation with consistent terminology.'],
            es: ['Traducción para la Industria de Maquinaria | Desktrad', 'Traducción técnica para maquinaria: manuales, seguridad, especificaciones y documentación operativa con terminología coherente.'],
            zh: ['机械工业翻译 | Desktrad', '机械工业技术翻译，涵盖手册、安全、规格和操作文档，并保持术语一致。']
        },
        'especialidade-farmaceutica.html': {
            pt: ['Tradução para Indústria Farmacêutica | Desktrad', 'Tradução farmacêutica para bulas, rótulos, relatórios clínicos e documentos regulatórios, com rigor terminológico e revisão humana.'],
            en: ['Pharmaceutical Industry Translation | Desktrad', 'Pharmaceutical translation for leaflets, labels, clinical reports and regulatory documents, with terminology rigor and human review.'],
            es: ['Traducción para la Industria Farmacéutica | Desktrad', 'Traducción farmacéutica para prospectos, etiquetas, informes clínicos y documentos regulatorios, con rigor terminológico y revisión humana.'],
            zh: ['制药工业翻译 | Desktrad', '为说明书、标签、临床报告和法规文件提供医药翻译，注重术语严谨和人工审校。']
        },
        'especialidade-legais.html': {
            pt: ['Traduções Legais e Oficiais | Desktrad', 'Traduções legais e oficiais para contratos, certidões, diplomas e processos nacionais e internacionais, com fidelidade e atenção formal.'],
            en: ['Legal and Official Translations | Desktrad', 'Legal and official translations for contracts, certificates, diplomas and national or international processes, with fidelity and formal accuracy.'],
            es: ['Traducciones Legales y Oficiales | Desktrad', 'Traducciones legales y oficiales para contratos, certificados, diplomas y procesos nacionales e internacionales, con fidelidad y precisión formal.'],
            zh: ['法律与官方翻译 | Desktrad', '为合同、证明文件、文凭以及国内外流程提供忠实、规范的法律与官方翻译。']
        }
    };

    function applyCompletion(lang) {
        const dictionary = completion[lang];
        if (!dictionary) return;
        const originals = applyCompletion.originals || (applyCompletion.originals = new WeakMap());
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(node => {
            if (!originals.has(node)) originals.set(node, node.nodeValue);
            const original = originals.get(node);
            const trimmed = original.trim();
            if (!trimmed || node.parentElement?.closest('script,style,.lab-code,.lab-clock')) return;
            if (dictionary[trimmed]) node.nodeValue = original.replace(trimmed, dictionary[trimmed]);
        });

        document.querySelectorAll('img[alt]').forEach(image => {
            const original = image.dataset.completionAlt || image.getAttribute('alt');
            image.dataset.completionAlt = original;
            if (dictionary[original]) image.setAttribute('alt', dictionary[original]);
        });

        const pageName = window.location.pathname.split('/').pop() || 'index.html';
        const meta = pageMeta[pageName]?.[lang];
        if (meta) {
            document.title = meta[0];
            const description = document.querySelector('meta[name="description"]');
            if (description) description.setAttribute('content', meta[1]);
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', meta[0]);
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) ogDescription.setAttribute('content', meta[1]);
        }
    }

    function installTranslationCompletion() {
        if (typeof window.translateText !== 'function' || window.__desktradCompletionInstalled) return;
        const legacyTranslate = window.translateText;
        window.translateText = function(lang) {
            legacyTranslate(lang);
            applyCompletion(lang);
        };
        window.changeLanguage = window.translateText;
        window.__desktradCompletionInstalled = true;
        applyCompletion(localStorage.getItem(STORAGE_KEY) || 'pt');
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installTranslationCompletion, { once: true });
    else installTranslationCompletion();

    function injectEntrance() {
        if (document.querySelector('.desktrad-entry')) return;
        const lang = localStorage.getItem(STORAGE_KEY) || 'pt';
        const labels = {
            pt: ['INICIALIZAÇÃO DO SISTEMA', 'PONTE DE TRADUÇÃO', 'CONTEXTO SINCRONIZADO', 'PRONTO'],
            en: ['SYSTEM INITIALIZATION', 'TRANSLATION BRIDGE', 'CONTEXT SYNCHRONIZED', 'READY'],
            es: ['INICIALIZACIÓN DEL SISTEMA', 'PUENTE DE TRADUCCIÓN', 'CONTEXTO SINCRONIZADO', 'LISTO'],
            zh: ['系统初始化', '翻译桥接', '上下文同步', '就绪']
        }[lang] || ['SYSTEM INITIALIZATION', 'TRANSLATION BRIDGE', 'CONTEXT SYNCHRONIZED', 'READY'];

        const entry = document.createElement('div');
        entry.className = 'desktrad-entry';
        entry.setAttribute('aria-hidden', 'true');
        entry.innerHTML = `
            <div class="entry-grid"></div>
            <div class="entry-machine">
                <div class="entry-top"><span>DESKTRAD / SYSTEM</span><span class="entry-code">00:00:00</span></div>
                <div class="entry-core">
                    <div class="entry-ring entry-ring-a"></div><div class="entry-ring entry-ring-b"></div>
                    <div class="entry-core-mark"><span>A</span><i></i><span>文</span></div>
                </div>
                <div class="entry-route"><b>PT-BR</b><span></span><b>EN-US</b><span></span><b>ES-ES</b><span></span><b>中文</b></div>
                <div class="entry-readouts">
                    <div><span>${labels[0]}</span><b></b></div>
                    <div><span>${labels[1]}</span><b></b></div>
                    <div><span>${labels[2]}</span><b></b></div>
                </div>
                <div class="entry-progress"><span></span></div>
                <div class="entry-ready">${labels[3]} <i class="fas fa-arrow-right"></i></div>
            </div>`;
        document.body.prepend(entry);

        const style = document.createElement('style');
        style.textContent = `
            .desktrad-entry{position:fixed;inset:0;z-index:100000;background:#21152b;color:#f8f6fb;display:grid;place-items:center;overflow:hidden;animation:entry-out .55s ease 1.75s forwards;font-family:'Montserrat',sans-serif}
            .desktrad-entry .entry-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(168,92,255,.11) 1px,transparent 1px),linear-gradient(90deg,rgba(168,92,255,.11) 1px,transparent 1px);background-size:34px 34px;transform:perspective(500px) rotateX(62deg) scale(1.4);transform-origin:center bottom;opacity:.7}
            .desktrad-entry:after{content:'';position:absolute;left:0;right:0;top:-20%;height:2px;background:#00d9ff;box-shadow:0 0 18px #00d9ff;animation:entry-scan 1.35s linear infinite;opacity:.7}
            .entry-machine{position:relative;width:min(720px,86vw);padding:24px 28px 26px;border:1px solid rgba(168,92,255,.72);background:rgba(33,21,43,.9);box-shadow:0 0 0 6px rgba(106,13,173,.16),0 0 50px rgba(168,92,255,.22),inset 0 0 36px rgba(106,13,173,.18);animation:entry-rise .8s cubic-bezier(.2,.8,.2,1) both}
            .entry-top{display:flex;justify-content:space-between;border-bottom:1px solid rgba(168,92,255,.32);padding-bottom:10px;font:600 11px 'Orbitron',sans-serif;letter-spacing:2px;color:#a85cff}
            .entry-core{height:190px;position:relative;display:grid;place-items:center}
            .entry-ring{position:absolute;border:1px solid rgba(0,217,255,.5);border-radius:50%;box-shadow:0 0 18px rgba(0,217,255,.16);}
            .entry-ring-a{width:138px;height:138px;border-top-color:#ff3cac;border-bottom-color:#ff3cac;animation:entry-spin 4s linear infinite}
            .entry-ring-b{width:100px;height:100px;border-left-color:#a85cff;border-right-color:#a85cff;animation:entry-spin-rev 3s linear infinite}
            .entry-core:before,.entry-core:after{content:'';position:absolute;width:250px;height:1px;background:linear-gradient(90deg,transparent,#00d9ff,transparent);opacity:.65}
            .entry-core:after{transform:rotate(90deg)}
            .entry-core-mark{display:flex;align-items:center;gap:22px;z-index:2;font:700 32px 'Orbitron',sans-serif;color:#ff3cac;text-shadow:0 0 18px rgba(255,60,172,.45)}
            .entry-core-mark i{width:8px;height:8px;border-radius:50%;background:#00d9ff;box-shadow:0 0 14px #00d9ff;animation:entry-pulse 1s infinite}
            .entry-route{display:grid;grid-template-columns:auto 1fr auto 1fr auto 1fr auto;align-items:center;gap:10px;color:#f8f6fb;font:600 11px 'Orbitron',sans-serif;letter-spacing:1px}
            .entry-route span{height:2px;background:linear-gradient(90deg,#6a0dad,#ff3cac,#00d9ff);position:relative;overflow:hidden}
            .entry-route span:after{content:'';position:absolute;inset:0;background:#fff;transform:translateX(-100%);animation:entry-flow 1.1s linear infinite}
            .entry-readouts{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:22px}
            .entry-readouts div{padding:10px;border:1px solid rgba(168,92,255,.24);background:rgba(106,13,173,.1);font-size:9px;letter-spacing:1px;color:#ebe4f2}
            .entry-readouts b{display:block;height:3px;margin-top:8px;background:linear-gradient(90deg,#6a0dad,#ff3cac,#00d9ff);transform-origin:left;animation:entry-meter 1.4s ease-in-out infinite}
            .entry-progress{height:3px;margin-top:20px;background:rgba(248,246,251,.12);overflow:hidden}.entry-progress span{display:block;width:55%;height:100%;background:#ff3cac;box-shadow:0 0 12px #ff3cac;animation:entry-progress 1.6s ease forwards}
            .entry-ready{margin-top:12px;text-align:right;color:#00d9ff;font:600 10px 'Orbitron',sans-serif;letter-spacing:2px}
            @keyframes entry-rise{from{opacity:0;transform:translateY(22px) scale(.96)}to{opacity:1;transform:none}}
            @keyframes entry-scan{from{transform:translateY(0)}to{transform:translateY(160vh)}}
            @keyframes entry-spin{to{transform:rotate(360deg)}} @keyframes entry-spin-rev{to{transform:rotate(-360deg)}}
            @keyframes entry-pulse{50%{transform:scale(1.8);opacity:.45}}
            @keyframes entry-flow{to{transform:translateX(100%)}}
            @keyframes entry-meter{50%{transform:scaleX(.35);opacity:.5}100%{transform:scaleX(1)}}
            @keyframes entry-progress{from{transform:translateX(-100%)}to{transform:translateX(150%)}}
            @keyframes entry-out{to{opacity:0;visibility:hidden;pointer-events:none}}
            @media(max-width:650px){.entry-machine{padding:18px}.entry-core{height:145px}.entry-ring-a{width:110px;height:110px}.entry-ring-b{width:80px;height:80px}.entry-readouts{grid-template-columns:1fr}.entry-readouts div{padding:7px}.entry-route{font-size:8px;gap:5px}.entry-core-mark{font-size:24px;gap:14px}}
            @media(prefers-reduced-motion:reduce){.desktrad-entry{animation:none;opacity:0;visibility:hidden;pointer-events:none}.desktrad-entry *{animation:none!important}}
        `;
        document.head.appendChild(style);
        window.setTimeout(() => entry.remove(), 2500);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectEntrance, { once: true });
    else injectEntrance();
})();
