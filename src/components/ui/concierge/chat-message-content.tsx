import { parseConciergeMarkdown, type ConciergeInline } from "./chat-markdown";

export function ChatMessageContent({ content }: { content: string }) {
  return (
    <div className="space-y-2">
      {parseConciergeMarkdown(content).map((block, blockIndex) => {
        if (block.type === "unordered-list") {
          return (
            <ul key={blockIndex} className="list-disc space-y-1 pl-4">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ordered-list") {
          return (
            <ol key={blockIndex} className="list-decimal space-y-1 pl-4">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        }
        return <p key={blockIndex}>{renderInline(block.items[0] ?? [])}</p>;
      })}
    </div>
  );
}

function renderInline(segments: ConciergeInline[]) {
  return segments.map((segment, index) => {
    if (segment.type === "strong")
      return <strong key={index}>{segment.content}</strong>;
    if (segment.type === "emphasis")
      return <em key={index}>{segment.content}</em>;
    if (segment.type === "code")
      return (
        <code
          key={index}
          className="rounded bg-[#f1e9df] px-1 py-0.5 text-[.9em]"
        >
          {segment.content}
        </code>
      );
    return <span key={index}>{segment.content}</span>;
  });
}
