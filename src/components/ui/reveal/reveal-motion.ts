export const revealVariants = [
  "fade-up",
  "clip-up",
  "clip-left",
  "clip-bottom",
  "rise-scale",
  "slide-right",
  "fade",
] as const;

export type RevealVariant = (typeof revealVariants)[number];

type RevealPreparation = {
  reducedMotion: boolean;
  observerSupported: boolean;
  hasLayout: boolean;
  isPastViewport: boolean;
};

export function getRevealDelay(delay: number, reducedMotion: boolean) {
  return reducedMotion ? 0 : Math.max(0, delay);
}

export function shouldPrepareReveal({
  reducedMotion,
  observerSupported,
  hasLayout,
  isPastViewport,
}: RevealPreparation) {
  return !reducedMotion && observerSupported && hasLayout && !isPastViewport;
}
