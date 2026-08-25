export type DiningDestination = {
  number: string;
  name: string;
  location: string;
  eyebrow: string;
  description: string;
  schedule: string;
  ctaLabel: string;
  image: string;
  href: string;
};

export const diningDestinations: DiningDestination[] = [
  {
    number: "01",
    name: "Norii Seminyak",
    location: "Seminyak, Bali",
    eyebrow: "Japanese Dining",
    description:
      "Precision, fire, and craftsmanship meet in an intimate dining experience in Seminyak.",
    schedule: "New Opening — 2026",
    ctaLabel: "Discover Norii",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
    href: "#norii-seminyak",
  },
  {
    number: "02",
    name: "Riserva Steakhouse",
    location: "Ubud, Bali",
    eyebrow: "Open Fire",
    description:
      "A bold dining experience shaped by premium cuts, open flame, and modern craftsmanship.",
    schedule: "Dinner · 17:00 — 23:00",
    ctaLabel: "Discover Riserva",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    href: "#riserva-steakhouse",
  },
  {
    number: "03",
    name: "Terra Verte",
    location: "Ubud, Bali",
    eyebrow: "Mediterranean",
    description:
      "Mediterranean-inspired flavours, shared plates, and relaxed dining shaped for slow moments.",
    schedule: "New Opening — 2026",
    ctaLabel: "Discover Terra Verte",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    href: "#terra-verte",
  },
  {
    number: "04",
    name: "Habitat Bistro",
    location: "Ubud, Bali",
    eyebrow: "Contemporary Bistro",
    description:
      "A relaxed all-day dining destination pairing familiar flavours with a fresh tropical perspective.",
    schedule: "Breakfast · 07:00 — 23:00",
    ctaLabel: "Discover Habitat",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    href: "#habitat-bistro",
  },
  {
    number: "05",
    name: "Shichirin Ubud",
    location: "Ubud, Bali",
    eyebrow: "Japanese Teppanyaki",
    description:
      "Japanese craft, tableside theatre, and live-fire cooking meet in an intimate Ubud setting.",
    schedule: "Dinner · 17:00 — 23:00",
    ctaLabel: "Discover Shichirin",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
    href: "#shichirin-ubud",
  },
  {
    number: "06",
    name: "Seven Paintings",
    location: "Ubud, Bali",
    eyebrow: "Immersive Fine Dining",
    description:
      "A multi-sensory dinner where storytelling, projection, and refined courses unfold together.",
    schedule: "Dinner Show · Reservation Only",
    ctaLabel: "Discover Seven Paintings",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    href: "#seven-paintings",
  },
];
