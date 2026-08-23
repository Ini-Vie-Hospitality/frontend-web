"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getSceneIndex } from "./culinary-journey/scene-progression";
import { wellnessEscapes } from "./wellness-harmony/wellness-escapes";

export function WellnessHarmony() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEscape = wellnessEscapes[activeIndex];
  const totalSlides = wellnessEscapes.length;

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let frame = 0;
    const updateFromScroll = () => {
      frame = 0;
      const scrollDistance = track.offsetHeight - stage.offsetHeight;
      const progress = scrollDistance > 0
        ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollDistance))
        : 0;
      const nextIndex = getSceneIndex(progress, totalSlides);

      stage.style.setProperty("--wellness-progress", progress.toFixed(4));
      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [totalSlides]);

  return (
    <section
      id="wellness"
      className="relative overflow-hidden bg-[#f3efe7] text-[#28231f]"
      aria-labelledby="wellness-harmony-title"
    >
      <header className="mx-auto max-w-[720px] px-6 pb-[clamp(52px,6vw,88px)] pt-[clamp(84px,9vw,132px)] text-center">
        <p className="text-[11px] font-medium uppercase tracking-[.3em] text-[#686b5a]">
          iNi ViE Wellness
        </p>
        <h2
          id="wellness-harmony-title"
          className="mt-6 font-serif text-[clamp(3.4rem,6vw,5.8rem)] font-normal leading-[.9] tracking-[-.055em]"
        >
          Wellness Harmony Escape
        </h2>
        <p className="mx-auto mt-7 max-w-[390px] text-[15px] leading-[1.6] text-[#716960] md:text-[16px]">
          Find serenity in soulful rituals made to restore.
        </p>
      </header>

      <div
        ref={trackRef}
        className="relative min-h-[500svh]"
      >
        <div
          ref={stageRef}
          className="sticky top-0 h-svh overflow-hidden"
        >
          <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)] items-center gap-[clamp(48px,8vw,132px)] px-[clamp(24px,6vw,92px)] py-[clamp(34px,6vw,86px)] max-md:flex max-md:flex-col max-md:items-stretch max-md:gap-7 max-md:overflow-hidden max-md:py-8">
            <WellnessCopy escape={activeEscape} activeIndex={activeIndex} totalSlides={totalSlides} />

            <div className="relative flex min-h-0 items-center justify-center max-md:flex-1">
              <div className="relative aspect-[4/3] w-full max-w-[780px] overflow-hidden rounded-[6px] bg-[#d9c9b5] max-md:aspect-[4/5]">
                {wellnessEscapes.map((escape, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={escape.id}
                      className={`absolute inset-0 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] ${isActive ? "scale-100 opacity-100" : "scale-[1.025] opacity-0"}`}
                      aria-hidden={!isActive}
                    >
                      <Image
                        className="object-cover"
                        src={escape.image}
                        alt={isActive ? `${escape.name} wellness experience in ${escape.location}` : ""}
                        fill
                        sizes="(max-width: 767px) 92vw, 58vw"
                        priority={index === 0}
                      />
                      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,22,17,.02),rgba(27,22,17,.12))]" aria-hidden="true" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type WellnessCopyProps = {
  escape: (typeof wellnessEscapes)[number];
  activeIndex: number;
  totalSlides: number;
};

function WellnessCopy({ escape, activeIndex, totalSlides }: WellnessCopyProps) {
  return (
    <div
      key={escape.id}
      className="flex min-w-0 flex-col justify-center animate-[wellness-copy-in_700ms_cubic-bezier(.22,1,.36,1)_both] max-md:justify-start"
      aria-live="polite"
    >
      <p className="text-[11px] font-medium uppercase tracking-[.25em] text-[#686b5a]">
        {String(escape.id).padStart(2, "0")} — {escape.categories.join(" / ")}
      </p>
      <h3 className="mt-7 max-w-[500px] font-serif text-[clamp(3rem,5.2vw,6rem)] font-normal leading-[.92] tracking-[-.055em] max-md:mt-5 max-md:text-[clamp(2.8rem,13vw,4.2rem)]">
        {escape.name}
      </h3>
      <p className="mt-6 text-[11px] font-medium uppercase tracking-[.25em] text-[#686b5a]">
        {escape.location}
      </p>
      <p className="mt-8 max-w-[390px] text-[15px] leading-[1.65] text-[#716960] md:text-[16px]">
        {escape.description}
      </p>
      <Link
        className="group mt-9 inline-flex w-fit items-center gap-3 border-b border-[#28231f]/45 pb-2 text-[12px] font-medium uppercase tracking-[.2em] text-[#28231f] transition-colors hover:border-[#686b5a] hover:text-[#686b5a] max-md:mt-7"
        href={escape.href}
      >
        Discover Experience
        <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
      </Link>
      <div className="mt-16 flex items-center gap-5 max-md:mt-8">
        <span className="text-[12px] font-medium tracking-[.24em] text-[#28231f]">
          {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
        <span className="h-px w-[min(180px,24vw)] bg-[#c7ad82]/45" aria-hidden="true">
          <span
            className="block h-px bg-[#686b5a] transition-[width] duration-700"
            style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
          />
        </span>
      </div>
    </div>
  );
}
