import Link from "next/link";
import {
  forwardRef,
  type ForwardedRef,
} from "react";
import { wellnessEscapes } from "./wellness-escapes";

type WellnessCopyProps = {
  escape: (typeof wellnessEscapes)[number];
  isActive: boolean;
};

export const WellnessCopy = forwardRef(function WellnessCopy(
  { escape, isActive }: WellnessCopyProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={`absolute inset-0 flex min-w-0 flex-col justify-center opacity-0 will-change-[opacity,transform] first:opacity-100 ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isActive}
    >
      <p className="text-[10px] font-medium uppercase tracking-[.24em] text-[#777167] sm:text-[11px]">
       {escape.categories.join(" / ")}
      </p>
      <h3 className="mt-3 max-w-[300px] font-serif text-[clamp(2.45rem,11vw,4rem)] font-normal leading-[.88] tracking-[-.055em] sm:mt-5 lg:mt-7 lg:max-w-[560px] lg:text-[clamp(4rem,5.7vw,6.5rem)]">
        {escape.name}
      </h3>
      <p className="mt-3 text-[10px] font-medium uppercase tracking-[.23em] text-[#777167] sm:mt-5 sm:text-[11px] lg:mt-7">
        {escape.location}
      </p>
      <p className="mt-3 max-w-[420px] text-[12px] leading-[1.45] text-[#777167] sm:mt-5 sm:text-[14px] sm:leading-[1.55] lg:mt-8 lg:text-[16px] lg:leading-[1.65]">
        {escape.description}
      </p>
      <Link
        className="group mt-4 inline-flex w-fit items-center gap-3 border-b border-[#29241f]/40 pb-1.5 text-[10px] font-medium uppercase tracking-[.18em] text-[#29241f] transition-colors hover:border-[#777167] hover:text-[#777167] sm:mt-6 sm:text-[11px] lg:mt-9 lg:pb-2 lg:text-[12px]"
        href={escape.href}
        tabIndex={isActive ? 0 : -1}
      >
        Discover Experience
        <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
      </Link>
    </div>
  );
});
