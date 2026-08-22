export type WellnessEscape = {
  id: number;
  name: string;
  location: string;
  image: string;
  tags: string[];
  href: string;
};

export const wellnessEscapes: WellnessEscape[] = [
  {
    id: 1,
    name: "Svaha Spa Ajowa",
    location: "Seminyak, Bali",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=88",
    tags: ["signature ritual", "tropical sanctuary", "spa & wellness"],
    href: "#svaha-spa-ajowa",
  },
  {
    id: 2,
    name: "Svaha Spa La Mewali",
    location: "Canggu, Bali",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=88",
    tags: ["restorative touch", "garden retreat", "spa & wellness"],
    href: "#svaha-spa-la-mewali",
  },
  {
    id: 3,
    name: "Svaha Spa Bisma",
    location: "Ubud, Bali",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=88",
    tags: ["signature ritual", "jungle sanctuary", "spa & wellness"],
    href: "#svaha-spa-bisma",
  },
  {
    id: 4,
    name: "Svaha Wellness",
    location: "Nusa Dua, Bali",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=88",
    tags: ["mindful escape", "coastal calm", "spa & wellness"],
    href: "#svaha-wellness",
  },
];
