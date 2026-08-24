"use client";

import { BedDouble, Gift, HeartPulse, MessageCircle, Minus, Send, Sparkles, UserRound, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { conciergeReply } from "./chatbot-content";

type ChatMessage = { body: string; sender: "concierge" | "guest" };

const promptIcons = [BedDouble, HeartPulse, Gift, UserRound, MessageCircle];

const initialMessages: ChatMessage[] = [
  { sender: "concierge", body: "Hello, I’m your Ini Vie Concierge. Ask me about stays, wellness, dining, or booking." },
  { sender: "concierge", body: "Welcome to Ini Vie Hospitality. How may I help you today?" },
];

export function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function sendMessage(message: string) {
    const reply = conciergeReply(message);
    if (!reply) return;

    setMessages((current) => [
      ...current,
      { sender: "guest", body: message.trim() },
      { sender: "concierge", body: reply },
    ]);
    setInput("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function openChat() {
    setIsOpen(true);
    window.requestAnimationFrame(() => inputRef.current?.focus());
  }

  return (
    <aside className="pointer-events-none fixed right-4 bottom-4 z-[130] flex w-[min(350px,calc(100vw-2rem))] flex-col items-end gap-3 sm:right-6 sm:bottom-6" aria-label="Ini Vie Concierge">
      {isOpen && (
        <section className="pointer-events-auto w-full overflow-hidden rounded-[22px] border border-[#d8c9b6]/80 bg-[#faf8f3] text-[#494139] shadow-[0_20px_55px_rgba(21,18,14,.28)]" aria-live="polite">
          <header className="flex items-center gap-3 border-b border-[#e8ded1] bg-[#fdfcf9] px-4 py-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#dcc8ad] bg-[#f4eadc] text-[#a98250]" aria-hidden="true">
              <Sparkles className="size-[18px]" strokeWidth={1.35} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-lg leading-none text-[#4c4034]">Ini Vie Concierge</span>
            </span>
            <button className="grid size-8 place-items-center rounded-full text-[#8e7860] transition-colors hover:bg-[#f2e9de]" type="button" aria-label="Minimize concierge" onClick={() => setIsOpen(false)}>
              <Minus className="size-4" strokeWidth={1.7} />
            </button>
            <button className="grid size-8 place-items-center rounded-full text-[#8e7860] transition-colors hover:bg-[#f2e9de]" type="button" aria-label="Close concierge" onClick={() => setIsOpen(false)}>
              <X className="size-4" strokeWidth={1.7} />
            </button>
          </header>

          <div className="max-h-[min(38vh,310px)] space-y-3 overflow-y-auto bg-[#f7f2eb] px-4 py-4 [scrollbar-width:thin]">
            {messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={`flex gap-2.5 ${message.sender === "guest" ? "justify-end" : ""}`}>
                {message.sender === "concierge" && <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-[#ddc9ad] bg-[#f3e9dc] text-[#af8654]" aria-hidden="true"><Sparkles className="size-3.5" strokeWidth={1.45} /></span>}
                <div className={`max-w-[78%] rounded-[14px] px-3 py-2.5 text-[11px] leading-relaxed shadow-[0_3px_11px_rgba(89,64,38,.07)] ${message.sender === "guest" ? "bg-[#b58c58] text-white" : "border border-[#ece1d5] bg-[#fffdf9] text-[#665a4e]"}`}>
                  {message.body}
                  {message.sender === "concierge" && <span className="mt-1.5 block text-[8px] uppercase tracking-[.08em] text-[#aa9a88]">10:30 AM</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#e8ded1] bg-[#fdfcf9] px-4 py-3.5">
            <form className="mt-3 flex items-center gap-2 rounded-full border border-[#e4d5c4] bg-white px-3 py-1.5 shadow-[0_3px_12px_rgba(89,64,38,.06)]" onSubmit={submit}>
              <label className="sr-only" htmlFor="concierge-message">Ask Ini Vie Concierge</label>
              <input ref={inputRef} id="concierge-message" className="min-w-0 flex-1 bg-transparent py-1.5 text-[11px] text-[#51463b] outline-none placeholder:text-[#b2a79a]" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask your question..." />
              <button className="grid size-8 shrink-0 place-items-center rounded-full bg-[#b58c58] text-white transition-colors hover:bg-[#9b7445] disabled:cursor-not-allowed disabled:opacity-50" type="submit" aria-label="Send message" disabled={!input.trim()}><Send className="size-3.5" strokeWidth={1.6} /></button>
            </form>
          </div>
        </section>
      )}

      <button className="pointer-events-auto grid size-14 place-items-center rounded-full border border-white/70 bg-[#a57b49] text-[#fffaf3] shadow-[0_11px_28px_rgba(48,34,20,.35)] transition-transform hover:scale-105 focus-visible:scale-105" type="button" aria-label={isOpen ? "Close Ini Vie Concierge" : "Open Ini Vie Concierge"} aria-expanded={isOpen} onClick={() => (isOpen ? setIsOpen(false) : openChat())}>
        {isOpen ? <X className="size-5" strokeWidth={1.5} /> : <MessageCircle className="size-5" strokeWidth={1.5} />}
      </button>
    </aside>
  );
}
