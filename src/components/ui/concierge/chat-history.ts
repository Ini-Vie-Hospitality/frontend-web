export type ConciergeHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export function trimConciergeHistory(
  messages: ConciergeHistoryMessage[],
): ConciergeHistoryMessage[] {
  return messages.slice(-10);
}
