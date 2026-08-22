export type Property = {
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export const properties: Property[] = [
  {
    name: "Leedon Villa Seminyak",
    category: "Luxury Villa",
    description: "Elegant villa living with warm tropical design, curated privacy, and a memorable Bali stay.",
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85",
    href: "#leedon-villa",
  },
  {
    name: "Ajowa Resort",
    category: "Resort Experience",
    description: "A refined resort experience blending tropical atmosphere, contemporary comfort, and destination-led hospitality.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
    href: "#ajowa-resort",
  },
  {
    name: "La Mewali Resort",
    category: "Resort Experience",
    description: "A considered retreat shaped by lush surroundings, warm service, and the easy rhythm of Bali.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    href: "#la-mewali-resort",
  },
];
