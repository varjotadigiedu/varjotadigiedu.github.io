/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-lingua-inglesa.js
 * Links externos da disciplina de Língua Inglesa
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: li-at (atividades) | li-re (reds)
 *                            li-ma (materiais)  | li-ac (acessibilidade)
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

window.LINKS_LINGUA_INGLESA = [

    /* ── Atividades ── */
    {
      id: 'li-at-001',
      titulo: 'Roteiro de Atividade — Daily Routines (Rotinas Diárias)',
      descricao: 'Sequência didática para introdução ao vocabulário de rotinas diárias em inglês, com atividades de leitura e produção oral.',
      url: 'https://exemplo.gov.br/daily-routines.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'li-at-002',
      titulo: 'Atividade — Reading Comprehension: Short Texts',
      descricao: 'Coletânea de textos curtos em inglês com questões de compreensão leitora adaptadas para os anos finais do EF.',
      url: 'https://exemplo.gov.br/reading-comprehension.pdf',
      aba: 'atividades',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'li-re-001',
      titulo: 'Duolingo for Schools',
      descricao: 'Plataforma gamificada de aprendizagem de inglês com painel para o professor acompanhar o progresso dos alunos.',
      url: 'https://schools.duolingo.com',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'li-re-002',
      titulo: 'British Council — LearnEnglish Kids',
      descricao: 'Portal do British Council com jogos, vídeos, histórias e músicas em inglês para crianças e adolescentes.',
      url: 'https://learnenglishkids.britishcouncil.org',
      aba: 'reds',
      anos: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'li-re-003',
      titulo: 'Kahoot! — Quiz de Vocabulário em Inglês',
      descricao: 'Plataforma de quizzes gamificados para revisão de vocabulário e gramática, com templates prontos para língua inglesa.',
      url: 'https://kahoot.com',
      aba: 'reds',
      anos: ['Anos Finais'],
      tipo_recurso: 'jogo',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'li-re-004',
      titulo: 'Vídeo: English with Songs — Super Simple Songs',
      descricao: 'Canal do YouTube com músicas educativas em inglês para os anos iniciais, com vocabulário e estruturas básicas.',
      url: 'https://www.youtube.com/user/supersimplesongs',
      aba: 'reds',
      anos: ['1º ano', '2º ano', '3º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'li-re-005',
      titulo: 'Wordwall — Atividades Interativas de Inglês',
      descricao: 'Ferramenta para criar e compartilhar atividades interativas de vocabulário, gramática e leitura em inglês.',
      url: 'https://wordwall.net',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'atividade-interativa',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'li-ma-001',
      titulo: 'Caderno do Professor — Língua Inglesa EF2',
      descricao: 'Material de apoio pedagógico com orientações curriculares, sequências didáticas e sugestões de avaliação para o professor.',
      url: 'https://exemplo.gov.br/caderno-ingles.pdf',
      aba: 'materiais',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'li-ma-002',
      titulo: 'Planilha de Acompanhamento — Vocabulário por Unidade',
      descricao: 'Modelo editável para registro e acompanhamento do vocabulário aprendido por turma e unidade ao longo do ano.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'planilha',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'li-ma-003',
      titulo: 'Podcast: EnglishClass101 — Para Professores',
      descricao: 'Episódios em inglês com nível graduado de dificuldade, indicados para o professor se atualizar e selecionar conteúdo para aula.',
      url: 'https://www.englishclass101.com',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'podcast',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'li-ac-001',
      titulo: 'Língua Inglesa em Libras — Videoaulas Bilíngues',
      descricao: 'Videoaulas de inglês com interpretação simultânea em Libras, cobrindo vocabulário básico e estruturas gramaticais fundamentais.',
      url: 'https://exemplo.gov.br/ingles-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'li-ac-002',
      titulo: 'English for All — Estratégias para TEA e TDAH',
      descricao: 'Guia com adaptações metodológicas e recursos visuais para o ensino de inglês a estudantes com TEA e TDAH.',
      url: 'https://exemplo.gov.br/ingles-tea-tdah.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    },
    {
      id: 'li-ac-003',
      titulo: 'Materiais de Inglês em Fonte Ampliada e Alto Contraste',
      descricao: 'Coleção de atividades de inglês adaptadas em fonte ampliada e alto contraste para estudantes com baixa visão ou daltonismo.',
      url: 'https://exemplo.gov.br/ingles-acessivel.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['baixa-visao', 'daltonismo']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];