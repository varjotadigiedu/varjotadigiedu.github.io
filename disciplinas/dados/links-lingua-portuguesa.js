/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-lingua-portuguesa.js
 * Links externos da disciplina de Língua Portuguesa
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: lp-at (atividades) | lp-re (reds)
 *                            lp-ma (materiais)  | lp-ac (acessibilidade)
 *   titulo       → nome do recurso
 *   descricao    → texto curto (1-2 frases)
 *   url          → link externo completo (com https://)
 *   aba          → 'atividades' | 'reds' | 'materiais' | 'acessibilidade'
 *   anos         → array ex: ['6º ano', '7º ano']
 *                  valores: '1º ano'...'9º ano' | 'Anos Iniciais' | 'Anos Finais' | 'Todos'
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

window.LINKS_LINGUA_PORTUGUESA = [

    /* ── Atividades ── */
    {
      id: 'lp-at-001',
      titulo: 'Sequência Didática — Produção de Texto: Carta do Leitor',
      descricao: 'Proposta completa de produção textual do gênero carta do leitor, com etapas de planejamento, escrita e reescrita.',
      url: 'https://exemplo.gov.br/carta-do-leitor.pdf',
      aba: 'atividades',
      anos: ['4º ano', '5º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'lp-at-002',
      titulo: 'Atividade — Análise Linguística: Coesão e Coerência',
      descricao: 'Sequência de atividades para identificação e uso de recursos coesivos em textos jornalísticos e narrativos.',
      url: 'https://exemplo.gov.br/coesao-coerencia.pdf',
      aba: 'atividades',
      anos: ['7º ano', '8º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'lp-at-003',
      titulo: 'Roteiro de Leitura — Texto Literário: Conto',
      descricao: 'Guia de leitura mediada de contos da literatura brasileira com questões de compreensão, interpretação e apreciação estética.',
      url: 'https://exemplo.gov.br/leitura-conto.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'lp-re-001',
      titulo: 'Domínio Público — Biblioteca Digital Brasileira',
      descricao: 'Portal com acervo gratuito de obras literárias, científicas e artísticas em domínio público para uso em sala de aula.',
      url: 'http://www.dominiopublico.gov.br',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'lp-re-002',
      titulo: 'Vídeo: Se Liga — TV Escola (Leitura e Escrita)',
      descricao: 'Série da TV Escola com programas sobre práticas de leitura, escrita e oralidade para os anos iniciais do EF.',
      url: 'https://tvescola.org.br',
      aba: 'reds',
      anos: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'lp-re-003',
      titulo: 'Escola de Escritores — Oficinas de Escrita Criativa',
      descricao: 'Plataforma com recursos e oficinas digitais de escrita criativa para estudantes do EF, com propostas por gêneros textuais.',
      url: 'https://www.escoladeescritores.org.br',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'site',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'lp-re-004',
      titulo: 'Wordwall — Atividades de Ortografia e Gramática',
      descricao: 'Ferramenta para criar e compartilhar atividades interativas de ortografia, gramática e vocabulário em português.',
      url: 'https://wordwall.net',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'atividade-interativa',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'lp-re-005',
      titulo: 'Podcast: Língua da Gente — Rádio MEC',
      descricao: 'Podcast da Rádio MEC com episódios sobre curiosidades, normas e usos da língua portuguesa de forma leve e acessível.',
      url: 'https://radiomec.com.br/linguadagente',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'podcast',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'lp-re-006',
      titulo: 'Storybird — Criação de Histórias Ilustradas',
      descricao: 'Plataforma para criação de livros digitais ilustrados, ideal para projetos de produção textual e letramento literário.',
      url: 'https://storybird.com',
      aba: 'reds',
      anos: ['3º ano', '4º ano', '5º ano', '6º ano'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'lp-ma-001',
      titulo: 'Caderno do Professor — Língua Portuguesa EF1 e EF2',
      descricao: 'Material de apoio com orientações curriculares, sequências didáticas e sugestões de avaliação para o professor de Português.',
      url: 'https://exemplo.gov.br/caderno-portugues.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'lp-ma-002',
      titulo: 'Planilha de Acompanhamento — Fluência Leitora',
      descricao: 'Modelo editável para registro e monitoramento da fluência leitora dos alunos ao longo do ano, com indicadores por bimestre.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['1º ano', '2º ano', '3º ano'],
      tipo_recurso: 'planilha',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'lp-ma-003',
      titulo: 'Infográfico — Gêneros Textuais por Campo de Atuação (BNCC)',
      descricao: 'Infográfico visual com os principais gêneros textuais organizados por campo de atuação conforme a BNCC de Língua Portuguesa.',
      url: 'https://exemplo.gov.br/generos-textuais-bncc',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'lp-ma-004',
      titulo: 'Apresentação — Metodologia de Produção Textual em Etapas',
      descricao: 'Slides para formação docente sobre a metodologia de ensino da escrita por etapas: planejamento, produção, revisão e reescrita.',
      url: 'https://docs.google.com/presentation/exemplo',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'apresentacao',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'lp-ac-001',
      titulo: 'Língua Portuguesa em Libras — Videoaulas EF',
      descricao: 'Videoaulas de Língua Portuguesa com interpretação em Libras, cobrindo leitura, produção de texto e análise linguística.',
      url: 'https://exemplo.gov.br/portugues-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'lp-ac-002',
      titulo: 'Leitura Acessível — Audiolivros da Biblioteca Nacional',
      descricao: 'Acervo de audiolivros da Biblioteca Nacional Digital para estudantes com deficiência visual ou baixa visão.',
      url: 'https://bndigital.bn.gov.br',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'outros',
      tipo_uso: 'complementar',
      acessibilidade: ['baixa-visao', 'audiodescrição']
    },
    {
      id: 'lp-ac-003',
      titulo: 'Português para TEA — Comunicação Alternativa e Aumentativa',
      descricao: 'Material com estratégias de comunicação alternativa e aumentativa para o ensino de leitura e escrita a estudantes com TEA.',
      url: 'https://exemplo.gov.br/portugues-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH', 'deficiencia-intelectual']
    },
    {
      id: 'lp-ac-004',
      titulo: 'Olimpíada de Língua Portuguesa — Escrevendo o Futuro',
      descricao: 'Portal da OLPEF com materiais de enriquecimento, cadernos do professor e produções premiadas para alunos com altas habilidades.',
      url: 'https://www.escrevendoofuturo.org.br',
      aba: 'acessibilidade',
      anos: ['Anos Finais'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: ['altas-habilidades']
    },
  
    

    {
    id: 'lp-ma-005',
    titulo: "Escrevendo o Futuro — Olimpíada de LP",
    descricao: "Portal com cadernos do professor e materiais de apoio para produção textual.",
    url: 'https://www.escrevendoofuturo.org.br',
    aba: 'materiais',
    anos: ['Todos'],
    tipo_recurso: 'site',
    tipo_uso: 'teorico',
    acessibilidade: []
  },

    {
    id: 'lp-ma-006',
    titulo: "Escrevendo o Futuro — Olimpíada de LP",
    descricao: "Portal com cadernos do professor e materiais de apoio para produção textual.",
    url: 'https://www.escrevendoofuturo.org.br',
    aba: 'materiais',
    anos: ['Todos'],
    tipo_recurso: 'site',
    tipo_uso: 'teorico',
    acessibilidade: []
  },

  /* Adicione novos links aqui ↓ */
  
  ];