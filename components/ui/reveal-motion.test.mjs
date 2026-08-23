import assert from "node:assert/strict";
import {
  getRevealDelay,
  revealVariants,
  shouldPrepareReveal,
} from "./reveal-motion.ts";

assert.equal(new Set(revealVariants).size, revealVariants.length);
assert.deepEqual(revealVariants, [
  "fade-up",
  "clip-up",
  "clip-left",
  "clip-bottom",
  "rise-scale",
  "slide-right",
  "fade",
]);
assert.equal(getRevealDelay(200, false), 200);
assert.equal(getRevealDelay(-40, false), 0);
assert.equal(getRevealDelay(200, true), 0);
assert.equal(shouldPrepareReveal({
  reducedMotion: false,
  observerSupported: true,
  hasLayout: true,
  isPastViewport: false,
}), true);
assert.equal(shouldPrepareReveal({
  reducedMotion: false,
  observerSupported: true,
  hasLayout: false,
  isPastViewport: false,
}), false);
assert.equal(shouldPrepareReveal({
  reducedMotion: false,
  observerSupported: true,
  hasLayout: true,
  isPastViewport: true,
}), false);
assert.equal(shouldPrepareReveal({
  reducedMotion: true,
  observerSupported: true,
  hasLayout: true,
  isPastViewport: false,
}), false);
assert.equal(shouldPrepareReveal({
  reducedMotion: false,
  observerSupported: false,
  hasLayout: true,
  isPastViewport: false,
}), false);

console.log("reveal motion: ok");
