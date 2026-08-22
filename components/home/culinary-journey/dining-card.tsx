import Image from "next/image";
import Link from "next/link";
import type { DiningDestination } from "./dining-destinations";

type DiningCardProps = {
  destination: DiningDestination;
  animationDelay?: number;
};

export function DiningCard({ destination, animationDelay = 0 }: DiningCardProps) {
  return (
    <Link
      className="group relative isolate flex h-[calc(100svh-96px)] min-h-[560px] w-[88vw] max-w-[380px] shrink-0 flex-col overflow-hidden border border-[#6f5c44]/60 px-6 py-7 text-center text-[#f2e9dc] animate-[culinary-card-in_650ms_cubic-bezier(.22,1,.36,1)_both] md:h-full md:min-h-0 md:w-full md:max-w-none md:border-y-0 md:border-l-0 md:border-r md:px-[clamp(24px,3vw,58px)] md:pt-[64px] md:pb-[43px]"
      href={destination.href}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <Image
        className="-z-20 object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]"
        src={destination.image}
        alt={destination.name}
        fill
        sizes="(max-width: 767px) 82vw, 33vw"
      />
      <span
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,6,4,.72)_0%,rgba(7,6,4,.42)_42%,rgba(7,6,4,.82)_100%)] md:bg-[linear-gradient(180deg,rgba(7,6,4,.96)_0%,rgba(7,6,4,.84)_22%,rgba(7,6,4,.36)_48%,rgba(7,6,4,.48)_68%,rgba(7,6,4,.94)_100%)]"
        aria-hidden="true"
      />

      <div>
        <p className="text-[10px] uppercase tracking-[.08em] text-[#bd8435] md:text-[13px]">
          {destination.number} — {destination.eyebrow}
        </p>
        <h3 className="mx-auto mt-5 max-w-[380px] font-serif text-[clamp(2.6rem,12vw,3.5rem)] uppercase leading-[.92] tracking-[-.035em] md:mt-4 md:text-[clamp(2.9rem,3.25vw,3.65rem)] md:leading-[.9]">
          {destination.name}
        </h3>
        <p className="mx-auto mt-5 max-w-[310px] text-[13px] leading-[1.4] text-[#eee4d7] md:mt-4 md:text-[15px]">
          {destination.description}
        </p>
      </div>

      <div className="mt-auto">
        <p className="text-[10px] uppercase leading-[1.55] tracking-[.24em] text-[#dfd1bf] md:text-[12px]">
          {destination.location}
          <br />
          {destination.schedule}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[.25em] md:mt-7 md:text-[13px]">
          {destination.ctaLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
            ↗
          </span>
        </span>
      </div>
    </Link>
  );
}
