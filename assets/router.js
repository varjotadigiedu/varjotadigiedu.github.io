/**
 * Varjota DigiEdu — router.js
 * Navegação SPA sem recarregamento de página.
 *
 * Como funciona:
 *  1. Intercepta cliques em links internos (mesma origem)
 *  2. Faz fetch() da página destino
 *  3. Extrai VD_PAGE, <style> e conteúdo do <body>
 *  4. Substitui no DOM sem recarregar navbar/sidebar/CSS/fontes
 *  5. Atualiza URL via history.pushState
 *
 * INSTALAÇÃO: incluir em todas as páginas filhas, APÓS template.js
 *   <script src="../assets/router.js"></script>
 */

(function () {
  'use strict';

  // Cache de páginas já buscadas: url → { meta, styleText, bodyHTML, scriptTexts }
  var cache = {};

  /* ── Barra de progresso ───────────────────────────────────── */
  var bar = null;
  var barTimer = null;

  function barCreate() {
    if (bar) return;
    bar = document.createElement('div');
    bar.id = 'vd-progress-bar';
    bar.style.cssText = [
      'position:fixed', 'top:0', 'left:0', 'z-index:9999',
      'height:3px', 'width:0%',
      'background:linear-gradient(90deg,#FF8F00,#FFB300)',
      'border-radius:0 2px 2px 0',
      'transition:width .25s ease, opacity .3s ease',
      'pointer-events:none',
      'box-shadow:0 0 8px rgba(255,143,0,.6)',
    ].join(';');
    document.body.appendChild(bar);
  }

  function barStart() {
    barCreate();
    clearTimeout(barTimer);
    bar.style.opacity  = '1';
    bar.style.width    = '0%';
    // Força reflow para reiniciar a transição
    bar.getBoundingClientRect();
    bar.style.width    = '70%';
  }

  function barFinish() {
    if (!bar) return;
    bar.style.width = '100%';
    barTimer = setTimeout(function () {
      bar.style.opacity = '0';
      barTimer = setTimeout(function () {
        bar.style.width = '0%';
      }, 300);
    }, 200);
  }

  function barError() {
    if (!bar) return;
    bar.style.background = '#E53935';
    barFinish();
    setTimeout(function () {
      if (bar) bar.style.background = 'linear-gradient(90deg,#FF8F00,#FFB300)';
    }, 600);
  }

  // ID do <style> injetado pelo roteador (substituído a cada navegação)
  var ROUTER_STYLE_ID = 'vd-router-page-style';

  // Seletores de links que NUNCA devem ser interceptados
  var EXTERNAL_RE = /^(https?:\/\/|mailto:|tel:|#)/;

  // Extensões de arquivos para ignorar
  var SKIP_EXT_RE = /\.(pdf|zip|png|jpg|jpeg|gif|svg|webp|mp4|mp3)$/i;

  /* ── Utilitários ──────────────────────────────────────────── */

  function isSameOrigin(href) {
    try {
      var url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch (e) {
      return false;
    }
  }

  function shouldIntercept(anchor) {
    var href = anchor.getAttribute('href') || '';
    if (!href) return false;
    if (EXTERNAL_RE.test(href)) return false;
    if (SKIP_EXT_RE.test(href)) return false;
    if (anchor.target && anchor.target !== '_self') return false;
    if (anchor.hasAttribute('data-no-spa')) return false;
    if (!isSameOrigin(href)) return false;
    return true;
  }

  /* ── Fetch e parse da página destino ─────────────────────── */

  function fetchPage(url) {
    if (cache[url]) return Promise.resolve(cache[url]);

    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var parser   = new DOMParser();
        var doc      = parser.parseFromString(html, 'text/html');

        // Só aplica SPA em páginas que usam template.js.
        // Páginas auto-contidas (index, sobre, suporte, banco-ideias…) navegam normalmente.
        var usesTemplate = !!doc.querySelector('script[src*="template.js"]');
        if (!usesTemplate) {
          return { __external: true };
        }

        // Extrai VD_PAGE do script inline
        var meta = null;
        var scripts = doc.querySelectorAll('script:not([src])');
        for (var i = 0; i < scripts.length; i++) {
          var src = scripts[i].textContent || '';
          var m = src.match(/window\.VD_PAGE\s*=\s*(\{[^}]+\})/);
          if (m) {
            try { meta = JSON.parse(m[1]); } catch (e) {}
            break;
          }
        }

        // Extrai <style> do <head> (CSS específico da disciplina)
        var styleText = '';
        var styleEls = doc.querySelectorAll('head style');
        styleEls.forEach(function (s) { styleText += s.textContent; });

        // Extrai conteúdo do <body> — apenas o que NÃO foi gerado pelo template
        // (remove elementos que o template.js vai recriar)
        var body = doc.body;
        var bodyHTML = '';
        Array.from(body.children).forEach(function (child) {
          var cls = child.className || '';
          if (
            cls.indexOf('vd-navbar')  !== -1 ||
            cls.indexOf('vd-layout')  !== -1 ||
            cls.indexOf('vd-footer')  !== -1
          ) return;
          bodyHTML += child.outerHTML;
        });

        // Coleta scripts inline do body (exceto os do template)
        var scriptTexts = [];
        var bodyScripts = body.querySelectorAll('script:not([src])');
        bodyScripts.forEach(function (s) {
          var t = s.textContent || '';
          // Ignora scripts do template
          if (t.indexOf('window.VD_PAGE') !== -1) return;
          scriptTexts.push(t);
        });

        // Coleta scripts externos do body (dados JS como links-arte.js)
        var externalScripts = [];
        var headScripts = doc.querySelectorAll('head script[src]');
        headScripts.forEach(function (s) {
          var src2 = s.getAttribute('src') || '';
          // Ignora template scripts
          if (
            src2.indexOf('template') !== -1 ||
            src2.indexOf('router')   !== -1 ||
            src2.indexOf('search-index') !== -1
          ) return;
          externalScripts.push(src2);
        });

        var result = {
          meta:            meta,
          styleText:       styleText,
          bodyHTML:        bodyHTML,
          scriptTexts:     scriptTexts,
          externalScripts: externalScripts,
          title:           doc.title,
        };

        cache[url] = result;
        return result;
      });
  }

  /* ── Aplica a nova página no DOM ─────────────────────────── */

  function applyPage(pageData, url) {
    // 1. Atualiza <title>
    document.title = pageData.title;

    // 2. Substitui CSS específico da disciplina
    var existing = document.getElementById(ROUTER_STYLE_ID);
    if (existing) existing.remove();
    if (pageData.styleText) {
      var styleEl = document.createElement('style');
      styleEl.id  = ROUTER_STYLE_ID;
      styleEl.textContent = pageData.styleText;
      document.head.appendChild(styleEl);
    }

    // 3. Injeta o HTML do body temporariamente para o template.js
    //    poder coletar o conteúdo original
    var tmp = document.createElement('div');
    tmp.innerHTML = pageData.bodyHTML;
    Array.from(tmp.children).forEach(function (child) {
      document.body.appendChild(child);
    });

    // 4. Carrega scripts externos necessários (ex: links-arte.js)
    //    Se já estiver carregado, apenas atualiza; senão, carrega novo
    var pending = pageData.externalScripts.length;

    function afterScripts() {
      // 5. Reconstrói layout via hook exposto pelo template.js
      if (typeof window.VD_rebuildLayout === 'function') {
        window.VD_rebuildLayout(pageData.meta || {});
      }

      // 6. Reexecuta scripts inline da página (lógica de abas, filtros etc.)
      pageData.scriptTexts.forEach(function (code) {
        try {
          // eslint-disable-next-line no-new-func
          (new Function(code))();
        } catch (e) {
          console.warn('[router] Erro ao executar script inline:', e);
        }
      });

      // 7. Scroll para o topo
      window.scrollTo(0, 0);

      // 8. Atualiza active na sidebar desktop
      updateSidebarActive(url);

      // 9. Atualiza active na navbar
      updateNavActive(url);
    }

    if (pending === 0) {
      afterScripts();
      return;
    }

    pageData.externalScripts.forEach(function (src) {
      // Resolve caminho relativo ao URL destino
      var absUrl = new URL(src, url).href;

      // Se o script já foi carregado antes, apenas reavalia
      if (cache['__script__' + absUrl]) {
        pending--;
        if (pending === 0) afterScripts();
        return;
      }

      var s = document.createElement('script');
      s.src = absUrl;
      s.onload = s.onerror = function () {
        cache['__script__' + absUrl] = true;
        pending--;
        if (pending === 0) afterScripts();
      };
      document.head.appendChild(s);
    });
  }

  /* ── Atualiza links ativos ────────────────────────────────── */

  function updateSidebarActive(url) {
    var currentFile = url.split('/').pop().split('?')[0];
    document.querySelectorAll('.vd-sidebar__menu a').forEach(function (a) {
      var file = a.href.split('/').pop().split('?')[0];
      a.classList.toggle('active', file === currentFile);
    });
    // Atualiza também o dropdown mobile
    document.querySelectorAll('.vd-disc-dropmenu a').forEach(function (a) {
      var file = a.href.split('/').pop().split('?')[0];
      a.classList.toggle('active', file === currentFile);
    });
    // Atualiza label do trigger mobile
    var trigger = document.querySelector('.vd-disc-trigger__label');
    if (trigger) {
      var activeA = document.querySelector('.vd-disc-dropmenu a.active');
      if (activeA) trigger.textContent = activeA.textContent;
    }
  }

  function updateNavActive(url) {
    var currentFile = url.split('/').pop().split('?')[0];
    document.querySelectorAll('.vd-navbar__links a').forEach(function (a) {
      var file = a.href.split('/').pop().split('?')[0];
      a.classList.toggle('active', file === currentFile);
    });
  }

  /* ── Navegação ────────────────────────────────────────────── */

  function navigate(url, pushState) {
    // Canonicaliza URL
    var absUrl = new URL(url, window.location.href).href;

    // Não navega se já está na mesma página
    if (absUrl === window.location.href) return;

    barStart();

    fetchPage(absUrl)
      .then(function (pageData) {
        // Página auto-contida (sem template.js) — navegação normal
        if (pageData.__external) {
          window.location.href = absUrl;
          return;
        }
        barFinish();
        if (pushState !== false) {
          history.pushState({ vdSpa: true, url: absUrl }, pageData.title, absUrl);
        }
        applyPage(pageData, absUrl);
      })
      .catch(function (err) {
        barError();
        // Fallback: navegação normal em caso de erro
        console.warn('[router] Fallback para navegação normal:', err);
        window.location.href = absUrl;
      });
  }

  /* ── Event listeners ──────────────────────────────────────── */

  // Intercepta cliques em links
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;
    if (!shouldIntercept(anchor)) return;
    e.preventDefault();
    navigate(anchor.href);
  });

  // Suporte ao botão voltar/avançar do navegador
  window.addEventListener('popstate', function (e) {
    var url = (e.state && e.state.url) ? e.state.url : window.location.href;
    fetchPage(url)
      .then(function (pageData) {
        if (pageData.__external) {
          window.location.reload();
          return;
        }
        applyPage(pageData, url);
      })
      .catch(function () {
        window.location.reload();
      });
  });

  // Pré-carrega páginas de disciplina ao passar o mouse (prefetch)
  document.addEventListener('mouseover', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor || !shouldIntercept(anchor)) return;
    var absUrl = new URL(anchor.href, window.location.href).href;
    if (!cache[absUrl]) {
      // Prefetch silencioso — ignora erros
      fetchPage(absUrl).catch(function () {});
    }
  });

  // Registra estado inicial no histórico
  history.replaceState(
    { vdSpa: true, url: window.location.href },
    document.title,
    window.location.href
  );

})();