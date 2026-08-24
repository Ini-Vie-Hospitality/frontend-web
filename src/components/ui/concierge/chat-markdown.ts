export type ConciergeInline = {
  type: "text" | "strong" | "emphasis" | "code";
  content: string;
};

export type ConciergeBlock = {
  type: "paragraph" | "unordered-list" | "ordered-list";
  items: ConciergeInline[][];
};

export function parseConciergeMarkdown(value: string): ConciergeBlock[] {
  const lines = value
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/```/g, ""))
    .replace(/<\/?[a-z][^>]*>/gi, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const blocks: ConciergeBlock[] = [];
  let paragraph: string[] = [];
  let list: ConciergeBlock | null = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", items: [parseInline(paragraph.join(" "))] });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const line of lines) {
    const heading = line.replace(/^#{1,6}\s+/, "");
    const unordered = heading.match(/^[-*+]\s+(.+)$/);
    const ordered = heading.match(/^\d+[.)]\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const type = unordered ? "unordered-list" : "ordered-list";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push(parseInline((unordered ?? ordered)?.[1] ?? ""));
      continue;
    }
    flushList();
    paragraph.push(heading.replace(/^>\s?/, ""));
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function parseInline(value: string): ConciergeInline[] {
  const pattern = /(\*\*|__)(.+?)\1|(?<![*_])([*_])(?![*_])(.+?)(?<![*_])\3(?![*_])|`([^`]+)`/g;
  const segments: ConciergeInline[] = [];
  let cursor = 0;

  for (const match of value.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > cursor) segments.push({ type: "text", content: cleanMarkers(value.slice(cursor, start)) });
    segments.push({
      type: match[5] ? "code" : match[2] ? "strong" : "emphasis",
      content: match[5] ?? match[2] ?? match[4] ?? "",
    });
    cursor = start + match[0].length;
  }
  if (cursor < value.length) segments.push({ type: "text", content: cleanMarkers(value.slice(cursor)) });
  return segments.filter((segment) => segment.content);
}

function cleanMarkers(value: string): string {
  return value
    .replace(/[\*`]/g, "")
    .replace(/(^|\s)_{1,2}(?=\s|$)/g, "$1");
}
