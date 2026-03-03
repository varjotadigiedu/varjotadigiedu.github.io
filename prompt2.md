Crie um site educacional completo chamado "Varjota DigiEdu" para a 
Secretaria de Educação da Prefeitura de Varjota (SMETEC-Varjota).

## STACK TÉCNICA
- HTML/CSS/JavaScript puro (sem frameworks)
- Fontes Google: Nunito + Lexend
- Hospedagem: GitHub Pages / Netlify / Vercel (caminhos relativos)

## ESTRUTURA DE PASTAS
varjota-digiedu/
  index.html
  TEMPLATE_EXEMPLO.html
  assets/
    template.js
    template.css
    logo.png  ← (o usuário fornecerá)
  disciplinas/
    arte.html
    ciencias.html
    educacao-fisica.html
    ensino-religioso.html
    geografia.html
    historia.html
    lingua-inglesa.html
    lingua-portuguesa.html
    matematica.html
  pages/
    bncc-correlacionada.html
    bncc-educacao.html
    atividades.html
    reds.html
    ref-curricular.html

## ARQUIVO: index.html
Página inicial com:
- Navbar sticky com logo (assets/logo.png) à esquerda e menu à direita
- Menu: Início | BNCC Correlacionada | BNCC Educação | Atividades | REDs
- Hero section com fundo azul gradiente (#0D47A1 → #1565C0), padrão 
  geométrico sutil em SVG inline (opacity 4%), logo centralizado grande 
  (110px altura), tagline e barra de pesquisa arredondada com botão laranja
- A busca filtra os cards de disciplina em tempo real via JavaScript (input event)
- Grid de 9 cards de disciplinas com cores únicas por disciplina (ver cores abaixo)
- Card extra para "Referencial Curricular da Educação Digital e Midiática 
  de Varjota" com fundo azul escuro, ícone 📋 e seta →
- Rodapé azul gradiente com: "© [ANO] Prefeitura de Varjota — Secretaria 
  de Educação (SMETEC)" e aviso de direitos autorais
- Menu hamburger responsivo para mobile
- O index.html NÃO usa template.js (contém tudo inline)

## CORES DOS CARDS DE DISCIPLINAS (gradientes 135deg)
arte              → #C62828 → #EF9A9A  | ícone 🎨 (texto escuro #3E1500)
ciencias          → #00695C → #80CBC4  | ícone 🔬 (texto escuro #3E1500)
educacao-fisica   → #2E7D32 → #A5D6A7  | ícone ⚽ (texto escuro #3E1500)
ensino-religioso  → #6A1B9A → #CE93D8  | ícone ✨ (texto escuro #3E1500)
geografia         → #1565C0 → #90CAF9  | ícone 🌍 (texto escuro #3E1500)
historia          → #BF360C → #FFAB91  | ícone 📜 (texto escuro #3E1500)
lingua-inglesa    → #00838F → #80DEEA  | ícone 🆒 (texto escuro #3E1500)
lingua-portuguesa → #E65100 → #FFE082  | ícone 📖 (texto escuro #3E1500)
matematica        → #283593 → #7986CB  | ícone 📐 (texto escuro #3E1500)

## ARQUIVO: assets/template.css
CSS compartilhado por TODAS as páginas filhas. Define:
- Variáveis CSS: --vd-primary:#1565C0, --vd-primary-dk:#0D47A1, 
  --vd-accent:#FF8F00, --vd-bg:#F4F7FB, --vd-nav-h:68px, 
  --vd-sidebar-w:240px, --vd-radius:14px
- .vd-navbar: sticky, gradiente azul, altura 68px, logo + links + hamburger
- .vd-layout: flex row, max-width 1400px, padding 24px
- .vd-sidebar: 240px, sticky, botão voltar + menu de disciplinas com ícones
  O item da disciplina atual deve ter classe "active" (fundo azul primário)
- .vd-main: flex-1, coluna, gap 16px
- .vd-breadcrumb: trilha Início > Disciplina > Página com separador ›
- .vd-content: fundo branco, border-radius 14px, sombra suave, padding 32px
- .vd-footer: gradiente azul, texto centralizado, dois parágrafos
- Responsivo: em telas < 900px, sidebar vira horizontal no topo, 
  navbar vira hamburger

## ARQUIVO: assets/template.js
Script IIFE que injeta automaticamente navbar, sidebar, breadcrumb e 
rodapé em qualquer página filha. Funcionamento:
1. Detecta o caminho raiz pelo src do próprio script tag
2. Calcula caminhos relativos pela profundidade do URL atual
3. Lê window.VD_PAGE = { disciplina: "slug", pageTitle: "Título" }
   definido ANTES do script na página filha
4. Injeta <link> para template.css e Google Fonts no <head>
5. No DOMContentLoaded:
   a. buildNavbar() — cria .vd-navbar com links do menu, marca active 
      pelo pathname atual, adiciona listener do hamburger
   b. buildLayout() — pega todos os filhos do body (exceto navbar), 
      cria .vd-layout com .vd-sidebar e .vd-main, move o conteúdo 
      original para .vd-content dentro do .vd-main, injeta breadcrumb 
      dinâmico baseado em VD_PAGE
   c. buildFooter() — append do .vd-footer no body

Lista de disciplinas hardcoded no JS (slug, label, ícone) para gerar 
o menu lateral e os links do breadcrumb.

## ARQUIVO: TEMPLATE_EXEMPLO.html
Template mínimo que a IA deve usar ao gerar novos conteúdos.
Estrutura exata:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TÍTULO DA PÁGINA — Varjota DigiEdu</title>
  <script>
    window.VD_PAGE = {
      disciplina: "SLUG_DA_DISCIPLINA",
      pageTitle:  "TÍTULO DA PÁGINA"
    };
  </script>
  <script src="../assets/template-loader.js"></script>
  <script src="../assets/template.js"></script>  <!-- Ajuste o ../ conforme nível de pasta -->
</head>
<body>
  <!-- APENAS o conteúdo específico da página aqui -->
  <!-- Navbar, sidebar e footer são injetados automaticamente -->
  <h1>Título</h1>
  <p>Conteúdo...</p>
</body>
</html>

Slugs válidos para disciplina: arte | ciencias | educacao-fisica | 
ensino-religioso | geografia | historia | lingua-inglesa | 
lingua-portuguesa | matematica

## PÁGINAS DE DISCIPLINAS (disciplinas/*.html)
Cada disciplina tem sua própria página usando o TEMPLATE_EXEMPLO.
Conteúdo mínimo:
- Seção hero: ícone grande (4rem), título com cor temática da disciplina, 
  descrição curta
- Grid de cards placeholder (borda tracejada) para: Correlação BNCC, 
  Atividades, REDs, Materiais de Apoio — todos com "Em breve"
- Usa window.VD_PAGE com disciplina e pageTitle corretos
- Script src="../assets/template.js"

## PÁGINAS DE SEÇÃO (pages/*.html)
bncc-correlacionada.html, bncc-educacao.html, atividades.html, 
reds.html, ref-curricular.html — páginas simples com placeholder, 
usando template.js com src="../assets/template.js" e VD_PAGE sem 
disciplina (apenas pageTitle).

## IDENTIDADE VISUAL
- Primário: #1565C0 (azul Varjota)
- Destaque: #FF8F00 (laranja âmbar)
- Fundo: #F4F7FB (cinza azulado claro)
- Fontes: Lexend (títulos/nav) + Nunito (corpo/cards)
- Logo: fornecido pelo usuário em assets/logo.png
  Fallback em texto caso o arquivo não exista (onerror no img)
- Rodapé: "© [ANO DINÂMICO] Prefeitura de Varjota — Secretaria de 
  Educação (SMETEC)" + aviso de direitos autorais da SMETEC-Varjota

## REQUISITOS TÉCNICOS
- Zero dependências externas (exceto Google Fonts via CDN)
- Funciona em file:// e em servidor web
- Caminhos relativos em tudo (sem / absolutos)
- template.js detecta profundidade automaticamente com:
  (window.location.pathname.match(/\//g)||[]).length - 1
- Sem localStorage, sem backend, sem build step
- Entregue TODOS os arquivos prontos para uso imediato