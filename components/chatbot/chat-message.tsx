import type { ChatMessage as ChatMessageType } from "./chatbot-data";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isBot = message.role === "bot";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <p className={`max-w-[86%] px-4 py-3 text-[13px] leading-[1.65] ${isBot ? "rounded-[3px_16px_16px_16px] bg-[#ebe3d7] text-[#36342f]" : "rounded-[16px_3px_16px_16px] bg-[#1a1c18] text-white"}`}>
        {message.content}
      </p>
    </div>
  );
}
