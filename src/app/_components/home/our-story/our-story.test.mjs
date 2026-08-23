import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const storySource = await readFile(
  new URL("./our-story.tsx", import.meta.url),
  "utf8",
).catch(() => "");
const storiesSource = await readFile(
  new URL("./stories.ts", import.meta.url),
  "utf8",
);
const blockSource = await readFile(
  new URL("./story-block.tsx", import.meta.url),
  "utf8",
);
const combinedSource = `${storySource}\n${storiesSource}\n${blockSource}`;
const pageSource = await readFile(
  new URL("../../../page.tsx", import.meta.url),
  "utf8",
);

assert.match(storySource, /Our Story/);
assert.match(combinedSource, /About Us/);
assert.match(combinedSource, /What Makes Us Different/);
assert.match(combinedSource, /Our Eight Mantras/);
assert.match(combinedSource, /Sustainability/);
assert.equal((storiesSource.match(/cta: "Discover More"/g) ?? []).length, 3);
assert.equal(
  (storiesSource.match(/href: "https:\/\/inivie\.com\/about"/g) ?? []).length,
  4,
);
assert.match(combinedSource, /\/our-story\/infinity-pool\.png/);
assert.match(combinedSource, /\/our-story\/meaningful-journey\.png/);
assert.match(combinedSource, /\/our-story\/eight-mantras\.jpg/);
assert.match(combinedSource, /\/our-story\/sustainability\.jpg/);
assert.match(combinedSource, /https:\/\/inivie\.com\/about/);
assert.match(combinedSource, /import \{ Reveal \}/);
assert.match(combinedSource, /variant="clip-up"/);
assert.match(combinedSource, /imageReveal: "rise-scale"/);
assert.match(combinedSource, /imageReveal: "clip-bottom"/);
assert.match(combinedSource, /h-\[clamp\(250px,72vw,320px\)\]/);
assert.doesNotMatch(combinedSource, /items-stretch/);
assert.doesNotMatch(combinedSource, /min-h-\[330px\]/);
assert.match(
  pageSource,
  /<WellnessHarmony \/>[\s\S]*<OurStory \/>[\s\S]*<OurSpecialOffers \/>/,
);

console.log("our story structure: ok");
