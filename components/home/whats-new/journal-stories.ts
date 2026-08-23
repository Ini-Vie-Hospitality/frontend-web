export type JournalStoryLayout =
  | "feature"
  | "standard"
  | "wide";

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
    image: "/journal/nusa-penida.png",
    alt: "Aerial view of the dramatic coastline of Nusa Penida, Bali",
    href: "#journal-nusa-penida",
    layout: "feature",
  },
  {
    id: "quiet-art",
    category: "Wellness · Ubud",
    title: ["The Quiet Art", "of Slowing Down"],
    description: "A restorative journey through Bali’s rituals of rest, balance, and mindful living.",
    readingTime: "5 min read",
    image: "/journal/quiet-art.png",
    alt: "A woman meditating above a misty tropical forest in Ubud",
    href: "#journal-quiet-art",
    layout: "standard",
  },
  {
    id: "sacred-places",
    category: "Bali Culture",
    title: ["Sacred Places,", "Timeless Traditions"],
    description: "Experience the spiritual heart of Bali through its temples, ceremonies, and living heritage.",
    readingTime: "4 min read",
    image: "/journal/sacred-places.png",
    alt: "A visitor walking through a traditional Balinese temple gate",
    href: "#journal-sacred-places",
    layout: "standard",
  },
  {
    id: "september-guide",
    category: "Seasonal Guide",
    title: ["Bali in September:", "A Guide to the Season"],
    description: "Warm days, fewer crowds, and vibrant landscapes—everything you need to know for the perfect September escape.",
    readingTime: "6 min read",
    image: "/journal/september-guide.png",
    alt: "Sunlit rice terraces and palm trees across the Balinese landscape",
    href: "#journal-september-guide",
    layout: "wide",
  },
];
