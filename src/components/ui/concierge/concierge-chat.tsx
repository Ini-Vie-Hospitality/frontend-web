"use client";

import { MessageCircle, Minus, Send, Sparkles, X } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { type ConciergeHistoryMessage, readConciergeHistory, trimConciergeHistory, writeConciergeHistory } from "./chat-history";
import { ChatMessageContent } from "./chat-message-content";

type ChatMessage = ConciergeHistoryMessage & { failed?: boolean };

const welcome: ChatMessage = { role: "assistant", content: "Hello, I’m your Ini Vie Concierge. Ask me about stays, wellness, dining, or booking." };

export function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcome]);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = readConciergeHistory(window.localStorage);
      if (saved.length) setMessages([welcome, ...saved]);
    });
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight }); }, [messages, isSending]);
  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  async function sendMessage(rawMessage: string) {
    const content = rawMessage.trim();
    if (!content || isSending) return;
    const history = trimConciergeHistory(messages.filter((message) => message !== welcome).map(({ role, content: body }) => ({ role, content: body })));
    const userMessage: ChatMessage = { role: "user", content };
    setMessages((current) => [...current, userMessage]);
    setInput(""); setIsSending(true);
    try {
      const response = await fetch("/api/concierge", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: content, history }) });
      const data = await response.json() as { message?: string };
      if (!response.ok || !data.message) throw new Error("Concierge request failed");
      const next = trimConciergeHistory([...history, userMessage, { role: "assistant", content: data.message }]);
      writeConciergeHistory(window.localStorage, next);
      setMessages([welcome, ...next.slice(0, -1), { role: "assistant", content: data.message }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I’m sorry, the concierge is unavailable. Please try again shortly.", failed: true }]);
    } finally { setIsSending(false); }
  }

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); void sendMessage(input); }
  function openChat() { setIsOpen(true); window.requestAnimationFrame(() => inputRef.current?.focus()); }

  return <aside className="pointer-events-none fixed right-4 bottom-4 z-[130] flex w-[min(350px,calc(100vw-2rem))] flex-col items-end gap-3 sm:right-6 sm:bottom-6" aria-label="Ini Vie Concierge">
    {isOpen && <section className="pointer-events-auto w-full overflow-hidden rounded-[22px] border border-[#d8c9b6]/80 bg-[#faf8f3] text-[#494139] shadow-[0_20px_55px_rgba(21,18,14,.28)]" aria-live="polite">
      <header className="flex items-center gap-3 border-b border-[#e8ded1] bg-[#fdfcf9] px-4 py-3.5"><span className="grid size-10 place-items-center rounded-full border border-[#dcc8ad] bg-[#f4eadc] text-[#a98250]"><Sparkles className="size-[18px]" /></span><span className="flex-1 font-serif text-lg">Ini Vie Concierge</span><button className="grid size-8 place-items-center rounded-full text-[#8e7860] hover:bg-[#f2e9de]" type="button" aria-label="Close concierge" onClick={() => setIsOpen(false)}><X className="size-4" /></button></header>
      <div ref={listRef} className="h-[min(55vh,420px)] sm:h-[min(60vh,480px)] space-y-3 overflow-y-auto bg-[#f7f2eb] px-4 py-4 [scrollbar-width:thin]">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex gap-2.5 ${message.role === "user" ? "justify-end" : ""}`}>{message.role === "assistant" && <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-[#ddc9ad] bg-[#f3e9dc] text-[#af8654]"><Sparkles className="size-3.5" /></span>}<div className={`max-w-[78%] rounded-[14px] px-3 py-2.5 text-[11px] leading-relaxed ${message.role === "user" ? "bg-[#b58c58] text-white" : "border border-[#ece1d5] bg-[#fffdf9] text-[#665a4e]"}`}><ChatMessageContent content={message.content} /></div></div>)}{isSending && <div className="flex gap-2.5"><span className="grid size-7 place-items-center rounded-full border border-[#ddc9ad] bg-[#f3e9dc] text-[#af8654]"><Sparkles className="size-3.5" /></span><div className="rounded-[14px] border border-[#ece1d5] bg-[#fffdf9] px-3 py-2 text-[11px] text-[#665a4e]">Thinking…</div></div>}</div>
      <div className="border-t border-[#e8ded1] bg-[#fdfcf9] px-4 py-3.5">
        {/* <div className="flex flex-wrap gap-1.5">{conciergeQuickPrompts.map((prompt) => <button key={prompt} type="button" disabled={isSending} onClick={() => void sendMessage(prompt)} className="rounded-full border border-[#e4d5c4] px-2 py-1 text-[9px] text-[#806c57] hover:bg-[#f6ede2]">{prompt}</button>)}</div> */}
        <form className="mt-3 flex items-center gap-2 rounded-full border border-[#e4d5c4] bg-white px-3 py-1.5" onSubmit={submit}><label className="sr-only" htmlFor="concierge-message">Ask Ini Vie Concierge</label><input ref={inputRef} id="concierge-message" className="min-w-0 flex-1 bg-transparent py-1.5 text-[11px] outline-none placeholder:text-[#b2a79a]" value={input} disabled={isSending} onChange={(event) => setInput(event.target.value)} placeholder="Ask us anything..." /><button className="grid size-7 place-items-center rounded-full bg-[#b58c58] text-white disabled:opacity-50" disabled={isSending || !input.trim()} aria-label="Send message"><Send className="size-3.5" /></button></form></div>
    </section>}
    {!isOpen && <button type="button" onClick={openChat} className="pointer-events-auto grid size-14 place-items-center rounded-full bg-[#b58c58] text-white shadow-lg" aria-label="Open Ini Vie Concierge"><MessageCircle className="size-6" /></button>}
  </aside>;
}
