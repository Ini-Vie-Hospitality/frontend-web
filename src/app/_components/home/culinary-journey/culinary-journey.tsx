"use client";

import { useLayoutEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal/reveal";
import { DiningCard } from "./dining-card";
import type { PublishedHomepageData } from "@/content/homepage/types";
import {
  getHorizontalOffset,
  getScrollProgress,
  getVerticalTravel,
  isScrollScrubEnabled,
} from "./scroll-scrub";

const resetCardEffects = (cards: HTMLElement[]) => {
  cards.forEach((card) => {
    const image = card.querySelector<HTMLElement>("[data-culinary-image]");
    const overlay = card.querySelector<HTMLElement>("[data-culinary-overlay]");
    const copy = card.querySelector<HTMLElement>("[data-culinary-copy]");

    if (image) image.style.transform = "none";
    if (overlay) overlay.style.opacity = "1";
    if (copy) {
      copy.style.opacity = "1";
      copy.style.transform = "none";
    }
  });
};

export function CulinaryJourney({ data }: { data: PublishedHomepageData["culinary"] }) {
  if (!data.items.length) return null;
  return <CulinaryJourneyContent data={data} />;
}

function CulinaryJourneyContent({ data }: { data: PublishedHomepageData["culinary"] }) {
  const diningDestinations = data.items;
  const scrubRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const scrub = scrubRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    if (!scrub || !stage || !viewport || !track) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-culinary-card]"));
    let frame = 0;
    let maxTranslate = 0;
    let verticalTravel = 0;

    const isStaticLayout = () => !isScrollScrubEnabled(reducedMotionQuery.matches);

    const updateCardEffects = (offset: number) => {
      const viewportCenter = viewport.clientWidth / 2;
      const focusRange = viewport.clientWidth * 0.7;

      cards.forEach((card) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2 + offset;
        const signedDistance = (cardCenter - viewportCenter) / viewport.clientWidth;
        const focus = 1 - Math.min(Math.abs(cardCenter - viewportCenter) / focusRange, 1);
        const image = card.querySelector<HTMLElement>("[data-culinary-image]");
        const overlay = card.querySelector<HTMLElement>("[data-culinary-overlay]");
        const copy = card.querySelector<HTMLElement>("[data-culinary-copy]");

        if (image) {
          const parallax = Math.max(-1, Math.min(1, signedDistance)) * -12;
          const scale = 1.03 - focus * 0.03;
          image.style.transform = `translate3d(${parallax.toFixed(2)}px, 0, 0) scale(${scale.toFixed(4)})`;
        }
        if (overlay) overlay.style.opacity = (0.96 - focus * 0.1).toFixed(3);
        if (copy) {
          copy.style.opacity = (0.78 + focus * 0.22).toFixed(3);
          copy.style.transform = `translate3d(0, ${(1 - focus) * 8}px, 0)`;
        }
      });
    };

    const updateFromScroll = () => {
      frame = 0;
      if (isStaticLayout()) return;

      const progress = getScrollProgress(
        scrub.getBoundingClientRect().top,
        verticalTravel,
      );
      const offset = getHorizontalOffset(progress, maxTranslate);
      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
      if (progressBar) progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      updateCardEffects(offset);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    const measure = () => {
      if (isStaticLayout()) {
        scrub.style.height = "auto";
        stage.style.position = "relative";
        viewport.style.overflowX = "auto";
        track.style.transform = "none";
        if (progressBar) progressBar.style.transform = "scaleX(0)";
        resetCardEffects(cards);
        return;
      }

      stage.style.removeProperty("position");
      viewport.style.removeProperty("overflow-x");
      maxTranslate = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      verticalTravel = getVerticalTravel(maxTranslate, stage.offsetHeight);
      scrub.style.height = `${stage.offsetHeight + verticalTravel}px`;
      scheduleUpdate();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    reducedMotionQuery.addEventListener("change", measure);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      reducedMotionQuery.removeEventListener("change", measure);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", measure);
      if (frame) window.cancelAnimationFrame(frame);
      scrub.style.removeProperty("height");
      stage.style.removeProperty("position");
      viewport.style.removeProperty("overflow-x");
      track.style.removeProperty("transform");
      resetCardEffects(cards);
    };
  }, []);

  return (
    <section
      id="dining"
      className="relative overflow-x-clip bg-[#f5f0e7] text-[#201f1c]"
      aria-labelledby="culinary-journey-title"
    >
      <header className="mx-auto max-w-[720px] px-5 py-[clamp(72px,8vw,126px)] text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[.16em] text-[#a56f2d]">
            {data.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="culinary-journey-title"
            className="mt-5 font-serif text-[clamp(3.2rem,15vw,4.8rem)] font-normal leading-[.92] tracking-[-.045em] md:text-[clamp(4.4rem,5vw,5.3rem)] md:leading-[.9]"
          >
            {data.title.split("\n").map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-[360px] text-[14px] leading-[1.45] text-[#666157] md:mt-7 md:max-w-[460px] md:text-[16px]">
            {data.description}
          </p>
        </Reveal>
      </header>

      <div ref={scrubRef} className="relative bg-[#090806]">
        <div
          ref={stageRef}
          className="sticky top-0 h-screen min-h-screen supports-[height:100dvh]:h-dvh"
        >
          <div
            className="absolute top-6 right-6 z-30 hidden items-center gap-3 text-[11px] uppercase tracking-[.2em] text-white/70 md:flex"
            aria-hidden="true"
          >
            {data.scrollLabel}
            <span className="h-px w-20 origin-left bg-white/30">
              <span
                ref={progressRef}
                className="block h-px origin-left scale-x-0 bg-[#bd8435] will-change-transform"
              />
            </span>
          </div>

          <div
            ref={viewportRef}
            className="h-full overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              ref={trackRef}
              className="flex h-full w-max gap-0 p-0 will-change-transform"
            >
              {diningDestinations.map((destination, index) => (
                <DiningCard
                  key={destination.name}
                  destination={destination}
                  index={index}
                  priority={index < 3}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
