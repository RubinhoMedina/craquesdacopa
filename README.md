# Craques do Mundo — Landing Page

Página de vendas implementada diretamente no repositório `RubinhoMedina/craquesdacopa`.

## O que foi corrigido

A versão anterior quebrava imagens porque dependia de caminhos locais como `assets/...` ou de arquivos que não estavam publicados corretamente.

Esta versão foi implementada como **landing page autossuficiente**, sem imagens externas e sem dependência de pasta `assets`.

## Estrutura

```txt
index.html
README.md
.nojekyll
```

## Como publicar no GitHub Pages

1. Acesse `Settings`.
2. Vá em `Pages`.
3. Em `Build and deployment`, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Clique em `Save`.

Depois acesse o link gerado pelo GitHub Pages.

## Como trocar o link de compra

Abra `index.html` e procure por:

```js
const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
```

Troque pelo seu link real de checkout, WhatsApp, Pix ou DEPix.

## Observação

A página foi feita sem imagens externas para eliminar definitivamente erro de ícone quebrado. Os visuais foram recriados com HTML, CSS e SVG inline.