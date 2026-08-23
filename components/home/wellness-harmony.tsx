"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../ui/reveal";
import {
  forwardRef,
  type ForwardedRef,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  getExperienceFrame,
  getScrollProgress,
  getStoryHeight,
} from "./wellness-harmony/scroll-story";
import { wellnessEscapes } from "./wellness-harmony/wellness-escapes";

export function WellnessHarmony() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = wellnessEscapes.length;

  useLayoutEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let frame = 0;
    let reducedMotion = false;

    const updateFromScroll = () => {
      frame = 0;
      const scrollDistance = track.offsetHeight - stage.offsetHeight;
      const progress = getScrollProgress(
        track.getBoundingClientRect().top,
        scrollDistance,
      );
      const { activeIndex: nextIndex, position } = getExperienceFrame(
        progress,
        totalSlides,
      );

      copyRefs.current.forEach((copy, index) => {
        if (!copy) return;
        const distance = Math.abs(index - position);
        copy.style.opacity = String(Math.max(0, 1 - distance));
        copy.style.transform = reducedMotion
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${(index - position) * 24}px, 0)`;
      });

      imageRefs.current.forEach((image, index) => {
        if (!image) return;
        const distance = Math.min(Math.abs(index - position), 1);
        image.style.opacity = String(Math.max(0, 1 - distance));
        image.style.transform = reducedMotion
          ? "scale(1)"
          : `scale(${1 + distance * 0.035})`;
      });

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${(position + 1) / totalSlides})`;
      }

      setActiveIndex((current) => current === nextIndex ? current : nextIndex);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    const measure = () => {
      track.style.height = `${getStoryHeight(stage.clientHeight, totalSlides)}px`;
      scheduleUpdate();
    };

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      reducedMotion = reducedMotionQuery.matches;
      scheduleUpdate();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(stage);
    reducedMotionQuery.addEventListener("change", syncMotionPreference);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measure);

    syncMotionPreference();
    measure();

    return () => {
      resizeObserver.disconnect();
      reducedMotionQuery.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", measure);
      if (frame) window.cancelAnimationFrame(frame);
      track.style.removeProperty("height");
    };
  }, [totalSlides]);

  return (
    <section
      id="wellness"
      className="relative w-full overflow-x-clip bg-[#f2ede4] text-[#29241f]"
      aria-labelledby="wellness-harmony-title"
    >
      <header className="mx-auto max-w-[760px] px-6 py-[clamp(80px,9vw,136px)] text-center">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[.28em] text-[#777167]">
            iNi ViE Wellness
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="wellness-harmony-title"
            className="mt-5 font-serif text-[clamp(3.2rem,7vw,6rem)] font-normal leading-[.9] tracking-[-.055em]"
          >
            Wellness Harmony Escape
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-[420px] text-[14px] leading-[1.55] text-[#777167] sm:text-[16px]">
            Find serenity in soulful rituals made to restore.
          </p>
        </Reveal>
      </header>

      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${getStoryHeight(100, totalSlides)}dvh` }}
      >
        <div
          ref={stageRef}
          className="sticky top-0 h-screen min-h-screen overflow-hidden bg-[#f2ede4] supports-[height:100dvh]:h-dvh"
        >
          <div className="grid h-full w-full grid-rows-[48%_52%] lg:grid-cols-[40%_60%] lg:grid-rows-1">
            <div className="relative order-2 min-h-0 bg-[#f2ede4] lg:order-1">
              <div
                className="relative h-full px-6 py-5 sm:px-10 sm:py-8 lg:px-[clamp(32px,4vw,72px)] lg:py-[clamp(42px,6vh,76px)]"
                aria-live="polite"
              >
                <div className="relative h-full pb-10 lg:pb-14">
                  {wellnessEscapes.map((escape, index) => (
                    <WellnessCopy
                      key={escape.id}
                      ref={(node) => { copyRefs.current[index] = node; }}
                      escape={escape}
                      isActive={index === activeIndex}
                    />
                  ))}
                </div>

                <div className="absolute right-6 bottom-5 left-6 flex items-center gap-4 sm:right-10 sm:bottom-8 sm:left-10 lg:right-[clamp(32px,4vw,72px)] lg:bottom-[clamp(42px,6vh,76px)] lg:left-[clamp(32px,4vw,72px)]">
                  <span className="shrink-0 text-[11px] font-medium tracking-[.22em]">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 overflow-hidden bg-[#29241f]/20" aria-hidden="true">
                    <span
                      ref={progressRef}
                      className="block h-full origin-left bg-[#29241f] will-change-transform"
                      style={{ transform: `scaleX(${1 / totalSlides})` }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="relative order-1 min-h-0 overflow-hidden bg-[#b9a48d] lg:order-2">
              {wellnessEscapes.map((escape, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={escape.id}
                    ref={(node) => { imageRefs.current[index] = node; }}
                    className="absolute inset-0 opacity-0 will-change-[opacity,transform] first:opacity-100"
                    aria-hidden={!isActive}
                  >
                    <Image
                      className="object-cover"
                      src={escape.image}
                      alt={isActive ? `${escape.name} wellness experience in ${escape.location}` : ""}
                      fill
                      sizes="(max-width: 1023px) 100vw, 60vw"
                      priority={index === 0}
                    />
                    <span
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,22,17,.03),rgba(27,22,17,.14))]"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type WellnessCopyProps = {
  escape: (typeof wellnessEscapes)[number];
  isActive: boolean;
};

const WellnessCopy = forwardRef(function WellnessCopy(
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
        {String(escape.id).padStart(2, "0")} — {escape.categories.join(" / ")}
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
