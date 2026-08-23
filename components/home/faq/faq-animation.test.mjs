import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const itemSource = await readFile(
  new URL("./faq-item.tsx", import.meta.url),
  "utf8",
);
const sectionSource = await readFile(
  new URL("../faq-section.tsx", import.meta.url),
  "utf8",
);

assert.match(sectionSource, /useState\(1\)/);
assert.match(sectionSource, /openIndex === index \? -1 : index/);
assert.match(itemSource, /aria-expanded=\{isOpen\}/);
assert.match(itemSource, /aria-controls=\{panelId\}/);
assert.match(itemSource, /aria-hidden=\{!isOpen\}/);
assert.doesNotMatch(itemSource, /(?:^|\s)hidden=\{!isOpen\}/m);
assert.match(itemSource, /grid-rows-\[1fr\]/);
assert.match(itemSource, /grid-rows-\[0fr\]/);
assert.match(itemSource, /transition-\[grid-template-rows,opacity\]/);
assert.match(itemSource, /rotate-90 scale-75 opacity-0/);
assert.match(itemSource, /-rotate-90 scale-75 opacity-0/);
assert.match(itemSource, /min-h-0 overflow-hidden/);

console.log("faq animation: ok");
