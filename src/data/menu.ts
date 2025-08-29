export type MenuItem = {
  id: string;
  name: string;
  price: number;
  desc?: string;
  tag?: "NEW" | "BEST";
  category:
    | "Entradas"
    | "Los de siempre"
    | "Naturales"
    | "Especiales"
    | "Horneados"
    | "Bebidas"
    | "Extras";
};

export const MENU: MenuItem[] = [
  // 🥢 Entradas
  {
    id: "arroz-especial",
    name: "Arroz especial",
    price: 130,
    desc: "Arroz blanco con tampico, surimi, camarones, tocino, philadelphia y aguacate.",
    category: "Entradas",
  },
  {
    id: "gohan",
    name: "Gohan",
    price: 90,
    desc: "Arroz blanco con tampico, aguacate y philadelphia.",
    category: "Entradas",
  },
  {
    id: "pollo-naranja",
    name: "Pollo a la naranja",
    price: 140,
    desc: "Pollo ligeramente capeado en salsa agridulce de naranja.",
    tag: "NEW",
    category: "Entradas",
  },
  {
    id: "camarones-naranja",
    name: "Camarones a la naranja",
    price: 160,
    desc: "Camarones capeados en salsa agridulce de naranja.",
    tag: "NEW",
    category: "Entradas",
  },

  // 🍣 Los de siempre
  {
    id: "mar-tierra",
    name: "Mar y tierra",
    price: 110,
    desc: "Res, camarón, philadelphia y aguacate.",
    category: "Los de siempre",
  },
  {
    id: "tres-quesos",
    name: "Tres quesos",
    price: 120,
    desc: "Philadelphia, manchego, gouda, envuelto en aguacate.",
    category: "Los de siempre",
  },
  {
    id: "california",
    name: "California",
    price: 95,
    desc: "Surimi, aguacate, pepino, tampico.",
    category: "Los de siempre",
  },
  {
    id: "philadelphia-roll",
    name: "Philadelphia",
    price: 95,
    desc: "Philadelphia, aguacate, pepino, tampico.",
    category: "Los de siempre",
  },
  {
    id: "tampico-roll",
    name: "Tampico",
    price: 95,
    desc: "Surimi, aguacate, pepino, tampico.",
    category: "Los de siempre",
  },

  // 🍣 Naturales
  {
    id: "kya-roll",
    name: "Kya roll",
    price: 135,
    desc: "Salmón, aguacate, pepino, philadelphia.",
    tag: "BEST",
    category: "Naturales",
  },
  {
    id: "roca-roll",
    name: "Roca roll",
    price: 155,
    desc: "Atún, aguacate, pepino, salsa especial.",
    tag: "NEW",
    category: "Naturales",
  },
  {
    id: "nordico-roll",
    name: "Nórdico",
    price: 120,
    desc: "Salmón, pepino, queso crema.",
    category: "Naturales",
  },
  {
    id: "atun-fresco-roll",
    name: "Atún fresco",
    price: 130,
    desc: "Atún, pepino, aguacate, philadelphia.",
    category: "Naturales",
  },

  // 🍣 Especiales
  {
    id: "bash-roll",
    name: "Bash roll",
    price: 135,
    desc: "Camarón, aguacate, queso crema, tampico, bañado en salsa especial.",
    tag: "BEST",
    category: "Especiales",
  },
  {
    id: "king-roll",
    name: "King roll",
    price: 150,
    desc: "Camarón, aguacate, philadelphia, tocino, bañado en salsa especial.",
    tag: "BEST",
    category: "Especiales",
  },
  {
    id: "dragon-roll",
    name: "Dragon roll",
    price: 145,
    desc: "Camarón, aguacate, pepino, tampico, cubierto con aguacate y salsa.",
    category: "Especiales",
  },
  {
    id: "ebi-roll",
    name: "Ebi roll",
    price: 135,
    desc: "Camarón empanizado, pepino, philadelphia, bañado en tampico.",
    category: "Especiales",
  },

  // 🍣 Horneados
  {
    id: "campestre-roll",
    name: "Campestre roll",
    price: 155,
    desc: "Roll con topping horneado de queso y tampico.",
    tag: "BEST",
    category: "Horneados",
  },
  {
    id: "volcan-roll",
    name: "Volcán roll",
    price: 150,
    desc: "Roll gratinado con queso, philadelphia y tampico.",
    category: "Horneados",
  },
  {
    id: "spicy-roll",
    name: "Spicy roll",
    price: 145,
    desc: "Roll horneado con salsa picante y queso crema.",
    category: "Horneados",
  },

  // 🥤 Bebidas
  {
    id: "te-casa",
    name: "Té de la casa 1 Lt",
    price: 40,
    category: "Bebidas",
  },
  {
    id: "refresco-lata",
    name: "Refresco en lata",
    price: 25,
    category: "Bebidas",
  },
  {
    id: "agua-botella",
    name: "Agua embotellada",
    price: 20,
    category: "Bebidas",
  },

  // 🍱 Extras
  {
    id: "salsa-anguila",
    name: "Salsa de anguila",
    price: 10,
    category: "Extras",
  },
  {
    id: "soya-extra",
    name: "Soya extra",
    price: 5,
    category: "Extras",
  },
  {
    id: "jengibre",
    name: "Jengibre",
    price: 5,
    category: "Extras",
  },
  {
    id: "wasabi",
    name: "Wasabi",
    price: 5,
    category: "Extras",
  },
];
