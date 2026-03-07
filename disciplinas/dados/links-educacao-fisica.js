/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-educacao-fisica.js
 * Links externos da disciplina de Educação Física
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: ef-at (atividades) | ef-re (reds)
 *                            ef-ma (materiais)  | ef-ac (acessibilidade)
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

window.LINKS_EDUCACAO_FISICA = [

    /* ── Atividades ── */
    {
      id: 'ef-at-001',
      titulo: 'Sequência Didática — Jogos Cooperativos',
      descricao: 'Plano de aula completo com jogos cooperativos para desenvolver trabalho em equipe e socialização nos anos iniciais.',
      url: 'https://exemplo.gov.br/jogos-cooperativos.pdf',
      aba: 'atividades',
      anos: ['3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ef-at-002',
      titulo: 'Roteiro de Atividade — Atletismo na Escola',
      descricao: 'Proposta pedagógica para introdução das modalidades de atletismo adaptadas ao contexto escolar do EF2.',
      url: 'https://exemplo.gov.br/atletismo-escola.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano', '8º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ef-re-001',
      titulo: 'Vídeo: História dos Jogos Olímpicos — Canal do Esporte',
      descricao: 'Documentário curto sobre a origem e a evolução dos Jogos Olímpicos, ideal para contextualizar o esporte na escola.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['5º ano', '6º ano', '7º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ef-re-002',
      titulo: 'Aplicativo Strava — Monitoramento de Atividade Física',
      descricao: 'App gratuito para registro e monitoramento de atividades físicas, útil para projetos de saúde e bem-estar.',
      url: 'https://www.strava.com',
      aba: 'reds',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ef-re-003',
      titulo: 'Infográfico — Benefícios da Atividade Física',
      descricao: 'Infográfico interativo do Ministério da Saúde sobre os benefícios físicos e mentais da prática regular de exercícios.',
      url: 'https://exemplo.gov.br/beneficios-atividade-fisica',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ef-ma-001',
      titulo: 'Caderno do Professor — Educação Física EF1 e EF2',
      descricao: 'Material pedagógico com orientações curriculares, sequências didáticas e sugestões de avaliação para o professor.',
      url: 'https://exemplo.gov.br/caderno-ef.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ef-ma-002',
      titulo: 'Planilha de Avaliação — Desempenho Motor',
      descricao: 'Modelo editável para registro e acompanhamento do desenvolvimento motor dos alunos ao longo do ano.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'planilha',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ef-ac-001',
      titulo: 'Educação Física Adaptada em Libras',
      descricao: 'Videoaulas de Educação Física com interpretação em Libras, abordando conceitos de esporte, saúde e movimento.',
      url: 'https://exemplo.gov.br/ef-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'ef-ac-002',
      titulo: 'Guia de Educação Física para Estudantes com Deficiência Física',
      descricao: 'Manual com adaptações de atividades e jogos para inclusão de estudantes com deficiência física nas aulas.',
      url: 'https://exemplo.gov.br/ef-deficiencia-fisica.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['deficiencia-fisica']
    },
    {
      id: 'ef-ac-003',
      titulo: 'Esporte e TEA — Estratégias para Inclusão nas Aulas',
      descricao: 'Guia prático com estratégias para adaptar as aulas de Educação Física para alunos com TEA e TDAH.',
      url: 'https://exemplo.gov.br/ef-tea-tdah.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];