/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-historia.js
 * Links externos da disciplina de História
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: hi-at (atividades) | hi-re (reds)
 *                            hi-ma (materiais)  | hi-ac (acessibilidade)
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

window.LINKS_HISTORIA = [

    /* ── Atividades ── */
    {
      id: 'hi-at-001',
      titulo: 'Roteiro de Atividade — Linha do Tempo da História do Brasil',
      descricao: 'Sequência didática para construção coletiva de uma linha do tempo dos principais períodos da história brasileira.',
      url: 'https://exemplo.gov.br/linha-tempo-brasil.pdf',
      aba: 'atividades',
      anos: ['4º ano', '5º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'hi-at-002',
      titulo: 'Atividade — Análise de Fontes Históricas Primárias',
      descricao: 'Proposta de análise crítica de documentos, fotografias e objetos históricos para desenvolver o pensamento historiador.',
      url: 'https://exemplo.gov.br/fontes-historicas.pdf',
      aba: 'atividades',
      anos: ['7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'hi-re-001',
      titulo: 'Museu do Amanhã — Visita Virtual',
      descricao: 'Tour virtual pelo Museu do Amanhã no Rio de Janeiro, com exposições sobre o passado, presente e futuro da humanidade.',
      url: 'https://museudoamanha.org.br',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'hi-re-002',
      titulo: 'Vídeo: Período Colonial Brasileiro — Nerdologia',
      descricao: 'Série de vídeos do canal Nerdologia sobre o Brasil colonial, com linguagem acessível e referências culturais para os anos finais.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['7º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'hi-re-003',
      titulo: 'TimelineJS — Criador de Linhas do Tempo Digitais',
      descricao: 'Ferramenta gratuita para criar linhas do tempo interativas com texto, imagens e vídeos, ideal para projetos de História.',
      url: 'https://timeline.knightlab.com',
      aba: 'reds',
      anos: ['Anos Finais'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'hi-re-004',
      titulo: 'Jogo: Mission US — Imersão na História Americana',
      descricao: 'Jogo educativo de aventura que coloca o aluno como personagem em períodos históricos marcantes, com versão traduzida disponível.',
      url: 'https://www.mission-us.org',
      aba: 'reds',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'jogo',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'hi-ma-001',
      titulo: 'Caderno do Professor — História EF1 e EF2',
      descricao: 'Material de apoio pedagógico com orientações curriculares, sequências didáticas e sugestões de fontes históricas para o professor.',
      url: 'https://exemplo.gov.br/caderno-historia.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'hi-ma-002',
      titulo: 'Infográfico — Períodos da História do Brasil',
      descricao: 'Infográfico visual com os principais períodos da história brasileira, datas e eventos marcantes, do pré-colonial à República.',
      url: 'https://exemplo.gov.br/periodos-historia-brasil',
      aba: 'materiais',
      anos: ['5º ano', '6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'hi-ma-003',
      titulo: 'Podcast: Historiocast — História para Professores',
      descricao: 'Podcast voltado para professores de História com episódios sobre metodologias de ensino, historiografia e BNCC.',
      url: 'https://exemplo.com/historiocast',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'podcast',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'hi-ac-001',
      titulo: 'História em Libras — Ensino Fundamental',
      descricao: 'Videoaulas de História com interpretação em Libras, cobrindo os principais períodos e eventos da história do Brasil e do mundo.',
      url: 'https://exemplo.gov.br/historia-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'hi-ac-002',
      titulo: 'História Adaptada para TEA — Narrativas Visuais',
      descricao: 'Material com narrativas históricas adaptadas em linguagem visual e simplificada para estudantes com TEA e deficiência intelectual.',
      url: 'https://exemplo.gov.br/historia-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'deficiencia-intelectual']
    },
    {
      id: 'hi-ac-003',
      titulo: 'Audiolivro — História do Brasil para Estudantes com Baixa Visão',
      descricao: 'Versão em áudio dos principais conteúdos de História do Brasil, com audiodescrição de mapas e imagens históricas.',
      url: 'https://exemplo.gov.br/historia-audiolivro',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'outros',
      tipo_uso: 'complementar',
      acessibilidade: ['baixa-visao', 'audiodescrição']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];