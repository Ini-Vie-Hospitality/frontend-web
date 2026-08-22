export type DiningDestination = {
  name: string;
  location: string;
  category: string;
  image: string;
  href: string;
};

export const diningDestinations: DiningDestination[] = [
  {
    name: "Norii Seminyak",
    location: "Seminyak, Bali",
    category: "Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
    href: "#norii-seminyak",
  },
  {
    name: "Riserva Steakhouse",
    location: "Ubud, Bali",
    category: "Immersive Dining",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    href: "#riserva-steakhouse",
  },
  {
    name: "Terra Verte",
    location: "Ubud, Bali",
    category: "Mediterranean",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    href: "#terra-verte",
  },
];
