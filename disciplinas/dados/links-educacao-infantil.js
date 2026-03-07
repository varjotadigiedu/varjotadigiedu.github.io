/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-educacao-infantil.js
 * Links externos — Educação Infantil
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: ei-at (atividades) | ei-re (reds)
 *                            ei-ma (materiais)  | ei-ac (acessibilidade)
 *   titulo       → nome do recurso
 *   descricao    → texto curto (1-2 frases)
 *   url          → link externo completo (com https://)
 *   aba          → 'atividades' | 'reds' | 'materiais' | 'acessibilidade'
 *   anos         → array com as etapas atendidas
 *                  valores: 'Bebês (0-1a6m)' | 'Crianças bem pequenas (1a7m-3a11m)'
 *                           'Crianças pequenas (4-5a11m)' | 'Toda a EI'
 *   tipo_recurso → 'video' | 'pdf' | 'site' | 'apresentacao' | 'planilha' | 'podcast'
 *                  'jogo' | 'simulador' | 'aplicativo' | 'infografico'
 *                  'atividade-interativa' | 'mapa' | 'outros'
 *   tipo_uso     → 'teorico' | 'pratico' | 'avaliativo' | 'complementar'
 *   acessibilidade → array (somente para aba 'acessibilidade', deixar [] nas demais)
 *                    valores: 'libras' | 'audiodescrição' | 'daltonismo' | 'baixa-visao'
 *                             'TEA' | 'TDAH' | 'deficiencia-intelectual'
 *                             'deficiencia-fisica' | 'altas-habilidades'
 * =============================================================================
 */

window.LINKS_EDUCACAO_INFANTIL = [

    /* ── Atividades ── */
    {
      id: 'ei-at-001',
      titulo: 'Sequência Didática — Brincadeiras Tradicionais Brasileiras',
      descricao: 'Proposta de atividades com brincadeiras da cultura popular brasileira para explorar corporalidade, imaginação e convívio social.',
      url: 'https://exemplo.gov.br/brincadeiras-tradicionais.pdf',
      aba: 'atividades',
      anos: ['Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ei-at-002',
      titulo: 'Roteiro de Atividade — Exploração Sensorial com Materiais Naturais',
      descricao: 'Atividades de exploração sensorial com areia, água, folhas e sementes para bebês e crianças bem pequenas.',
      url: 'https://exemplo.gov.br/exploracao-sensorial.pdf',
      aba: 'atividades',
      anos: ['Bebês (0-1a6m)', 'Crianças bem pequenas (1a7m-3a11m)'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ei-at-003',
      titulo: 'Projeto Didático — Horta na Escola',
      descricao: 'Proposta de projeto integrador para crianças pequenas explorando natureza, ciências, alimentação saudável e cuidado com o ambiente.',
      url: 'https://exemplo.gov.br/horta-escola-ei.pdf',
      aba: 'atividades',
      anos: ['Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ei-re-001',
      titulo: 'Conta pra Mim — MEC (Leitura em Voz Alta)',
      descricao: 'Portal do MEC com acervo de livros digitais, vídeos de leitura em voz alta e orientações para mediação de leitura na EI.',
      url: 'https://contapramim.mec.gov.br',
      aba: 'reds',
      anos: ['Toda a EI'],
      tipo_recurso: 'site',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ei-re-002',
      titulo: 'Vídeo: Músicas e Cantigas para a Educação Infantil — Galinha Pintadinha',
      descricao: 'Canal com cantigas de roda, músicas folclóricas e animações educativas para crianças pequenas e bem pequenas.',
      url: 'https://www.youtube.com/@GalinhaPintadinha',
      aba: 'reds',
      anos: ['Bebês (0-1a6m)', 'Crianças bem pequenas (1a7m-3a11m)', 'Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'video',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'ei-re-003',
      titulo: 'Scratch Jr — Introdução à Programação para Crianças',
      descricao: 'Aplicativo gratuito de programação visual por blocos para crianças a partir de 5 anos, desenvolvido pelo MIT.',
      url: 'https://www.scratchjr.org',
      aba: 'reds',
      anos: ['Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ei-re-004',
      titulo: 'Livros Digitais Animados — Plataforma Imagina',
      descricao: 'Plataforma com livros digitais animados e interativos da literatura infantil brasileira para uso em sala de aula.',
      url: 'https://exemplo.com.br/plataforma-imagina',
      aba: 'reds',
      anos: ['Crianças bem pequenas (1a7m-3a11m)', 'Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'ei-re-005',
      titulo: 'Smart Games — Jogos de Raciocínio para Pré-Escola',
      descricao: 'Coleção de jogos digitais de raciocínio lógico, memória e percepção espacial para crianças em fase pré-escolar.',
      url: 'https://www.smartgames.eu/br',
      aba: 'reds',
      anos: ['Crianças pequenas (4-5a11m)'],
      tipo_recurso: 'jogo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ei-ma-001',
      titulo: 'Diretrizes Curriculares Nacionais para a Educação Infantil (DCNEI)',
      descricao: 'Documento oficial com os princípios, fundamentos e procedimentos que orientam as práticas pedagógicas na Educação Infantil.',
      url: 'https://exemplo.gov.br/dcnei.pdf',
      aba: 'materiais',
      anos: ['Toda a EI'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ei-ma-002',
      titulo: 'Caderno do Professor — Práticas Pedagógicas na EI (BNCC)',
      descricao: 'Material de apoio com orientações para a organização dos campos de experiências da BNCC na Educação Infantil.',
      url: 'https://exemplo.gov.br/caderno-ei.pdf',
      aba: 'materiais',
      anos: ['Toda a EI'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ei-ma-003',
      titulo: 'Planilha de Acompanhamento — Desenvolvimento por Campo de Experiência',
      descricao: 'Modelo editável para registro e acompanhamento do desenvolvimento das crianças nos cinco campos de experiências da BNCC.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['Toda a EI'],
      tipo_recurso: 'planilha',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'ei-ma-004',
      titulo: 'Infográfico — Campos de Experiências da BNCC (EI)',
      descricao: 'Infográfico visual com os cinco campos de experiências da BNCC para Educação Infantil e seus objetivos de aprendizagem.',
      url: 'https://exemplo.gov.br/campos-experiencias-ei',
      aba: 'materiais',
      anos: ['Toda a EI'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'ei-ma-005',
      titulo: 'Podcast: Infância em Pauta — UNDIME',
      descricao: 'Episódios sobre práticas pedagógicas, políticas públicas e desenvolvimento infantil na Educação Infantil brasileira.',
      url: 'https://exemplo.com/infancia-em-pauta',
      aba: 'materiais',
      anos: ['Toda a EI'],
      tipo_recurso: 'podcast',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ei-ac-001',
      titulo: 'Educação Infantil Bilíngue — Libras e Português',
      descricao: 'Videoaulas e materiais para práticas pedagógicas bilíngues (Libras/Português) na Educação Infantil inclusiva.',
      url: 'https://exemplo.gov.br/ei-libras',
      aba: 'acessibilidade',
      anos: ['Toda a EI'],
      tipo_recurso: 'video',
      tipo_uso: 'pratico',
      acessibilidade: ['libras']
    },
    {
      id: 'ei-ac-002',
      titulo: 'Guia de Inclusão na EI — Crianças com TEA',
      descricao: 'Material com estratégias, rotinas visuais e adaptações ambientais para acolhimento e inclusão de crianças com TEA na EI.',
      url: 'https://exemplo.gov.br/ei-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Toda a EI'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA']
    },
    {
      id: 'ei-ac-003',
      titulo: 'Brincar e Aprender com Deficiência Física — EI Inclusiva',
      descricao: 'Guia com adaptações de brinquedos, espaços e atividades para garantir a participação plena de crianças com deficiência física.',
      url: 'https://exemplo.gov.br/ei-deficiencia-fisica.pdf',
      aba: 'acessibilidade',
      anos: ['Toda a EI'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['deficiencia-fisica', 'deficiencia-intelectual']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];