import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sectionSource = await readFile(new URL("./whats-new.tsx", import.meta.url), "utf8");
const cardsSource = await readFile(new URL("./story-cards.tsx", import.meta.url), "utf8");

assert.match(sectionSource, /if \(!data\.items\.length\) return null/);
assert.match(sectionSource, /\[featureStory, \.\.\.standardStories\]/);
assert.match(sectionSource, /<FeatureStory story=\{featureStory\}/);
assert.match(sectionSource, /standardStories\.map/);
assert.match(sectionSource, /<CompactStory story=\{story\}/);
assert.match(sectionSource, /md:grid-cols-2/);
assert.doesNotMatch(sectionSource, /WideStory story=/);
assert.match(cardsSource, /href=\{story\.href\}/);
assert.match(cardsSource, /rounded-none/);

console.log("whats new: ok");
