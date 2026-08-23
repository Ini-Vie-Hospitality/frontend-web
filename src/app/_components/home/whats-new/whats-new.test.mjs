import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sectionSource = await readFile(
  new URL("./whats-new.tsx", import.meta.url),
  "utf8",
);
const cardsSource = await readFile(
  new URL("./story-cards.tsx", import.meta.url),
  "utf8",
);
const combinedSource = `${sectionSource}\n${cardsSource}`;

assert.match(sectionSource, /import \{ Reveal \}/);
assert.match(sectionSource, /variant="clip-up"/);
assert.match(sectionSource, /variant="slide-right"/);
assert.match(sectionSource, /variant="rise-scale"/);
assert.match(sectionSource, /variant="clip-left"/);
assert.match(sectionSource, /variant="clip-bottom"/);
assert.doesNotMatch(combinedSource, /rounded-\[(13|14)px\]/);
assert.match(cardsSource, /rounded-none/);
assert.match(sectionSource, /text-\[clamp\(2\.75rem,13vw,5rem\)\]/);
assert.match(cardsSource, /aspect-\[4\/5\]/);
assert.match(cardsSource, /aspect-\[16\/9\]/);
assert.match(sectionSource, /md:grid-cols-2/);
assert.match(
  sectionSource,
  /variant="fade-up" delay=\{260\} className="md:col-span-2"/,
);

console.log("whats new: ok");
