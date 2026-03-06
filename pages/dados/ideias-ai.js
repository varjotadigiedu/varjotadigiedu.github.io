/**
 * =============================================================================
 * Varjota DigiEdu — dados/ideias-ai.js
 * Ideias do Banco de Ideias — Anos Iniciais (1º ao 5º ano)
 * =============================================================================
 *
 * CAMPOS DE CADA IDEIA:
 *   id          → identificador único, prefixo 'ai-' + número  ex: 'ai-006'
 *   titulo      → título da ideia
 *   emoji       → emoji representativo
 *   segmento    → sempre 'ai' neste arquivo
 *   disciplina  → slug da disciplina ou 'interdisciplinar'
 *                 slugs: arte | ciencias | educacao-fisica | ensino-religioso
 *                        geografia | historia | lingua-portuguesa | matematica
 *                        interdisciplinar
 *   anos        → array de anos:  ['1º ano'] | ['2º ano', '3º ano'] | ['1º ao 5º ano']
 *   tipo        → array com um ou mais: 'pratica' | 'digital' | 'debate'
 *                                       'pesquisa' | 'projeto' | 'jogo'
 *   descricao   → texto curto para o card (1-2 frases)
 *   objetivo    → objetivo pedagógico completo
 *   passos      → array de strings com as etapas da atividade
 *   materiais   → array de strings
 *   habilidades → array de { codigo, desc }
 *   duracao     → ex: '2 aulas' | '1 aula' | '5 aulas'
 *   agrupamento → 'individual' | 'duplas' | 'grupos' | 'turma'
 *
 * =============================================================================
 */

window.IDEIAS_AI = [

  {
    id: 'ai-001',
    titulo: 'Receita Matemática',
    emoji: '🍰',
    segmento: 'ai',
    disciplina: 'matematica',
    anos: ['2º ano', '3º ano'],
    tipo: ['pratica', 'projeto'],
    descricao: 'Alunos interpretam uma receita culinária para praticar medidas, frações e sequência de passos, integrando matemática e língua portuguesa.',
    objetivo: 'Desenvolver noções de medida, fração e sequência lógica por meio da leitura e interpretação de uma receita culinária simples.',
    passos: [
      'Apresentação de uma receita simples (bolo de caneca ou gelatina).',
      'Identificação das medidas e quantidades presentes na receita.',
      'Resolução de situações-problema: "Se a receita serve 4 pessoas, como faremos para 8?".',
      'Reescrita da receita com as quantidades ajustadas.',
      'Se possível: execução da receita em sala.',
    ],
    materiais: ['Receita impressa', 'Caderno', 'Régua', 'Copo medidor (opcional)', 'Ingredientes (opcional)'],
    habilidades: [
      { codigo: 'EF02MA06', desc: 'Construir fatos básicos da adição e subtração.' },
      { codigo: 'EF03MA11', desc: 'Reconhecer e relacionar unidades de medida de comprimento.' },
    ],
    duracao: '2 aulas',
    agrupamento: 'duplas',
  },

  {
    id: 'ai-002',
    titulo: 'Caça ao Tesouro Histórico',
    emoji: '🏺',
    segmento: 'ai',
    disciplina: 'historia',
    anos: ['4º ano', '5º ano'],
    tipo: ['jogo', 'pesquisa'],
    descricao: 'Uma gincana colaborativa onde os alunos resolvem enigmas sobre a história local e do Brasil para encontrar o "tesouro" do conhecimento.',
    objetivo: 'Estimular a pesquisa histórica e o trabalho em equipe por meio de uma gincana gamificada com enigmas sobre história local e brasileira.',
    passos: [
      'Divisão da turma em grupos e entrega do primeiro envelope com o enigma inicial.',
      'Cada enigma resolvido leva a uma pista escondida na escola.',
      'As pistas envolvem pesquisa em livros, mapas ou internet.',
      'O grupo que chegar ao "tesouro" apresenta o que aprendeu na jornada.',
      'Roda de socialização: cada grupo compartilha o conteúdo de sua pista.',
    ],
    materiais: ['Envelopes', 'Pistas impressas', 'Livros didáticos', 'Acesso à internet (opcional)'],
    habilidades: [
      { codigo: 'EF04HI03', desc: 'Identificar as transformações ocorridas na cidade ao longo do tempo.' },
      { codigo: 'EF05HI02', desc: 'Selecionar e registrar informações sobre a história local.' },
    ],
    duracao: '2 aulas',
    agrupamento: 'grupos',
  },

  {
    id: 'ai-003',
    titulo: 'Jornal da Turma',
    emoji: '📰',
    segmento: 'ai',
    disciplina: 'lingua-portuguesa',
    anos: ['3º ano', '4º ano', '5º ano'],
    tipo: ['projeto', 'digital'],
    descricao: 'Os alunos assumem papéis de repórteres, editores e fotógrafos para criar um jornal impresso ou digital sobre temas da escola e da comunidade.',
    objetivo: 'Desenvolver a produção textual de diferentes gêneros jornalísticos, a escuta ativa e a capacidade de síntese e revisão textual.',
    passos: [
      'Análise de jornais reais: identificar seções, manchetes, fotos e legendas.',
      'Escolha dos temas e distribuição de funções: repórter, fotógrafo, editor.',
      'Entrevistas com colegas, professores ou membros da comunidade.',
      'Escrita das notícias com revisão em duplas.',
      'Diagramação e publicação (impressa ou digital/blog).',
    ],
    materiais: ['Jornais impressos de referência', 'Computador ou tablet', 'Câmera ou celular', 'Papel A3'],
    habilidades: [
      { codigo: 'EF35LP06', desc: 'Ler e ouvir textos noticiosos, identificando o fato principal.' },
      { codigo: 'EF35LP07', desc: 'Produzir notícias sobre fatos da escola ou comunidade.' },
    ],
    duracao: '5 aulas',
    agrupamento: 'grupos',
  },

  {
    id: 'ai-004',
    titulo: 'Mapeando a Vizinhança',
    emoji: '🗺️',
    segmento: 'ai',
    disciplina: 'geografia',
    anos: ['2º ano', '3º ano'],
    tipo: ['pratica', 'digital'],
    descricao: 'Alunos exploram o Google Maps para criar um mapa comentado dos pontos importantes do bairro ou da cidade de Varjota.',
    objetivo: 'Desenvolver noções de localização, orientação e representação cartográfica utilizando ferramentas digitais de mapeamento.',
    passos: [
      'Conversa sobre pontos de referência que os alunos conhecem na cidade.',
      'Exploração coletiva do Google Maps ou Google Earth no projetor.',
      'Em duplas: cada aluno localiza sua casa e a escola no mapa.',
      'Criação de um mapa desenhado com pontos marcados e legendas.',
      'Exposição dos mapas na sala e apresentação oral.',
    ],
    materiais: ['Computadores ou tablets', 'Acesso à internet', 'Papel A3', 'Canetinhas coloridas'],
    habilidades: [
      { codigo: 'EF02GE04', desc: 'Reconhecer semelhanças e diferenças entre paisagens.' },
      { codigo: 'EF03GE06', desc: 'Identificar e interpretar imagens e fotografias do lugar de vivência.' },
    ],
    duracao: '3 aulas',
    agrupamento: 'duplas',
  },

  /* Adicione novas ideias dos Anos Iniciais aqui ↓ */

];
