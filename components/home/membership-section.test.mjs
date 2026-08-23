import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const membershipSource = await readFile(
  new URL("./membership-section.tsx", import.meta.url),
  "utf8",
);
const pageSource = await readFile(
  new URL("../../app/page.tsx", import.meta.url),
  "utf8",
);

assert.match(membershipSource, /Join Weinivie Membership/i);
assert.match(membershipSource, /VxWfMIRvLoI/);
assert.match(membershipSource, /youtube-nocookie\.com/);
assert.match(membershipSource, /autoplay=1&mute=1&controls=0&loop=1/);
assert.match(membershipSource, /motion-reduce:hidden/);
assert.match(membershipSource, /https:\/\/booking\.inivie\.com\/en\/register/);
assert.match(membershipSource, /href="\/membership"/);
assert.match(membershipSource, /Priority VIP Welcome/);
assert.match(membershipSource, /Special Celebration Setup/);
assert.match(membershipSource, /Exclusive Savings at Restaurants, Spa & Club Outlets/);
assert.match(membershipSource, /Access to Monthly Member Promotions/);
assert.match(membershipSource, /membershipBenefits\.map/);
assert.match(membershipSource, /grid-cols-2/);
assert.match(membershipSource, /py-\[clamp\(48px,6vw,88px\)\]/);
assert.match(membershipSource, /lg:min-h-\[520px\]/);
assert.doesNotMatch(membershipSource, /rounded-\[6px\]/);
assert.match(
  pageSource,
  /<WellnessHarmony \/>[\s\S]*<MembershipSection \/>[\s\S]*<OurStory \/>/,
);

console.log("membership section: ok");
