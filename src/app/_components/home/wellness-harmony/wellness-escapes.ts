export type WellnessEscape = {
  id: number;
  categories: string[];
  name: string;
  location: string;
  description: string;
  image: string;
  href: string;
};

export const wellnessEscapes: WellnessEscape[] = [
  {
    id: 1,
    categories: ["Spa", "Resort"],
    name: "Svaha Spa Ajowa",
    location: "Seminyak, Bali",
    description:
      "A restorative sanctuary where traditional rituals, natural ingredients, and quiet surroundings come together in a deeply calming experience.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=88",
    href: "#svaha-spa-ajowa",
  },
  {
    id: 2,
    categories: ["Spa", "Garden Retreat"],
    name: "Svaha Spa La Mewali",
    location: "Canggu, Bali",
    description:
      "Slow treatments and garden air create a gentle pause from the everyday, shaped around touch, stillness, and natural beauty.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=88",
    href: "#svaha-spa-la-mewali",
  },
  {
    id: 3,
    categories: ["Spa", "Jungle Sanctuary"],
    name: "Svaha Spa Bisma",
    location: "Ubud, Bali",
    description:
      "A soulful Ubud escape pairing restorative bodywork with the quiet rhythm of the jungle and the warmth of Balinese hospitality.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=88",
    href: "#svaha-spa-bisma",
  },
  {
    id: 4,
    categories: ["Wellness", "Coastal Calm"],
    name: "Svaha Wellness",
    location: "Nusa Dua, Bali",
    description:
      "Mindful rituals, open space, and coastal calm come together in a restorative experience designed to bring body and spirit back into balance.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=88",
    href: "#svaha-wellness",
  },
];
