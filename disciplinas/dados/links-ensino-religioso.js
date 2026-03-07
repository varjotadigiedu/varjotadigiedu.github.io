/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-ensino-religioso.js
 * Links externos da disciplina de Ensino Religioso
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: er-at (atividades) | er-re (reds)
 *                            er-ma (materiais)  | er-ac (acessibilidade)
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

window.LINKS_ENSINO_RELIGIOSO = [

    /* ── Atividades ── */
    {
      id: 'er-at-001',
      titulo: 'Sequência Didática — Diversidade Religiosa no Brasil',
      descricao: 'Proposta de atividade para explorar de forma respeitosa e reflexiva as diferentes tradições religiosas presentes no Brasil.',
      url: 'https://exemplo.gov.br/diversidade-religiosa.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'er-at-002',
      titulo: 'Roteiro de Pesquisa — Símbolos e Rituais das Tradições Religiosas',
      descricao: 'Guia de pesquisa para os alunos investigarem símbolos, rituais e celebrações de diferentes tradições religiosas mundiais.',
      url: 'https://exemplo.gov.br/simbolos-rituais.pdf',
      aba: 'atividades',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'er-re-001',
      titulo: 'Vídeo: As Grandes Religiões do Mundo — Kurzgesagt',
      descricao: 'Animação informativa e imparcial que apresenta as origens e princípios das principais religiões mundiais.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'er-re-002',
      titulo: 'Mapa Interativo das Religiões no Mundo',
      descricao: 'Mapa interativo que mostra a distribuição geográfica das principais religiões e tradições espirituais ao redor do mundo.',
      url: 'https://exemplo.com/mapa-religioes',
      aba: 'reds',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'mapa',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
    {
      id: 'er-re-003',
      titulo: 'Podcast: Filosofia das Religiões — Café Filosófico',
      descricao: 'Episódios do Café Filosófico abordando a relação entre fé, razão e espiritualidade de forma acessível e plural.',
      url: 'https://exemplo.com/cafe-filosofico-religiao',
      aba: 'reds',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'podcast',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'er-ma-001',
      titulo: 'Caderno do Professor — Ensino Religioso EF',
      descricao: 'Material de apoio pedagógico com fundamentos do componente curricular, orientações didáticas e sequências de ensino.',
      url: 'https://exemplo.gov.br/caderno-er.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'er-ma-002',
      titulo: 'Apresentação — Espiritualidade e Cultura no Brasil',
      descricao: 'Slides introdutórios sobre a relação entre espiritualidade, cultura e identidade na formação do povo brasileiro.',
      url: 'https://docs.google.com/presentation/exemplo',
      aba: 'materiais',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'apresentacao',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'er-ac-001',
      titulo: 'Ensino Religioso em Libras',
      descricao: 'Videoaulas do componente curricular de Ensino Religioso com interpretação em Libras, cobrindo diversidade e tolerância religiosa.',
      url: 'https://exemplo.gov.br/er-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'er-ac-002',
      titulo: 'Guia de Inclusão para Estudantes com TEA no Ensino Religioso',
      descricao: 'Material com estratégias para adaptar as aulas de Ensino Religioso para estudantes com TEA, respeitando a diversidade e promovendo o diálogo.',
      url: 'https://exemplo.gov.br/er-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];