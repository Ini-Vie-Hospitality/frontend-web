import Image from "next/image";
import { Reveal } from "@/components/ui/reveal/reveal";
import type { PublishedHomepageData } from "@/content/homepage/types";

export function FeaturedIn({
  data,
}: {
  data: PublishedHomepageData["featuredIn"];
}) {
  if (!data.items.length) return null;
  return (
    <section
      id="featured-in"
      className="bg-[#f8f5ef] px-5 py-20 text-[#291b17] sm:px-8 sm:py-24"
      aria-labelledby="featured-in-title"
    >
      <div className="mx-auto max-w-[960px]">
        <Reveal variant="fade-up">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-[60px] bg-black/10" aria-hidden="true" />
            <h2
              id="featured-in-title"
              className="shrink-0 text-center text-[24px] font-normal leading-[1.2]"
            >
              {data.title}
            </h2>
            <span className="h-px w-[60px] bg-black/10" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-10 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center lg:overflow-visible">
          {data.items.map((logo, index) => (
            <Reveal
              key={logo.src}
              variant="fade-up"
              delay={index * 45}
              className="shrink-0 snap-center"
            >
              <div className="relative h-[100px] w-[100px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="100px"
                  className="object-contain grayscale transition duration-300 hover:scale-105 hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
