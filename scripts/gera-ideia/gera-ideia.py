#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
Varjota DigiEdu — scripts/gera-ideia/gera-ideia.py
=============================================================================
Lê um CSV com ideias pedagógicas e injeta os itens novos nas variáveis
IDEIAS_EI, IDEIAS_AI ou IDEIAS_AF dentro do arquivo pages/banco-ideias.html.

USO:
    python3 scripts/gera-ideia/gera-ideia.py scripts/gera-ideia/ideias.csv

COLUNAS OBRIGATÓRIAS DO CSV:
    segmento, titulo, emoji, disciplina, anos, tipo, descricao,
    objetivo, passos, materiais, habilidades, duracao, agrupamento

    Campos com múltiplos valores (separados por pipe "|"):
      - anos        ex: "3º ano|4º ano"
      - tipo        ex: "pratica|digital"
      - passos      ex: "Apresente o tema|Divida em grupos|Apresentação final"
      - materiais   ex: "Papel A4|Lápis de cor"
      - habilidades ex: "EF03CI01:Observar fenômenos|EF03CI02:Descrever ciclos"
                        (código e descrição separados por ":")

    segmento: 'ei' | 'ai' | 'af'
    agrupamento: 'individual' | 'duplas' | 'grupos' | 'turma'
=============================================================================
"""

import csv
import json
import os
import re
import sys
from collections import defaultdict
from datetime import datetime

# ── Configuração ──────────────────────────────────────────────────────────────

CAMINHO_HTML = os.path.join("pages", "banco-ideias.html")

SEGMENTOS = {
    "ei": {"var": "IDEIAS_EI", "prefixo": "ei"},
    "ai": {"var": "IDEIAS_AI", "prefixo": "ai"},
    "af": {"var": "IDEIAS_AF", "prefixo": "af"},
}

TIPOS_VALIDOS = {"pratica","digital","debate","pesquisa","projeto","jogo"}
AGRUPAMENTOS_VALIDOS = {"individual","duplas","grupos","turma"}

# ── Helpers ───────────────────────────────────────────────────────────────────

def extrair_ids_existentes(conteudo, prefixo):
    """Extrai números de IDs do segmento. Ex: 'ai-003' → 3."""
    padrao = rf"id:\s*['\"]({re.escape(prefixo)}-(\d+))['\"]"
    numeros = [int(m.group(2)) for m in re.finditer(padrao, conteudo)]
    return numeros


def proximo_id(conteudo, prefixo):
    """Retorna próximo ID formatado. Ex: 'ai-004'."""
    existentes = extrair_ids_existentes(conteudo, prefixo)
    proximo = (max(existentes) + 1) if existentes else 1
    return f"{prefixo}-{proximo:03d}"


def lista_str(valores):
    """Lista Python → array JS de strings."""
    return "[" + ", ".join(f"'{v}'" for v in valores) + "]"


def lista_habilidades(habilidades):
    """
    Converte lista de 'CODIGO:descricao' em array JS de objetos.
    Ex: ['EF03CI01:Observar fenômenos'] →
        [{codigo: 'EF03CI01', desc: 'Observar fenômenos'}]
    """
    if not habilidades or habilidades == ['']:
        return "[]"
    itens = []
    for h in habilidades:
        if ":" in h:
            codigo, desc = h.split(":", 1)
            itens.append(
                f"{{codigo: '{codigo.strip()}', desc: {json.dumps(desc.strip(), ensure_ascii=False)}}}"
            )
        else:
            itens.append(f"{{codigo: '{h.strip()}', desc: ''}}")
    return "[\n            " + ",\n            ".join(itens) + "\n          ]"


def ideia_para_js(ideia, indent="  "):
    """Serializa um objeto ideia para bloco JS formatado."""
    i = indent
    ii = indent + "  "
    return (
        f"{i}{{\n"
        f"{ii}id: '{ideia['id']}',\n"
        f"{ii}titulo: {json.dumps(ideia['titulo'], ensure_ascii=False)},\n"
        f"{ii}emoji: '{ideia['emoji']}',\n"
        f"{ii}segmento: '{ideia['segmento']}',\n"
        f"{ii}disciplina: '{ideia['disciplina']}',\n"
        f"{ii}anos: {lista_str(ideia['anos'])},\n"
        f"{ii}tipo: {lista_str(ideia['tipo'])},\n"
        f"{ii}descricao: {json.dumps(ideia['descricao'], ensure_ascii=False)},\n"
        f"{ii}objetivo: {json.dumps(ideia['objetivo'], ensure_ascii=False)},\n"
        f"{ii}passos: {lista_str(ideia['passos'])},\n"
        f"{ii}materiais: {lista_str(ideia['materiais'])},\n"
        f"{ii}habilidades: {lista_habilidades(ideia['habilidades'])},\n"
        f"{ii}duracao: '{ideia['duracao']}',\n"
        f"{ii}agrupamento: '{ideia['agrupamento']}'\n"
        f"{i}}}"
    )


def injetar_na_variavel(conteudo, var_nome, novo_bloco):
    """
    Injeta novo_bloco antes do marcador de fim na variável JS correta.
    Marcador: /* Adicione novas ideias aqui ↓ */
    """
    marcador = "/* Adicione novas ideias aqui ↓ */"

    # Encontra o contexto da variável correta (pode haver múltiplos marcadores)
    # Procura o marcador dentro do escopo da variável
    padrao_var = rf"(var {re.escape(var_nome)}\s*=\s*\[.*?)(\/\* Adicione novas ideias aqui ↓ \*\/)"
    match = re.search(padrao_var, conteudo, re.DOTALL)

    if match:
        pos_marcador = match.start(2)
        antes  = conteudo[:pos_marcador]
        depois = conteudo[pos_marcador:]
        return antes + novo_bloco + ",\n\n  " + depois
    else:
        # Fallback: insere antes do fechamento da variável
        padrao_close = rf"(var {re.escape(var_nome)}\s*=\s*\[.*?)(\n\];)"
        return re.sub(padrao_close, rf"\1\n{novo_bloco},\n\2", conteudo, count=1, flags=re.DOTALL)


def validar_linha(linha, num):
    """Valida campos obrigatórios. Retorna lista de erros."""
    erros = []

    seg = linha.get("segmento","").strip().lower()
    if seg not in SEGMENTOS:
        erros.append(f"segmento '{seg}' inválido (use: ei, ai, af)")

    if not linha.get("titulo","").strip():
        erros.append("campo 'titulo' vazio")

    if not linha.get("disciplina","").strip():
        erros.append("campo 'disciplina' vazio")

    if not linha.get("anos","").strip():
        erros.append("campo 'anos' vazio")

    tipos_raw = [t.strip() for t in linha.get("tipo","").split("|") if t.strip()]
    tipos_inv = [t for t in tipos_raw if t not in TIPOS_VALIDOS]
    if tipos_inv:
        erros.append(f"tipo(s) inválido(s): {tipos_inv} — use: {', '.join(sorted(TIPOS_VALIDOS))}")

    agrup = linha.get("agrupamento","").strip()
    if agrup not in AGRUPAMENTOS_VALIDOS:
        erros.append(f"agrupamento '{agrup}' inválido — use: {', '.join(sorted(AGRUPAMENTOS_VALIDOS))}")

    if not linha.get("descricao","").strip():
        erros.append("campo 'descricao' vazio")

    if not linha.get("duracao","").strip():
        erros.append("campo 'duracao' vazio")

    return erros


# ── Processamento principal ───────────────────────────────────────────────────

def processar_csv(caminho_csv):
    """Lê o CSV e agrupa as linhas válidas por segmento."""
    grupos = defaultdict(list)
    erros_totais = []

    with open(caminho_csv, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        reader.fieldnames = [c.strip() for c in reader.fieldnames]

        colunas_obrigatorias = {
            "segmento","titulo","emoji","disciplina","anos","tipo",
            "descricao","objetivo","passos","materiais",
            "habilidades","duracao","agrupamento"
        }
        faltando = colunas_obrigatorias - set(reader.fieldnames)
        if faltando:
            print(f"\n❌ ERRO: O CSV não tem as colunas: {', '.join(sorted(faltando))}")
            print(f"   Colunas encontradas: {', '.join(reader.fieldnames)}")
            sys.exit(1)

        for num, linha in enumerate(reader, start=2):
            linha = {k: v.strip() for k, v in linha.items()}
            erros = validar_linha(linha, num)
            if erros:
                for e in erros:
                    erros_totais.append(f"  Linha {num}: {e}")
                continue

            seg = linha["segmento"].strip().lower()
            grupos[seg].append({
                "segmento":    seg,
                "titulo":      linha["titulo"],
                "emoji":       linha.get("emoji","📌"),
                "disciplina":  linha["disciplina"],
                "anos":        [a.strip() for a in linha["anos"].split("|") if a.strip()],
                "tipo":        [t.strip() for t in linha["tipo"].split("|") if t.strip()],
                "descricao":   linha.get("descricao",""),
                "objetivo":    linha.get("objetivo",""),
                "passos":      [p.strip() for p in linha["passos"].split("|") if p.strip()],
                "materiais":   [m.strip() for m in linha.get("materiais","").split("|") if m.strip()],
                "habilidades": [h.strip() for h in linha.get("habilidades","").split("|") if h.strip()],
                "duracao":     linha.get("duracao",""),
                "agrupamento": linha.get("agrupamento","grupos"),
            })

    if erros_totais:
        print(f"\n⚠️  {len(erros_totais)} erro(s) encontrado(s) no CSV — linhas ignoradas:")
        for e in erros_totais:
            print(e)
        print()

    return grupos


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("USO: python3 scripts/gera-ideia/gera-ideia.py <arquivo.csv>")
        sys.exit(1)

    caminho_csv = sys.argv[1]
    if not os.path.exists(caminho_csv):
        print(f"❌ Arquivo CSV não encontrado: {caminho_csv}")
        sys.exit(1)

    if not os.path.exists(CAMINHO_HTML):
        print(f"❌ Arquivo HTML não encontrado: {CAMINHO_HTML}")
        print("   Execute o script a partir da raiz do projeto.")
        sys.exit(1)

    print(f"\n{'='*60}")
    print(f"  Varjota DigiEdu — gera-ideia.py")
    print(f"  CSV:  {caminho_csv}")
    print(f"  HTML: {CAMINHO_HTML}")
    print(f"  {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print(f"{'='*60}\n")

    grupos = processar_csv(caminho_csv)

    if not grupos:
        print("❌ Nenhum item válido encontrado no CSV.")
        sys.exit(1)

    with open(CAMINHO_HTML, "r", encoding="utf-8") as f:
        conteudo = f.read()

    total_adicionados = 0
    nomes_seg = {"ei": "Educação Infantil", "ai": "Anos Iniciais", "af": "Anos Finais"}

    for seg, ideias in sorted(grupos.items()):
        cfg = SEGMENTOS[seg]
        prefixo = cfg["prefixo"]
        var_nome = cfg["var"]
        print(f"📚 {nomes_seg[seg]} — {var_nome} ({len(ideias)} ideia(s)):")

        for ideia in ideias:
            ideia["id"] = proximo_id(conteudo, prefixo)
            bloco = ideia_para_js(ideia)
            conteudo = injetar_na_variavel(conteudo, var_nome, bloco)
            total_adicionados += 1
            print(f"    ✓ [{ideia['id']}] {ideia['titulo'][:55]}")

        print()

    with open(CAMINHO_HTML, "w", encoding="utf-8") as f:
        f.write(conteudo)

    print(f"{'='*60}")
    print(f"  ✅ Concluído — {total_adicionados} ideia(s) adicionada(s) em {CAMINHO_HTML}")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
