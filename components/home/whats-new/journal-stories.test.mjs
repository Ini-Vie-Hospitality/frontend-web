import assert from "node:assert/strict";
import { journalStories } from "./journal-stories.ts";

assert.equal(journalStories.length, 4);
assert.equal(new Set(journalStories.map(({ id }) => id)).size, 4);
assert.deepEqual(
  journalStories.map(({ layout }) => layout),
  ["feature", "standard", "standard", "wide"],
);
assert.deepEqual(
  journalStories.map(({ readingTime }) => readingTime),
  ["8 min read", "5 min read", "4 min read", "6 min read"],
);

journalStories.forEach((story) => {
  assert.ok(story.category);
  assert.ok(story.title);
  assert.ok(story.description);
  assert.ok(story.readingTime);
  assert.match(story.image, /^https:\/\/images\.unsplash\.com\//);
  assert.ok(story.alt);
  assert.ok(story.href.startsWith("#journal-"));
});

console.log("journal stories: ok");
