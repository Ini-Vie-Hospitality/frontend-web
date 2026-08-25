import assert from "node:assert/strict";
import test from "node:test";
import { parseConciergeMarkdown } from "./chat-markdown.ts";

test("renders bold text without markdown markers", () => {
  assert.deepEqual(
    parseConciergeMarkdown("Makanan terbaik adalah **nasi goreng**!"),
    [
      {
        type: "paragraph",
        items: [
          [
            { type: "text", content: "Makanan terbaik adalah " },
            { type: "strong", content: "nasi goreng" },
            { type: "text", content: "!" },
          ],
        ],
      },
    ],
  );
});

test("renders unordered and ordered lists as blocks", () => {
  assert.deepEqual(
    parseConciergeMarkdown(
      "Pilihan:\n- Nasi goreng\n- Sate\n\n1. Pilih restoran\n2. Lakukan reservasi",
    ).map(({ type, items }) => ({
      type,
      items: items.map((item) => item[0].content),
    })),
    [
      { type: "paragraph", items: ["Pilihan:"] },
      { type: "unordered-list", items: ["Nasi goreng", "Sate"] },
      { type: "ordered-list", items: ["Pilih restoran", "Lakukan reservasi"] },
    ],
  );
});

test("removes unsupported raw HTML and unmatched markers", () => {
  const blocks = parseConciergeMarkdown("<b>Safe</b> **unfinished *");
  assert.equal(
    blocks[0].items[0].map(({ content }) => content).join(""),
    "Safe unfinished ",
  );
});
