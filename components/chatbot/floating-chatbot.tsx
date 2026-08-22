"use client";

import { ChevronRight, LoaderCircle, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ChatMessage } from "./chat-message";
import { ChatMessage as ChatMessageType, getDummyReply, quickPrompts, welcomeMessage } from "./chatbot-data";

const replyDelay = 550;

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([welcomeMessage]);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextMessageId = useRef(1);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function submitMessage(content: string) {
    const trimmedContent = content.trim();
    if (!trimmedContent || isTyping) return;

    const userMessage: ChatMessageType = {
      id: `user-${nextMessageId.current++}`,
      role: "user",
      content: trimmedContent,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `bot-${nextMessageId.current++}`,
          role: "bot",
          content: getDummyReply(trimmedContent),
        },
      ]);
      setIsTyping(false);
    }, replyDelay);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitMessage(input);
  }

  return (
    <div className="fixed right-5 bottom-5 z-[200] flex flex-col items-end gap-3 max-md:right-3.5 max-md:bottom-3.5">
      <section
        id="ini-vie-chatbot"
        className={`w-[380px] origin-bottom-right overflow-hidden rounded-[18px] border border-[#d9cdbd] bg-[#f7f3ec] shadow-[0_20px_65px_rgba(7,9,7,.3)] transition-[opacity,transform,visibility] duration-300 max-md:fixed max-md:right-3.5 max-md:bottom-[82px] max-md:left-3.5 max-md:w-auto ${isOpen ? "visible translate-y-0 scale-100 opacity-100" : "invisible translate-y-4 scale-95 opacity-0"}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby="chatbot-title"
      >
        <header className="flex items-center gap-3 bg-[#171a17] px-5 py-[18px] text-[#f7f3ec]">
          <span className="grid size-10 place-items-center rounded-full border border-[#e06a0b]/70 bg-[#222620] text-[#e06a0b]">
            <Sparkles aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
          </span>
          <div className="min-w-0">
            <h2 id="chatbot-title" className="font-serif text-[20px] leading-none">Ini Vie Concierge</h2>
            <p className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[.17em] text-[#d2c7b9]">
              <span className="size-1.5 rounded-full bg-[#e06a0b]" /> Online assistance
            </p>
          </div>
          <button
            className="ml-auto grid size-9 place-items-center rounded-full border border-white/20 text-[#f7f3ec] transition hover:border-[#e06a0b] hover:text-[#e06a0b]"
            type="button"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            <X aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
          </button>
        </header>

        <div className="max-h-[330px] min-h-[285px] space-y-3 overflow-y-auto px-5 py-5" aria-live="polite">
          <p className="text-[10px] font-medium uppercase tracking-[.2em] text-[#9a8978]">Your Bali stay, thoughtfully guided</p>
          {messages.map((message) => <ChatMessage key={message.id} message={message} />)}
          {isTyping && (
            <div className="flex justify-start">
              <span className="flex items-center gap-2 rounded-[3px_16px_16px_16px] bg-[#ebe3d7] px-4 py-3 text-[12px] text-[#59564f]">
                <LoaderCircle aria-hidden="true" className="size-4 animate-spin text-[#e06a0b]" />
                Concierge is typing
              </span>
            </div>
          )}
        </div>

        <div className="border-t border-[#ddd3c7] px-5 pt-4 pb-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                className="rounded-full border border-[#d7c8b8] px-3 py-1.5 text-[11px] text-[#625a50] transition hover:border-[#e06a0b] hover:text-[#e06a0b]"
                type="button"
                key={prompt}
                onClick={() => submitMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
          <form className="flex items-center gap-2 rounded-full border border-[#cfc2b4] bg-white px-2 py-2 focus-within:border-[#e06a0b]" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="ini-vie-chat-input">Message Ini Vie Concierge</label>
            <input
              ref={inputRef}
              id="ini-vie-chat-input"
              className="min-w-0 flex-1 bg-transparent px-2 text-[13px] text-[#1a1c18] outline-none placeholder:text-[#9a8f83]"
              placeholder="How can we assist you?"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={isTyping}
            />
            <button
              className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e06a0b] text-white transition hover:bg-[#c95c07] disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || isTyping}
            >
              <Send aria-hidden="true" className="size-4" strokeWidth={1.7} />
            </button>
          </form>
        </div>
      </section>

      <button
        className="group flex h-[58px] items-center gap-3 rounded-full bg-[#1a1c18] py-2 pr-5 pl-2 text-[#f7f3ec] shadow-[0_12px_30px_rgba(7,9,7,.28)] transition hover:bg-[#292c27] focus-visible:outline-offset-4"
        type="button"
        aria-label={isOpen ? "Close Ini Vie Concierge chat" : "Open Ini Vie Concierge chat"}
        aria-expanded={isOpen}
        aria-controls="ini-vie-chatbot"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="grid size-[42px] place-items-center rounded-full bg-[#e06a0b] text-white transition-transform duration-200 group-hover:scale-105">
          <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </span>
        <span className="text-left text-[11px] font-medium uppercase tracking-[.16em]">Chat with us</span>
        <ChevronRight aria-hidden="true" className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
      </button>
    </div>
  );
}
