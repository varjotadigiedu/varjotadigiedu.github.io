/**
 * =============================================================================
 * Varjota DigiEdu — disciplinas/dados/links-geografia.js
 * Links externos da disciplina de Geografia
 * =============================================================================
 *
 * CAMPOS DE CADA ITEM:
 *   id           → identificador único
 *                  prefixos: ge-at (atividades) | ge-re (reds)
 *                            ge-ma (materiais)  | ge-ac (acessibilidade)
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

window.LINKS_GEOGRAFIA = [

    /* ── Atividades ── */
    {
      id: 'ge-at-001',
      titulo: 'Roteiro de Atividade — Leitura de Mapas e Coordenadas',
      descricao: 'Sequência didática para introdução à cartografia, leitura de mapas e uso de coordenadas geográficas nos anos finais.',
      url: 'https://exemplo.gov.br/leitura-mapas.pdf',
      aba: 'atividades',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ge-at-002',
      titulo: 'Atividade — Análise de Paisagens Urbanas e Rurais',
      descricao: 'Proposta de análise comparativa de fotografias de paisagens urbanas e rurais para desenvolver o olhar geográfico.',
      url: 'https://exemplo.gov.br/paisagens-urbanas-rurais.pdf',
      aba: 'atividades',
      anos: ['4º ano', '5º ano', '6º ano'],
      tipo_recurso: 'pdf',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
  
    /* ── REDs ── */
    {
      id: 'ge-re-001',
      titulo: 'Google Earth — Exploração Geográfica Interativa',
      descricao: 'Ferramenta de visualização do planeta em 3D para exploração de relevo, biomas, países e cidades diretamente no navegador.',
      url: 'https://earth.google.com/web/',
      aba: 'reds',
      anos: ['Todos'],
      tipo_recurso: 'simulador',
      tipo_uso: 'pratico',
      acessibilidade: []
    },
    {
      id: 'ge-re-002',
      titulo: 'Mapa do IBGE — Brasil Interativo',
      descricao: 'Portal do IBGE com mapas interativos do Brasil por município, estado e região, com dados populacionais e territoriais.',
      url: 'https://mapas.ibge.gov.br',
      aba: 'reds',
      anos: ['5º ano', '6º ano', '7º ano', '8º ano', '9º ano'],
      tipo_recurso: 'mapa',
      tipo_uso: 'pesquisa',
      acessibilidade: []
    },
    {
      id: 'ge-re-003',
      titulo: 'Vídeo: Biomas Brasileiros — Canal Futura',
      descricao: 'Série de vídeos sobre os principais biomas do Brasil: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal.',
      url: 'https://www.youtube.com/watch?v=exemplo',
      aba: 'reds',
      anos: ['6º ano', '7º ano'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ge-re-004',
      titulo: 'GeoGebra — Simulador de Projeções Cartográficas',
      descricao: 'Simulador interativo para visualizar e comparar diferentes projeções cartográficas e suas distorções.',
      url: 'https://www.geogebra.org',
      aba: 'reds',
      anos: ['8º ano', '9º ano'],
      tipo_recurso: 'simulador',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Materiais de Apoio ── */
    {
      id: 'ge-ma-001',
      titulo: 'Caderno do Professor — Geografia EF1 e EF2',
      descricao: 'Material de apoio com orientações curriculares, sequências didáticas e sugestões de avaliação para o professor de Geografia.',
      url: 'https://exemplo.gov.br/caderno-geografia.pdf',
      aba: 'materiais',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'teorico',
      acessibilidade: []
    },
    {
      id: 'ge-ma-002',
      titulo: 'Infográfico — Divisão Regional do Brasil',
      descricao: 'Infográfico didático com as divisões regionais do Brasil segundo o IBGE, com dados de área, população e características.',
      url: 'https://exemplo.gov.br/divisao-regional-brasil',
      aba: 'materiais',
      anos: ['4º ano', '5º ano', '6º ano'],
      tipo_recurso: 'infografico',
      tipo_uso: 'complementar',
      acessibilidade: []
    },
  
    /* ── Acessibilidade ── */
    {
      id: 'ge-ac-001',
      titulo: 'Geografia em Libras — Ensino Fundamental',
      descricao: 'Videoaulas de Geografia com interpretação em Libras, cobrindo os conteúdos de cartografia, biomas e geopolítica.',
      url: 'https://exemplo.gov.br/geografia-libras',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'video',
      tipo_uso: 'teorico',
      acessibilidade: ['libras']
    },
    {
      id: 'ge-ac-002',
      titulo: 'Atlas Geográfico Acessível — Versão com Audiodescrição',
      descricao: 'Versão do Atlas Escolar com audiodescrição dos mapas e imagens para estudantes com baixa visão ou deficiência visual.',
      url: 'https://exemplo.gov.br/atlas-acessivel.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'pdf',
      tipo_uso: 'complementar',
      acessibilidade: ['baixa-visao', 'audiodescrição']
    },
    {
      id: 'ge-ac-003',
      titulo: 'Geografia para TEA — Atividades Visuais e Estruturadas',
      descricao: 'Material com atividades geográficas adaptadas com suporte visual e estrutura simplificada para estudantes com TEA.',
      url: 'https://exemplo.gov.br/geografia-tea.pdf',
      aba: 'acessibilidade',
      anos: ['Todos'],
      tipo_recurso: 'atividade-interativa',
      tipo_uso: 'pratico',
      acessibilidade: ['TEA', 'TDAH']
    }
  
    /* Adicione novos links aqui ↓ */
  
  ];