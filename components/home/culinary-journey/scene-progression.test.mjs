import assert from "node:assert/strict";
import {
  getDesktopDestinationIndexes,
  getSceneIndex,
} from "./scene-progression.ts";

assert.deepEqual(getDesktopDestinationIndexes(0), [0, 1, 2]);
assert.deepEqual(getDesktopDestinationIndexes(1), [3, 1, 2]);
assert.deepEqual(getDesktopDestinationIndexes(2), [3, 4, 2]);
assert.deepEqual(getDesktopDestinationIndexes(3), [3, 4, 5]);
assert.equal(getSceneIndex(0, 4), 0);
assert.equal(getSceneIndex(0.25, 4), 1);
assert.equal(getSceneIndex(0.999, 4), 3);
assert.equal(getSceneIndex(1, 6), 5);

console.log("culinary scene progression: ok");
