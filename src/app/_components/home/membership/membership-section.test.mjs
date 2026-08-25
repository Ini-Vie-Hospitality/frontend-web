import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("./membership-section.tsx", import.meta.url),
  "utf8",
);
const itemSource = await readFile(
  new URL("./membership-benefit-item.tsx", import.meta.url),
  "utf8",
);
const iconsSource = await readFile(
  new URL("./membership-benefit-icons.ts", import.meta.url),
  "utf8",
);
const pageSource = await readFile(
  new URL("../../../page.tsx", import.meta.url),
  "utf8",
);

assert.match(source, /HomepageData\["membership"\]/);
assert.match(source, /src=\{data\.video\}/);
assert.match(source, /data\.benefits\.map/);
assert.match(source, /href=\{data\.primary\.href\}/);
assert.match(source, /href=\{data\.secondary\.href\}/);
assert.match(itemSource, /const icons/);
for (const icon of [
  "crown",
  "sparkles",
  "calendar-heart",
  "flower-2",
  "ticket-percent",
  "shield-check",
  "waves",
]) {
  assert.ok(iconsSource.includes(icon));
}
assert.match(source, /<video/);
assert.match(source, /autoPlay/);
assert.match(source, /muted/);
assert.match(source, /motion-reduce:hidden/);
assert.match(pageSource, /<MembershipSection data=\{data\.membership\} \/>/);

console.log("membership section: ok");
