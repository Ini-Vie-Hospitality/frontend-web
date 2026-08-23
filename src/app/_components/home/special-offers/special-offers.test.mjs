import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sectionSource = await readFile(
  new URL("./special-offers.tsx", import.meta.url),
  "utf8",
);
const offersSource = await readFile(
  new URL("./offers.ts", import.meta.url),
  "utf8",
);
const combinedSource = `${sectionSource}\n${offersSource}`;

assert.match(sectionSource, /import \{ Reveal \}/);
assert.match(sectionSource, /variant="clip-up"/);
assert.match(sectionSource, /variant="slide-right"/);
assert.match(offersSource, /reveal: "clip-left"/);
assert.match(offersSource, /reveal: "rise-scale"/);
assert.match(offersSource, /reveal: "clip-bottom"/);
assert.match(combinedSource, /offers\.map/);

console.log("special offers: ok");
