import Image from "next/image";
import Link from "next/link";
import {
  journalStories,
  type JournalStory,
  type JournalStoryLayout,
} from "./whats-new/journal-stories";

const layoutClasses: Record<JournalStoryLayout, string> = {
  feature: "min-h-[590px] md:col-span-2 md:min-h-[640px] lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-0",
  standard: "min-h-[470px] lg:min-h-0",
  tall: "min-h-[590px] lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:min-h-0",
  wide: "min-h-[410px] lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:min-h-0",
  banner: "min-h-[410px] md:col-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-4 lg:min-h-0",
};

const desktopPlacement: Record<string, string> = {
  "quiet-art": "lg:col-start-2 lg:row-start-1",
  "sacred-places": "lg:col-start-3 lg:row-start-1",
};

const overlayClasses: Record<JournalStoryLayout, string> = {
  feature: "bg-[linear-gradient(180deg,rgba(8,7,5,.02)_28%,rgba(8,7,5,.94)_100%)]",
  standard: "bg-[linear-gradient(180deg,rgba(8,7,5,.08)_15%,rgba(8,7,5,.96)_78%)]",
  tall: "bg-[linear-gradient(180deg,rgba(8,7,5,.04)_24%,rgba(8,7,5,.95)_100%)]",
  wide: "bg-[linear-gradient(90deg,rgba(8,7,5,.96)_0%,rgba(8,7,5,.74)_46%,rgba(8,7,5,.1)_100%)]",
  banner: "bg-[linear-gradient(90deg,rgba(8,7,5,.96)_0%,rgba(8,7,5,.78)_31%,rgba(8,7,5,.12)_72%)]",
};

const contentClasses: Record<JournalStoryLayout, string> = {
  feature: "max-w-[520px] p-[clamp(28px,3vw,48px)]",
  standard: "max-w-[390px] p-[clamp(22px,2vw,28px)]",
  tall: "max-w-[360px] p-[clamp(24px,2.4vw,32px)]",
  wide: "max-w-[610px] px-[clamp(24px,2.4vw,34px)] py-[clamp(18px,1.5vw,26px)]",
  banner: "max-w-[580px] px-[clamp(28px,3vw,48px)] py-[clamp(18px,1.5vw,24px)]",
};

const titleClasses: Record<JournalStoryLayout, string> = {
  feature: "text-[clamp(2.7rem,3.6vw,4.1rem)]",
  standard: "text-[clamp(2rem,2.25vw,2.75rem)]",
  tall: "text-[clamp(2.35rem,2.7vw,3.25rem)]",
  wide: "text-[clamp(1.85rem,2.15vw,2.65rem)]",
  banner: "text-[clamp(1.9rem,2.35vw,2.85rem)]",
};

export function WhatsNew() {
  return (
    <section
      id="journal"
      className="overflow-hidden bg-[#0d0b08] px-[clamp(20px,1.5vw,24px)] py-[clamp(72px,6.8vw,104px)] text-[#e7dcc8]"
      aria-labelledby="journal-title"
    >
      <header className="grid items-end gap-8 pb-[clamp(28px,2.5vw,40px)] lg:grid-cols-[1.02fr_.9fr_auto] lg:gap-[clamp(48px,7vw,112px)]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[.25em] text-[#c49236]">
            06 — The Journal
          </p>
          <h2
            id="journal-title"
            className="mt-4 font-serif text-[clamp(3.5rem,5.4vw,5.35rem)] font-normal leading-[.88] tracking-[-.045em]"
          >
            Stories from
            <br />
            Bali &amp; Beyond.
          </h2>
        </div>

        <p className="max-w-[360px] text-[15px] leading-[1.45] text-[#ddd3c3] lg:pb-1 lg:text-[16px]">
          Curated destinations, thoughtful guides,
          <br className="hidden xl:block" />
          wellness rituals, and culinary discoveries
          <br className="hidden xl:block" />
          from across Bali.
        </p>

        <Link
          href="#journal-nusa-penida"
          className="group inline-flex w-fit items-center gap-3 border-b border-[#b78632] pb-2 text-[14px] text-[#e7dcc8] transition-colors hover:text-[#d1a451] lg:mb-2 lg:justify-self-end"
        >
          Explore The Journal
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
            ↗
          </span>
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-[4.9fr_2.5fr_2.05fr_2.25fr] lg:grid-rows-[clamp(330px,25.4vw,440px)_clamp(210px,14vw,240px)_clamp(180px,12vw,205px)]">
        {journalStories.map((story) => (
          <JournalStoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}

function JournalStoryCard({ story }: { story: JournalStory }) {
  const isCompact = story.layout === "wide" || story.layout === "banner";

  return (
    <article
      id={`journal-${story.id}`}
      className={`group relative isolate overflow-hidden rounded-[4px] border border-white/20 ${layoutClasses[story.layout]} ${desktopPlacement[story.id] ?? ""}`}
      aria-labelledby={`journal-title-${story.id}`}
    >
      <Image
        className="-z-20 object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
        src={story.image}
        alt={story.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
      />
      <span
        className={`absolute inset-0 -z-10 ${overlayClasses[story.layout]}`}
        aria-hidden="true"
      />

      <div className={`absolute inset-0 flex flex-col justify-end ${contentClasses[story.layout]}`}>
        <p className="text-[10px] font-medium uppercase tracking-[.2em] text-[#d1a13f] md:text-[11px]">
          {story.category}
        </p>
        <h3
          id={`journal-title-${story.id}`}
          className={`${isCompact ? "mt-2" : "mt-3"} font-serif font-normal leading-[.96] tracking-[-.035em] ${titleClasses[story.layout]}`}
        >
          {story.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className={`${isCompact ? "mt-2 text-[12px] leading-[1.35] md:text-[13px]" : "mt-3 text-[13px] leading-[1.45] md:text-[14px]"} max-w-[520px] text-[#e2d9cc]`}>
          {story.description}
        </p>
        <div className={`${isCompact ? "mt-3" : "mt-5"} flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[.12em] text-[#eee4d6] md:text-[11px]`}>
          <span>{story.readingTime}</span>
          <span aria-hidden="true">·</span>
          <Link
            href={story.href}
            className="inline-flex items-center gap-3 border-b border-[#b78632] pb-1.5 normal-case tracking-normal transition-colors hover:text-[#d1a451]"
          >
            Read Story
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
