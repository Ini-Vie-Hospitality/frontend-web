import assert from "node:assert/strict";
import test from "node:test";
import { conciergeReply, quickPrompts } from "./chatbot-content.ts";

test("concierge exposes the five hospitality prompts", () => {
  assert.equal(quickPrompts.length, 5);
  assert.deepEqual(
    quickPrompts.map(({ label }) => label),
    [
      "Book a Stay",
      "Explore Wellness",
      "View Offers",
      "Membership",
      "Contact Us",
    ],
  );
});

test("concierge trims messages and returns a useful fallback reply", () => {
  assert.equal(conciergeReply("   "), null);
  assert.match(
    conciergeReply("Could you help me?") ?? "",
    /reservations|wellness|offers|membership|team/i,
  );
});
