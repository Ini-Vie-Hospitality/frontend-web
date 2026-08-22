import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Property } from "./properties";

type PropertyCardProps = {
  property: Property;
  isCurrent: boolean;
};

export function PropertyCard({ property, isCurrent }: PropertyCardProps) {
  return (
    <Link
      className="group block min-w-0 max-md:snap-start"
      href={property.href}
    >
      <div className="relative h-[696px] overflow-hidden rounded-[25px] bg-[#242820] max-[1100px]:h-[560px] max-md:h-auto max-md:aspect-[3/4.35] max-md:rounded-[20px]">
        <Image
          className="object-cover transition-transform duration-650 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]"
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 767px) 88vw, 28vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,7,0)_35%,rgba(7,9,7,.2)_54%,rgba(7,9,7,.96)_100%)]" />
        <div className="absolute inset-x-[30px] bottom-[30px] text-white max-md:inset-x-[22px] max-md:bottom-6">
          <span className="mb-[14px] block text-[11px] uppercase tracking-[.06em]">
            {property.category}
          </span>
          <h3 className="m-0 font-serif text-[clamp(2rem,2.1vw,2.7rem)] leading-[1.08] tracking-[-.03em] max-md:text-[2rem]">
            {property.name}
          </h3>
          <p className="my-[18px] mb-[25px] text-[15px] leading-[1.55] max-md:text-sm">
            {property.description}
          </p>
          <span className="flex w-max items-center gap-7 border-b border-white/46 pb-[10px] text-[15px] text-white">
            {isCurrent ? "Discover Stay" : "Explore Property"}
            <ArrowRight className="size-[22px] text-orange" />
          </span>
        </div>
        <span className="absolute top-[22px] right-[22px] grid size-[42px] place-items-center rounded-full border border-soft-white/55 text-soft-white opacity-0 transition-opacity duration-220 group-hover:opacity-100 max-md:opacity-100">
          <ArrowUpRight className="size-[18px]" />
        </span>
      </div>
    </Link>
  );
}
