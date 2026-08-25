import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  getHorizontalOffset,
  getScrollProgress,
  getVerticalTravel,
  isScrollScrubEnabled,
} from "./scroll-scrub.ts";

assert.equal(getScrollProgress(100, 1000), 0);
assert.equal(getScrollProgress(-500, 1000), 0.5);
assert.equal(getScrollProgress(-1200, 1000), 1);
assert.equal(getHorizontalOffset(0, 1440), 0);
assert.equal(getHorizontalOffset(0.5, 1440), -720);
assert.equal(getHorizontalOffset(1, 1440), -1440);
assert.ok(Math.abs(getVerticalTravel(1440, 900) - 1944) < 0.001);
assert.ok(Math.abs(getVerticalTravel(1950, 390) - 2632.5) < 0.001);
assert.equal(isScrollScrubEnabled(false), true);
assert.equal(isScrollScrubEnabled(true), false);

const diningCardSource = await readFile(
  new URL("./dining-card.tsx", import.meta.url),
  "utf8",
);

assert.doesNotMatch(
  diningCardSource,
  /border-r\s+border-l-0\s+border-\[#6f5c44\]\/60/,
);
assert.match(diningCardSource, /bg-\[#090806\]/);

console.log("culinary scroll scrub: ok");
