import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const offersSource = await readFile(
  new URL("./our-special-offers.tsx", import.meta.url),
  "utf8",
);
const journalSource = await readFile(
  new URL("./whats-new.tsx", import.meta.url),
  "utf8",
);

assert.match(offersSource, /import \{ Reveal \}/);
assert.match(offersSource, /variant="clip-up"/);
assert.match(offersSource, /variant="slide-right"/);
assert.match(offersSource, /reveal: "clip-left"/);
assert.match(offersSource, /reveal: "rise-scale"/);
assert.match(offersSource, /reveal: "clip-bottom"/);

assert.match(journalSource, /import \{ Reveal \}/);
assert.match(journalSource, /variant="clip-up"/);
assert.match(journalSource, /variant="slide-right"/);
assert.match(journalSource, /variant="rise-scale"/);
assert.match(journalSource, /variant="clip-left"/);
assert.match(journalSource, /variant="clip-bottom"/);
assert.doesNotMatch(journalSource, /rounded-\[(13|14)px\]/);
assert.match(journalSource, /rounded-none/);
assert.match(journalSource, /text-\[clamp\(3rem,13vw,5rem\)\]/);
assert.match(journalSource, /aspect-\[4\/5\]/);
assert.match(journalSource, /aspect-\[16\/9\]/);
assert.match(journalSource, /md:grid-cols-2/);
assert.match(
  journalSource,
  /variant="fade-up" delay=\{260\} className="md:col-span-2"/,
);

console.log("entry animations: ok");
