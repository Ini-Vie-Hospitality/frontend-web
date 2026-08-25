import { getImageProps } from "next/image";
import { Reveal } from "@/components/ui/reveal/reveal";
import type { PublishedHomepageData } from "@/content/homepage/types";

type ResponsiveImageProps = {
  alt: string;
  src: string;
  desktopSize: { width: number; height: number };
  mobileSize: { width: number; height: number };
};

function ResponsiveImage({
  alt,
  src,
  desktopSize,
  mobileSize,
}: ResponsiveImageProps) {
  const { props: desktopProps } = getImageProps({
    alt,
    src,
    width: desktopSize.width,
    height: desktopSize.height,
    sizes: "(max-width: 767px) 80vw, 51vw",
  });
  const { props: mobileProps } = getImageProps({
    alt,
    src,
    width: mobileSize.width,
    height: mobileSize.height,
    sizes: "80vw",
  });

  return (
    <picture className="block size-full">
      <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} />
      <img
        {...desktopProps}
        alt={alt}
        className="size-full object-cover"
        srcSet={desktopProps.srcSet}
      />
    </picture>
  );
}

function BrandStory({
  story,
  className = "",
}: {
  story: [string, string];
  className?: string;
}) {
  return (
    <div className={`text-[14px] leading-[1.55] text-[#35342f] ${className}`}>
      <p>{story[0]}</p>
      <p className="mt-6 max-md:mt-1">{story[1]}</p>
    </div>
  );
}

export function BrandIntroduction({
  data,
}: {
  data: PublishedHomepageData["brandIntroduction"];
}) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f1e9] px-[10vw] pt-[52px] pb-[45px] text-[#201f1c] md:px-[clamp(48px,5.2vw,76px)] md:pt-[88px] md:pb-[48px]"
      aria-labelledby="brand-introduction-title"
    >
      <span
        className="pointer-events-none absolute -top-[20px] left-[39%] font-serif text-[clamp(11rem,27vw,18rem)] leading-none tracking-[-.08em] text-[#8f8677]/[.055] md:-top-[76px] md:right-[-2vw] md:left-auto md:text-[clamp(12rem,22vw,21rem)]"
        aria-hidden="true"
      >
        {data.backgroundWords[0]}
      </span>
      <span
        className="pointer-events-none absolute left-[-2vw] bottom-[-38px] hidden font-serif text-[clamp(9rem,15vw,14rem)] leading-none tracking-[-.07em] text-[#8f8677]/[.05] md:block"
        aria-hidden="true"
      >
        {data.backgroundWords[1]}
      </span>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Reveal variant="clip-up">
          <h2
            id="brand-introduction-title"
            className="mt-7 font-serif text-[clamp(2.7rem,11vw,3.3rem)] leading-[1.08] tracking-[-.045em] md:mt-5 md:text-[clamp(3.45rem,4.45vw,4.15rem)] md:leading-[1.16]"
          >
            {data.title.split("\n").map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-[44%_42%] justify-between gap-y-5 md:mt-8 md:grid-cols-[50.7%_22.6%_16.5%] md:gap-y-0">
          <Reveal
            variant="clip-left"
            className="col-span-2 aspect-[753/355] md:col-span-1 md:aspect-[658/476]"
          >
            <figure className="size-full overflow-hidden">
              <ResponsiveImage
                alt={data.images[0].alt}
                src={data.images[0].src}
                desktopSize={{ width: 658, height: 476 }}
                mobileSize={{ width: 753, height: 355 }}
              />
            </figure>
          </Reveal>

          <Reveal
            variant="rise-scale"
            delay={120}
            className="aspect-[328/338] md:aspect-[293/476]"
          >
            <figure className="size-full overflow-hidden">
              <ResponsiveImage
                alt={data.images[1].alt}
                src={data.images[1].src}
                desktopSize={{ width: 293, height: 476 }}
                mobileSize={{ width: 328, height: 338 }}
              />
            </figure>
          </Reveal>

          <div>
            <Reveal variant="clip-bottom" delay={220}>
              <figure className="aspect-[313/214] overflow-hidden md:aspect-[214/244]">
                <ResponsiveImage
                  alt={data.images[2].alt}
                  src={data.images[2].src}
                  desktopSize={{ width: 214, height: 244 }}
                  mobileSize={{ width: 313, height: 214 }}
                />
              </figure>
            </Reveal>
            <Reveal variant="slide-right" delay={280}>
              <p className="mt-5 font-serif text-[clamp(1.35rem,5.5vw,1.65rem)] italic leading-[1.35] text-[#77764e] md:mt-4 md:text-[18px]">
                {data.quote.split("\n").map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
            <Reveal
              variant="fade-up"
              delay={360}
              className="mt-12 hidden md:block"
            >
              <BrandStory story={data.story} />
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade-up" delay={160} className="mt-6 md:hidden">
          <BrandStory story={data.story} />
        </Reveal>
      </div>
    </section>
  );
}
