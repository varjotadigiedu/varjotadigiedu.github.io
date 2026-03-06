/**
 * =============================================================================
 * Varjota DigiEdu — dados/ideias-af.js
 * Ideias do Banco de Ideias — Anos Finais (6º ao 9º ano)
 * =============================================================================
 *
 * CAMPOS DE CADA IDEIA:
 *   id          → identificador único, prefixo 'af-' + número  ex: 'af-006'
 *   titulo      → título da ideia
 *   emoji       → emoji representativo
 *   segmento    → sempre 'af' neste arquivo
 *   disciplina  → slug da disciplina ou 'interdisciplinar'
 *                 slugs: arte | ciencias | educacao-fisica | ensino-religioso
 *                        geografia | historia | lingua-inglesa | lingua-portuguesa
 *                        matematica | interdisciplinar
 *   anos        → array de anos: ['6º ano'] | ['7º ano', '8º ano'] | ['6º ao 9º ano']
 *   tipo        → array com um ou mais: 'pratica' | 'digital' | 'debate'
 *                                       'pesquisa' | 'projeto' | 'jogo'
 *   descricao   → texto curto para o card (1-2 frases)
 *   objetivo    → objetivo pedagógico completo
 *   passos      → array de strings com as etapas da atividade
 *   materiais   → array de strings
 *   habilidades → array de { codigo, desc }
 *   duracao     → ex: '2 aulas' | '4 aulas' | '6 aulas + 3 semanas'
 *   agrupamento → 'individual' | 'duplas' | 'grupos' | 'turma'
 *
 * =============================================================================
 */

window.IDEIAS_AF = [

  {
    id: 'af-001',
    titulo: 'Podcast Científico',
    emoji: '🎙️',
    segmento: 'af',
    disciplina: 'ciencias',
    anos: ['7º ano', '8º ano'],
    tipo: ['projeto', 'digital'],
    descricao: 'Grupos pesquisam um tema científico atual e produzem um episódio de podcast para a escola, desenvolvendo argumentação e comunicação oral.',
    objetivo: 'Desenvolver pesquisa científica, argumentação e comunicação oral por meio da produção colaborativa de um podcast sobre tema de Ciências.',
    passos: [
      'Seleção colaborativa dos temas (saúde, meio ambiente, tecnologia etc.).',
      'Pesquisa em fontes confiáveis: artigos, sites científicos, vídeos.',
      'Roteiro do episódio: abertura, desenvolvimento, curiosidades, encerramento.',
      'Gravação com celular ou computador (app gratuito de gravação).',
      'Edição básica e publicação no Google Drive ou plataforma da escola.',
    ],
    materiais: ['Celular ou computador com microfone', 'App Audacity ou similar (gratuito)', 'Acesso à internet', 'Roteiro impresso'],
    habilidades: [
      { codigo: 'EF07CI07', desc: 'Analisar e explicar as transformações envolvendo ciclos biogeoquímicos.' },
      { codigo: 'EF08CI09', desc: 'Comparar mecanismos de defesa do organismo humano.' },
    ],
    duracao: '4 aulas',
    agrupamento: 'grupos',
  },

  {
    id: 'af-002',
    titulo: 'Debate Estruturado',
    emoji: '🗣️',
    segmento: 'af',
    disciplina: 'lingua-portuguesa',
    anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
    tipo: ['debate'],
    descricao: 'Alunos debatem uma questão controversa do cotidiano seguindo regras formais, desenvolvendo argumentação, escuta respeitosa e pensamento crítico.',
    objetivo: 'Desenvolver a capacidade argumentativa, a escuta ativa e o respeito à diversidade de opiniões por meio do debate regrado.',
    passos: [
      'Escolha do tema (ex: "Redes sociais fazem mais bem ou mal?").',
      'Divisão em dois grupos: favoráveis e contrários (sorteio).',
      'Pesquisa de argumentos: cada grupo tem 2 aulas para preparar.',
      'Debate formal com tempo controlado para abertura, réplica e tréplica.',
      'Votação secreta da turma sobre os argumentos mais convincentes.',
      'Reflexão final: o que aprendi sobre o outro lado da questão?',
    ],
    materiais: ['Timer', 'Caderno para anotações', 'Lousa', 'Acesso à internet para pesquisa'],
    habilidades: [
      { codigo: 'EF69LP13', desc: 'Engajar-se e contribuir com a busca de conclusões comuns aos debates.' },
      { codigo: 'EF69LP14', desc: 'Formular perguntas e réplicas durante o debate.' },
    ],
    duracao: '4 aulas',
    agrupamento: 'turma',
  },

  {
    id: 'af-003',
    titulo: 'Infográfico Geográfico',
    emoji: '📊',
    segmento: 'af',
    disciplina: 'geografia',
    anos: ['6º ano', '7º ano'],
    tipo: ['projeto', 'digital', 'pesquisa'],
    descricao: 'Alunos pesquisam dados sobre o município de Varjota e criam infográficos digitais comparando com dados estaduais e nacionais.',
    objetivo: 'Desenvolver o letramento cartográfico e estatístico por meio da criação de infográficos com dados reais sobre o município de Varjota.',
    passos: [
      'Pesquisa no IBGE e sites oficiais: população, área, IDH, economia de Varjota.',
      'Comparação com dados do Ceará e do Brasil.',
      'Seleção dos dados mais relevantes e definição do layout do infográfico.',
      'Criação no Canva, Google Slides ou à mão em papel A3.',
      'Apresentação e exposição dos infográficos na escola.',
    ],
    materiais: ['Computadores ou tablets', 'Acesso ao site do IBGE', 'Canva ou Google Slides (gratuito)', 'Papel A3 (opcional)'],
    habilidades: [
      { codigo: 'EF06GE09', desc: 'Elaborar hipóteses sobre o papel das tecnologias na organização do espaço.' },
      { codigo: 'EF07GE01', desc: 'Avaliar, por meio de exemplos, a importância do trabalho na produção da cultura.' },
    ],
    duracao: '3 aulas',
    agrupamento: 'duplas',
  },

  {
    id: 'af-004',
    titulo: 'Linha do Tempo Digital',
    emoji: '⏳',
    segmento: 'af',
    disciplina: 'historia',
    anos: ['6º ano', '7º ano', '8º ano', '9º ano'],
    tipo: ['digital', 'projeto'],
    descricao: 'Grupos criam linhas do tempo interativas de períodos históricos usando ferramentas digitais gratuitas, relacionando fatos locais e globais.',
    objetivo: 'Desenvolver noções de temporalidade, causalidade e relação entre eventos históricos locais e globais por meio da criação de linhas do tempo digitais.',
    passos: [
      'Seleção do período histórico e dos eventos a serem representados.',
      'Pesquisa em fontes variadas (livro, internet, museu virtual).',
      'Criação da linha do tempo no TimelineJS, Canva ou Google Slides.',
      'Inclusão de imagens, mapas e fontes primárias quando possível.',
      'Apresentação para a turma e debate sobre conexões entre os eventos.',
    ],
    materiais: ['Computadores ou tablets', 'Acesso ao TimelineJS ou Canva', 'Acesso à internet', 'Livros didáticos'],
    habilidades: [
      { codigo: 'EF06HI01', desc: 'Identificar diferentes formas de compreensão da noção de tempo e espaço.' },
      { codigo: 'EF09HI03', desc: 'Identificar continuidades e rupturas nos processos históricos.' },
    ],
    duracao: '4 aulas',
    agrupamento: 'grupos',
  },

  {
    id: 'af-005',
    titulo: 'Simulação de Ecossistema',
    emoji: '🌿',
    segmento: 'af',
    disciplina: 'ciencias',
    anos: ['6º ano'],
    tipo: ['pratica', 'projeto'],
    descricao: 'Alunos constroem um terrário e monitoram as interações dos seres vivos ao longo de semanas, registrando observações em diário científico.',
    objetivo: 'Compreender as relações entre seres vivos e seu ambiente por meio da construção e observação sistemática de um ecossistema em miniatura.',
    passos: [
      'Aula teórica sobre ecossistemas, cadeias alimentares e fluxo de energia.',
      'Planejamento coletivo do terrário: quais seres, qual solo, qual umidade.',
      'Construção do terrário em grupos com garrafas PET ou potes de vidro.',
      'Observação semanal com registro em diário científico.',
      'Análise final: o que funcionou, o que mudou, o que aprendemos.',
    ],
    materiais: ['Garrafas PET grandes ou potes de vidro', 'Terra, areia e pedras', 'Plantas pequenas', 'Minhocas ou insetos (opcional)', 'Caderno de registro'],
    habilidades: [
      { codigo: 'EF06CI04', desc: 'Relacionar os papéis ecológicos dos grupos de seres vivos com a estrutura do ecossistema.' },
      { codigo: 'EF06CI05', desc: 'Estabelecer a relação entre os fatores abióticos e bióticos de um ecossistema.' },
    ],
    duracao: '6 aulas + observação por 3 semanas',
    agrupamento: 'grupos',
  },

  /* Adicione novas ideias dos Anos Finais aqui ↓ */

];
