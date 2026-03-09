/**
 * Varjota DigiEdu — search-index-full.js
 * Índice de busca completo: disciplinas, habilidades BNCC,
 * ideias do Banco de Ideias e páginas gerais.
 *
 * Depende (deve ser carregado APÓS):
 *   disciplinas/dados/links-*.js  → window.LINKS_*
 *   pages/dados/ideias-ei.js      → window.IDEIAS_EI
 *   pages/dados/ideias-ai.js      → window.IDEIAS_AI
 *   pages/dados/ideias-af.js      → window.IDEIAS_AF
 *
 * Expõe:
 *   window.VD_FULL_INDEX  → array de itens indexados
 */

(function () {

  var DISCIPLINAS = [
    { slug: 'arte',              label: 'Arte',              icon: '🎨', varLinks: 'LINKS_ARTE' },
    { slug: 'ciencias',          label: 'Ciências',          icon: '🔬', varLinks: 'LINKS_CIENCIAS' },
    { slug: 'educacao-fisica',   label: 'Educação Física',   icon: '⚽', varLinks: 'LINKS_EDUCACAO_FISICA' },
    { slug: 'ensino-religioso',  label: 'Ensino Religioso',  icon: '✨', varLinks: 'LINKS_ENSINO_RELIGIOSO' },
    { slug: 'geografia',         label: 'Geografia',         icon: '🌍', varLinks: 'LINKS_GEOGRAFIA' },
    { slug: 'historia',          label: 'História',           icon: '📜', varLinks: 'LINKS_HISTORIA' },
    { slug: 'lingua-inglesa',    label: 'Língua Inglesa',    icon: '🆙', varLinks: 'LINKS_LINGUA_INGLESA' },
    { slug: 'lingua-portuguesa', label: 'Língua Portuguesa', icon: '📖', varLinks: 'LINKS_LINGUA_PORTUGUESA' },
    { slug: 'matematica',        label: 'Matemática',        icon: '📐', varLinks: 'LINKS_MATEMATICA' },
    { slug: 'educacao-infantil', label: 'Educação Infantil', icon: '🧸', varLinks: 'LINKS_EDUCACAO_INFANTIL' },
  ];

  var ABA_LABEL = {
    atividades:    'Atividades',
    reds:          'REDs',
    materiais:     'Materiais de Apoio',
    acessibilidade:'Acessibilidade',
  };

  var SEGMENTO_LABEL = {
    ei: 'Educação Infantil',
    ai: 'Anos Iniciais',
    af: 'Anos Finais',
  };

  var index = [];

  /* ── 1. Recursos das disciplinas ── */
  DISCIPLINAS.forEach(function (disc) {
    var lista = window[disc.varLinks] || [];
    lista.forEach(function (item) {
      index.push({
        id:        item.id,
        title:     item.titulo,
        desc:      item.descricao,
        icon:      disc.icon,
        url:       '../disciplinas/' + disc.slug + '.html',
        categoria: 'Recurso',
        subcategoria: disc.label + ' — ' + (ABA_LABEL[item.aba] || item.aba),
        tags:      [disc.label, item.tipo_recurso, item.tipo_uso].concat(item.anos || []).concat(item.acessibilidade || []).join(' '),
        tipo:      item.tipo_recurso,
        disciplina: disc.label,
        anos:      item.anos || [],
      });
    });
  });

  /* ── 2. Habilidades BNCC das disciplinas ── */
  // As habilidades são extraídas dos cards BNCC inline nas páginas.
  // Como não temos um JS de dados separado, indexamos as páginas das disciplinas
  // como entradas de "Correlação BNCC" com link para a página.
  DISCIPLINAS.forEach(function (disc) {
    index.push({
      id:        'bncc-' + disc.slug,
      title:     'Correlação BNCC — ' + disc.label,
      desc:      'Habilidades da Base Nacional Comum Curricular para ' + disc.label + ' do Ensino Fundamental.',
      icon:      disc.icon,
      url:       '../disciplinas/' + disc.slug + '.html',
      categoria: 'Habilidade BNCC',
      subcategoria: disc.label,
      tags:      'bncc habilidades ' + disc.label,
      disciplina: disc.label,
      anos:      [],
    });
  });

  /* ── 3. Ideias do Banco de Ideias ── */
  var todasIdeias = [].concat(
    window.IDEIAS_EI || [],
    window.IDEIAS_AI || [],
    window.IDEIAS_AF || []
  );

  var DISC_MAP = {
    arte: 'Arte', ciencias: 'Ciências', 'educacao-fisica': 'Educação Física',
    'ensino-religioso': 'Ensino Religioso', geografia: 'Geografia',
    historia: 'História', 'lingua-portuguesa': 'Língua Portuguesa',
    matematica: 'Matemática', 'educacao-infantil': 'Educação Infantil',
    interdisciplinar: 'Interdisciplinar',
  };

  todasIdeias.forEach(function (ideia) {
    var seg = SEGMENTO_LABEL[ideia.segmento] || ideia.segmento;
    var discLabel = DISC_MAP[ideia.disciplina] || ideia.disciplina;
    index.push({
      id:          ideia.id,
      title:       ideia.emoji + ' ' + ideia.titulo,
      desc:        ideia.descricao,
      icon:        ideia.emoji,
      url:         '../pages/banco-ideias.html',
      categoria:   'Ideia de Aula',
      subcategoria: seg + ' — ' + discLabel,
      tags:        [seg, discLabel, ideia.duracao || '', ideia.agrupamento || ''].concat(ideia.tipo || []).concat(ideia.anos || []).join(' '),
      disciplina:  discLabel,
      anos:        ideia.anos || [],
    });
  });

  /* ── 4. Páginas gerais ── */
  var paginas = [
    {
      id:    'pg-index',
      title: '🏠 Página Inicial',
      desc:  'Acesse disciplinas, BNCC Computação, Banco de Ideias e REDs da rede municipal de Varjota.',
      icon:  '🏠',
      url:   '../index.html',
      categoria: 'Página',
      tags:  'início home plataforma varjota digiedu smetec',
    },
    {
      id:    'pg-banco-ideias',
      title: '💡 Banco de Ideias',
      desc:  'Propostas de atividades pedagógicas com tecnologia para EI, Anos Iniciais e Anos Finais.',
      icon:  '💡',
      url:   '../pages/banco-ideias.html',
      categoria: 'Página',
      tags:  'banco ideias atividades pedagógicas projetos educação infantil anos iniciais anos finais',
    },
    {
      id:    'pg-reds',
      title: '💻 REDs — Recursos Educacionais Digitais',
      desc:  'Todos os recursos digitais do site reunidos num único lugar, com filtros por disciplina e tipo.',
      icon:  '💻',
      url:   '../pages/reds.html',
      categoria: 'Página',
      tags:  'reds recursos educacionais digitais vídeos jogos aplicativos sites',
    },
    {
      id:    'pg-bncc',
      title: '📋 BNCC Computação',
      desc:  'Referencial curricular de computação para a rede municipal de Varjota — alinhado à BNCC.',
      icon:  '📋',
      url:   '../ref-curricular/ref-index.html',
      categoria: 'Página',
      tags:  'bncc computação referencial curricular habilidades competências',
    },
    {
      id:    'pg-sobre',
      title: '🏫 Sobre o Varjota DigiEdu',
      desc:  'Conheça a plataforma, a equipe responsável e os pilares da Educação Digital e Midiática.',
      icon:  '🏫',
      url:   '../pages/sobre.html',
      categoria: 'Página',
      tags:  'sobre equipe smetec varjota educação digital midiática',
    },
    {
      id:    'pg-suporte',
      title: '🛟 Suporte e Sugestões',
      desc:  'Reporte problemas ou sugira novos recursos e ideias para a plataforma.',
      icon:  '🛟',
      url:   '../pages/suporte.html',
      categoria: 'Página',
      tags:  'suporte ajuda sugestões contato formulário problema',
    },
  ];

  paginas.forEach(function (p) {
    index.push(Object.assign({ subcategoria: '', disciplina: '', anos: [] }, p));
  });

  /* ── 5. Conteúdo do search-index.js (disciplinas, seções, BNCC Computação) ── */
  // VD_SEARCH_INDEX é carregado por assets/search-index.js (antes deste arquivo).
  // Fazemos merge evitando duplicatas por url+title.
  var existentes = {};
  index.forEach(function (item) {
    existentes[(item.url || '') + '|' + (item.title || '')] = true;
  });

  (window.VD_SEARCH_INDEX || []).forEach(function (item) {
    var chave = (item.url || '') + '|' + (item.title || '');
    if (existentes[chave]) return; // já indexado
    index.push({
      id:          'si-' + (item.url || '').replace(/[^a-z0-9]/gi, '-'),
      title:       item.title  || '',
      desc:        item.desc   || '',
      icon:        item.icon   || '📄',
      url:         item.url    || '#',
      categoria:   item.categoria || 'Seção',
      subcategoria:'',
      tags:        item.tags   || '',
      disciplina:  '',
      anos:        [],
    });
  });

  window.VD_FULL_INDEX = index;

})();