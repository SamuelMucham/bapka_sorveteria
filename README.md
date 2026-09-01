# Sorvetes Bapka — site em Next.js

Site institucional da sorveteria, com cardápio-vitrine (sem carrinho de
compras) e pedidos feitos direto pelo WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## O que já veio preenchido com dados reais

Puxados do perfil da loja no Google Maps:
- Nome, endereço, CEP
- Telefone / WhatsApp
- Link do Instagram
- Nota (4,6) e número de avaliações (69)

**Atenção**: o horário completo não veio no perfil do Maps — só a
confirmação de que abre terça às 10h e fecha às segundas. Confirme o
horário de fechamento com a loja antes de publicar (está marcado com uma
observação no rodapé e na página de Contato).

## O que personalizar

Tudo está centralizado em **`lib/site-config.ts`**:
- Dados da loja (nome, WhatsApp, endereço, horário, Instagram, nota)
- Todos os itens do cardápio (nome, descrição, preço) nas 4 categorias:
  Sorvetes de massa, Açaí, Milk-shakes, Picolés — **os preços e sabores
  são exemplos fictícios**, troque pelos reais.

## Estrutura

```
app/
  layout.tsx        → estrutura raiz, fontes (Baloo 2 + Nunito), Header/Footer
  globals.css         → estilos globais
  page.tsx             → Início (com ilustração de casquinha em SVG)
  sabores/page.tsx     → Cardápio de sabores
  sobre/page.tsx        → Sobre Nós
  contato/page.tsx      → Contato
components/
  Header.tsx            → navegação
  Footer.tsx             → horário, endereço, Instagram, CTA de WhatsApp
  DripCard.tsx           → o elemento-assinatura: cartão com borda
                            "derretendo", usado nas categorias e destaques
  RatingChip.tsx          → selo com a nota e número de avaliações do Google
  WhatsappButton.tsx       → botão de CTA reutilizável, monta o link wa.me
lib/
  site-config.ts           → toda a configuração e o cardápio (edite aqui)
```

## Antes de publicar

- **Preços e sabores** no cardápio são fictícios — ajuste em `site-config.ts`.
- **Horário de fechamento** precisa ser confirmado com a loja.
- **Fotos**: o site não usa fotos (só ilustração SVG e cor), pra não
  depender de imagens de placeholder. Pra adicionar fotos reais da loja e
  dos produtos, coloque os arquivos em `public/` e use `next/image`.
- O link "Ver no mapa" usa uma busca do Google Maps pelo nome e endereço;
  se preferir, troque por um link direto do local em `site-config.ts`.

## Deploy

Next.js padrão (App Router) — funciona em qualquer provedor compatível,
o mais direto é a Vercel:

```bash
npm install -g vercel
vercel
```
