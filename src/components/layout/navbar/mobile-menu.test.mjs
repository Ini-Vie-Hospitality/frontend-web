import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("./mobile-menu.tsx", import.meta.url),
  "utf8",
);

assert.doesNotMatch(source, /Book Your Stay/);
assert.match(source, /content-start/);
assert.doesNotMatch(source, /content-center/);
assert.match(source, /overflow-y-auto/);
assert.match(source, /\[scrollbar-width:none\]/);
assert.match(source, /\[&::\-webkit-scrollbar\]:hidden/);

console.log("mobile sidebar layout: ok");
