import { getImageProps } from "next/image";
import Link from "next/link";

const pillars = [
  { number: "01", title: "STAY", description: "Spaces designed for connection." },
  { number: "02", title: "TASTE", description: "Dining worth travelling for." },
  { number: "03", title: "RESTORE", description: "Wellness rooted in balance." },
  { number: "04", title: "DISCOVER", description: "Experiences inspired by Bali." },
];

type ResponsiveImageProps = {
  alt: string;
  desktopSrc: string;
  mobileSrc: string;
  desktopSize: { width: number; height: number };
  mobileSize: { width: number; height: number };
};

function ResponsiveImage({
  alt,
  desktopSrc,
  mobileSrc,
  desktopSize,
  mobileSize,
}: ResponsiveImageProps) {
  const { props: desktopProps } = getImageProps({
    alt,
    src: desktopSrc,
    width: desktopSize.width,
    height: desktopSize.height,
    sizes: "(max-width: 767px) 80vw, 51vw",
  });
  const { props: mobileProps } = getImageProps({
    alt,
    src: mobileSrc,
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

function BrandStory({ className = "" }: { className?: string }) {
  return (
    <div className={`text-[14px] leading-[1.55] text-[#35342f] ${className}`}>
      <p>
        iNi ViE Hospitality is a collection of thoughtfully designed stays and
        experiences inspired by the warmth, culture, and beauty of Bali.
      </p>
      <p className="mt-6 max-md:mt-1">
        From private villas and distinctive resorts to culinary journeys and
        restorative wellness, every experience is created around one belief —
        hospitality should feel personal.
      </p>
    </div>
  );
}

export function BrandIntroduction() {
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
        BALI
      </span>
      <span
        className="pointer-events-none absolute right-[-2vw] bottom-[-38px] hidden font-serif text-[clamp(9rem,15vw,14rem)] leading-none tracking-[-.07em] text-[#8f8677]/[.05] md:block"
        aria-hidden="true"
      >
        INI VIE
      </span>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* <p className="text-[11px] font-medium uppercase tracking-[.27em] text-[#55583c] md:text-[12px]">
          01 <span className="mx-2 text-[#9a7a43]">—</span> Our Philosophy
        </p> */}

        <h2
          id="brand-introduction-title"
          className="mt-7 font-serif text-[clamp(2.7rem,11vw,3.3rem)] leading-[1.08] tracking-[-.045em] md:mt-5 md:text-[clamp(3.45rem,4.45vw,4.15rem)] md:leading-[1.16]"
        >
          <span className="md:hidden">
            More than
            <br />
            places to stay.
            <br />
            We create reasons
            <br />
            to remember Bali.
          </span>
          <span className="hidden md:block">
            More than places to stay.
            <br />
            We create reasons to remember Bali.
          </span>
        </h2>

        <div className="mt-7 grid grid-cols-[44%_42%] justify-between gap-y-5 md:mt-8 md:grid-cols-[50.7%_22.6%_16.5%] md:gap-y-0">
          <figure className="col-span-2 aspect-[753/355] overflow-hidden md:col-span-1 md:aspect-[658/476]">
            <ResponsiveImage
              alt="A tropical Bali villa surrounded by lush gardens"
              desktopSrc="/brand-introduction/villa-desktop.webp"
              mobileSrc="/brand-introduction/villa-mobile.webp"
              desktopSize={{ width: 658, height: 476 }}
              mobileSize={{ width: 753, height: 355 }}
            />
          </figure>

          <figure className="aspect-[328/338] overflow-hidden md:aspect-[293/476]">
            <ResponsiveImage
              alt="A guest enjoying breakfast beside a tropical pool"
              desktopSrc="/brand-introduction/breakfast-desktop.webp"
              mobileSrc="/brand-introduction/breakfast-mobile.webp"
              desktopSize={{ width: 293, height: 476 }}
              mobileSize={{ width: 328, height: 338 }}
            />
          </figure>

          <div>
            <figure className="aspect-[313/214] overflow-hidden md:aspect-[214/244]">
              <ResponsiveImage
                alt="A traditional Balinese floral offering"
                desktopSrc="/brand-introduction/offering-desktop.webp"
                mobileSrc="/brand-introduction/offering-mobile.webp"
                desktopSize={{ width: 214, height: 244 }}
                mobileSize={{ width: 313, height: 214 }}
              />
            </figure>
            <p className="mt-5 font-serif text-[clamp(1.35rem,5.5vw,1.65rem)] italic leading-[1.35] text-[#77764e] md:mt-4 md:text-[18px]">
              Rooted in Bali —
              <br />
              made for meaningful journeys.
            </p>
            <BrandStory className="mt-12 hidden md:block" />
          </div>
        </div>

        <BrandStory className="mt-6 md:hidden" />

        {/* <div className="mt-9 divide-y divide-[#b7945d]/55 border-y border-[#b7945d]/55 md:mt-12 md:grid md:grid-cols-4 md:divide-x md:divide-y-0 md:border-0">
          {pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="grid grid-cols-[38px_1px_80px_1fr] items-center gap-x-4 py-4 md:block md:min-h-[96px] md:px-[clamp(20px,3vw,56px)] md:py-1 md:first:pl-[4%] md:last:pr-0"
            >
              <span className="text-[13px] tracking-[.08em] text-[#ae7b35] md:text-[12px]">
                {pillar.number}
              </span>
              <span className="h-9 w-px bg-[#b7945d]/70 md:hidden" aria-hidden="true" />
              <h3 className="text-[16px] font-normal tracking-[.11em] md:mt-3 md:text-[17px]">
                {pillar.title}
              </h3>
              <p className="text-[13px] leading-[1.4] text-[#46443e] md:mt-1 md:text-[13px]">
                {pillar.description}
              </p>
              <span className="mt-5 hidden h-px w-8 bg-[#b7945d] md:block" aria-hidden="true" />
            </article>
          ))}
        </div> */}

        <Link
          href="#stays"
          className="mt-10 inline-flex items-center gap-4 border-b border-[#b7945d] pb-2 text-[13px] tracking-[.25em] md:mt-16 md:text-[13px]"
        >
          Discover Our Story
          <span className="text-[18px] tracking-normal" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
