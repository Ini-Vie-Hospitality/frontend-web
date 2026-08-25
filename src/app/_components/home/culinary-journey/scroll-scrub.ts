const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function getScrollProgress(sectionTop: number, scrollDistance: number) {
  if (scrollDistance <= 0) return 0;
  return clamp(-sectionTop / scrollDistance, 0, 1);
}

export function getHorizontalOffset(progress: number, maxTranslate: number) {
  const distance = Math.max(maxTranslate, 0);
  const normalizedProgress = clamp(progress, 0, 1);
  if (distance === 0 || normalizedProgress === 0) return 0;
  return -normalizedProgress * distance;
}

export function getVerticalTravel(
  maxTranslate: number,
  viewportHeight: number,
) {
  if (maxTranslate <= 0) return 0;
  return Math.max(maxTranslate * 1.35, viewportHeight * 1.25);
}

export function isScrollScrubEnabled(prefersReducedMotion: boolean) {
  return !prefersReducedMotion;
}
