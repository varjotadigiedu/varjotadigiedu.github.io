/**
 * =============================================================================
 * Varjota DigiEdu — search-index.js
 * Índice global de busca do site.
 * =============================================================================
 *
 * COMO ADICIONAR ITENS
 * ─────────────────────
 * Cada item do índice é um objeto JavaScript com os campos abaixo:
 *
 *   {
 *     title:     'Texto do título exibido no resultado',
 *     desc:      'Descrição curta (1 linha) exibida abaixo do título',
 *     url:       'caminho/para/pagina.html',   // relativo à raiz do site
 *     icon:      '🎨',                         // emoji representativo
 *     categoria: 'Nome da categoria',          // veja CATEGORIAS abaixo
 *     tags:      'palavras chave sem acento',  // usadas na busca, sem vírgulas
 *   }
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CATEGORIAS DISPONÍVEIS (controlam a cor do badge no dropdown)
 * ─────────────────────────────────────────────────────────────────────────────
 *   'Disciplina'             → badge laranja
 *   'Seção'                  → badge azul
 *   'Referencial Curricular' → badge roxo
 *   'Habilidade'             → badge verde-água  (BNCC Computação)
 *   'Habilidade BNCC'        → badge verde       (disciplinas regulares)
 *   'Recurso'                → badge âmbar       (REDs, materiais)
 *   'Ideia de Aula'          → badge rosa        (Banco de Ideias)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ESTRUTURA DE URLs — HABILIDADES DAS DISCIPLINAS REGULARES
 * ─────────────────────────────────────────────────────────────────────────────
 *   Cada habilidade tem sua PRÓPRIA PÁGINA em:
 *
 *     habilidades/<disciplina>/<CÓDIGO>.html
 *
 *   Exemplos reais:
 *     habilidades/arte/EF01AR01.html
 *     habilidades/ciencias/EF03CI02.html
 *     habilidades/lingua-portuguesa/EF01LP05.html
 *     habilidades/matematica/EF69MA14.html
 *     habilidades/historia/EF04HI03.html
 *     habilidades/geografia/EF35GE01.html
 *     habilidades/educacao-fisica/EF12EF01.html
 *     habilidades/ensino-religioso/EF01ER02.html
 *     habilidades/lingua-inglesa/EF06LI01.html
 *     habilidades/educacao-infantil/EI03ET04.html
 *
 *   Slugs de pasta por disciplina:
 *     Arte               → arte
 *     Ciências           → ciencias
 *     Educação Física    → educacao-fisica
 *     Ensino Religioso   → ensino-religioso
 *     Geografia          → geografia
 *     História           → historia
 *     Língua Inglesa     → lingua-inglesa
 *     Língua Portuguesa  → lingua-portuguesa
 *     Matemática         → matematica
 *     Educação Infantil  → educacao-infantil
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PADRÃO DOS CÓDIGOS BNCC
 * ─────────────────────────────────────────────────────────────────────────────
 *   EF  + [ano(s)]  + [sigla]  + [número 2 dígitos]
 *   EF  = Ensino Fundamental
 *   EI  = Educação Infantil  (usa EI em vez de EF)
 *
 *   Siglas por disciplina:
 *     AR Arte            CI Ciências         EF Educação Física
 *     ER Ensino Religioso  GE Geografia      HI História
 *     LI Língua Inglesa  LP Língua Portuguesa  MA Matemática
 *
 *   Faixas de ano(s) mais comuns:
 *     01  02  03  04  05         → ano específico (1º ao 5º)
 *     06  07  08  09             → ano específico (6º ao 9º)
 *     12  → 1º e 2º ano juntos
 *     15  → 1º ao 5º ano (Anos Iniciais)
 *     35  → 3º ao 5º ano
 *     67  → 6º e 7º ano
 *     69  → 6º ao 9º ano (Anos Finais)
 *
 *   Exemplos: EF01AR01 · EF35GE08 · EF69MA14 · EI03ET04
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * TAGS — boas práticas
 * ─────────────────────────────────────────────────────────────────────────────
 *   • Escreva sem acentos (o motor normaliza, mas é mais seguro)
 *   • Sempre inclua o código da habilidade: 'EF01AR01'
 *   • Inclua o nome da disciplina e o(s) ano(s): 'arte 1 ano'
 *   • Inclua palavras do conteúdo: 'cores formas linhas expressao'
 *   • Separe por espaço, sem vírgulas
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ÍCONES SUGERIDOS POR DISCIPLINA
 * ─────────────────────────────────────────────────────────────────────────────
 *   Arte            🎨    Ciências         🔬
 *   Educação Física ⚽    Ensino Religioso ✨
 *   Geografia       🌍    História         📜
 *   Língua Inglesa  🆙    Língua Portuguesa 📖
 *   Matemática      📐    Educação Infantil 🧸
 *
 * =============================================================================
 */

window.VD_SEARCH_INDEX = [

  /* ══════════════════════════════════════════════════════════════════════════
   * DISCIPLINAS — páginas principais
   * ══════════════════════════════════════════════════════════════════════════ */

  { title: 'Arte',              desc: 'Recursos e atividades de Arte para o Ensino Fundamental',              url: 'disciplinas/arte.html',              icon: '🎨', categoria: 'Disciplina', tags: 'arte pintura desenho musica teatro expressao visual' },
  { title: 'Ciências',          desc: 'Recursos e atividades de Ciências para o Ensino Fundamental',          url: 'disciplinas/ciencias.html',           icon: '🔬', categoria: 'Disciplina', tags: 'ciencias biologia quimica fisica natureza experimento' },
  { title: 'Educação Física',   desc: 'Recursos e atividades de Educação Física para o Ensino Fundamental',   url: 'disciplinas/educacao-fisica.html',    icon: '⚽', categoria: 'Disciplina', tags: 'educacao fisica esporte movimento corpo saude jogos' },
  { title: 'Ensino Religioso',  desc: 'Recursos e atividades de Ensino Religioso para o Ensino Fundamental',  url: 'disciplinas/ensino-religioso.html',   icon: '✨', categoria: 'Disciplina', tags: 'ensino religioso valores espiritualidade etica crenca' },
  { title: 'Geografia',         desc: 'Recursos e atividades de Geografia para o Ensino Fundamental',         url: 'disciplinas/geografia.html',          icon: '🌍', categoria: 'Disciplina', tags: 'geografia mapas territorio espaco populacao regiao' },
  { title: 'História',          desc: 'Recursos e atividades de História para o Ensino Fundamental',          url: 'disciplinas/historia.html',           icon: '📜', categoria: 'Disciplina', tags: 'historia passado civilizacao cultura sociedade tempo' },
  { title: 'Língua Inglesa',    desc: 'Recursos e atividades de Língua Inglesa para o Ensino Fundamental',    url: 'disciplinas/lingua-inglesa.html',     icon: '🆙', categoria: 'Disciplina', tags: 'ingles lingua inglesa idioma speaking reading writing' },
  { title: 'Língua Portuguesa', desc: 'Recursos e atividades de Língua Portuguesa para o Ensino Fundamental', url: 'disciplinas/lingua-portuguesa.html',  icon: '📖', categoria: 'Disciplina', tags: 'portugues lingua portuguesa leitura escrita gramatica texto redacao' },
  { title: 'Matemática',        desc: 'Recursos e atividades de Matemática para o Ensino Fundamental',        url: 'disciplinas/matematica.html',         icon: '📐', categoria: 'Disciplina', tags: 'matematica numeros calculo algebra geometria fracao' },
  { title: 'Educação Infantil', desc: 'Recursos e atividades para a Educação Infantil',                       url: 'disciplinas/educacao-infantil.html',  icon: '🧸', categoria: 'Disciplina', tags: 'educacao infantil crianca pre-escola brincar desenvolvimento' },


  /* ══════════════════════════════════════════════════════════════════════════
   * SEÇÕES DO SITE
   * ══════════════════════════════════════════════════════════════════════════ */

  { title: 'Banco de Ideias',        desc: 'Ideias e sugestões de atividades para sala de aula',                url: 'pages/banco-ideias.html',   icon: '💡', categoria: 'Seção', tags: 'banco ideias atividades sugestoes plano de aula criatividade' },
  { title: 'REDs',                   desc: 'Recursos Educacionais Digitais selecionados para professores',      url: 'pages/reds.html',           icon: '🖥️', categoria: 'Seção', tags: 'reds recursos educacionais digitais jogos videos aplicativos' },
  { title: 'Referencial Curricular', desc: 'Referencial Curricular da Educação Digital e Midiática de Varjota', url: 'ref-curricular/ref-index.html', icon: '📋', categoria: 'Seção', tags: 'bncc referencial curricular computacao digital midia habilidades' },


  /* ══════════════════════════════════════════════════════════════════════════
   * REFERENCIAL CURRICULAR — ANOS E ETAPAS (BNCC Computação)
   * ══════════════════════════════════════════════════════════════════════════ */

  { title: 'Educação Infantil — Referencial',         desc: '11 habilidades de computação para a Educação Infantil',                   url: 'ref-curricular/educacao-infantil.html', icon: '🌱', categoria: 'Referencial Curricular', tags: 'educacao infantil habilidades computacao digital' },
  { title: '1º ao 5º ano — Habilidades Transversais', desc: '9 habilidades transversais de computação para os Anos Iniciais',          url: 'ref-curricular/1ao5ano.html',           icon: '⭐', categoria: 'Referencial Curricular', tags: 'anos iniciais transversal computacao pensamento' },
  { title: '1º ano',  desc: '7 habilidades de computação para o 1º ano',  url: 'ref-curricular/1ano.html',  icon: '🌱', categoria: 'Referencial Curricular', tags: '1 ano habilidades computacao algoritmo sequencia' },
  { title: '2º ano',  desc: '6 habilidades de computação para o 2º ano',  url: 'ref-curricular/2ano.html',  icon: '🌿', categoria: 'Referencial Curricular', tags: '2 ano habilidades computacao algoritmo dados' },
  { title: '3º ano',  desc: '9 habilidades de computação para o 3º ano',  url: 'ref-curricular/3ano.html',  icon: '🌳', categoria: 'Referencial Curricular', tags: '3 ano habilidades computacao programacao logica' },
  { title: '4º ano',  desc: '7 habilidades de computação para o 4º ano',  url: 'ref-curricular/4ano.html',  icon: '⭐', categoria: 'Referencial Curricular', tags: '4 ano habilidades computacao generalizacao decomposicao' },
  { title: '5º ano',  desc: '11 habilidades de computação para o 5º ano', url: 'ref-curricular/5ano.html',  icon: '🚀', categoria: 'Referencial Curricular', tags: '5 ano habilidades computacao internet seguranca digital' },
  { title: '6º ano',  desc: '10 habilidades de computação para o 6º ano', url: 'ref-curricular/6ano.html',  icon: '🔭', categoria: 'Referencial Curricular', tags: '6 ano habilidades computacao programacao tipos dados variavel' },
  { title: '7º ano',  desc: '11 habilidades de computação para o 7º ano', url: 'ref-curricular/7ano.html',  icon: '⚙️', categoria: 'Referencial Curricular', tags: '7 ano habilidades computacao grafos registros seguranca' },
  { title: '8º ano',  desc: '9 habilidades de computação para o 8º ano',  url: 'ref-curricular/8ano.html',  icon: '🔬', categoria: 'Referencial Curricular', tags: '8 ano habilidades computacao recursao internet distribuido' },
  { title: '9º ano',  desc: '10 habilidades de computação para o 9º ano', url: 'ref-curricular/9ano.html',  icon: '🎓', categoria: 'Referencial Curricular', tags: '9 ano habilidades computacao automatos criptografia malware' },
  { title: '6º ao 9º ano — Habilidades Transversais', desc: '12 habilidades transversais de computação para os Anos Finais',           url: 'ref-curricular/6ao9ano.html',           icon: '⭐', categoria: 'Referencial Curricular', tags: 'anos finais transversal computacao decomposicao internet sustentabilidade' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES — BNCC COMPUTAÇÃO
   * categoria: 'Habilidade'
   * icon: 🧠 Pensamento Computacional | 🌐 Mundo Digital | 💻 Cultura Digital
   * ══════════════════════════════════════════════════════════════════════════ */

  /* ── Anos Iniciais Transversais (EF15CO) ── */
  { title: 'EF15CO01 — Organização da informação',       desc: 'Representar informações em matrizes, registros, listas, grafos, números e palavras', url: 'ref-curricular/1ao5ano.html#hab-EF15CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF15CO01 organizar informacao representacao matriz lista grafo' },
  { title: 'EF15CO02 — Algoritmos',                      desc: 'Criar sequências, seleções condicionais e repetições para resolver problemas',        url: 'ref-curricular/1ao5ano.html#hab-EF15CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF15CO02 algoritmo sequencia selecao condicional repeticao' },
  { title: 'EF15CO03 — Lógica computacional',            desc: 'Operações NÃO, E, OU sobre valores verdadeiro e falso',                              url: 'ref-curricular/1ao5ano.html#hab-EF15CO03', icon: '🧠', categoria: 'Habilidade', tags: 'EF15CO03 logica computacional nao e ou booleano verdadeiro falso' },
  { title: 'EF15CO04 — Decomposição',                    desc: 'Dividir problemas em subproblemas, resolver independentemente e combinar soluções',   url: 'ref-curricular/1ao5ano.html#hab-EF15CO04', icon: '🧠', categoria: 'Habilidade', tags: 'EF15CO04 decomposicao subproblema solucao dividir' },
  { title: 'EF15CO05 — Codificação da informação',       desc: 'Codificar informações para armazenamento e transmissão (ASCII, RGB)',                 url: 'ref-curricular/1ao5ano.html#hab-EF15CO05', icon: '🌐', categoria: 'Habilidade', tags: 'EF15CO05 codificacao ascii rgb informacao armazenamento transmissao' },
  { title: 'EF15CO06 — Funcionamento de dispositivos',   desc: 'Entender como sequências de instruções produzem resultados em dispositivos',         url: 'ref-curricular/1ao5ano.html#hab-EF15CO06', icon: '🌐', categoria: 'Habilidade', tags: 'EF15CO06 dispositivo computacional instrucao hardware software' },
  { title: 'EF15CO07 — Sistema Operacional',             desc: 'Integração entre software e hardware por meio do sistema operacional',                url: 'ref-curricular/1ao5ano.html#hab-EF15CO07', icon: '🌐', categoria: 'Habilidade', tags: 'EF15CO07 sistema operacional software hardware integracao' },
  { title: 'EF15CO08 — Uso de artefatos computacionais', desc: 'Pesquisar informações, expressar-se e resolver problemas com tecnologia',            url: 'ref-curricular/1ao5ano.html#hab-EF15CO08', icon: '💻', categoria: 'Habilidade', tags: 'EF15CO08 computador tablet pesquisa expressao resolucao problema' },
  { title: 'EF15CO09 — Segurança e responsabilidade',    desc: 'Uso seguro, ético e responsável da tecnologia; direitos autorais e privacidade',     url: 'ref-curricular/1ao5ano.html#hab-EF15CO09', icon: '💻', categoria: 'Habilidade', tags: 'EF15CO09 seguranca responsabilidade etica direitos autorais privacidade' },

  /* ── Anos Finais Transversais (EF69CO) ── */
  { title: 'EF69CO01 — Tipos de dados',             desc: 'Classificar informações em coleções e associar cada uma a um tipo de dado',          url: 'ref-curricular/6ao9ano.html#hab-EF69CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO01 tipos dados colecao conjunto inteiro real string' },
  { title: 'EF69CO02 — Linguagem de programação',   desc: 'Elaborar algoritmos com instruções sequenciais, de repetição e de seleção',          url: 'ref-curricular/6ao9ano.html#hab-EF69CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO02 linguagem programacao sequencia repeticao selecao algoritmo' },
  { title: 'EF69CO03 — Descrição de soluções',      desc: 'Descrever com precisão a solução de um problema antes de programá-la',              url: 'ref-curricular/6ao9ano.html#hab-EF69CO03', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO03 descricao precisao solucao problema abstrato algoritmo' },
  { title: 'EF69CO04 — Decomposição',               desc: 'Construir soluções usando decomposição e automatizá-las com programação',           url: 'ref-curricular/6ao9ano.html#hab-EF69CO04', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO04 decomposicao subproblema modular cooperativo programacao' },
  { title: 'EF69CO05 — Entradas e saídas',          desc: 'Identificar recursos necessários (entradas) e resultados esperados (saídas)',       url: 'ref-curricular/6ao9ano.html#hab-EF69CO05', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO05 entrada saida recurso resultado tipo dado definicao problema' },
  { title: 'EF69CO06 — Generalização',              desc: 'Comparar instâncias de um problema e criar algoritmo genérico com variáveis',      url: 'ref-curricular/6ao9ano.html#hab-EF69CO06', icon: '🧠', categoria: 'Habilidade', tags: 'EF69CO06 generalizacao variavel parametro instancia algoritmo generico' },
  { title: 'EF69CO07 — Transmissão de dados',       desc: 'Entender como dados são quebrados em pacotes, transmitidos e reconstruídos',       url: 'ref-curricular/6ao9ano.html#hab-EF69CO07', icon: '🌐', categoria: 'Habilidade', tags: 'EF69CO07 transmissao pacote rede dado protocolo internet' },
  { title: 'EF69CO08 — Gestão de arquivos',         desc: 'Armazenar, manipular, compactar e recuperar arquivos, documentos e metadados',     url: 'ref-curricular/6ao9ano.html#hab-EF69CO08', icon: '🌐', categoria: 'Habilidade', tags: 'EF69CO08 arquivo metadado compactar armazenar sistema arquivos' },
  { title: 'EF69CO09 — Paralelismo e distribuição', desc: 'Compreender paralelismo, concorrência e armazenamento/processamento distribuídos', url: 'ref-curricular/6ao9ano.html#hab-EF69CO09', icon: '🌐', categoria: 'Habilidade', tags: 'EF69CO09 paralelismo concorrencia distribuido nuvem internet' },
  { title: 'EF69CO10 — Funcionamento da internet',  desc: 'Entender estrutura e funcionamento da internet como sistema de redes',             url: 'ref-curricular/6ao9ano.html#hab-EF69CO10', icon: '🌐', categoria: 'Habilidade', tags: 'EF69CO10 internet rede protocolo sistema autonomo infraestrutura' },
  { title: 'EF69CO11 — Conduta digital',            desc: 'Apresentar conduta e linguagem éticas e respeitosas em ambiente digital',          url: 'ref-curricular/6ao9ano.html#hab-EF69CO11', icon: '💻', categoria: 'Habilidade', tags: 'EF69CO11 conduta etica respeito netiqueta rede social marco civil' },
  { title: 'EF69CO12 — Sustentabilidade tecnológica', desc: 'Analisar consumo de tecnologia, obsolescência e impactos ambientais',           url: 'ref-curricular/6ao9ano.html#hab-EF69CO12', icon: '💻', categoria: 'Habilidade', tags: 'EF69CO12 sustentabilidade lixo eletronico obsolescencia consumo descarte' },

  /* ── 6º ano (EF06CO) ── */
  { title: 'EF06CO01 — Tipos de dados primitivos',    desc: 'Classificar informações em tipos primitivos: inteiros, real, string',               url: 'ref-curricular/6ano.html#hab-EF06CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO01 tipos primitivos inteiro real string colecao dado' },
  { title: 'EF06CO02 — Programação',                  desc: 'Elaborar algoritmos com sequências, repetições e seleções em linguagem de programação', url: 'ref-curricular/6ano.html#hab-EF06CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO02 programacao algoritmo sequencia selecao repeticao linguagem' },
  { title: 'EF06CO03 — Descrição precisa',            desc: 'Expressar o algoritmo em linguagem natural antes de programar',                     url: 'ref-curricular/6ano.html#hab-EF06CO03', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO03 descricao precisao algoritmo natural abstrato programa' },
  { title: 'EF06CO04 — Decomposição',                 desc: 'Dividir problemas em subproblemas e automatizá-los com programação',               url: 'ref-curricular/6ano.html#hab-EF06CO04', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO04 decomposicao subproblema solucao automatizar programacao' },
  { title: 'EF06CO05 — Entradas e saídas',            desc: 'Identificar entradas, saídas e tipos de dados; definir problema como relação E→S',  url: 'ref-curricular/6ano.html#hab-EF06CO05', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO05 entrada saida relacao tipo dado problema definicao' },
  { title: 'EF06CO06 — Generalização com variáveis',  desc: 'Comparar instâncias e criar algoritmo genérico com parâmetros/variáveis',          url: 'ref-curricular/6ano.html#hab-EF06CO06', icon: '🧠', categoria: 'Habilidade', tags: 'EF06CO06 generalizacao variavel parametro algoritmo generico instancia' },
  { title: 'EF06CO07 — Transmissão de dados',         desc: 'Informação quebrada em pacotes, transmitida por múltiplos equipamentos e reconstruída', url: 'ref-curricular/6ano.html#hab-EF06CO07', icon: '🌐', categoria: 'Habilidade', tags: 'EF06CO07 transmissao pacote rede dado protocolo' },
  { title: 'EF06CO08 — Gestão de arquivos',           desc: 'Armazenar, manipular, compactar e recuperar arquivos e metadados',                 url: 'ref-curricular/6ano.html#hab-EF06CO08', icon: '🌐', categoria: 'Habilidade', tags: 'EF06CO08 arquivo metadado compactar armazenamento sistema' },
  { title: 'EF06CO09 — Conduta digital',              desc: 'Netiqueta, ética e respeito em ambientes digitais',                                url: 'ref-curricular/6ano.html#hab-EF06CO09', icon: '💻', categoria: 'Habilidade', tags: 'EF06CO09 netiqueta etica respeito conduta digital rede social' },
  { title: 'EF06CO10 — Sustentabilidade tecnológica', desc: 'Consumo crítico, obsolescência programada, lixo eletrônico e sustentabilidade',    url: 'ref-curricular/6ano.html#hab-EF06CO10', icon: '💻', categoria: 'Habilidade', tags: 'EF06CO10 sustentabilidade lixo eletronico obsolescencia consumo' },

  /* ── 7º ano (EF07CO) ── */
  { title: 'EF07CO01 — Registros e matrizes',      desc: 'Criar soluções usando registros e matrizes unidimensionais com programação',      url: 'ref-curricular/7ano.html#hab-EF07CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF07CO01 registro matriz vetor estrutura dado programacao' },
  { title: 'EF07CO02 — Depuração de programas',    desc: 'Analisar e corrigir erros em programas (debugging)',                             url: 'ref-curricular/7ano.html#hab-EF07CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF07CO02 depuracao debug erro correcao programa analise' },
  { title: 'EF07CO03 — Projetos com programação',  desc: 'Construir soluções selecionando estruturas de dados e técnicas adequadas',       url: 'ref-curricular/7ano.html#hab-EF07CO03', icon: '🧠', categoria: 'Habilidade', tags: 'EF07CO03 projeto programacao estrutura dado lista grafo matriz' },
  { title: 'EF07CO04 — Propriedades de grafos',    desc: 'Explorar coloração, cliques, graus de vértices, diâmetro e pontes em grafos',   url: 'ref-curricular/7ano.html#hab-EF07CO04', icon: '🧠', categoria: 'Habilidade', tags: 'EF07CO04 grafo propriedade coloracao clique vertice aresta' },
  { title: 'EF07CO05 — Decomposição e reúso',      desc: 'Criar algoritmos com decomposição e reúso de forma colaborativa',               url: 'ref-curricular/7ano.html#hab-EF07CO05', icon: '🧠', categoria: 'Habilidade', tags: 'EF07CO05 decomposicao reuso colaborativo algoritmo funcao modular' },
  { title: 'EF07CO06 — Protocolos de rede',        desc: 'Compreender o papel de protocolos para a transmissão de dados',                 url: 'ref-curricular/7ano.html#hab-EF07CO06', icon: '🌐', categoria: 'Habilidade', tags: 'EF07CO06 protocolo rede transmissao dado tcp ip regras' },
  { title: 'EF07CO07 — Segurança cibernética',     desc: 'Identificar problemas de segurança cibernética e formas de proteção',           url: 'ref-curricular/7ano.html#hab-EF07CO07', icon: '🌐', categoria: 'Habilidade', tags: 'EF07CO07 seguranca cibernetica protecao criptografia confidencialidade' },
  { title: 'EF07CO08 — Empatia digital',           desc: 'Demonstrar empatia sobre opiniões divergentes na web',                         url: 'ref-curricular/7ano.html#hab-EF07CO08', icon: '💻', categoria: 'Habilidade', tags: 'EF07CO08 empatia opiniao divergente respeito web digital' },
  { title: 'EF07CO09 — Cyberbullying',             desc: 'Reconhecer e debater sobre cyberbullying e suas consequências',                 url: 'ref-curricular/7ano.html#hab-EF07CO09', icon: '💻', categoria: 'Habilidade', tags: 'EF07CO09 cyberbullying intimidacao humilhacao debate digital' },
  { title: 'EF07CO10 — Lixo eletrônico',           desc: 'Identificar impactos ambientais do descarte de equipamentos eletrônicos',      url: 'ref-curricular/7ano.html#hab-EF07CO10', icon: '💻', categoria: 'Habilidade', tags: 'EF07CO10 lixo eletronico descarte sustentabilidade impacto ambiental' },
  { title: 'EF07CO11 — Produção digital',          desc: 'Criar, documentar e publicar vídeos, podcasts e websites',                     url: 'ref-curricular/7ano.html#hab-EF07CO11', icon: '💻', categoria: 'Habilidade', tags: 'EF07CO11 video podcast website producao digital publicar criar' },

  /* ── 8º ano (EF08CO) ── */
  { title: 'EF08CO01 — Recursão',                      desc: 'Construir soluções usando a técnica de recursão',                           url: 'ref-curricular/8ano.html#hab-EF08CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF08CO01 recursao indutivo caso base chamada algoritmo' },
  { title: 'EF08CO02 — Listas e algoritmos clássicos', desc: 'Criar soluções usando listas e recursão como técnica de resolução',         url: 'ref-curricular/8ano.html#hab-EF08CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF08CO02 lista algoritmo classico ordenacao busca recursao' },
  { title: 'EF08CO04 — Projetos com programação',      desc: 'Construir soluções selecionando estruturas de dados e técnicas adequadas',  url: 'ref-curricular/8ano.html#hab-EF08CO04', icon: '🧠', categoria: 'Habilidade', tags: 'EF08CO04 projeto programacao estrutura dado tecnica colaborativo' },
  { title: 'EF08CO05 — Paralelismo e distribuição',    desc: 'Compreender paralelismo, concorrência e processamento distribuído',         url: 'ref-curricular/8ano.html#hab-EF08CO05', icon: '🌐', categoria: 'Habilidade', tags: 'EF08CO05 paralelismo concorrencia distribuido nuvem simultaneo' },
  { title: 'EF08CO06 — Funcionamento da internet',     desc: 'Entender estrutura e funcionamento da internet como rede de redes',         url: 'ref-curricular/8ano.html#hab-EF08CO06', icon: '🌐', categoria: 'Habilidade', tags: 'EF08CO06 internet rede protocolo sistema autonomo infraestrutura' },
  { title: 'EF08CO07 — Redes sociais',                 desc: 'Compartilhar informações em redes sociais de forma responsável e ética',    url: 'ref-curricular/8ano.html#hab-EF08CO07', icon: '💻', categoria: 'Habilidade', tags: 'EF08CO07 rede social compartilhar responsavel etica confiabilidade' },
  { title: 'EF08CO08 — Dados pessoais',                desc: 'Distinguir tipos de dados pessoais e riscos associados ao compartilhá-los', url: 'ref-curricular/8ano.html#hab-EF08CO08', icon: '💻', categoria: 'Habilidade', tags: 'EF08CO08 dado pessoal privacidade risco seguranca identidade' },
  { title: 'EF08CO09 — Termos de uso',                 desc: 'Analisar criticamente políticas de termos de uso das plataformas digitais',  url: 'ref-curricular/8ano.html#hab-EF08CO09', icon: '💻', categoria: 'Habilidade', tags: 'EF08CO09 termos uso politica privacidade plataforma analise critica' },
  { title: 'EF08CO11 — Avaliação de fontes',           desc: 'Avaliar precisão, relevância, abrangência e vieses em fontes eletrônicas',  url: 'ref-curricular/8ano.html#hab-EF08CO11', icon: '💻', categoria: 'Habilidade', tags: 'EF08CO11 fonte informacao avaliacao vies credibilidade pesquisa' },

  /* ── 9º ano (EF09CO) ── */
  { title: 'EF09CO01 — Grafos e árvores',          desc: 'Criar soluções usando árvores e grafos, automatizando com programação',        url: 'ref-curricular/9ano.html#hab-EF09CO01', icon: '🧠', categoria: 'Habilidade', tags: 'EF09CO01 grafo arvore hierarquia estrutura dado programacao' },
  { title: 'EF09CO02 — Projetos com programação',  desc: 'Construir soluções selecionando estruturas de dados e técnicas adequadas',     url: 'ref-curricular/9ano.html#hab-EF09CO02', icon: '🧠', categoria: 'Habilidade', tags: 'EF09CO02 projeto programacao estrutura dado colaborativo avancado' },
  { title: 'EF09CO03 — Autômatos e eventos',       desc: 'Usar autômatos para descrever comportamentos e automatizá-los com eventos',    url: 'ref-curricular/9ano.html#hab-EF09CO03', icon: '🧠', categoria: 'Habilidade', tags: 'EF09CO03 automato evento estado transicao robo interface' },
  { title: 'EF09CO04 — Malwares e ataques',        desc: 'Compreender funcionamento de malwares e outros ataques cibernéticos',          url: 'ref-curricular/9ano.html#hab-EF09CO04', icon: '🌐', categoria: 'Habilidade', tags: 'EF09CO04 malware virus worm ransomware ataque cibernetico seguranca' },
  { title: 'EF09CO05 — Criptografia',              desc: 'Analisar técnicas de criptografia para armazenamento e transmissão de dados',  url: 'ref-curricular/9ano.html#hab-EF09CO05', icon: '🌐', categoria: 'Habilidade', tags: 'EF09CO05 criptografia cifra codigo seguranca transmissao dado' },
  { title: 'EF09CO06 — Problemas sociais',         desc: 'Analisar problemas sociais da cidade usando ambientes digitais e propor soluções', url: 'ref-curricular/9ano.html#hab-EF09CO06', icon: '💻', categoria: 'Habilidade', tags: 'EF09CO06 problema social cidade digital solucao cidadania tecnologia' },
  { title: 'EF09CO07 — Impactos da tecnologia',    desc: 'Avaliar implicações políticas, socioambientais e culturais das tecnologias',    url: 'ref-curricular/9ano.html#hab-EF09CO07', icon: '💻', categoria: 'Habilidade', tags: 'EF09CO07 impacto tecnologia trabalho social ambiental cultural' },
  { title: 'EF09CO08 — Equidade digital',          desc: 'Discutir distribuição desigual de recursos de computação e questões de poder',  url: 'ref-curricular/9ano.html#hab-EF09CO08', icon: '💻', categoria: 'Habilidade', tags: 'EF09CO08 equidade acesso poder desigualdade digital inclusao' },
  { title: 'EF09CO09 — Direitos autorais',         desc: 'Criar conteúdo digital compreendendo questões éticas de direitos autorais',     url: 'ref-curricular/9ano.html#hab-EF09CO09', icon: '💻', categoria: 'Habilidade', tags: 'EF09CO09 direito autoral imagem etica pirataria creative commons' },
  { title: 'EF09CO10 — Fake news e credibilidade', desc: 'Avaliar veracidade, credibilidade e relevância da informação',                 url: 'ref-curricular/9ano.html#hab-EF09CO10', icon: '💻', categoria: 'Habilidade', tags: 'EF09CO10 fake news desinformacao credibilidade veracidade fonte' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — ARTE
   * URL: habilidades/arte/<CÓDIGO>.html
   * icon: 🎨  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01AR01 — <título curto>',  desc: '<o que o aluno faz em uma frase>',  url: 'habilidades/arte/EF01AR01.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF01AR01 arte 1 ano <palavras-chave>' },
  // { title: 'EF01AR02 — <título curto>',  desc: '<desc>',                            url: 'habilidades/arte/EF01AR02.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF01AR02 arte 1 ano <palavras-chave>' },
  // { title: 'EF01AR03 — <título curto>',  desc: '<desc>',                            url: 'habilidades/arte/EF01AR03.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF01AR03 arte 1 ano <palavras-chave>' },
  // { title: 'EF02AR01 — <título curto>',  desc: '<desc>',                            url: 'habilidades/arte/EF02AR01.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF02AR01 arte 2 ano <palavras-chave>' },
  // { title: 'EF35AR01 — <título curto>',  desc: '<desc>',                            url: 'habilidades/arte/EF35AR01.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF35AR01 arte 3 4 5 ano <palavras-chave>' },
  // { title: 'EF69AR01 — <título curto>',  desc: '<desc>',                            url: 'habilidades/arte/EF69AR01.html',  icon: '🎨', categoria: 'Habilidade BNCC', tags: 'EF69AR01 arte 6 7 8 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — CIÊNCIAS
   * URL: habilidades/ciencias/<CÓDIGO>.html
   * icon: 🔬  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF01CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF01CI01 ciencias 1 ano <palavras-chave>' },
  // { title: 'EF02CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF02CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF02CI01 ciencias 2 ano <palavras-chave>' },
  // { title: 'EF03CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF03CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF03CI01 ciencias 3 ano <palavras-chave>' },
  // { title: 'EF04CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF04CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF04CI01 ciencias 4 ano <palavras-chave>' },
  // { title: 'EF05CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF05CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF05CI01 ciencias 5 ano <palavras-chave>' },
  // { title: 'EF06CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF06CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF06CI01 ciencias 6 ano <palavras-chave>' },
  // { title: 'EF07CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF07CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF07CI01 ciencias 7 ano <palavras-chave>' },
  // { title: 'EF08CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF08CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF08CI01 ciencias 8 ano <palavras-chave>' },
  // { title: 'EF09CI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ciencias/EF09CI01.html',  icon: '🔬', categoria: 'Habilidade BNCC', tags: 'EF09CI01 ciencias 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — EDUCAÇÃO FÍSICA
   * URL: habilidades/educacao-fisica/<CÓDIGO>.html
   * icon: ⚽  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF12EF01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-fisica/EF12EF01.html',  icon: '⚽', categoria: 'Habilidade BNCC', tags: 'EF12EF01 educacao fisica 1 2 ano <palavras-chave>' },
  // { title: 'EF35EF01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-fisica/EF35EF01.html',  icon: '⚽', categoria: 'Habilidade BNCC', tags: 'EF35EF01 educacao fisica 3 4 5 ano <palavras-chave>' },
  // { title: 'EF67EF01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-fisica/EF67EF01.html',  icon: '⚽', categoria: 'Habilidade BNCC', tags: 'EF67EF01 educacao fisica 6 7 ano <palavras-chave>' },
  // { title: 'EF89EF01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-fisica/EF89EF01.html',  icon: '⚽', categoria: 'Habilidade BNCC', tags: 'EF89EF01 educacao fisica 8 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — ENSINO RELIGIOSO
   * URL: habilidades/ensino-religioso/<CÓDIGO>.html
   * icon: ✨  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01ER01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ensino-religioso/EF01ER01.html',  icon: '✨', categoria: 'Habilidade BNCC', tags: 'EF01ER01 ensino religioso 1 ano <palavras-chave>' },
  // { title: 'EF02ER01 — <título curto>',  desc: '<desc>',  url: 'habilidades/ensino-religioso/EF02ER01.html',  icon: '✨', categoria: 'Habilidade BNCC', tags: 'EF02ER01 ensino religioso 2 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — GEOGRAFIA
   * URL: habilidades/geografia/<CÓDIGO>.html
   * icon: 🌍  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF01GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF01GE01 geografia 1 ano <palavras-chave>' },
  // { title: 'EF02GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF02GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF02GE01 geografia 2 ano <palavras-chave>' },
  // { title: 'EF03GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF03GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF03GE01 geografia 3 ano <palavras-chave>' },
  // { title: 'EF04GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF04GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF04GE01 geografia 4 ano <palavras-chave>' },
  // { title: 'EF05GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF05GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF05GE01 geografia 5 ano <palavras-chave>' },
  // { title: 'EF06GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF06GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF06GE01 geografia 6 ano <palavras-chave>' },
  // { title: 'EF07GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF07GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF07GE01 geografia 7 ano <palavras-chave>' },
  // { title: 'EF08GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF08GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF08GE01 geografia 8 ano <palavras-chave>' },
  // { title: 'EF09GE01 — <título curto>',  desc: '<desc>',  url: 'habilidades/geografia/EF09GE01.html',  icon: '🌍', categoria: 'Habilidade BNCC', tags: 'EF09GE01 geografia 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — HISTÓRIA
   * URL: habilidades/historia/<CÓDIGO>.html
   * icon: 📜  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF01HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF01HI01 historia 1 ano <palavras-chave>' },
  // { title: 'EF02HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF02HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF02HI01 historia 2 ano <palavras-chave>' },
  // { title: 'EF03HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF03HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF03HI01 historia 3 ano <palavras-chave>' },
  // { title: 'EF04HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF04HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF04HI01 historia 4 ano <palavras-chave>' },
  // { title: 'EF05HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF05HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF05HI01 historia 5 ano <palavras-chave>' },
  // { title: 'EF06HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF06HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF06HI01 historia 6 ano <palavras-chave>' },
  // { title: 'EF07HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF07HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF07HI01 historia 7 ano <palavras-chave>' },
  // { title: 'EF08HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF08HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF08HI01 historia 8 ano <palavras-chave>' },
  // { title: 'EF09HI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/historia/EF09HI01.html',  icon: '📜', categoria: 'Habilidade BNCC', tags: 'EF09HI01 historia 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — LÍNGUA INGLESA
   * URL: habilidades/lingua-inglesa/<CÓDIGO>.html
   * icon: 🆙  |  categoria: 'Habilidade BNCC'
   * Nota: Língua Inglesa começa no 6º ano na BNCC
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF06LI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-inglesa/EF06LI01.html',  icon: '🆙', categoria: 'Habilidade BNCC', tags: 'EF06LI01 ingles lingua inglesa 6 ano <palavras-chave>' },
  // { title: 'EF07LI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-inglesa/EF07LI01.html',  icon: '🆙', categoria: 'Habilidade BNCC', tags: 'EF07LI01 ingles lingua inglesa 7 ano <palavras-chave>' },
  // { title: 'EF08LI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-inglesa/EF08LI01.html',  icon: '🆙', categoria: 'Habilidade BNCC', tags: 'EF08LI01 ingles lingua inglesa 8 ano <palavras-chave>' },
  // { title: 'EF09LI01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-inglesa/EF09LI01.html',  icon: '🆙', categoria: 'Habilidade BNCC', tags: 'EF09LI01 ingles lingua inglesa 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — LÍNGUA PORTUGUESA
   * URL: habilidades/lingua-portuguesa/<CÓDIGO>.html
   * icon: 📖  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF01LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF01LP01 portugues lingua portuguesa 1 ano <palavras-chave>' },
  // { title: 'EF02LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF02LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF02LP01 portugues lingua portuguesa 2 ano <palavras-chave>' },
  // { title: 'EF03LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF03LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF03LP01 portugues lingua portuguesa 3 ano <palavras-chave>' },
  // { title: 'EF04LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF04LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF04LP01 portugues lingua portuguesa 4 ano <palavras-chave>' },
  // { title: 'EF05LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF05LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF05LP01 portugues lingua portuguesa 5 ano <palavras-chave>' },
  // { title: 'EF06LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF06LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF06LP01 portugues lingua portuguesa 6 ano <palavras-chave>' },
  // { title: 'EF07LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF07LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF07LP01 portugues lingua portuguesa 7 ano <palavras-chave>' },
  // { title: 'EF08LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF08LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF08LP01 portugues lingua portuguesa 8 ano <palavras-chave>' },
  // { title: 'EF09LP01 — <título curto>',  desc: '<desc>',  url: 'habilidades/lingua-portuguesa/EF09LP01.html',  icon: '📖', categoria: 'Habilidade BNCC', tags: 'EF09LP01 portugues lingua portuguesa 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — MATEMÁTICA
   * URL: habilidades/matematica/<CÓDIGO>.html
   * icon: 📐  |  categoria: 'Habilidade BNCC'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EF01MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF01MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF01MA01 matematica 1 ano <palavras-chave>' },
  // { title: 'EF02MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF02MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF02MA01 matematica 2 ano <palavras-chave>' },
  // { title: 'EF03MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF03MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF03MA01 matematica 3 ano <palavras-chave>' },
  // { title: 'EF04MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF04MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF04MA01 matematica 4 ano <palavras-chave>' },
  // { title: 'EF05MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF05MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF05MA01 matematica 5 ano <palavras-chave>' },
  // { title: 'EF06MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF06MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF06MA01 matematica 6 ano <palavras-chave>' },
  // { title: 'EF07MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF07MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF07MA01 matematica 7 ano <palavras-chave>' },
  // { title: 'EF08MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF08MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF08MA01 matematica 8 ano <palavras-chave>' },
  // { title: 'EF09MA01 — <título curto>',  desc: '<desc>',  url: 'habilidades/matematica/EF09MA01.html',  icon: '📐', categoria: 'Habilidade BNCC', tags: 'EF09MA01 matematica 9 ano <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * HABILIDADES BNCC — EDUCAÇÃO INFANTIL
   * URL: habilidades/educacao-infantil/<CÓDIGO>.html
   * icon: 🧸  |  categoria: 'Habilidade BNCC'
   *
   * Grupos etários: EI01 (0-1a6m) | EI02 (1a7m-3a11m) | EI03 (4a-5a11m)
   * Campos:  EO eu/outro/nós  CG corpo/gestos  TS traços/sons/cores
   *          EF escuta/fala   ET espaços/tempos/quantidades
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: 'EI03EO01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-infantil/EI03EO01.html',  icon: '🧸', categoria: 'Habilidade BNCC', tags: 'EI03EO01 educacao infantil eu outro nos <palavras-chave>' },
  // { title: 'EI03CG01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-infantil/EI03CG01.html',  icon: '🧸', categoria: 'Habilidade BNCC', tags: 'EI03CG01 educacao infantil corpo gestos movimentos <palavras-chave>' },
  // { title: 'EI03TS01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-infantil/EI03TS01.html',  icon: '🧸', categoria: 'Habilidade BNCC', tags: 'EI03TS01 educacao infantil tracos sons cores formas <palavras-chave>' },
  // { title: 'EI03EF01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-infantil/EI03EF01.html',  icon: '🧸', categoria: 'Habilidade BNCC', tags: 'EI03EF01 educacao infantil escuta fala pensamento imaginacao <palavras-chave>' },
  // { title: 'EI03ET01 — <título curto>',  desc: '<desc>',  url: 'habilidades/educacao-infantil/EI03ET01.html',  icon: '🧸', categoria: 'Habilidade BNCC', tags: 'EI03ET01 educacao infantil espacos tempos quantidades <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * RECURSOS EDUCACIONAIS DIGITAIS (REDs)
   * URL: pages/reds.html#<id-do-recurso>
   * icon: livre  |  categoria: 'Recurso'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: '<Nome do recurso>',  desc: '<O que é e para que serve>',  url: 'pages/reds.html#<id>',  icon: '🎮', categoria: 'Recurso', tags: '<disciplina> <ano> <palavras-chave>' },


  /* ══════════════════════════════════════════════════════════════════════════
   * IDEIAS DE AULA (Banco de Ideias)
   * URL: pages/banco-ideias.html#<id-da-ideia>
   * icon: 💡  |  categoria: 'Ideia de Aula'
   * ══════════════════════════════════════════════════════════════════════════ */

  // { title: '<Título da ideia>',  desc: '<Resumo em uma frase>',  url: 'pages/banco-ideias.html#<id>',  icon: '💡', categoria: 'Ideia de Aula', tags: '<disciplina> <ano> <tema> <palavras-chave>' },

];