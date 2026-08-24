import assert from "node:assert/strict";
import test from "node:test";
import { conciergeHistoryKey, readConciergeHistory, trimConciergeHistory } from "./chat-history.ts";

test("keeps only five concierge turns", () => {
  const messages = Array.from({ length: 12 }, (_, index) => ({ role: index % 2 ? "assistant" : "user", content: String(index) }));
  assert.equal(trimConciergeHistory(messages).length, 10);
  assert.equal(trimConciergeHistory(messages)[0].content, "2");
});

test("ignores malformed local history", () => {
  assert.deepEqual(readConciergeHistory({ getItem: () => "not-json" }), []);
  assert.equal(conciergeHistoryKey, "inivie-concierge-history");
});
