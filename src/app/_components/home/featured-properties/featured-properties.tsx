"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/reveal/reveal";
import type { PublishedHomepageData } from "@/content/homepage/types";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function FeaturedProperties({
  data,
}: {
  data: PublishedHomepageData["featuredProperties"];
}) {
  if (!data.items.length) return null;
  return <FeaturedPropertiesContent data={data} />;
}

function FeaturedPropertiesContent({
  data,
}: {
  data: PublishedHomepageData["featuredProperties"];
}) {
  const properties = data.items;
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const activeProperty = properties[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let frame = 0;
    const updateFromScroll = () => {
      frame = 0;
      const scrollDistance = track.offsetHeight - stage.offsetHeight;
      const progress =
        scrollDistance > 0
          ? clamp(-track.getBoundingClientRect().top / scrollDistance, 0, 1)
          : 0;
      const nextIndex = Math.min(
        Math.floor(progress * properties.length),
        properties.length - 1,
      );

      stage.style.setProperty("--slideshow-progress", progress.toFixed(4));
      setActiveIndex((current) =>
        current === nextIndex ? current : nextIndex,
      );
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
  }, [properties.length]);

  const progressWidth = `${Math.max(((activeIndex + 1) / properties.length) * 100, 8)}%`;

  return (
    <section
      id="stays"
      className="relative bg-[#f5f0e7] pt-[clamp(110px,12vw,180px)] text-[#171815]"
      aria-labelledby="featured-properties-title"
    >
      <header className="mx-auto max-w-[820px] px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[.28em] text-[#a86422] sm:text-xs">
            {data.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="featured-properties-title"
            className="m-0 font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[.98] tracking-[-.055em]"
          >
            {data.title}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-[1.75] text-[#5a574f] sm:text-[17px]">
            {data.description}
          </p>
        </Reveal>
      </header>

      <div
        ref={trackRef}
        className="relative mt-[clamp(70px,9vw,130px)]"
        style={{ minHeight: `${(properties.length + 1) * 100}svh` }}
      >
        <div ref={stageRef} className="sticky top-0 h-svh">
          <div className="relative size-full overflow-hidden bg-[#292c26]">
            {properties.map((property, index) => (
              <Image
                key={property.id}
                src={property.image}
                alt={property.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                sizes="100vw"
                className="object-cover"
                style={{
                  objectPosition: "center",
                  opacity: index === activeIndex ? 1 : 0,
                  transform: index === activeIndex ? "scale(1)" : "scale(1.03)",
                  transition: reducedMotion
                    ? "opacity 120ms linear"
                    : "opacity 600ms cubic-bezier(.22,1,.36,1), transform 700ms cubic-bezier(.22,1,.36,1)",
                  zIndex: index === activeIndex ? 1 : 0,
                }}
                aria-hidden={index !== activeIndex}
              />
            ))}

            <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(7,9,7,.04)_18%,rgba(7,9,7,.10)_42%,rgba(7,9,7,.76)_100%)]" />

            <div className="absolute inset-x-[clamp(24px,4vw,64px)] bottom-[clamp(28px,4vw,56px)] z-[3] flex items-end justify-between gap-8 text-white max-md:inset-x-6 max-md:bottom-7 max-md:block">
              <div
                key={activeProperty.id}
                className="max-w-[560px]"
                aria-live="polite"
                style={{
                  animation: reducedMotion
                    ? "none"
                    : "curated-content-in 500ms cubic-bezier(.22,1,.36,1) both",
                }}
              >
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[.22em] text-white/75 sm:text-xs">
                  {activeProperty.category}
                </p>
                <h3 className="m-0 font-serif text-[clamp(2.3rem,5vw,5rem)] leading-[.98] tracking-[-.045em] max-md:text-[clamp(2.35rem,11vw,4rem)]">
                  {activeProperty.name}
                </h3>
                <p className="mt-5 max-w-[500px] text-[14px] leading-[1.65] text-white/82 sm:text-[16px]">
                  {activeProperty.description}
                </p>
                <Link
                  href={activeProperty.href}
                  className="group mt-7 inline-flex items-center gap-5 border-b border-white/65 pb-2 text-sm text-white transition-colors hover:border-white max-md:mt-6"
                >
                  {activeProperty.cta}
                  <ArrowRight className="size-[19px] text-[#e08a3c] transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mb-1 w-[190px] shrink-0 text-right max-md:mt-8 max-md:w-full max-md:text-left">
                <div className="mb-3 flex items-center justify-between text-[11px] font-medium uppercase tracking-[.18em] text-white/70">
                  <span>{data.scrollLabel}</span>
                  <span className="text-white">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(properties.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="h-px w-full bg-white/30">
                  <span
                    className="block h-px bg-white transition-[width] duration-500 ease-out"
                    style={{ width: progressWidth }}
                  />
                </div>
                <span className="sr-only">
                  Property {activeIndex + 1} of {properties.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
