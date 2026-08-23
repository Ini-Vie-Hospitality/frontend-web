import Image from "next/image";
import Link from "next/link";
import {
  journalStories,
  type JournalStory,
} from "./whats-new/journal-stories";

export function WhatsNew() {
  const [featureStory, quietStory, sacredStory, seasonalStory] = journalStories;

  return (
    <section
      id="journal"
      className="overflow-hidden bg-[#f8f5ef] px-[clamp(20px,3.05vw,44px)] pt-[clamp(30px,2.1vw,36px)] pb-5 text-[#291b17]"
      aria-labelledby="journal-title"
    >
      <header className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.3em] text-[#60602d] sm:text-[13px]">
            The Journal
          </p>
          <h2
            id="journal-title"
            className="mt-5 max-w-[650px] font-serif text-[clamp(4rem,5.55vw,5rem)] font-normal leading-[.95] tracking-[-.045em]"
          >
            Stories from
            <br />
            Bali &amp; Beyond.
          </h2>
          <p className="mt-4 max-w-[430px] text-[16px] leading-[1.45] text-[#55534f] sm:text-[18px]">
            Thoughtful guides, rituals, places, and
            <br className="hidden sm:block" />
            discoveries from across Bali.
          </p>
        </div>

        <Link
          href="#journal-nusa-penida"
          className="group inline-flex w-fit items-center gap-4 border-b border-[#b17b25] pb-1.5 text-[15px] text-[#4d4e25] transition-colors hover:text-[#9a671b] lg:mt-[88px] lg:text-[17px]"
        >
          Explore The Journal
          <span
            className="text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            ↗
          </span>
        </Link>
      </header>

      <div className="mt-[clamp(20px,1.5vw,24px)] grid items-start gap-[clamp(20px,1.8vw,26px)] lg:grid-cols-[1.157fr_1fr]">
        <FeatureStory story={featureStory} />

        <div className="grid grid-cols-1 gap-x-[clamp(20px,1.65vw,24px)] gap-y-5 sm:grid-cols-2">
          <CompactStory story={quietStory} />
          <CompactStory story={sacredStory} />
          <WideStory story={seasonalStory} />
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
      className="group relative isolate aspect-[708/713] min-h-[560px] overflow-hidden rounded-[14px] bg-[#1b2119] text-white"
      aria-labelledby={`journal-title-${story.id}`}
    >
      <Image
        className="-z-30 object-cover"
        src={story.image}
        alt={story.alt}
        fill
        sizes="(max-width: 1023px) calc(100vw - 40px), 51vw"
      />
      <span
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,12,8,0)_42%,rgba(10,12,8,.9)_68%,rgba(10,12,8,.98)_100%)]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-[clamp(28px,3vw,42px)] bottom-[clamp(30px,3vw,42px)]">
        <p className="text-[10px] font-semibold uppercase tracking-[.24em] sm:text-[11px]">
          {story.category}
          <span className="mx-3" aria-hidden="true">·</span>
          {story.readingTime}
        </p>
        <h3
          id={`journal-title-${story.id}`}
          className="mt-4 font-serif text-[clamp(2.5rem,3.25vw,3.25rem)] font-normal leading-[.95] tracking-[-.035em]"
        >
          {story.title.join(" ")}
        </h3>
        <p className="mt-4 max-w-[560px] text-[14px] leading-[1.45] text-white/90 sm:text-[17px]">
          {story.description}
        </p>
        <StoryLink story={story} className="mt-6 text-white" />
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
      <div className="relative aspect-[1.27/1] overflow-hidden rounded-[13px] bg-[#d7c3a5]">
        <Image
          className="object-cover"
          src={story.image}
          alt={story.alt}
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 21vw"
        />
      </div>
      <StoryMeta story={story} />
      <h3
        id={`journal-title-${story.id}`}
        className="mt-2 font-serif text-[clamp(2rem,2.2vw,2.35rem)] font-normal leading-[.92] tracking-[-.035em]"
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
      className="sm:col-span-2"
      aria-labelledby={`journal-title-${story.id}`}
    >
      <div className="relative aspect-[612/175] min-h-[175px] overflow-hidden rounded-[13px] bg-[#c8aa74]">
        <Image
          className="object-cover"
          src={story.image}
          alt={story.alt}
          fill
          sizes="(max-width: 1023px) calc(100vw - 40px), 43vw"
        />
      </div>
      <StoryMeta story={story} />
      <h3
        id={`journal-title-${story.id}`}
        className="mt-2 font-serif text-[clamp(1.85rem,2.05vw,2.25rem)] font-normal leading-[.96] tracking-[-.03em]"
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
      className={`group/link inline-flex w-fit items-center gap-4 border-b border-[#b17b25] pb-1.5 text-[15px] transition-colors hover:text-[#9a671b] ${className}`}
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
