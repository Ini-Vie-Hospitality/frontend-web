import Image from "next/image";
import Link from "next/link";
import type { DiningDestination } from "@/content/homepage/types";

type DiningCardProps = {
  destination: DiningDestination;
  index: number;
  priority: boolean;
};

export function DiningCard({ destination, index, priority }: DiningCardProps) {
  return (
    <article
      data-culinary-card
      className="relative isolate flex h-full min-h-0 w-screen max-w-none shrink-0 flex-col overflow-hidden bg-[#090806] px-6 pt-[calc(env(safe-area-inset-top)+clamp(88px,14dvh,112px))] pb-8 text-center text-[#f2e9dc] md:w-[50vw] md:px-[clamp(24px,3vw,58px)] md:pt-[clamp(96px,13vh,128px)] md:pb-[43px] lg:w-[33.333333vw]"
      aria-labelledby={`culinary-card-${index}`}
    >
      <Image
        data-culinary-image
        className="-z-20 object-cover will-change-transform"
        src={destination.image}
        alt={destination.alt}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.333vw"
      />
      <span
        data-culinary-overlay
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,6,4,.82)_0%,rgba(7,6,4,.42)_42%,rgba(7,6,4,.9)_100%)] will-change-[opacity]"
        aria-hidden="true"
      />

      <div data-culinary-copy className="will-change-[opacity,transform]">
        <p className="text-[10px] uppercase tracking-[.08em] text-[#bd8435] md:text-[12px]">
         {destination.eyebrow}
        </p>
        <h3
          id={`culinary-card-${index}`}
          className="mx-auto mt-4 max-w-[380px] font-serif text-[clamp(2.15rem,10vw,3.25rem)] uppercase leading-[.92] tracking-[-.035em] md:text-[clamp(2.8rem,3.2vw,3.6rem)] md:leading-[.9]"
        >
          {destination.name}
        </h3>
        <p className="mx-auto mt-4 max-w-[310px] text-[13px] leading-[1.4] text-[#eee4d7] md:text-[14px]">
          {destination.description}
        </p>
      </div>

      <div className="mt-auto">
        <p className="text-[10px] uppercase leading-[1.55] tracking-[.24em] text-[#dfd1bf] md:text-[11px]">
          {destination.location}
          <br />
          {destination.schedule}
        </p>
        <Link
          href={destination.href}
          className="mt-5 inline-flex items-center gap-3 border-b border-white/45 pb-2 text-[11px] uppercase tracking-[.25em] transition-colors hover:border-[#bd8435] md:mt-7 md:text-[12px]"
        >
          {destination.ctaLabel}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
