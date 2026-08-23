"use client";

import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useRef,
} from "react";
import {
  getRevealDelay,
  shouldPrepareReveal,
  type RevealVariant,
} from "./reveal-motion";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: RevealProps) {
  const observerRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const observerElement = observerRef.current;
    const motionElement = motionRef.current;
    if (!observerElement || !motionElement) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;

    const reveal = () => {
      motionElement.dataset.revealState = "visible";
      observer?.disconnect();
      observer = null;
    };

    const bounds = observerElement.getBoundingClientRect();
    const shouldHide = shouldPrepareReveal({
      reducedMotion: motionQuery.matches,
      observerSupported: "IntersectionObserver" in window,
      hasLayout: bounds.width > 0 && bounds.height > 0,
      isPastViewport: bounds.bottom <= 0,
    });

    if (!shouldHide) {
      reveal();
      return;
    }

    motionElement.dataset.revealState = "hidden";
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -4% 0px",
      },
    );
    observer.observe(observerElement);

    const handleMotionChange = () => {
      if (motionQuery.matches) reveal();
    };
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      motionElement.dataset.revealState = "visible";
      observer?.disconnect();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const style: RevealStyle = {
    "--reveal-delay": `${getRevealDelay(delay, false)}ms`,
  };

  return (
    <div
      ref={observerRef}
      className={className}
      data-reveal-observer
    >
      <div
        ref={motionRef}
        className={`reveal reveal-${variant} size-full`}
        data-reveal
        data-reveal-motion
        data-reveal-state="visible"
        style={style}
      >
        {children}
      </div>
    </div>
  );
}
