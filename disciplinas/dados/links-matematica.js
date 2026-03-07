/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-matematica.js
 * Links externos da disciplina de Matemática
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: ma-at (atividades) | ma-re (reds)
 *                            ma-ma (materiais)  | ma-ac (acessibilidade)
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

window.LINKS_MATEMATICA = [

    /* ── Atividades ── */
    {
      id: 'ma-at-001',
      titulo: 'Roteiro de Atividade — Frações no Cotidiano',
      descricao: 'Sequência didática com situações-problema do cotidiano para introdução e consolidação do conceito de frações.',
      url: 'https://exemplo.gov.br/fracoes-cotidiano.pdf',
      aba: 'atividades',
      anos: ['4º ano', '5º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ma-at-002',
      titulo: 'Atividade — Geometria com Materiais Concretos',
      descricao: 'Proposta de atividade manipulativa com materiais concretos para exploração de figuras geométricas planas e espaciais.',
      url: 'https://exemplo.gov.br/geometria-concreto.pdf',
      aba: 'atividades',
      anos: ['2º ano', '3º ano', '4º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ma-at-003',
      titulo: 'Situações-Problema — Álgebra e Equações',
      descricao: 'Coletânea de situações-problema graduadas para introdução ao pensamento algébrico e resolução de equações do 1º grau.',
      url: 'https://exemplo.gov.br/algebra-equacoes.pdf',
      aba: 'atividades',
      anos: ['7º ano', '8º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ma-re-001',
      titulo: 'GeoGebra — Matemática Interativa',
      descricao: 'Plataforma gratuita com simuladores, gráficos dinâmicos e atividades interativas para geometria, álgebra, cálculo e estatística.',
      url: 'https://www.geogebra.org',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'simulador',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ma-re-002',
      titulo: 'Khan Academy — Matemática EF',
      descricao: 'Plataforma adaptativa com videoaulas, exercícios e trilhas de aprendizagem cobrindo toda a matemática do Ensino Fundamental.',
      url: 'https://pt.khanacademy.org/math',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'ma-re-003',
      titulo: 'Vídeo: Matemática Rio — Canal YouTube',
      descricao: 'Canal com videoaulas didáticas de matemática do EF ao EM, com linguagem clara e exercícios resolvidos passo a passo.',
      url: 'https://www.youtube.com/@matematicario',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ma-re-004',
      titulo: 'Prodigy Math — Jogo de Matemática Adaptativo',
      descricao: 'Jogo de RPG educativo em que os alunos resolvem problemas de matemática para avançar na aventura, com painel para o professor.',
      url: 'https://www.prodigygame.com',
      aba: 'reds',
      anos: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'jogo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ma-re-005',
      titulo: 'Desmos — Calculadora Gráfica Online',
      descricao: 'Calculadora gráfica gratuita e interativa, ideal para exploração de funções, gráficos e conceitos algébricos nos anos finais.',
      url: 'https://www.desmos.com/calculator',
      aba: 'reds',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'simulador',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ma-re-006',
      titulo: 'Smartick — Treino de Cálculo Mental',
      descricao: 'Aplicativo de treino diário de matemática com foco em cálculo mental, raciocínio lógico e resolução de problemas.',
      url: 'https://www.smartick.com.br',
      aba: 'reds',
      anos: ['1º ano', '2º ano', '3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ma-ma-001',
      titulo: 'Caderno do Professor — Matemática EF1 e EF2',
      descricao: 'Material de apoio com orientações curriculares, sequências didáticas e sugestões de avaliação para o professor de Matemática.',
      url: 'https://exemplo.gov.br/caderno-matematica.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ma-ma-002',
      titulo: 'Planilha de Acompanhamento — Diagnóstico de Aprendizagem',
      descricao: 'Modelo editável para registro e análise do desempenho individual e coletivo nas avaliações diagnósticas de Matemática.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'planilha',
      tipo_uso: 'avaliativo',
      acessibilidade: []
    },
    {
      id: 'ma-ma-003',
      titulo: 'Infográfico — Habilidades Matemáticas por Ano (BNCC)',
      descricao: 'Infográfico visual com as principais habilidades de Matemática organizadas por ano escolar conforme a BNCC.',
      url: 'https://exemplo.gov.br/habilidades-matematica-bncc',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ma-ac-001',
      titulo: 'Matemática em Libras — Ensino Fundamental',
      descricao: 'Videoaulas de Matemática com interpretação em Libras, cobrindo números, operações, geometria e grandezas.',
      url: 'https://exemplo.gov.br/matematica-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'ma-ac-002',
      titulo: 'Matemática Adaptada para TEA e TDAH',
      descricao: 'Guia com estratégias e atividades matemáticas adaptadas com suporte visual e estrutura simplificada para estudantes com TEA e TDAH.',
      url: 'https://exemplo.gov.br/matematica-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    },
    {
      id: 'ma-ac-003',
      titulo: 'Soroban Digital — Cálculo para Deficiência Visual',
      descricao: 'Simulador digital do soroban (ábaco japonês) utilizado no ensino de matemática para estudantes com deficiência visual.',
      url: 'https://exemplo.gov.br/soroban-digital',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'simulador',
      tipo_uso: 'pratico',
      acessibilidade: ['baixa-visao', 'audiodescrição']
    },
    {
      id: 'ma-ac-004',
      titulo: 'Matemática para Altas Habilidades — Olimpíadas e Desafios',
      descricao: 'Portal com problemas desafiadores, olimpíadas matemáticas e materiais de enriquecimento para estudantes com altas habilidades.',
      url: 'https://www.obmep.org.br',
      aba: 'acessibilidade',
      anos: ['Anos Finais'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: ['altas-habilidades']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];