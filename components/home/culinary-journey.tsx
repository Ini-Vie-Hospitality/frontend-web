"use client";

import { useEffect, useRef, useState } from "react";
import { DiningCard } from "./culinary-journey/dining-card";
import { diningDestinations } from "./culinary-journey/dining-destinations";
import { getSceneIndex } from "./culinary-journey/scene-progression";

const desktopSceneCount = diningDestinations.length - 2;
const mobileSceneCount = diningDestinations.length;

export function CulinaryJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const [desktopScene, setDesktopScene] = useState(0);
  const [mobileScene, setMobileScene] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const horizontalTrack = horizontalTrackRef.current;
    if (!track || !stage || !horizontalTrack) return;

    let frame = 0;
    const updateFromScroll = () => {
      frame = 0;
      const scrollDistance = track.offsetHeight - stage.offsetHeight;
      const progress = scrollDistance > 0
        ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollDistance))
        : 0;

      horizontalTrack.style.setProperty("--culinary-progress", progress.toFixed(4));

      const nextDesktopScene = getSceneIndex(progress, desktopSceneCount);
      const nextMobileScene = getSceneIndex(progress, mobileSceneCount);
      setDesktopScene((current) => current === nextDesktopScene ? current : nextDesktopScene);
      setMobileScene((current) => current === nextMobileScene ? current : nextMobileScene);
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
  }, []);

  const mobileDestination = diningDestinations[mobileScene];
  const desktopProgress = ((desktopScene + 1) / desktopSceneCount) * 100;
  const mobileProgress = ((mobileScene + 1) / mobileSceneCount) * 100;

  return (
    <section
      id="dining"
      className="relative overflow-hidden bg-[#f5f0e7] text-[#201f1c]"
      aria-labelledby="culinary-journey-title"
    >
      <header className="mx-auto max-w-[720px] px-5 py-[clamp(72px,8vw,126px)] text-center">
        <h2
          id="culinary-journey-title"
          className="font-serif text-[clamp(3.2rem,15vw,4.8rem)] font-normal leading-[.92] tracking-[-.045em] md:text-[clamp(4.4rem,5vw,5.3rem)] md:leading-[.9]"
        >
          A Journey
          <br />
          Through Taste.
        </h2>
        <p className="mx-auto mt-6 max-w-[360px] text-[14px] leading-[1.45] text-[#666157] md:mt-7 md:max-w-[460px] md:text-[16px]">
          Discover six distinctive dining experiences shaped by craft,
          atmosphere, and the spirit of Bali.
        </p>
      </header>

      <div
        ref={trackRef}
        className="relative min-h-[700svh] bg-[#090806] md:min-h-[400svh]"
      >
        <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
          <div
            className="absolute top-5 right-5 z-30 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-white/70 md:top-7 md:right-8 md:text-[11px]"
            aria-live="polite"
          >
            <span className="md:hidden">
              {String(mobileScene + 1).padStart(2, "0")} / {String(mobileSceneCount).padStart(2, "0")}
            </span>
            <span className="hidden md:inline">
              {String(desktopScene + 1).padStart(2, "0")} / {String(desktopSceneCount).padStart(2, "0")}
            </span>
            <span className="h-px w-12 bg-white/40 md:hidden" aria-hidden="true">
              <span
                className="block h-px bg-[#bd8435] transition-[width] duration-500"
                style={{ width: `${mobileProgress}%` }}
              />
            </span>
            <span className="hidden h-px w-20 bg-white/40 md:block" aria-hidden="true">
              <span
                className="block h-px bg-[#bd8435] transition-[width] duration-500"
                style={{ width: `${desktopProgress}%` }}
              />
            </span>
          </div>

          <div
            ref={horizontalTrackRef}
            className="hidden h-full w-[200vw] will-change-transform md:flex"
            style={{
              transform: "translate3d(calc(var(--culinary-progress, 0) * -100vw), 0, 0)",
            }}
          >
            {diningDestinations.map((destination, index) => (
              <DiningCard
                key={destination.name}
                destination={destination}
                animationDelay={index * 70}
              />
            ))}
          </div>

          <div className="grid h-full place-items-center px-5 py-12 md:hidden">
            <DiningCard
              key={mobileDestination.name}
              destination={mobileDestination}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
