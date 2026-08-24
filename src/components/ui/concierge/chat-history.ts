export type ConciergeHistoryMessage = { role: "user" | "assistant"; content: string };

export const conciergeHistoryKey = "inivie-concierge-history";

export function trimConciergeHistory(messages: ConciergeHistoryMessage[]): ConciergeHistoryMessage[] {
  return messages.slice(-10);
}

export function readConciergeHistory(storage: Pick<Storage, "getItem">): ConciergeHistoryMessage[] {
  try {
    const value: unknown = JSON.parse(storage.getItem(conciergeHistoryKey) ?? "[]");
    if (!Array.isArray(value)) return [];
    return trimConciergeHistory(value.filter((message): message is ConciergeHistoryMessage =>
      typeof message === "object" && message !== null &&
      (message.role === "user" || message.role === "assistant") && typeof message.content === "string",
    ));
  } catch {
    return [];
  }
}

export function writeConciergeHistory(storage: Pick<Storage, "setItem">, messages: ConciergeHistoryMessage[]) {
  storage.setItem(conciergeHistoryKey, JSON.stringify(trimConciergeHistory(messages)));
}
