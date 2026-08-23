import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../ui/reveal";
import type { RevealVariant } from "../ui/reveal-motion";

const storyBlocks = [
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

type StoryBlockData = {
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

export function OurStory() {
  return (
    <section
      id="our-story"
      className="overflow-hidden bg-[#f8f5ef] pt-[clamp(38px,3.2vw,48px)] pb-[clamp(32px,3vw,44px)] text-[#302420]"
      aria-labelledby="our-story-title"
    >
      <header className="mx-auto max-w-[920px] px-6 text-center">
        <Reveal variant="clip-up">
          <h2
            id="our-story-title"
            className="font-serif text-[clamp(3.4rem,4.1vw,4rem)] font-normal leading-none tracking-[-.045em]"
          >
            Our Story
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-[1.55] tracking-[.03em] text-[#4f4945] sm:text-[16px]">
            iNi ViE Hospitality guided by eight mantras that honour people, culture,
            and nature. Through deeply personalised stays, distinctive resorts and
            villas, meaningful dining, wellness, and lifestyle experiences, we
            create memorable journeys across Bali with sustainability at the heart
            of every decision.
          </p>
        </Reveal>
      </header>

      <div className="mt-[clamp(38px,3.2vw,48px)] space-y-[clamp(28px,3vw,44px)]">
        {storyBlocks.map((story) => (
          <StoryBlock key={story.title} story={story} />
        ))}
      </div>
    </section>
  );
}

function StoryBlock({ story }: { story: StoryBlockData }) {
  const imageFirst = story.imageSide === "left";
  const columns = imageFirst
    ? "lg:grid-cols-[58%_42%]"
    : "lg:grid-cols-[42%_58%]";
  const imageOrder = imageFirst ? "order-2 lg:order-1" : "order-2";
  const copyOrder = imageFirst ? "order-1 lg:order-2" : "order-1";

  return (
    <div
      className={`grid items-center ${columns} lg:px-[clamp(24px,3.05vw,44px)]`}
    >
      <Reveal
        variant={story.copyReveal}
        delay={80}
        className={copyOrder}
      >
        <StoryCopy story={story} />
      </Reveal>

      <Reveal
        variant={story.imageReveal}
        delay={160}
        className={imageOrder}
      >
        <div className="relative h-[clamp(250px,72vw,320px)] overflow-hidden bg-[#c3aa82] lg:h-[clamp(300px,28vw,410px)]">
          <Image
            src={story.image}
            alt={story.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 58vw"
          />
        </div>
      </Reveal>
    </div>
  );
}

function StoryCopy({ story }: { story: StoryBlockData }) {
  return (
    <div className="flex flex-col justify-center px-[clamp(24px,5.7vw,83px)] py-[clamp(42px,5vw,68px)]">
      <h3 className="font-serif text-[clamp(2.65rem,3.35vw,3.3rem)] font-normal leading-[.98] tracking-[-.04em]">
        {story.title}
      </h3>
      <span
        className="mt-7 h-0.5 w-10 bg-[#bc8642]"
        aria-hidden="true"
      />
      <p className="mt-7 max-w-[500px] text-[14px] leading-[1.62] text-[#514a46] sm:text-[15px]">
        {story.description}
      </p>
      {story.cta && story.href ? (
        <Link
          href={story.href}
          className="group mt-8 inline-flex w-fit items-center gap-4 border-b border-[#6f625b] pb-1.5 text-[14px] text-[#3d322e] transition-colors hover:border-[#bc8642] hover:text-[#9a671f] sm:text-[15px]"
        >
          {story.cta}
          <span
            className="text-[17px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            ↗
          </span>
        </Link>
      ) : null}
    </div>
  );
}
