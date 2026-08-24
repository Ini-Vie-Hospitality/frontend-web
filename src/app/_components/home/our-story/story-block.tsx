import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal/reveal";
import type { StoryBlock } from "@/content/homepage/types";

export function StoryBlock({ story, index }: { story: StoryBlock; index: number }) {
  const imageFirst = index % 2 === 1;
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
        variant={imageFirst ? "slide-right" : "fade-up"}
        delay={80}
        className={copyOrder}
      >
        <StoryCopy story={story} />
      </Reveal>

      <Reveal
        variant={imageFirst ? "rise-scale" : "clip-left"}
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

function StoryCopy({ story }: { story: StoryBlock }) {
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
