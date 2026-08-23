import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const storySource = await readFile(
  new URL("./our-story.tsx", import.meta.url),
  "utf8",
).catch(() => "");
const pageSource = await readFile(
  new URL("../../app/page.tsx", import.meta.url),
  "utf8",
);

assert.match(storySource, /Our Story/);
assert.match(storySource, /About Us/);
assert.match(storySource, /What Makes Us Different/);
assert.match(storySource, /Our Eight Mantras/);
assert.match(storySource, /Sustainability/);
assert.match(storySource, /\/our-story\/infinity-pool\.png/);
assert.match(storySource, /\/our-story\/meaningful-journey\.png/);
assert.match(storySource, /\/our-story\/eight-mantras\.jpg/);
assert.match(storySource, /\/our-story\/sustainability\.jpg/);
assert.match(storySource, /https:\/\/inivie\.com\/about/);
assert.match(storySource, /import \{ Reveal \}/);
assert.match(storySource, /variant="clip-up"/);
assert.match(storySource, /imageReveal: "rise-scale"/);
assert.match(storySource, /imageReveal: "clip-bottom"/);
assert.match(storySource, /h-\[clamp\(250px,72vw,320px\)\]/);
assert.doesNotMatch(storySource, /items-stretch/);
assert.doesNotMatch(storySource, /min-h-\[330px\]/);
assert.match(
  pageSource,
  /<WellnessHarmony \/>[\s\S]*<OurStory \/>[\s\S]*<OurSpecialOffers \/>/,
);

console.log("our story structure: ok");
