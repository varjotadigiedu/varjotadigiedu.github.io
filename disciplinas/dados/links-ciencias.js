/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-ciencias.js
 * Links externos da disciplina de Ciências
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único  ex: 'ci-at-001'
 *                  prefixos: ci-at (atividades) | ci-re (reds)
 *                            ci-ma (materiais)  | ci-ac (acessibilidade)
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

window.LINKS_CIENCIAS = [

    /* ── Atividades ── */
    {
      id: 'ci-at-001',
      titulo: 'Atividades sobre Ecossistemas — Khan Academy',
      descricao: 'Exercícios interativos sobre cadeias alimentares, relações ecológicas e fluxo de energia nos ecossistemas.',
      url: 'https://pt.khanacademy.org/science/biology/ecology',
      aba: 'atividades',
      anos: ['6º ano'],
      tipo_recurso: 'site',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ci-at-002',
      titulo: 'Roteiro de Experimento — Fotossíntese',
      descricao: 'PDF com roteiro completo para experimento prático de fotossíntese em sala de aula com materiais acessíveis.',
      url: 'https://exemplo.gov.br/fotossintese-experimento.pdf',
      aba: 'atividades',
      anos: ['7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ci-re-001',
      titulo: 'Sistema Solar Interativo — NASA',
      descricao: 'Simulador interativo do sistema solar com informações detalhadas sobre cada planeta e seus movimentos.',
      url: 'https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/',
      aba: 'reds',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'site',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ci-re-002',
      titulo: 'Vídeo: O Corpo Humano — Mundo Bita',
      descricao: 'Vídeo educativo sobre os sistemas do corpo humano para os anos iniciais, com linguagem acessível e animações.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['4º ano', '5º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ci-ma-001',
      titulo: 'Caderno do Professor — Ciências EF2',
      descricao: 'Material de apoio pedagógico com sequências didáticas e orientações para o professor do 6º ao 9º ano.',
      url: 'https://exemplo.gov.br/caderno-ciencias-ef2.pdf',
      aba: 'materiais',
      anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ci-ma-002',
      titulo: 'Planilha de Acompanhamento de Experimentos',
      descricao: 'Modelo editável para registro e acompanhamento de experimentos científicos realizados em sala.',
      url: 'https://docs.google.com/spreadsheets/exemplo',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'planilha',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ci-ac-001',
      titulo: 'Ciências em Libras — Ensino Fundamental',
      descricao: 'Videoaulas de Ciências com interpretação em Libras, cobrindo os principais conteúdos do EF.',
      url: 'https://exemplo.gov.br/ciencias-libras',
      aba: 'acessibilidade',
      anos: ['Anos Finais'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'ci-ac-002',
      titulo: 'Guia de Ciências para Estudantes com TEA',
      descricao: 'Material adaptado com linguagem visual e estrutura simplificada para estudantes com Transtorno do Espectro Autista.',
      url: 'https://exemplo.gov.br/ciencias-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'complementar',
      acessibilidade: ['TEA', 'deficiencia-intelectual']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];