import assert from "node:assert/strict";
import test from "node:test";
import { trimConciergeHistory } from "./chat-history.ts";

test("keeps only five concierge turns", () => {
  const messages = Array.from({ length: 12 }, (_, index) => ({
    role: index % 2 ? "assistant" : "user",
    content: String(index),
  }));
  assert.equal(trimConciergeHistory(messages).length, 10);
  assert.equal(trimConciergeHistory(messages)[0].content, "2");
});

test("keeps history in memory only", async () => {
  const source = await import("node:fs/promises").then(({ readFile }) =>
    readFile(new URL("./concierge-chat.tsx", import.meta.url), "utf8"),
  );
  assert.doesNotMatch(
    source,
    /localStorage|sessionStorage|readConciergeHistory|writeConciergeHistory/,
  );
});
