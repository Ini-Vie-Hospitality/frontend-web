export type JournalStoryLayout =
  | "feature"
  | "standard"
  | "tall"
  | "wide"
  | "banner";

export type JournalStory = {
  id: string;
  category: string;
  title: string[];
  description: string;
  readingTime: string;
  image: string;
  alt: string;
  href: string;
  layout: JournalStoryLayout;
};

export const journalStories: JournalStory[] = [
  {
    id: "nusa-penida",
    category: "Destination",
    title: ["Nusa Penida,", "Beyond the Postcard"],
    description: "Discover dramatic coastlines, hidden beaches, and a slower side of one of Bali’s most iconic islands.",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=1800&q=88",
    alt: "Aerial view of the dramatic coastline of Nusa Penida, Bali",
    href: "#journal-nusa-penida",
    layout: "feature",
  },
  {
    id: "quiet-art",
    category: "Wellness · Ubud",
    title: ["The Quiet Art", "of Slowing Down"],
    description: "A restorative journey through Bali’s rituals of rest, balance, and mindful living.",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=88",
    alt: "A calming Balinese spa treatment surrounded by warm natural textures",
    href: "#journal-quiet-art",
    layout: "standard",
  },
  {
    id: "sacred-places",
    category: "Bali Culture",
    title: ["Sacred Places,", "Timeless Traditions"],
    description: "Experience the spiritual heart of Bali through its temples, ceremonies, and living heritage.",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=88",
    alt: "Traditional Balinese temple surrounded by tropical greenery",
    href: "#journal-sacred-places",
    layout: "standard",
  },
  {
    id: "hidden-waterfalls",
    category: "Nature Guide",
    title: ["Bali’s Hidden", "Waterfalls"],
    description: "From lush jungle trails to secret swimming spots, find nature’s most refreshing escapes.",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=88",
    alt: "A secluded waterfall flowing through a lush tropical forest",
    href: "#journal-hidden-waterfalls",
    layout: "tall",
  },
  {
    id: "september-guide",
    category: "Bali Guide · Seasonal",
    title: ["Bali in September:", "A Guide to the Season"],
    description: "Warm days, fewer crowds, and vibrant landscapes—everything you need to know for the perfect September escape.",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=88",
    alt: "Sunlit rice terraces and palm trees across the Balinese landscape",
    href: "#journal-september-guide",
    layout: "wide",
  },
  {
    id: "canggu-dining",
    category: "Culinary · Canggu",
    title: ["Where Canggu", "Locals Love to Eat"],
    description: "Local favourites, vibrant cafés, and shared plates that capture the flavours of Canggu.",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88",
    alt: "A warmly lit dining table filled with shared dishes",
    href: "#journal-canggu-dining",
    layout: "banner",
  },
];
