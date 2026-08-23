import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const heroSource = await readFile(
  new URL("./hero.tsx", import.meta.url),
  "utf8",
);
const mediaSource = await readFile(
  new URL("./hero-media.tsx", import.meta.url),
  "utf8",
);
const controlsSource = await readFile(
  new URL("./hero-controls.tsx", import.meta.url),
  "utf8",
);

assert.match(heroSource, /<HeroMedia videoRef=\{videoRef\} \/>/);
assert.doesNotMatch(heroSource, /document\.querySelector/);
assert.match(mediaSource, /videoRef: RefObject<HTMLVideoElement \| null>/);
assert.match(mediaSource, /<video[\s\S]*ref=\{videoRef\}/);
assert.match(controlsSource, /Turn sound on/);
assert.match(controlsSource, /Mute video/);

console.log("hero video sound controls: ok");
