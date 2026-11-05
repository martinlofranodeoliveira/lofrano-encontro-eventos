---
name: "Encontro"
description: "Sistema visual implementado — Entretenimento & eventos"
colors:
  primary: "#ffcd56"
  background: "#21132e"
  text: "#fff5df"
  surface: "#d5b2f3"
  accent: "#d6b4f3"
  dark-text: "#2b1738"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(62px, 8vw, 110px)"
    fontWeight: 900
    lineHeight: 0.91
    letterSpacing: "-5px"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    lineHeight: 1.5
---

# Design System: Encontro

## Overview

Evento conceitual de energia cultural: roxo profundo, amarelo, lavanda e display pesado. Fotografia, símbolo orbital e programação em linhas formam a assinatura.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/encontro). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Amarelo ilumina ação, horários, contagem e sessões salvas. Lavanda marca categoria ativa e faixa final; roxo mantém a base da programação. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

O corpo usa Arial/Helvetica e os títulos herdam Manrope; trechos editoriais usam Georgia. A partir de (1400px), hero usa (110px); até (760px), (59px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero com mínimo de (650px), introdução em duas colunas, programação em linhas e fechamento horizontal. Até (760px), hero usa mínimo de (550px), introdução/fechamento viram coluna e as linhas de sessão compactam; o botão de salvar vai de (40px) para (34px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Gradiente sobre fotografia e símbolo orbital sobreposto criam a abertura. Programação usa linhas e planos de cor, sem sombra.

## Shapes

Ação principal retangular, filtros em pílulas (30px) e controles de salvar circulares. Símbolo orbital rotacionado (15deg). A imagem conceitual está em [`assets/encontro.webp`](../assets/encontro.webp); preservar seu recorte definido pelo CSS.

## Components

- Categorias: `aria-pressed` troca a lista de sessões; categoria ativa usa lavanda e texto escuro.
- Agenda: cada sessão pode ser salva ou removida; botão ativo fica amarelo. Contagem e status acompanham a seleção local.
- Navegação: âncoras conduzem à programação; não há inscrição real.
- Estados compartilhados: Âncoras, botões e seletores da demonstração sobrescrevem o foco para contorno da cor corrente (3px), afastado (5px); a moldura usa rosa. A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Conservar display pesado, horários amarelos e programação em linhas.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Converter sessão salva em ingresso, inscrição ou confirmação de presença.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
