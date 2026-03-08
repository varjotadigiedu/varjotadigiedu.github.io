/**
 * =============================================================================
 * Varjota DigiEdu — dados/ideias-ei.js
 * Ideias do Banco de Ideias — Educação Infantil
 * =============================================================================
 *
 * CAMPOS DE CADA IDEIA:
 *   id          → identificador único, prefixo 'ei-' + número  ex: 'ei-003'
 *   titulo      → título da ideia
 *   emoji       → emoji representativo
 *   segmento    → sempre 'ei' neste arquivo
 *   disciplina  → slug da disciplina ou 'interdisciplinar'
 *                 slugs: arte | ciencias | educacao-fisica | ensino-religioso
 *                        geografia | historia | lingua-portuguesa | matematica
 *                        interdisciplinar
 *   anos        → array de faixas etárias:  ['0-3 anos'] | ['4-5 anos'] | ['0-5 anos']
 *   tipo        → array com um ou mais: 'pratica' | 'digital' | 'debate'
 *                                       'pesquisa' | 'projeto' | 'jogo'
 *   descricao   → texto curto para o card (1-2 frases)
 *   objetivo    → objetivo pedagógico completo
 *   passos      → array de strings com as etapas da atividade
 *   materiais   → array de strings
 *   habilidades → array de { codigo, desc }  (objetivos BNCC da EI)
 *   duracao     → ex: '2 aulas' | '1 aula' | '3 encontros'
 *   agrupamento → 'individual' | 'duplas' | 'grupos' | 'turma'
 *
 * =============================================================================
 */

window.IDEIAS_EI = [

  {
    id: 'ei-001',
    titulo: 'Minha Caixinha de Sons',
    emoji: '🎵',
    segmento: 'ei',
    disciplina: 'interdisciplinar',
    anos: ['4-5 anos'],
    tipo: ['pratica', 'jogo'],
    descricao: 'Crianças exploram sons do ambiente e criam instrumentos musicais com materiais recicláveis, desenvolvendo percepção auditiva e criatividade.',
    objetivo: 'Desenvolver a percepção auditiva e a expressão criativa por meio da exploração e produção sonora com materiais do cotidiano.',
    passos: [
      'Roda de conversa sobre sons que as crianças conhecem e ouvem no dia a dia.',
      'Exploração livre de materiais recicláveis (potes, tampinhas, arroz, feijão).',
      'Cada criança monta seu instrumento sonoro e o experimenta.',
      'Apresentação em roda: cada um toca seu instrumento e todos identificam o som.',
      'Registro com desenho do instrumento criado.',
    ],
    materiais: ['Potes plásticos', 'Tampinhas', 'Arroz e feijão', 'Fita adesiva', 'Papel e giz de cera'],
    habilidades: [
      { codigo: 'EI03TS02', desc: 'Utilizar materiais variados com possibilidades de manipulação.' },
      { codigo: 'EI03EO05', desc: 'Demonstrar valorização das características da criança.' },
    ],
    duracao: '2 aulas',
    agrupamento: 'individual',
  },

  {
    id: 'ei-002',
    titulo: 'Mapa do Nosso Espaço',
    emoji: '🗺️',
    segmento: 'ei',
    disciplina: 'interdisciplinar',
    anos: ['4-5 anos'],
    tipo: ['pratica', 'projeto'],
    descricao: 'As crianças constroem coletivamente um mapa da sala de aula e do pátio, desenvolvendo noções espaciais e representação simbólica.',
    objetivo: 'Desenvolver noções de espacialidade, localização e representação simbólica por meio da construção coletiva de mapas do ambiente escolar.',
    passos: [
      'Passeio pela sala e pelo pátio observando móveis, objetos e espaços.',
      'Conversa sobre como representar o que foi visto em um papel.',
      'Cada grupo recebe uma folha grande e materiais para desenhar sua parte do mapa.',
      'Os grupos montam o mapa completo juntando as partes.',
      'Roda final para "ler" o mapa e identificar os espaços.',
    ],
    materiais: ['Papel kraft grande', 'Canetinhas', 'Régua', 'Cola', 'Fotografia da escola (opcional)'],
    habilidades: [
      { codigo: 'EI03ET01', desc: 'Estabelecer relações de comparação entre objetos, observando suas propriedades.' },
      { codigo: 'EI03ET03', desc: 'Identificar e selecionar fontes de informações para responder questões.' },
    ],
    duracao: '3 aulas',
    agrupamento: 'grupos',
  },

  {
    id: 'ei-003',
    titulo: "Minha Caixinha de Sons",
    emoji: '🎶',
    segmento: 'ei',
    disciplina: 'interdisciplinar',
    anos: ['Educação Infantil'],
    tipo: ['pratica', 'jogo'],
    descricao: "Crianças exploram sons do ambiente e criam instrumentos com materiais recicláveis.",
    objetivo: "Desenvolver a percepção sonora a expressão musical e a criatividade.",
    passos: ['Exploração de sons do ambiente com olhos fechados', 'Identificação e classificação dos sons', 'Construção de instrumentos com materiais recicláveis', 'Apresentação musical da turma'],
    materiais: ['Potes e caixas recicláveis', 'Sementes e pedrinhas', 'Fita crepe e tesoura sem ponta', 'TNT colorido'],
    habilidades: [
      { codigo: 'EIEF06EO02', desc: "Demonstrar atitudes de cuidado" }
    ],
    duracao: '1 aula de 40 min',
    agrupamento: 'turma',
  },

  /* Adicione novas ideias da Educação Infantil aqui ↓ */

];
