import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("./our-story.tsx", import.meta.url),
  "utf8",
);
const blockSource = await readFile(
  new URL("./story-block.tsx", import.meta.url),
  "utf8",
);
const typesSource = await readFile(
  new URL("../../../../content/homepage/types.ts", import.meta.url),
  "utf8",
);
const pageSource = await readFile(
  new URL("../../../page.tsx", import.meta.url),
  "utf8",
);

assert.match(source, /HomepageData\["ourStory"\]/);
assert.match(source, /data\.blocks\.map/);
assert.match(
  typesSource,
  /blocks: \[StoryBlock, StoryBlock, StoryBlock, StoryBlock\]/,
);
assert.match(blockSource, /story\.href/);
assert.match(blockSource, /story\.image/);
assert.match(blockSource, /import \{ Reveal \}/);
assert.match(blockSource, /h-\[clamp\(250px,72vw,320px\)\]/);
assert.match(pageSource, /<OurStory data=\{data\.ourStory\} \/>/);

console.log("our story structure: ok");
