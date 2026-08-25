import { Reveal } from "@/components/ui/reveal/reveal";
import { StoryBlock } from "./story-block";
import type { PublishedHomepageData } from "@/content/homepage/types";

export function OurStory({
  data,
}: {
  data: PublishedHomepageData["ourStory"];
}) {
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
            {data.title}
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={100}>
          <p className="mx-auto mt-5 max-w-[900px] text-[14px] leading-[1.55] tracking-[.03em] text-[#4f4945] sm:text-[16px]">
            {data.description}
          </p>
        </Reveal>
      </header>

      <div className="mt-[clamp(38px,3.2vw,48px)] space-y-[clamp(28px,3vw,44px)]">
        {data.blocks.map((story, index) => (
          <StoryBlock key={story.title} story={story} index={index} />
        ))}
      </div>
    </section>
  );
}
