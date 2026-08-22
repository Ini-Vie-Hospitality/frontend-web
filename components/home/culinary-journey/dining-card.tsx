import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DiningDestination } from "./dining-destinations";

export function DiningCard({ destination }: { destination: DiningDestination }) {
  return (
    <Link
      className="group min-w-0 overflow-hidden rounded-[7px] border border-[#6c5d4a]/65 bg-[#17130e] transition-colors hover:border-[#e46d0b] max-md:snap-start"
      href={destination.href}
    >
      <div className="relative aspect-[.88] overflow-hidden border-b border-[#3e352b]">
        <Image
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 767px) 78vw, 20vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,4,0),rgba(8,6,4,.08)_62%,rgba(8,6,4,.3))]" />
      </div>
      <div className="min-h-[196px] p-[25px] max-[1150px]:p-5 max-md:min-h-[180px] max-md:p-5">
        <h3 className="m-0 font-serif text-[clamp(1.65rem,1.85vw,2.15rem)] font-normal leading-[1.05] tracking-[-.035em] max-md:text-[2rem]">
          {destination.name}
        </h3>
        <p className="mt-3 mb-[16px] text-[15px] text-[#a69b8c]">
          {destination.location}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-[4px] border border-[#938577] px-[11px] py-[6px] text-[11px] text-[#d3c8ba]">
            {destination.category}
          </span>
          <span className="rounded-[4px] border border-[#e46d0b] px-[11px] py-[6px] text-[11px] text-[#e46d0b]">
            New Opening
          </span>
        </div>
        <span className="mt-[26px] flex items-center gap-5 text-[14px] text-[#d3c8ba]">
          Discover Dining
          <ArrowRight className="size-[22px] text-[#e46d0b]" />
        </span>
      </div>
    </Link>
  );
}
