import assert from "node:assert/strict";
import { featuredInLogos } from "./featured-in-logos.ts";

assert.deepEqual(
  featuredInLogos.map(({ src }) => src),
  [1, 2, 3, 4, 5, 6, 7, 9, 10].map(
    (number) => `https://inivie.com/inivie_assets/img/logomedia/${number}.png`,
  ),
);
assert.equal(featuredInLogos.every(({ alt }) => alt.length > 0), true);

console.log("featured in logos: ok");
