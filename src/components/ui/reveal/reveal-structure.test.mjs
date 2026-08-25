import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("./reveal.tsx", import.meta.url), "utf8");

assert.match(source, /data-reveal-observer/);
assert.match(source, /data-reveal-motion/);
assert.match(source, /observer\.observe\(observerElement\)/);
assert.match(source, /motionElement\.dataset\.revealState/);

console.log("reveal structure: ok");
