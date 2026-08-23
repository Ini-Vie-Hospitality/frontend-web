import Link from "next/link";
import { Reveal } from "@/components/ui/reveal/reveal";
import { journalStories } from "./journal-stories";
import { CompactStory, FeatureStory, WideStory } from "./story-cards";

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
              What's New
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
            Explore The Story
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

    </section>
  );
}
