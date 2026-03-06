/**
 * Varjota DigiEdu — template-loader.js
 * Injeta o CSS de forma síncrona antes do DOM renderizar.
 * Deve ser o PRIMEIRO script no <head> de todas as páginas filhas.
 * 
 * Por que funciona:
 * Scripts síncronos no <head> bloqueiam a renderização do DOM até
 * terminarem — isso garante que o CSS esteja disponível antes de
 * qualquer <style> inline ser interpretado.
 */
(function () {
  // Detecta profundidade para calcular caminho relativo
  function getPrefix() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const depth = parts.length > 0 ? parts.length - 1 : 0;
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  const PREFIX = getPrefix();

  // Injeta Google Fonts
  if (!document.querySelector('link[href*="fonts.googleapis"]')) {
    const gf  = document.createElement('link');
    gf.rel    = 'stylesheet';
    gf.href   = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Lexend:wght@400;500;600;700&display=swap';
    document.head.appendChild(gf);
  }

  // Injeta template.css de forma síncrona e bloqueante
  if (!document.querySelector('link[href*="template.css"]')) {
    const css  = document.createElement('link');
    css.rel    = 'stylesheet';
    css.href   = PREFIX + 'assets/template.css';

    // Força comportamento bloqueante igual a um <link> estático no HTML
    document.write(
      '<link rel="stylesheet" href="' + css.href + '">'
    );
  }

  // Injeta favicons
if (!document.querySelector('link[rel="icon"]')) {
  const favicons = [
    { rel: 'icon',             type: 'image/x-icon', href: 'favicon.ico',                sizes: null },
    { rel: 'icon',             type: 'image/png',    href: 'favicon-16x16.png',           sizes: '16x16' },
    { rel: 'icon',             type: 'image/png',    href: 'favicon-32x32.png',           sizes: '32x32' },
    { rel: 'icon',             type: 'image/png',    href: 'android-chrome-192x192.png',  sizes: '192x192' },
    { rel: 'icon',             type: 'image/png',    href: 'android-chrome-512x512.png',  sizes: '512x512' },
    { rel: 'apple-touch-icon', type: 'image/png',    href: 'apple-touch-icon.png',        sizes: '180x180' },
  ];
  favicons.forEach(function(f) {
    const link = document.createElement('link');
    link.rel  = f.rel;
    link.type = f.type;
    link.href = PREFIX + 'assets/' + f.href;
    if (f.sizes) link.sizes = f.sizes;
    document.head.appendChild(link);
  });
}

})();