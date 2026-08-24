import Image from "next/image";
import Link from "next/link";
import type { JournalStory } from "@/content/homepage/types";

type StoryProps = { story: JournalStory; readLabel: string };

export function FeatureStory({ story, readLabel }: StoryProps) {
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
        <StoryLink story={story} label={readLabel} className="mt-5 text-white sm:mt-6" />
      </div>
    </article>
  );
}

export function CompactStory({ story, readLabel }: StoryProps) {
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
      <StoryLink story={story} label={readLabel} className="mt-3 text-[#4d4e25]" />
    </article>
  );
}

export function WideStory({ story, readLabel }: StoryProps) {
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
      <StoryLink story={story} label={readLabel} className="mt-2.5 text-[#4d4e25]" />
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
  label,
}: {
  story: JournalStory;
  className: string;
  label: string;
}) {
  return (
    <Link
      href={story.href}
      className={`group/link inline-flex w-fit items-center gap-4 border-b border-[#b17b25] pb-1.5 text-[14px] transition-colors hover:text-[#9a671b] sm:text-[15px] ${className}`}
    >
      {label}
      <span
        className="text-[18px] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
        aria-hidden="true"
      >
        ↗
      </span>
    </Link>
  );
}
