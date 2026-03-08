#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
Varjota DigiEdu — scripts/gera-aba/gera-aba.py
=============================================================================
Lê um CSV com links de recursos externos e injeta os itens novos
nos arquivos disciplinas/dados/links-[disciplina].js correspondentes.

USO:
    python3 gera-aba.py links.csv

    O script deve ser executado a partir da raiz do projeto:
    python3 scripts/gera-aba/gera-aba.py scripts/gera-aba/links.csv

COLUNAS OBRIGATÓRIAS DO CSV:
    disciplina, titulo, descricao, url, aba,
    anos, tipo_recurso, tipo_uso, acessibilidade

    - anos e acessibilidade: valores separados por pipe "|"
      ex: "6º ano|7º ano"   /   "libras|TEA"
    - acessibilidade pode ficar vazio para itens fora da aba acessibilidade
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

# Mapeamento slug → nome da variável JS e prefixo de ID
DISCIPLINA_CONFIG = {
    "arte":               {"var": "LINKS_ARTE",               "prefix": "ar"},
    "ciencias":           {"var": "LINKS_CIENCIAS",           "prefix": "ci"},
    "educacao-fisica":    {"var": "LINKS_EDUCACAO_FISICA",    "prefix": "ef"},
    "educacao-infantil":  {"var": "LINKS_EDUCACAO_INFANTIL",  "prefix": "ei"},
    "ensino-religioso":   {"var": "LINKS_ENSINO_RELIGIOSO",   "prefix": "er"},
    "geografia":          {"var": "LINKS_GEOGRAFIA",          "prefix": "ge"},
    "historia":           {"var": "LINKS_HISTORIA",           "prefix": "hi"},
    "lingua-inglesa":     {"var": "LINKS_LINGUA_INGLESA",     "prefix": "li"},
    "lingua-portuguesa":  {"var": "LINKS_LINGUA_PORTUGUESA",  "prefix": "lp"},
    "matematica":         {"var": "LINKS_MATEMATICA",         "prefix": "ma"},
}

# Sufixos de aba para composição do ID
ABA_SUFIXO = {
    "atividades":    "at",
    "reds":          "re",
    "materiais":     "ma",
    "acessibilidade":"ac",
}

ABAS_VALIDAS       = set(ABA_SUFIXO.keys())
TIPOS_RECURSO_VALIDOS = {
    "video","pdf","site","apresentacao","planilha","podcast",
    "jogo","simulador","aplicativo","infografico",
    "atividade-interativa","mapa","outros"
}
TIPOS_USO_VALIDOS  = {"teorico","pratico","avaliativo","complementar"}
AC_VALIDOS         = {
    "libras","audiodescrição","daltonismo","baixa-visao",
    "TEA","TDAH","deficiencia-intelectual","deficiencia-fisica","altas-habilidades"
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def caminho_js(disciplina):
    """Retorna o caminho do arquivo JS a partir da raiz do projeto."""
    return os.path.join("disciplinas", "dados", f"links-{disciplina}.js")


def extrair_ids_existentes(conteudo_js, prefixo, sufixo_aba):
    """
    Extrai os números dos IDs já existentes para uma aba específica.
    Ex: 'ci-at-001' → 1
    """
    padrao = rf"id:\s*['\"]({re.escape(prefixo)}-{re.escape(sufixo_aba)}-(\d+))['\"]"
    numeros = [int(m.group(2)) for m in re.finditer(padrao, conteudo_js)]
    return numeros


def proximo_id(conteudo_js, prefixo, sufixo_aba):
    """Retorna o próximo ID formatado (ex: 'ci-at-004')."""
    existentes = extrair_ids_existentes(conteudo_js, prefixo, sufixo_aba)
    proximo = (max(existentes) + 1) if existentes else 1
    return f"{prefixo}-{sufixo_aba}-{proximo:03d}"


def lista_para_js(valores):
    """Converte lista Python para string de array JS."""
    itens = ", ".join(f"'{v}'" for v in valores)
    return f"[{itens}]"


def item_para_js(item, indent="  "):
    """Serializa um item de link para bloco JS formatado."""
    ac = lista_para_js(item["acessibilidade"])
    anos = lista_para_js(item["anos"])
    linhas = [
        f"{indent}{{",
        f"{indent}  id: '{item['id']}',",
        f"{indent}  titulo: {json.dumps(item['titulo'], ensure_ascii=False)},",
        f"{indent}  descricao: {json.dumps(item['descricao'], ensure_ascii=False)},",
        f"{indent}  url: '{item['url']}',",
        f"{indent}  aba: '{item['aba']}',",
        f"{indent}  anos: {anos},",
        f"{indent}  tipo_recurso: '{item['tipo_recurso']}',",
        f"{indent}  tipo_uso: '{item['tipo_uso']}',",
        f"{indent}  acessibilidade: {ac}",
        f"{indent}}}",
    ]
    return "\n".join(linhas)


def injetar_no_js(conteudo, novo_bloco, marcador):
    """
    Injeta novo_bloco antes do marcador de fim no array JS.
    Marcador padrão: '  /* Adicione novos links aqui ↓ */'
    """
    if marcador not in conteudo:
        # Fallback: insere antes do fechamento do array
        padrao = r'(\n\];)'
        return re.sub(padrao, f"\n{novo_bloco},\n\n\\1", conteudo, count=1)
    return conteudo.replace(marcador, f"{novo_bloco},\n\n  {marcador.strip()}")


def validar_linha(linha, num):
    """Valida campos obrigatórios e valores permitidos. Retorna lista de erros."""
    erros = []

    if not linha.get("disciplina"):
        erros.append("campo 'disciplina' vazio")
    elif linha["disciplina"] not in DISCIPLINA_CONFIG:
        erros.append(f"disciplina '{linha['disciplina']}' não reconhecida")

    if not linha.get("titulo","").strip():
        erros.append("campo 'titulo' vazio")

    if not linha.get("url","").strip():
        erros.append("campo 'url' vazio")

    aba = linha.get("aba","").strip()
    if aba not in ABAS_VALIDAS:
        erros.append(f"aba '{aba}' inválida (valores: {', '.join(sorted(ABAS_VALIDAS))})")

    tr = linha.get("tipo_recurso","").strip()
    if tr not in TIPOS_RECURSO_VALIDOS:
        erros.append(f"tipo_recurso '{tr}' inválido")

    tu = linha.get("tipo_uso","").strip()
    if tu not in TIPOS_USO_VALIDOS:
        erros.append(f"tipo_uso '{tu}' inválido")

    if not linha.get("anos","").strip():
        erros.append("campo 'anos' vazio")

    return erros


# ── Processamento principal ───────────────────────────────────────────────────

def processar_csv(caminho_csv):
    """Lê o CSV e agrupa as linhas válidas por disciplina."""
    grupos = defaultdict(list)
    erros_totais = []

    with open(caminho_csv, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)

        # Normaliza nomes de colunas (remove espaços extras)
        reader.fieldnames = [c.strip() for c in reader.fieldnames]

        colunas_obrigatorias = {
            "disciplina","titulo","descricao","url","aba",
            "anos","tipo_recurso","tipo_uso","acessibilidade"
        }
        faltando = colunas_obrigatorias - set(reader.fieldnames)
        if faltando:
            print(f"\n❌ ERRO: O CSV não tem as colunas: {', '.join(sorted(faltando))}")
            print(f"   Colunas encontradas: {', '.join(reader.fieldnames)}")
            sys.exit(1)

        for num, linha in enumerate(reader, start=2):  # linha 1 = cabeçalho
            linha = {k: v.strip() for k, v in linha.items()}
            erros = validar_linha(linha, num)
            if erros:
                for e in erros:
                    erros_totais.append(f"  Linha {num}: {e}")
                continue

            # Parseia anos e acessibilidade (separados por |)
            anos = [a.strip() for a in linha["anos"].split("|") if a.strip()]
            ac   = [a.strip() for a in linha.get("acessibilidade","").split("|") if a.strip()]

            # Valida itens de acessibilidade
            ac_invalidos = [a for a in ac if a not in AC_VALIDOS]
            if ac_invalidos:
                erros_totais.append(
                    f"  Linha {num}: acessibilidade com valor(es) inválido(s): {ac_invalidos}"
                )
                continue

            grupos[linha["disciplina"]].append({
                "disciplina":   linha["disciplina"],
                "titulo":       linha["titulo"],
                "descricao":    linha.get("descricao",""),
                "url":          linha["url"],
                "aba":          linha["aba"],
                "anos":         anos,
                "tipo_recurso": linha["tipo_recurso"],
                "tipo_uso":     linha["tipo_uso"],
                "acessibilidade": ac,
            })

    if erros_totais:
        print(f"\n⚠️  {len(erros_totais)} erro(s) encontrado(s) no CSV — linhas ignoradas:")
        for e in erros_totais:
            print(e)
        print()

    return grupos


def processar_disciplina(disciplina, itens):
    """Injeta os itens no arquivo JS da disciplina."""
    cfg      = DISCIPLINA_CONFIG[disciplina]
    prefixo  = cfg["prefix"]
    js_path  = caminho_js(disciplina)

    if not os.path.exists(js_path):
        print(f"  ⚠️  Arquivo não encontrado: {js_path} — disciplina ignorada.")
        return 0

    with open(js_path, "r", encoding="utf-8") as f:
        conteudo = f.read()

    marcador = "/* Adicione novos links aqui ↓ */"
    blocos_adicionados = 0

    for item in itens:
        aba       = item["aba"]
        sufixo    = ABA_SUFIXO[aba]
        item["id"] = proximo_id(conteudo, prefixo, sufixo)

        bloco = item_para_js(item)
        conteudo = injetar_no_js(conteudo, bloco, marcador)
        blocos_adicionados += 1
        print(f"    ✓ [{item['id']}] {item['titulo'][:55]}")

    with open(js_path, "w", encoding="utf-8") as f:
        f.write(conteudo)

    return blocos_adicionados


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        print("USO: python3 scripts/gera-aba/gera-aba.py <arquivo.csv>")
        sys.exit(1)

    caminho_csv = sys.argv[1]
    if not os.path.exists(caminho_csv):
        print(f"❌ Arquivo CSV não encontrado: {caminho_csv}")
        sys.exit(1)

    print(f"\n{'='*60}")
    print(f"  Varjota DigiEdu — gera-aba.py")
    print(f"  CSV: {caminho_csv}")
    print(f"  {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print(f"{'='*60}\n")

    grupos = processar_csv(caminho_csv)

    if not grupos:
        print("❌ Nenhum item válido encontrado no CSV.")
        sys.exit(1)

    total_adicionados = 0
    for disciplina, itens in sorted(grupos.items()):
        print(f"📘 {disciplina} ({len(itens)} item(s)):")
        n = processar_disciplina(disciplina, itens)
        total_adicionados += n
        print()

    print(f"{'='*60}")
    print(f"  ✅ Concluído — {total_adicionados} item(s) adicionado(s)")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()