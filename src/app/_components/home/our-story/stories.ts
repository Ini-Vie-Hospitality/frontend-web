import type { RevealVariant } from "@/components/ui/reveal/reveal-motion";

export type StoryBlockData = {
  title: string;
  description: string;
  image: string;
  alt: string;
  cta?: string;
  href?: string;
  imageSide: "left" | "right";
  copyReveal: RevealVariant;
  imageReveal: RevealVariant;
};

export const storyBlocks = [
  {
    title: "About Us",
    description:
      "iNi ViE Hospitality manages a growing portfolio of luxury resorts, private pool villas, restaurants, spas, beach clubs, family attractions, and curated experiences in Bali. Our approach combines local culture, contemporary hospitality, and experience-led concepts to create journeys that feel personal, relevant, and worth returning to.",
    image: "/our-story/infinity-pool.png",
    alt: "Luxury iNi ViE villa and infinity pool overlooking the Bali landscape",
    cta: "Explore Our Story",
    href: "https://inivie.com/about",
    imageSide: "right",
    copyReveal: "fade-up",
    imageReveal: "clip-left",
  },
  {
    title: "What Makes Us Different",
    description:
      "What makes iNi ViE Hospitality different is our seamless multi-experience journey, combining stays, dining, wellness, culture, leisure, and celebration in one thoughtfully connected guest experience across our portfolio. Supported with distinctive design, personalised service, and consistently high hospitality standards, every touchpoint is designed to feel personal, seamless, and memorable.",
    image: "/our-story/meaningful-journey.png",
    alt: "Couple walking through a tropical iNi ViE Hospitality property",
    cta: "Discover More",
    href: "https://inivie.com/about",
    imageSide: "left",
    copyReveal: "slide-right",
    imageReveal: "rise-scale",
  },
  {
    title: "Our Eight Mantras",
    description:
      "Eight Mantras are the values behind everything we do, inspiring thoughtful hospitality, responsible operations, stronger communities, and meaningful guest experiences across our resorts, villas, restaurants, wellness, and lifestyle destinations.",
    image: "/our-story/eight-mantras.jpg",
    alt: "Balinese community gathered in traditional white ceremonial clothing",
    imageSide: "right",
    copyReveal: "clip-up",
    imageReveal: "clip-bottom",
  },
  {
    title: "Sustainability",
    description:
      "Sustainability is woven into the way iNi ViE Hospitality operates across Bali. We focus on responsible sourcing, reduced waste, efficient use of water and energy, local employment, community partnerships, and respect for Bali’s natural and cultural heritage, creating hospitality that benefits guests, people, and place.",
    image: "/our-story/sustainability.jpg",
    alt: "Farmers harvesting rice in a lush tropical field",
    imageSide: "left",
    copyReveal: "fade-up",
    imageReveal: "clip-left",
  },
] as const satisfies readonly StoryBlockData[];
