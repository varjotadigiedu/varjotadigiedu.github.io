#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
Varjota DigiEdu — scripts/gera-ideia/gera-ideia.py
=============================================================================
Lê um CSV com ideias pedagógicas e injeta os itens novos nos arquivos JS
separados por etapa:
  - dados/ideias-ei.js  → Educação Infantil
  - dados/ideias-ai.js  → Anos Iniciais (1º ao 5º ano)
  - dados/ideias-af.js  → Anos Finais   (6º ao 9º ano)

USO:
    python3 scripts/gera-ideia/gera-ideia.py scripts/gera-ideia/ideias.csv

    Execute a partir da raiz do projeto.

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

    segmento:    'ei' | 'ai' | 'af'
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

SEGMENTOS = {
    "ei": {
        "var":      "IDEIAS_EI",
        "prefixo":  "ei",
        "arquivo":  os.path.join("pages", "dados", "ideias-ei.js"),
        "marcador": "/* Adicione novas ideias da Educação Infantil aqui ↓ */",
    },
    "ai": {
        "var":      "IDEIAS_AI",
        "prefixo":  "ai",
        "arquivo":  os.path.join("pages", "dados", "ideias-ai.js"),
        "marcador": "/* Adicione novas ideias dos Anos Iniciais aqui ↓ */",
    },
    "af": {
        "var":      "IDEIAS_AF",
        "prefixo":  "af",
        "arquivo":  os.path.join("pages", "dados", "ideias-af.js"),
        "marcador": "/* Adicione novas ideias dos Anos Finais aqui ↓ */",
    },
}

TIPOS_VALIDOS        = {"pratica", "digital", "debate", "pesquisa", "projeto", "jogo"}
AGRUPAMENTOS_VALIDOS = {"individual", "duplas", "grupos", "turma"}

# ── Helpers ───────────────────────────────────────────────────────────────────

def extrair_ids_existentes(conteudo, prefixo):
    """Extrai números dos IDs já existentes. Ex: 'ai-003' → 3."""
    padrao = rf"id:\s*['\"]({re.escape(prefixo)}-(\d+))['\"]"
    numeros = [int(m.group(2)) for m in re.finditer(padrao, conteudo)]
    return numeros


def proximo_id(conteudo, prefixo):
    """Retorna próximo ID formatado. Ex: 'ai-005'."""
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
        [{ codigo: 'EF03CI01', desc: 'Observar fenômenos' }]
    """
    if not habilidades or habilidades == [""]:
        return "[]"
    itens = []
    for h in habilidades:
        if ":" in h:
            codigo, desc = h.split(":", 1)
            itens.append(
                f"{{ codigo: '{codigo.strip()}', desc: {json.dumps(desc.strip(), ensure_ascii=False)} }}"
            )
        else:
            itens.append(f"{{ codigo: '{h.strip()}', desc: '' }}")
    return "[\n      " + ",\n      ".join(itens) + "\n    ]"


def ideia_para_js(ideia):
    """Serializa um objeto ideia para bloco JS formatado."""
    return (
        f"  {{\n"
        f"    id: '{ideia['id']}',\n"
        f"    titulo: {json.dumps(ideia['titulo'], ensure_ascii=False)},\n"
        f"    emoji: '{ideia['emoji']}',\n"
        f"    segmento: '{ideia['segmento']}',\n"
        f"    disciplina: '{ideia['disciplina']}',\n"
        f"    anos: {lista_str(ideia['anos'])},\n"
        f"    tipo: {lista_str(ideia['tipo'])},\n"
        f"    descricao: {json.dumps(ideia['descricao'], ensure_ascii=False)},\n"
        f"    objetivo: {json.dumps(ideia['objetivo'], ensure_ascii=False)},\n"
        f"    passos: {lista_str(ideia['passos'])},\n"
        f"    materiais: {lista_str(ideia['materiais'])},\n"
        f"    habilidades: {lista_habilidades(ideia['habilidades'])},\n"
        f"    duracao: '{ideia['duracao']}',\n"
        f"    agrupamento: '{ideia['agrupamento']}',\n"
        f"  }}"
    )


def injetar_no_js(conteudo, novo_bloco, marcador):
    """
    Injeta novo_bloco antes do marcador no arquivo JS.
    O último item já tem vírgula no arquivo — basta inserir antes do marcador.
    """
    if marcador not in conteudo:
        # Fallback: insere antes do fechamento do array
        return re.sub(r"(\n\];)", f"\n{novo_bloco},\n\\1", conteudo, count=1)

    # O marcador no arquivo tem '  ' antes — substituímos esse trecho inteiro
    alvo = "  " + marcador
    if alvo in conteudo:
        return conteudo.replace(alvo, novo_bloco + ",\n\n  " + marcador, 1)
    return conteudo.replace(marcador, novo_bloco + ",\n\n  " + marcador, 1)


# ── Validação ─────────────────────────────────────────────────────────────────

def validar_linha(linha, num):
    """Valida campos obrigatórios e valores permitidos. Retorna lista de erros."""
    erros = []

    seg = linha.get("segmento", "").strip().lower()
    if seg not in SEGMENTOS:
        erros.append(f"segmento '{seg}' inválido — use: ei, ai, af")

    if not linha.get("titulo", "").strip():
        erros.append("campo 'titulo' vazio")

    if not linha.get("disciplina", "").strip():
        erros.append("campo 'disciplina' vazio")

    if not linha.get("anos", "").strip():
        erros.append("campo 'anos' vazio")

    tipos_raw = [t.strip() for t in linha.get("tipo", "").split("|") if t.strip()]
    tipos_inv = [t for t in tipos_raw if t not in TIPOS_VALIDOS]
    if tipos_inv:
        erros.append(f"tipo(s) inválido(s): {tipos_inv} — use: {', '.join(sorted(TIPOS_VALIDOS))}")

    agrup = linha.get("agrupamento", "").strip()
    if agrup not in AGRUPAMENTOS_VALIDOS:
        erros.append(f"agrupamento '{agrup}' inválido — use: {', '.join(sorted(AGRUPAMENTOS_VALIDOS))}")

    if not linha.get("descricao", "").strip():
        erros.append("campo 'descricao' vazio")

    if not linha.get("duracao", "").strip():
        erros.append("campo 'duracao' vazio")

    return erros


# ── Processamento CSV ─────────────────────────────────────────────────────────

def processar_csv(caminho_csv):
    """Lê o CSV e agrupa as linhas válidas por segmento."""
    grupos = defaultdict(list)
    erros_totais = []

    with open(caminho_csv, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        reader.fieldnames = [c.strip() for c in reader.fieldnames]

        colunas_obrigatorias = {
            "segmento", "titulo", "emoji", "disciplina", "anos", "tipo",
            "descricao", "objetivo", "passos", "materiais",
            "habilidades", "duracao", "agrupamento"
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
                "emoji":       linha.get("emoji", "📌"),
                "disciplina":  linha["disciplina"],
                "anos":        [a.strip() for a in linha["anos"].split("|") if a.strip()],
                "tipo":        [t.strip() for t in linha["tipo"].split("|") if t.strip()],
                "descricao":   linha.get("descricao", ""),
                "objetivo":    linha.get("objetivo", ""),
                "passos":      [p.strip() for p in linha["passos"].split("|") if p.strip()],
                "materiais":   [m.strip() for m in linha.get("materiais", "").split("|") if m.strip()],
                "habilidades": [h.strip() for h in linha.get("habilidades", "").split("|") if h.strip()],
                "duracao":     linha.get("duracao", ""),
                "agrupamento": linha.get("agrupamento", "grupos"),
            })

    if erros_totais:
        print(f"\n⚠️  {len(erros_totais)} erro(s) encontrado(s) no CSV — linhas ignoradas:")
        for e in erros_totais:
            print(e)
        print()

    return grupos


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("USO: python3 scripts/gera-ideia/gera-ideia.py <arquivo.csv>")
        sys.exit(1)

    caminho_csv = sys.argv[1]
    if not os.path.exists(caminho_csv):
        print(f"❌ Arquivo CSV não encontrado: {caminho_csv}")
        sys.exit(1)

    print(f"\n{'='*60}")
    print(f"  Varjota DigiEdu — gera-ideia.py")
    print(f"  CSV: {caminho_csv}")
    print(f"  {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print(f"{'='*60}\n")

    grupos = processar_csv(caminho_csv)

    if not grupos:
        print("❌ Nenhum item válido encontrado no CSV.")
        sys.exit(1)

    nomes_seg = {
        "ei": "Educação Infantil",
        "ai": "Anos Iniciais",
        "af": "Anos Finais",
    }
    total_adicionados = 0

    for seg, ideias in sorted(grupos.items()):
        cfg      = SEGMENTOS[seg]
        prefixo  = cfg["prefixo"]
        arquivo  = cfg["arquivo"]
        marcador = cfg["marcador"]

        if not os.path.exists(arquivo):
            print(f"  ⚠️  Arquivo não encontrado: {arquivo} — segmento '{seg}' ignorado.")
            print(f"      Execute o script a partir da raiz do projeto.\n")
            continue

        print(f"📚 {nomes_seg[seg]} → {arquivo} ({len(ideias)} ideia(s)):")

        with open(arquivo, "r", encoding="utf-8") as f:
            conteudo = f.read()

        for ideia in ideias:
            ideia["id"] = proximo_id(conteudo, prefixo)
            bloco = ideia_para_js(ideia)
            conteudo = injetar_no_js(conteudo, bloco, marcador)
            total_adicionados += 1
            print(f"    ✓ [{ideia['id']}] {ideia['titulo'][:55]}")

        with open(arquivo, "w", encoding="utf-8") as f:
            f.write(conteudo)

        print()

    print(f"{'='*60}")
    print(f"  ✅ Concluído — {total_adicionados} ideia(s) adicionada(s)")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()