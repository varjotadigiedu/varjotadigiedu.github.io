/**
 * Varjota DigiEdu — template.js
 * Injeta navbar, sidebar, breadcrumb e rodapé automaticamente.
 *
 * USO NA PÁGINA FILHA (antes deste script):
 *   <script>
 *     window.VD_PAGE = {
 *       disciplina: "arte",
 *       pageTitle:  "Título da página"
 *     };
 *   </script>
 *   <script src="../assets/template.js"></script>
 */

(function () {
  'use strict';

  /* ── 1. Configuração central ────────────────────────────────── */

  var DISCIPLINAS = [
    { slug: 'arte',              label: 'Arte',              icon: '🎨' },
    { slug: 'ciencias',          label: 'Ciências',          icon: '🔬' },
    { slug: 'educacao-fisica',   label: 'Educação Física',   icon: '⚽' },
    { slug: 'ensino-religioso',  label: 'Ensino Religioso',  icon: '✨' },
    { slug: 'geografia',         label: 'Geografia',         icon: '🌍' },
    { slug: 'historia',          label: 'História',          icon: '📜' },
    { slug: 'lingua-inglesa',    label: 'Língua Inglesa',    icon: '🆙' },
    { slug: 'lingua-portuguesa', label: 'Língua Portuguesa', icon: '📖' },
    { slug: 'matematica',        label: 'Matemática',        icon: '📐' },
    { slug: 'educacao-infantil', label: 'Educação Infantil', icon: '🧸' },
  ];

  var NAV_ITEMS = [
    { label: 'Início',              href: 'index.html' },
    { label: 'BNCC Computação',                href: 'ref-curricular/ref-index.html' },
    { label: 'Banco de ideias',     href: 'pages/banco-ideias.html' },
    { label: 'REDs',                href: 'pages/reds.html' },
  ];

  /* ── 2. Utilitários ─────────────────────────────────────────── */

  function getPrefix() {
    var parts = window.location.pathname.split('/').filter(function(p) { return p !== ''; });
    var depth = parts.length > 0 ? parts.length - 1 : 0;
    var prefix = '';
    for (var i = 0; i < depth; i++) { prefix += '../'; }
    return prefix;
  }

  var PREFIX = getPrefix();

  function r(href) {
    return PREFIX + href;
  }

  function isActive(href) {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    var target  = href.split('/').pop();
    return current === target;
  }

  function el(tag, props, children) {
    var elem = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function(key) {
        if (key === 'className') {
          elem.className = props[key];
        } else if (key === 'textContent') {
          elem.textContent = props[key];
        } else if (key === 'onclick') {
          elem.addEventListener('click', props[key]);
        } else {
          elem.setAttribute(key, props[key]);
        }
      });
    }
    if (children) {
      children.forEach(function(child) {
        if (typeof child === 'string') {
          elem.appendChild(document.createTextNode(child));
        } else if (child) {
          elem.appendChild(child);
        }
      });
    }
    return elem;
  }

  /* ── 3. Injeção de Fontes ───────────────────────────────────── */

  function injectFonts() {
    if (!document.querySelector('link[href*="fonts.googleapis"]')) {
      var gf  = document.createElement('link');
      gf.rel  = 'stylesheet';
      gf.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Lexend:wght@400;500;600;700&display=swap';
      document.head.appendChild(gf);
    }
  }

  /* ── 4. Navbar ──────────────────────────────────────────────── */

  function buildNavbar() {
    // Logo
    var logoImg = document.createElement('img');
    logoImg.src = r('assets/logo.png');
    logoImg.alt = 'Varjota DigiEdu';
    logoImg.onerror = function() {
      this.style.display = 'none';
      this.nextSibling.style.display = 'block';
    };

    var logoFb = document.createElement('span');
    logoFb.className   = 'vd-navbar__logo-fb';
    logoFb.textContent = 'Varjota DigiEdu';
    logoFb.style.display = 'none';

    var logoLink = document.createElement('a');
    logoLink.href      = r('index.html');
    logoLink.className = 'vd-navbar__logo';
    logoLink.appendChild(logoImg);
    logoLink.appendChild(logoFb);

    // Hamburger
    var hamburger = document.createElement('button');
    hamburger.className   = 'vd-navbar__hamburger';
    hamburger.id          = 'vdHamburger';
    hamburger.setAttribute('aria-label', 'Abrir menu');
    for (var s = 0; s < 3; s++) {
      hamburger.appendChild(document.createElement('span'));
    }

    // Links
    var ul = document.createElement('ul');
    ul.className = 'vd-navbar__links';
    ul.id        = 'vdNavLinks';

    NAV_ITEMS.forEach(function(item) {
      var a       = document.createElement('a');
      a.href      = r(item.href);
      a.textContent = item.label;
      if (isActive(item.href)) { a.className = 'active'; }

      var li = document.createElement('li');
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Inner
    var inner = document.createElement('div');
    inner.className = 'vd-navbar__inner';
    inner.appendChild(logoLink);
    inner.appendChild(hamburger);
    inner.appendChild(ul);

    // Nav
    var nav = document.createElement('nav');
    nav.className = 'vd-navbar';
    nav.appendChild(inner);

    document.body.insertBefore(nav, document.body.firstChild);

    // Toggle hamburger
    hamburger.addEventListener('click', function() {
      ul.classList.toggle('open');
    });

    // Fecha ao clicar num link
    ul.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        ul.classList.remove('open');
      });
    });
  }

  /* ── 5. Layout ──────────────────────────────────────────────── */

  function buildLayout() {
    var meta  = window.VD_PAGE || {};
    var slug  = meta.disciplina || null;
    var title = meta.pageTitle  || null;
    var disc  = null;

    DISCIPLINAS.forEach(function(d) {
      if (d.slug === slug) { disc = d; }
    });

    // Coleta conteúdo original (exceto navbar)
    var original = [];
    Array.from(document.body.children).forEach(function(child) {
      if (!child.classList.contains('vd-navbar')) {
        original.push(child);
      }
    });

    /* ── Botão Voltar ── */
    var backBtn = document.createElement('button');
    backBtn.className   = 'vd-back-btn';
    backBtn.textContent = '← Voltar';
    backBtn.addEventListener('click', function() { history.back(); });

    /* ── Menu de disciplinas ── */
    var menuTitle = document.createElement('h3');
    menuTitle.className   = 'vd-sidebar__title';
    menuTitle.textContent = 'Disciplinas';

    var menuUl = document.createElement('ul');
    menuUl.className = 'vd-sidebar__menu';

    DISCIPLINAS.forEach(function(d) {
      var iconSpan = document.createElement('span');
      iconSpan.textContent = d.icon;

      var a = document.createElement('a');
      a.href = r('disciplinas/' + d.slug + '.html');
      if (d.slug === slug) { a.className = 'active'; }
      a.appendChild(iconSpan);
      a.appendChild(document.createTextNode(' ' + d.label));

      var li = document.createElement('li');
      li.appendChild(a);
      menuUl.appendChild(li);
    });

    var sidebarSection = document.createElement('div');
    sidebarSection.className = 'vd-sidebar__section';
    sidebarSection.appendChild(menuTitle);
    sidebarSection.appendChild(menuUl);

    /* ── Sidebar ── */
    var sidebar = document.createElement('aside');
    sidebar.className = 'vd-sidebar';
    sidebar.appendChild(backBtn);
    sidebar.appendChild(sidebarSection);

    /* ── Breadcrumb ── */
    var bcOl = document.createElement('ol');

    // Item: Início
    var homeA = document.createElement('a');
    homeA.href        = r('index.html');
    homeA.textContent = '🏠 Início';
    var homeLi = document.createElement('li');
    homeLi.appendChild(homeA);
    bcOl.appendChild(homeLi);

    // Item: Disciplina
    if (disc) {
      var discA = document.createElement('a');
      discA.href        = r('disciplinas/' + slug + '.html');
      discA.textContent = disc.label;
      var discLi = document.createElement('li');
      discLi.appendChild(discA);
      bcOl.appendChild(discLi);
    }

    // Item: Página atual
    if (title) {
      var curLi = document.createElement('li');
      curLi.className   = 'current';
      curLi.textContent = title;
      bcOl.appendChild(curLi);
    }

    var breadcrumb = document.createElement('nav');
    breadcrumb.className = 'vd-breadcrumb';
    breadcrumb.setAttribute('aria-label', 'Navegação estrutural');
    breadcrumb.appendChild(bcOl);

    /* ── Content ── */
    var content = document.createElement('div');
    content.className = 'vd-content';
    original.forEach(function(child) {
      content.appendChild(child);
    });

    /* ── Main ── */
    var main = document.createElement('main');
    main.className = 'vd-main';
    main.appendChild(breadcrumb);
    main.appendChild(content);

    /* ── Layout ── */
    var layout = document.createElement('div');
    layout.className = 'vd-layout';
    layout.appendChild(sidebar);
    layout.appendChild(main);

    document.body.appendChild(layout);
  }

  /* ── 6. Rodapé ──────────────────────────────────────────────── */

  function buildFooter() {
    var year = new Date().getFullYear();

    var p1 = document.createElement('p');
    p1.textContent = '© ' + year + ' Prefeitura de Varjota — Secretaria de Educação (SMETEC)';

    var p2 = document.createElement('p');
    p2.className   = 'vd-footer__notice';
    p2.textContent = 'O conteúdo deste site não pode ser editado, copiado ou distribuído sem expressa autorização da SMETEC-Varjota.';

    var inner = document.createElement('div');
    inner.className = 'vd-footer__inner';
    inner.appendChild(p1);
    inner.appendChild(p2);

    var footer = document.createElement('footer');
    footer.className = 'vd-footer';
    footer.appendChild(inner);

    document.body.appendChild(footer);
  }

  /* ── 7. Inicialização ───────────────────────────────────────── */

  function run() {
    buildNavbar();
    buildLayout();
    buildFooter();
  }

  injectFonts();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

})();