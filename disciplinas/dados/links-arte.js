/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-arte.js
 * Links externos da disciplina de Arte
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: ar-at (atividades) | ar-re (reds)
 *                            ar-ma (materiais)  | ar-ac (acessibilidade)
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

window.LINKS_ARTE = [

    /* ── Atividades ── */
    {
      id: 'ar-at-001',
      titulo: 'Atividades de Releitura de Obras — Educação Infantil e EF1',
      descricao: 'Sequência de atividades práticas para releitura de obras de arte famosas adaptadas para os anos iniciais.',
      url: 'https://exemplo.gov.br/releitura-obras.pdf',
      aba: 'atividades',
      anos: ['1º ano', '2º ano', '3º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ar-at-002',
      titulo: 'Plano de Aula — Teatro e Expressão Corporal',
      descricao: 'Roteiro completo de aula para exploração do teatro e da expressão corporal no Ensino Fundamental II.',
      url: 'https://exemplo.gov.br/teatro-expressao.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ar-re-001',
      titulo: 'Google Arts & Culture',
      descricao: 'Plataforma com milhares de obras de arte em alta resolução, visitas virtuais a museus e recursos educativos.',
      url: 'https://artsandculture.google.com',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'site',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'ar-re-002',
      titulo: 'Vídeo: História da Arte para Crianças — Nerdologia Kids',
      descricao: 'Série de vídeos curtos e animados que introduzem movimentos artísticos de forma lúdica para os anos iniciais.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['3º ano', '4º ano', '5º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ar-re-003',
      titulo: 'Incredibox — Criação Musical Interativa',
      descricao: 'Aplicativo web para criação de músicas por meio de composição visual e interativa, ideal para explorar linguagem musical.',
      url: 'https://www.incredibox.com',
      aba: 'reds',
      anos: ['4º ano', '5º ano', '6º ano', '7º ano'],
      tipo_recurso: 'aplicativo',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ar-ma-001',
      titulo: 'Caderno do Professor — Arte EF1 e EF2',
      descricao: 'Material de apoio pedagógico com orientações, sequências didáticas e referências para o professor de Arte.',
      url: 'https://exemplo.gov.br/caderno-arte.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ar-ma-002',
      titulo: 'Apresentação — Movimentos Artísticos Brasileiros',
      descricao: 'Slides prontos para uso em sala apresentando os principais movimentos da arte brasileira do século XX.',
      url: 'https://docs.google.com/presentation/exemplo',
      aba: 'materiais',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'apresentacao',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ar-ac-001',
      titulo: 'Arte em Libras — Videoteca do MEC',
      descricao: 'Coleção de videoaulas de Arte com interpretação em Libras, abrangendo artes visuais, música, dança e teatro.',
      url: 'https://exemplo.gov.br/arte-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'ar-ac-002',
      titulo: 'Apreciação de Arte para Estudantes com Baixa Visão',
      descricao: 'Guia com estratégias e recursos para mediar a apreciação artística com estudantes com baixa visão ou deficiência visual.',
      url: 'https://exemplo.gov.br/arte-baixa-visao.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'complementar',
      acessibilidade: ['baixa-visao', 'audiodescrição']
    },
    {
      id: 'ar-ac-003',
      titulo: 'Arte e TEA — Estratégias de Inclusão',
      descricao: 'Material com abordagens e atividades artísticas adaptadas para estudantes com Transtorno do Espectro Autista.',
      url: 'https://exemplo.gov.br/arte-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    },
  
     

    {
    id: 'ar-re-004',
    titulo: "Tate Kids — Jogos e Atividades de Arte",
    descricao: "Plataforma do museu Tate com jogos e atividades de arte para crianças e adolescentes.",
    url: 'https://www.tate.org.uk/kids',
    aba: 'reds',
    anos: ['Anos Iniciais', 'Anos Finais'],
    tipo_recurso: 'jogo',
    tipo_uso: 'pratico',
    acessibilidade: []
  },

    {
    id: 'ar-re-005',
    titulo: "Tate Kids — Jogos e Atividades de Arte",
    descricao: "Plataforma do museu Tate com jogos e atividades de arte para crianças e adolescentes.",
    url: 'https://www.tate.org.uk/kids',
    aba: 'reds',
    anos: ['Anos Iniciais', 'Anos Finais'],
    tipo_recurso: 'jogo',
    tipo_uso: 'pratico',
    acessibilidade: []
  },

  /* Adicione novos links aqui ↓ */
  
  ];