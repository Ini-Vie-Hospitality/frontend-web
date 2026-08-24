import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const notFoundSource = await readFile(new URL("./not-found.tsx", import.meta.url), "utf8");

test("Ini Vie 404 uses the supplied composition and homepage layout", () => {
  assert.match(notFoundSource, /404\.webp/);
  assert.match(notFoundSource, /A Little Off the Path\./);
  assert.match(notFoundSource, /The page you[’']re looking for couldn[’']t be found\./);
  assert.match(notFoundSource, /Return Home/);
  assert.match(notFoundSource, /<Navbar heroId="not-found-hero" data=\{data\.navbar\} \/>/);
  assert.match(notFoundSource, /<Footer data=\{data\.footer\} \/>/);
  assert.match(notFoundSource, /loadHomepageData/);
});
