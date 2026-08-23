import assert from "node:assert/strict";
import { journalStories } from "./journal-stories.ts";

assert.equal(journalStories.length, 6);
assert.equal(new Set(journalStories.map(({ id }) => id)).size, 6);
assert.deepEqual(
  journalStories.map(({ layout }) => layout),
  ["feature", "standard", "standard", "tall", "wide", "banner"],
);

journalStories.forEach((story) => {
  assert.ok(story.category);
  assert.ok(story.title);
  assert.ok(story.description);
  assert.ok(story.readingTime);
  assert.ok(story.image);
  assert.ok(story.alt);
  assert.ok(story.href.startsWith("#journal-"));
});

console.log("journal stories: ok");
