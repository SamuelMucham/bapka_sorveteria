// ============================================================
// CONFIGURAÇÃO DO SITE — edite os dados abaixo para personalizar
// ============================================================
// Nome, endereço, telefone e Instagram já vieram do perfil real
// da loja no Google Maps. Confira e ajuste o que precisar antes
// de publicar — em especial os horários e os itens do cardápio,
// que estão marcados como exemplo.

export const site = {
  name: "Sorvetes Bapka Campo do Santana",
  shortName: "Bapka",
  tagline: "Uma colherada de alegria pra família toda",
  description:
    "Sorvetes cremosos, açaí, milk-shakes e picolés num cantinho pensado pra família — com parquinho pra criançada e atendimento que já conhece seu pedido.",

  // Número de WhatsApp da loja (formato internacional, só dígitos)
  whatsappNumber: "5541992932935",
  phoneDisplay: "(41) 99293-2935",

  address: {
    street: "R. Marcos Bertoldi, 748",
    neighborhood: "Campo de Santana",
    city: "Curitiba",
    state: "PR",
    zip: "81490-530",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sorvetes+Bapka+Campo+de+Santana+R.+Marcos+Bertoldi+748+Curitiba",
  },

  instagram: "https://www.instagram.com/bapka_campodesantana/",

  rating: {
    value: 4.6,
    count: 69,
  },

  // Só temos a confirmação de que abre terça às 10h e fecha às segundas.
  // O horário de fechamento não veio no perfil — confirme com a loja
  // antes de publicar.
  hours: [
    { day: "Segunda-feira", time: "Fechado" },
    { day: "Terça a domingo", time: "A partir das 10:00" },
  ],
  hoursNote: "Horário de fechamento pode variar — confirme direto com a loja.",
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

// ============================================================
// CARDÁPIO — itens e preços são exemplos, troque pelos reais
// ============================================================

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  color: "azul" | "amarelo" | "azul-deep" | "amarelo-deep";
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "sorvetes",
    label: "Sorvetes de massa",
    color: "azul",
    items: [
      { name: "Flocos", description: "O clássico que nunca sai de moda.", price: "R$ 12,00" },
      { name: "Chocolate ao leite", description: "Intenso, cremoso, sem enrolação.", price: "R$ 12,00" },
      { name: "Morango com leite ninho", description: "Doce na medida certa.", price: "R$ 14,00" },
      { name: "Doce de leite com nozes", description: "Pra quem gosta de um sorvete mais robusto.", price: "R$ 14,00" },
    ],
  },
  {
    id: "acai",
    label: "Açaí",
    color: "amarelo",
    note: "Monte do seu jeito: banana, granola, leite condensado e mais.",
    items: [
      { name: "Açaí tradicional (300ml)", description: "Puro, na consistência certa.", price: "R$ 15,00" },
      { name: "Açaí completo (500ml)", description: "Com banana, granola e leite condensado.", price: "R$ 22,00" },
      { name: "Açaí com morango", description: "Fresquinho, com frutas de verdade.", price: "R$ 20,00" },
    ],
  },
  {
    id: "milkshakes",
    label: "Milk-shakes",
    color: "azul-deep",
    items: [
      { name: "Milk-shake de chocolate", description: "Batido na hora, bem cremoso.", price: "R$ 16,00" },
      { name: "Milk-shake de morango", description: "Com pedaços de fruta de verdade.", price: "R$ 16,00" },
      { name: "Milk-shake ovomaltine", description: "Crocante e cremoso ao mesmo tempo.", price: "R$ 18,00" },
    ],
  },
  {
    id: "picoles",
    label: "Picolés",
    color: "amarelo-deep",
    items: [
      { name: "Picolé de fruta", description: "Sabores variados, feitos com fruta de verdade.", price: "R$ 6,00" },
      { name: "Picolé recheado", description: "Casquinha de chocolate com recheio cremoso.", price: "R$ 8,00" },
    ],
  },
];
