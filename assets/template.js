/**
 * Varjota DigiEdu — template.js
 * Injeta navbar, sidebar, breadcrumb e rodapé automaticamente.
 *
 * USO NA PÁGINA FILHA (antes deste script):
 *   <script>
 *     window.VD_PAGE = {
 *       disciplina: "arte",           // slug da disciplina (opcional)
 *       pageTitle:  "Título da página" // exibido no breadcrumb
 *     };
 *   </script>
 *   <script src="../assets/template.js"></script>
 */

(function () {
    'use strict';
  
    /* ── 1. Configuração central ────────────────────────────────── */
  
    const DISCIPLINAS = [
      { slug: 'arte',              label: 'Arte',              icon: '🎨', cor: '#C62828' },
      { slug: 'ciencias',          label: 'Ciências',          icon: '🔬', cor: '#00695C' },
      { slug: 'educacao-fisica',   label: 'Educação Física',   icon: '⚽', cor: '#2E7D32' },
      { slug: 'ensino-religioso',  label: 'Ensino Religioso',  icon: '✨', cor: '#6A1B9A' },
      { slug: 'geografia',         label: 'Geografia',         icon: '🌍', cor: '#1565C0' },
      { slug: 'historia',          label: 'História',          icon: '📜', cor: '#BF360C' },
      { slug: 'lingua-inglesa',    label: 'Língua Inglesa',    icon: '🇬🇧', cor: '#00838F' },
      { slug: 'lingua-portuguesa', label: 'Língua Portuguesa', icon: '📖', cor: '#E65100' },
      { slug: 'matematica',        label: 'Matemática',        icon: '📐', cor: '#283593' },
    ];
  
    const NAV_ITEMS = [
      { label: 'Início',               href: 'index.html' },
      { label: 'BNCC Correlacionada',  href: 'pages/bncc-correlacionada.html' },
      { label: 'BNCC Educação',        href: 'pages/bncc-educacao.html' },
      { label: 'Atividades',           href: 'pages/atividades.html' },
      { label: 'REDs',                 href: 'pages/reds.html' },
    ];
  
    /* ── 2. Utilitários ─────────────────────────────────────────── */
  
    /**
     * Calcula o prefixo de caminho relativo baseado na
     * profundidade atual do URL.
     * Exemplos:
     *   /index.html            → ""
     *   /disciplinas/arte.html → "../"
     *   /pages/atividades.html → "../"
     */
    function getPrefix() {
      const parts = window.location.pathname.split('/').filter(Boolean);
      // Remove o nome do arquivo (última parte)
      const depth = parts.length > 0 ? parts.length - 1 : 0;
      return depth > 0 ? '../'.repeat(depth) : '';
    }
  
    const PREFIX = getPrefix();
  
    /** Resolve um href relativo à raiz do projeto */
    function r(href) {
      return PREFIX + href;
    }
  
    /** Verifica se um href corresponde à página atual */
    function isActive(href) {
      const current = window.location.pathname.split('/').pop() || 'index.html';
      const target  = href.split('/').pop();
      return current === target;
    }
  
    /* ── 3. Injeção de CSS e Fontes ─────────────────────────────── */
  
    function injectAssets() {
      // Google Fonts — evita duplicar se já existir
      if (!document.querySelector('link[href*="fonts.googleapis"]')) {
        const gf   = document.createElement('link');
        gf.rel     = 'stylesheet';
        gf.href    = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Lexend:wght@400;500;600;700&display=swap';
        document.head.prepend(gf);
      }
  
      // template.css
      if (!document.querySelector('link[href*="template.css"]')) {
        const css   = document.createElement('link');
        css.rel     = 'stylesheet';
        css.href    = r('assets/template.css');
        document.head.prepend(css);
      }
    }
  
    /* ── 4. Navbar ──────────────────────────────────────────────── */
  
    function buildNavbar() {
      const nav       = document.createElement('nav');
      nav.className   = 'vd-navbar';
      nav.innerHTML   = `
        <div class="vd-navbar__inner">
  
          <a href="${r('index.html')}" class="vd-navbar__logo">
            <img
              src="${r('assets/logo.png')}"
              alt="Varjota DigiEdu"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'"
            />
            <span class="vd-navbar__logo-fb" style="display:none">Varjota DigiEdu</span>
          </a>
  
          <button class="vd-navbar__hamburger" id="vdHamburger" aria-label="Abrir menu">
            <span></span><span></span><span></span>
          </button>
  
          <ul class="vd-navbar__links" id="vdNavLinks">
            ${NAV_ITEMS.map(item => `
              <li>
                <a href="${r(item.href)}" class="${isActive(item.href) ? 'active' : ''}">
                  ${item.label}
                </a>
              </li>
            `).join('')}
          </ul>
  
        </div>
      `;
  
      // Insere antes de tudo no body
      document.body.insertBefore(nav, document.body.firstChild);
  
      // Toggle hamburger
      nav.querySelector('#vdHamburger').addEventListener('click', () => {
        nav.querySelector('#vdNavLinks').classList.toggle('open');
      });
  
      // Fecha menu ao clicar em um link (mobile)
      nav.querySelectorAll('#vdNavLinks a').forEach(a => {
        a.addEventListener('click', () => {
          nav.querySelector('#vdNavLinks').classList.remove('open');
        });
      });
    }
  
    /* ── 5. Layout (sidebar + main + breadcrumb) ────────────────── */
  
    function buildLayout() {
      const meta   = window.VD_PAGE || {};
      const slug   = meta.disciplina  || null;
      const title  = meta.pageTitle   || null;
      const disc   = DISCIPLINAS.find(d => d.slug === slug) || null;
  
      // Coleta todos os filhos do body que não são a navbar
      const original = Array.from(document.body.children).filter(
        el => !el.classList.contains('vd-navbar')
      );
  
      /* ── Sidebar ── */
      const sidebar     = document.createElement('aside');
      sidebar.className = 'vd-sidebar';
      sidebar.innerHTML = `
  
        <button class="vd-back-btn" onclick="history.back()">
          ← Voltar
        </button>
  
        <div class="vd-sidebar__section">
          <h3 class="vd-sidebar__title">Disciplinas</h3>
          <ul class="vd-sidebar__menu">
            ${DISCIPLINAS.map(d => `
              <li>
                
                  href="${r('disciplinas/' + d.slug + '.html')}"
                  class="${d.slug === slug ? 'active' : ''}"
                >
                  <span>${d.icon}</span> ${d.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
  
      `;
  
      /* ── Breadcrumb ── */
      let bcItems = `<li><a href="${r('index.html')}">🏠 Início</a></li>`;
  
      if (disc) {
        bcItems += `
          <li>
            <a href="${r('disciplinas/' + slug + '.html')}">${disc.label}</a>
          </li>
        `;
      }
  
      if (title) {
        bcItems += `<li class="current">${title}</li>`;
      }
  
      const breadcrumb     = document.createElement('nav');
      breadcrumb.className = 'vd-breadcrumb';
      breadcrumb.setAttribute('aria-label', 'Navegação estrutural');
      breadcrumb.innerHTML = `<ol>${bcItems}</ol>`;
  
      /* ── Content wrapper ── */
      const content     = document.createElement('div');
      content.className = 'vd-content';
      original.forEach(el => content.appendChild(el));
  
      /* ── Main ── */
      const main     = document.createElement('main');
      main.className = 'vd-main';
      main.appendChild(breadcrumb);
      main.appendChild(content);
  
      /* ── Layout wrapper ── */
      const layout     = document.createElement('div');
      layout.className = 'vd-layout';
      layout.appendChild(sidebar);
      layout.appendChild(main);
  
      document.body.appendChild(layout);
    }
  
    /* ── 6. Rodapé ──────────────────────────────────────────────── */
  
    function buildFooter() {
      const footer     = document.createElement('footer');
      footer.className = 'vd-footer';
      footer.innerHTML = `
        <div class="vd-footer__inner">
          <p>© ${new Date().getFullYear()} Prefeitura de Varjota — Secretaria de Educação (SMETEC)</p>
          <p class="vd-footer__notice">
            O conteúdo deste site não pode ser editado, copiado ou distribuído
            sem expressa autorização da SMETEC-Varjota.
          </p>
        </div>
      `;
      document.body.appendChild(footer);
    }
  
    /* ── 7. Inicialização ───────────────────────────────────────── */
  
    function run() {
      buildNavbar();
      buildLayout();
      buildFooter();
    }
  
    // Injeta CSS imediatamente (antes do DOM estar pronto)
    injectAssets();
  
    // Aguarda o DOM para montar os elementos visuais
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  
  })();