"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { wellnessEscapes } from "./wellness-harmony/wellness-escapes";

export function WellnessHarmony() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeEscape = wellnessEscapes[activeIndex];

  const moveSlide = (direction: number) => {
    setActiveIndex((current) => (current + direction + wellnessEscapes.length) % wellnessEscapes.length);
  };

  return (
    <section
      id="wellness"
      className="relative overflow-hidden bg-[#f7f5f1] px-[clamp(24px,5.7vw,96px)] py-[clamp(76px,8vw,132px)] text-[#27251f]"
      aria-labelledby="wellness-harmony-title"
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(285px,.72fr)_minmax(480px,1.08fr)_minmax(285px,.72fr)] items-center gap-[clamp(36px,5vw,92px)] max-[1150px]:grid-cols-[minmax(250px,.68fr)_minmax(430px,1fr)] max-[1150px]:gap-10 max-md:flex max-md:flex-col max-md:items-stretch">
        <div className="flex min-h-[820px] flex-col justify-between py-[clamp(30px,5vw,88px)] max-[1150px]:min-h-[720px] max-md:min-h-0 max-md:py-0">
          <div className="max-w-[380px]">
            <p className="m-0 text-[12px] font-medium uppercase tracking-[.28em] text-[#c97849] max-md:text-[11px]">Svaha Wellness</p>
            <h2 id="wellness-harmony-title" className="mt-8 font-serif text-[clamp(3.3rem,4.55vw,5.7rem)] font-normal leading-[.98] tracking-[-.055em] max-md:mt-6 max-md:text-[clamp(3rem,14vw,4.7rem)]">
              Wellness
              <br />
              Harmony Escape
            </h2>
            <span className="my-9 block h-px w-12 bg-[#d7865e] max-md:my-7" aria-hidden="true" />
            <p className="max-w-[280px] text-[16px] leading-[1.65] text-[#666158] max-md:text-[15px]">
              Find serenity in soulful rituals made to restore.
            </p>
            <Link className="group mt-9 inline-flex items-center gap-3 text-[15px] text-[#4a463d] transition-colors hover:text-[#bf7045] max-md:mt-7" href={activeEscape.href}>
              Discover Wellness
              <ArrowRight className="size-[19px] text-[#c97849] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[1150px]:gap-3 max-md:mt-12 max-md:grid-cols-2">
            {wellnessEscapes.slice(0, 2).map((escape, index) => (
              <WellnessThumbnail key={escape.id} escape={escape} index={index} activeIndex={activeIndex} onSelect={setActiveIndex} />
            ))}
          </div>
        </div>

        <article className="relative min-h-[820px] overflow-hidden rounded-[22px] bg-[#e8dece] px-[clamp(28px,3.2vw,54px)] pt-[22px] pb-[clamp(30px,3vw,50px)] shadow-[0_24px_65px_rgba(70,56,37,.11)] max-[1150px]:min-h-[720px] max-md:order-first max-md:min-h-[650px] max-md:rounded-[19px] max-md:px-6 max-md:pt-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.62),transparent_34%),linear-gradient(145deg,rgba(255,255,255,.22),transparent_48%,rgba(165,127,83,.08))]" />
          <div className="relative z-[1] flex flex-wrap justify-center gap-2.5">
            {activeEscape.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#fff8e7]/70 bg-white/10 px-4 py-2 text-[11px] text-[#62594c] backdrop-blur-[2px] max-md:px-3 max-md:py-1.5 max-md:text-[10px]">
                {tag}
              </span>
            ))}
          </div>

          <div key={activeEscape.id} className="relative z-[1] mt-[clamp(36px,5vw,70px)] animate-[wellness-image-in_650ms_cubic-bezier(.22,1,.36,1)_both]">
            <div className="relative mx-auto aspect-[.72] w-[min(76%,430px)] overflow-hidden rounded-[48%] bg-[#cfc0a9] shadow-[0_18px_35px_rgba(71,48,24,.14)] max-md:w-[min(76%,310px)]">
              <Image className="object-cover" src={activeEscape.image} alt={`${activeEscape.name} wellness experience`} fill sizes="(max-width: 767px) 76vw, 31vw" priority={activeEscape.id === 3} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,20,12,.02),rgba(27,20,12,.14))]" />
            </div>
          </div>

          <div key={`${activeEscape.id}-copy`} className="relative z-[1] mt-[clamp(28px,3vw,52px)] animate-[wellness-content-in_500ms_cubic-bezier(.22,1,.36,1)_both]">
            <h3 className="m-0 font-serif text-[clamp(2.5rem,3.45vw,4.1rem)] font-normal leading-[.98] tracking-[-.05em] max-md:text-[clamp(2.5rem,11vw,3.8rem)]">{activeEscape.name}</h3>
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[.25em] text-[#766b5d]">{activeEscape.location}</p>
            <span className="mt-7 block h-px w-12 bg-[#c97849]" aria-hidden="true" />
          </div>
        </article>

        <div className="flex min-h-[820px] flex-col justify-between py-[clamp(30px,5vw,88px)] max-[1150px]:min-h-[720px] max-md:min-h-0 max-md:py-0">
          <div className="flex items-center justify-center gap-4 pt-[clamp(80px,11vw,176px)] max-[1150px]:pt-[clamp(40px,7vw,100px)] max-md:justify-end max-md:pt-0">
            <button className="grid size-[52px] place-items-center rounded-full bg-[#3d3a29] text-[#f8f4eb] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c97849]" type="button" aria-label="Previous wellness experience" onClick={() => moveSlide(-1)}>
              <ArrowLeft className="size-[21px] stroke-[1.2]" />
            </button>
            <button className="grid size-[52px] place-items-center rounded-full border border-[#d6d0c6] bg-transparent text-[#3d3a29] transition-colors hover:border-[#3d3a29] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c97849]" type="button" aria-label="Next wellness experience" onClick={() => moveSlide(1)}>
              <ArrowRight className="size-[21px] stroke-[1.2]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 max-[1150px]:gap-3 max-md:mt-12">
            {wellnessEscapes.slice(2).map((escape, offset) => (
              <WellnessThumbnail key={escape.id} escape={escape} index={offset + 2} activeIndex={activeIndex} onSelect={setActiveIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type WellnessThumbnailProps = {
  escape: (typeof wellnessEscapes)[number];
  index: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

function WellnessThumbnail({ escape, index, activeIndex, onSelect }: WellnessThumbnailProps) {
  return (
    <button className="group min-w-0 text-left" type="button" aria-label={`Show ${escape.name}`} aria-current={activeIndex === index ? "true" : undefined} onClick={() => onSelect(index)}>
      <div className={`relative aspect-[.86] overflow-hidden rounded-[9px] bg-[#d8cdbb] transition-[box-shadow,transform] duration-300 group-hover:-translate-y-1 ${activeIndex === index ? "shadow-[0_0_0_2px_#c97849]" : ""}`}>
        <Image className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" src={escape.image} alt="" fill sizes="(max-width: 767px) 42vw, 14vw" />
      </div>
      <div className="mt-3 flex gap-3 text-[#555046] max-md:gap-2">
        <span className="text-[12px] text-[#8a8176]">{String(index + 1).padStart(2, "0")}</span>
        <span className="min-w-0 text-[12px] leading-[1.35] sm:text-[13px]">
          <strong className="block font-medium text-[#39362f]">{escape.name}</strong>
          <span className="mt-1 block">{escape.location}</span>
        </span>
      </div>
    </button>
  );
}
