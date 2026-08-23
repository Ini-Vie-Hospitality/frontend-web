import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../ui/reveal";
import {
  journalStories,
  type JournalStory,
} from "./whats-new/journal-stories";

export function WhatsNew() {
  const [featureStory, quietStory, sacredStory, seasonalStory] = journalStories;

  return (
    <section
      id="journal"
      className="overflow-hidden bg-[#f8f5ef] px-5 pt-16 pb-20 text-[#291b17] sm:px-8 sm:pt-20 sm:pb-24 lg:px-[clamp(32px,3.05vw,44px)] lg:pt-[clamp(30px,2.1vw,36px)] lg:pb-[clamp(36px,5vw,64px)]"
      aria-labelledby="journal-title"
    >
      <header className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <Reveal variant="fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#60602d] sm:text-[13px]">
              The Journal
            </p>
          </Reveal>
          <Reveal variant="clip-up" delay={80}>
            <h2
              id="journal-title"
              className="mt-5 max-w-[650px] text-balance font-serif text-[clamp(2.75rem,13vw,5rem)] font-normal leading-[.95] tracking-[-.045em]"
            >
              Stories from
              <br />
              Bali &amp; Beyond.
            </h2>
          </Reveal>
          <Reveal variant="slide-right" delay={160}>
            <p className="mt-4 max-w-[430px] text-[15px] leading-[1.5] text-[#55534f] sm:text-[18px] sm:leading-[1.45]">
              Thoughtful guides, rituals, places, and
              <br className="hidden sm:block" />
              discoveries from across Bali.
            </p>
          </Reveal>
        </div>

        <Reveal variant="clip-left" delay={220} className="mt-1 lg:mt-[88px]">
          <Link
            href="#journal-nusa-penida"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#b17b25] pb-1.5 text-[15px] text-[#4d4e25] transition-colors hover:text-[#9a671b] lg:text-[17px]"
          >
            Explore The Journal
            <span
              className="text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </Reveal>
      </header>

      <div className="mt-[clamp(28px,3vw,36px)] grid items-start gap-[clamp(28px,3vw,36px)] lg:grid-cols-[1.157fr_1fr] lg:gap-[clamp(20px,1.8vw,26px)]">
        <Reveal variant="rise-scale">
          <FeatureStory story={featureStory} />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-[clamp(20px,1.65vw,24px)] gap-y-8 md:grid-cols-2 md:gap-y-5">
          <Reveal variant="clip-left" delay={100}>
            <CompactStory story={quietStory} />
          </Reveal>
          <Reveal variant="clip-bottom" delay={180}>
            <CompactStory story={sacredStory} />
          </Reveal>
          <Reveal variant="fade-up" delay={260} className="md:col-span-2">
            <WideStory story={seasonalStory} />
          </Reveal>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-8 text-[#54552a] max-sm:flex-wrap max-sm:gap-x-5 max-sm:gap-y-2">
        {/* <span className="shrink-0 text-[12px] font-semibold tracking-[.22em] sm:text-[14px]">
          01 / 04
        </span>
        <span className="relative h-px flex-1 bg-[#74735c]/35" aria-hidden="true">
          <span className="absolute inset-y-0 left-0 w-[20%] bg-[#b88721]" />
        </span>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[.27em] sm:text-[13px]">
          Scroll to Explore
        </span> */}
      </div>
    </section>
  );
}

function FeatureStory({ story }: { story: JournalStory }) {
  return (
    <article
      id={`journal-${story.id}`}
      className="group relative isolate aspect-[4/5] min-h-0 overflow-hidden rounded-none bg-[#1b2119] text-white sm:aspect-[708/713] sm:min-h-[560px]"
      aria-labelledby={`journal-title-${story.id}`}
    >
      <Image
        className="-z-30 rounded-none object-cover"
        src={story.image}
        alt={story.alt}
        fill
        sizes="(max-width: 1023px) calc(100vw - 40px), 51vw"
      />
      <span
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,12,8,0)_42%,rgba(10,12,8,.9)_68%,rgba(10,12,8,.98)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-[clamp(20px,3vw,42px)] bottom-[clamp(24px,3vw,42px)]">
        <p className="text-[10px] font-semibold uppercase tracking-[.24em] sm:text-[11px]">
          {story.category}
          <span className="mx-3" aria-hidden="true">·</span>
          {story.readingTime}
        </p>
        <h3
          id={`journal-title-${story.id}`}
          className="mt-4 text-balance font-serif text-[clamp(2rem,10vw,3.25rem)] font-normal leading-[.95] tracking-[-.035em]"
        >
          {story.title.join(" ")}
        </h3>
        <p className="mt-4 max-w-[560px] text-[13px] leading-[1.5] text-white/90 sm:text-[17px] sm:leading-[1.45]">
          {story.description}
        </p>
        <StoryLink story={story} className="mt-5 text-white sm:mt-6" />
      </div>
    </article>
  );
}

function CompactStory({ story }: { story: JournalStory }) {
  return (
    <article
      id={`journal-${story.id}`}
      aria-labelledby={`journal-title-${story.id}`}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-none bg-[#d7c3a5] sm:aspect-[1.27/1]">
        <Image
          className="rounded-none object-cover"
          src={story.image}
          alt={story.alt}
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 21vw"
        />
      </div>
      <StoryMeta story={story} />
      <h3
        id={`journal-title-${story.id}`}
        className="mt-2 font-serif text-[clamp(1.85rem,8.5vw,2.35rem)] font-normal leading-[.96] tracking-[-.035em] sm:leading-[.92]"
      >
        {story.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>
      <p className="mt-3 text-[10px] font-medium uppercase tracking-[.22em] text-[#55534f]">
        {story.readingTime}
      </p>
      <StoryLink story={story} className="mt-3 text-[#4d4e25]" />
    </article>
  );
}

function WideStory({ story }: { story: JournalStory }) {
  return (
    <article
      id={`journal-${story.id}`}
      aria-labelledby={`journal-title-${story.id}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-none bg-[#c8aa74] md:aspect-[612/175] md:min-h-[175px]">
        <Image
          className="rounded-none object-cover"
          src={story.image}
          alt={story.alt}
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), 43vw"
        />
      </div>
      <StoryMeta story={story} />
      <h3
        id={`journal-title-${story.id}`}
        className="mt-2 font-serif text-[clamp(1.75rem,8vw,2.25rem)] font-normal leading-[.98] tracking-[-.03em] sm:leading-[.96]"
      >
        {story.title.join(" ")}
      </h3>
      <p className="mt-3 text-[10px] font-medium uppercase tracking-[.22em] text-[#55534f]">
        {story.readingTime}
      </p>
      <StoryLink story={story} className="mt-2.5 text-[#4d4e25]" />
    </article>
  );
}

function StoryMeta({ story }: { story: JournalStory }) {
  return (
    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[.24em] text-[#5d5e2f]">
      {story.category}
    </p>
  );
}

function StoryLink({
  story,
  className,
}: {
  story: JournalStory;
  className: string;
}) {
  return (
    <Link
      href={story.href}
      className={`group/link inline-flex w-fit items-center gap-4 border-b border-[#b17b25] pb-1.5 text-[14px] transition-colors hover:text-[#9a671b] sm:text-[15px] ${className}`}
    >
      Read Story
      <span
        className="text-[18px] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
        aria-hidden="true"
      >
        ↗
      </span>
    </Link>
  );
}
