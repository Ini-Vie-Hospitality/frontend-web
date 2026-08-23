import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { navigationLinks } from "./navigation-data.ts";

const desktopLabels = navigationLinks
  .filter(({ desktop }) => desktop)
  .map(({ desktopLabel, label }) => desktopLabel ?? label);
const mobileLabels = navigationLinks.map(({ label }) => label);
const sourceFiles = [
  "../../../app/page.tsx",
  "../../../app/_components/home/brand-introduction/brand-introduction.tsx",
  "../../../app/_components/home/featured-properties/featured-properties.tsx",
  "../../../app/_components/home/culinary-journey/culinary-journey.tsx",
  "../../../app/_components/home/wellness-harmony/wellness-harmony.tsx",
  "../../../app/_components/home/membership/membership-section.tsx",
  "../../../app/_components/home/our-story/our-story.tsx",
  "../../../app/_components/home/special-offers/special-offers.tsx",
  "../../../app/_components/home/whats-new/whats-new.tsx",
  "../../../app/_components/home/featured-in/featured-in.tsx",
  "../../../app/_components/home/faq/faq-section.tsx",
];
const pageSource = (
  await Promise.all(
    sourceFiles.map((file) =>
      readFile(new URL(file, import.meta.url), "utf8"),
    ),
  )
).join("\n");

assert.deepEqual(desktopLabels, [
  "Stays",
  "Dining",
  "Wellness",
  "Membership",
  "Our Story",
  "Offers",
]);
assert.deepEqual(mobileLabels, [
  "About",
  "Stays",
  "Dining",
  "Wellness",
  "Membership",
  "Our Story",
  "Special Offers",
  "What's New",
  "Featured In",
  "FAQ",
]);

for (const { href } of navigationLinks) {
  const id = href.slice(1);
  assert.match(pageSource, new RegExp(`id=["']${id}["']`));
}

console.log("navigation section mapping: ok");
