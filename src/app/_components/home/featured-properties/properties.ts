export type Property = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  objectPosition: string;
  href: string;
};

export const properties: Property[] = [
  {
    id: 1,
    name: "Leedon Villa Seminyak",
    category: "Luxury Villa",
    description:
      "Elegant villa living with warm tropical design, curated privacy, and a memorable Bali stay.",
    image: "/properties/leedon-villa.webp",
    objectPosition: "center center",
    href: "#leedon-villa",
  },
  {
    id: 2,
    name: "Ajowa Resort",
    category: "Resort Experience",
    description:
      "A refined resort experience blending tropical atmosphere, contemporary comfort, and destination-led hospitality.",
    image: "/properties/ajowa.avif",
    objectPosition: "center center",
    href: "#ajowa-resort",
  },
  {
    id: 3,
    name: "La Mewali Resort",
    category: "Resort Experience",
    description:
      "A considered retreat shaped by lush surroundings, warm service, and the easy rhythm of Bali.",
    image: "/properties/la-mewali.webp",
    objectPosition: "center center",
    href: "#la-mewali-resort",
  },
];
