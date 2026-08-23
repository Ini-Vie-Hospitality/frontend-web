import assert from "node:assert/strict";
import {
  getExperienceFrame,
  getScrollProgress,
  getStoryHeight,
} from "./scroll-story.ts";

const assertClose = (actual, expected) => {
  assert.ok(Math.abs(actual - expected) < 0.000001);
};

assert.equal(getScrollProgress(120, 2700), 0);
assert.equal(getScrollProgress(-1350, 2700), 0.5);
assert.equal(getScrollProgress(-3000, 2700), 1);

assert.deepEqual(getExperienceFrame(0, 4), {
  activeIndex: 0,
  position: 0,
});
assert.deepEqual(getExperienceFrame(0.1, 4), {
  activeIndex: 0,
  position: 0,
});
const firstTransition = getExperienceFrame(0.21, 4);
assert.equal(firstTransition.activeIndex, 1);
assertClose(firstTransition.position, 0.51);
assert.deepEqual(getExperienceFrame(0.35, 4), {
  activeIndex: 1,
  position: 1,
});
const middleTransition = getExperienceFrame(0.5, 4);
assert.equal(middleTransition.activeIndex, 2);
assertClose(middleTransition.position, 1.5);
assert.deepEqual(getExperienceFrame(0.9, 4), {
  activeIndex: 3,
  position: 3,
});
assert.deepEqual(getExperienceFrame(1, 4), {
  activeIndex: 3,
  position: 3,
});

assert.equal(getStoryHeight(900, 4), 4140);
assert.equal(getStoryHeight(900, 1), 900);

console.log("wellness scroll story: ok");
