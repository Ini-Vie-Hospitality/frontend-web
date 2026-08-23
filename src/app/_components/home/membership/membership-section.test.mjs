import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const membershipSource = await readFile(
  new URL("./membership-section.tsx", import.meta.url),
  "utf8",
);
const benefitsSource = await readFile(
  new URL("./membership-benefits.ts", import.meta.url),
  "utf8",
);
const benefitItemSource = await readFile(
  new URL("./membership-benefit-item.tsx", import.meta.url),
  "utf8",
);
const combinedSource = `${membershipSource}\n${benefitsSource}\n${benefitItemSource}`;
const pageSource = await readFile(
  new URL("../../../page.tsx", import.meta.url),
  "utf8",
);

assert.match(membershipSource, /Join Weinivie Membership/i);
assert.match(membershipSource, /src="\/cta\.mp4"/);
assert.match(membershipSource, /<video/);
assert.match(membershipSource, /autoPlay/);
assert.match(membershipSource, /muted/);
assert.match(membershipSource, /loop/);
assert.match(membershipSource, /playsInline/);
assert.doesNotMatch(membershipSource, /youtube/i);
assert.doesNotMatch(membershipSource, /<iframe/);
assert.match(membershipSource, /motion-reduce:hidden/);
assert.match(membershipSource, /https:\/\/booking\.inivie\.com\/en\/register/);
assert.match(membershipSource, /href="\/membership"/);
assert.match(membershipSource, /hover:text-black/);
assert.match(combinedSource, /Priority VIP Welcome/);
assert.match(combinedSource, /Special Celebration Setup/);
assert.match(combinedSource, /Exclusive Savings at Restaurants, Spa & Club Outlets/);
assert.match(combinedSource, /Access to Monthly Member Promotions/);
assert.match(membershipSource, /membershipBenefits\.map/);
assert.match(combinedSource, /grid-cols-2/);
assert.match(membershipSource, /py-\[clamp\(48px,6vw,88px\)\]/);
assert.match(membershipSource, /lg:min-h-\[520px\]/);
assert.doesNotMatch(membershipSource, /rounded-\[6px\]/);
assert.match(
  pageSource,
  /<WellnessHarmony \/>[\s\S]*<MembershipSection \/>[\s\S]*<OurStory \/>/,
);

console.log("membership section: ok");
