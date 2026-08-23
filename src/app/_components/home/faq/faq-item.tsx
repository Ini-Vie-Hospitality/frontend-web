import { Minus, Plus } from "lucide-react";
import type { Faq } from "./faqs";

type FaqItemProps = {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  const panelId = `faq-panel-${index + 1}`;

  return (
    <div className="border-b border-[#d9d0c6] first:border-t">
      <button
        className={`flex w-full items-center gap-8 text-left max-md:min-h-[91px] max-md:gap-4 ${index === 0 ? "min-h-[91px]" : "min-h-[108px]"}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={`w-[43px] shrink-0 text-[20px] transition-colors duration-500 ${isOpen ? "text-[#e06a0b]" : "text-[#9f9283]"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-serif text-[25px] leading-[1.2] tracking-[-.02em] max-md:text-[19px]">
          {faq.question}
        </span>
        <span className={`relative ml-auto grid size-[52px] shrink-0 place-items-center rounded-full border transition-colors duration-500 max-md:size-11 ${isOpen ? "border-[#e06a0b] text-[#e06a0b]" : "border-[#d5cdc4] text-[#1a1c18]"}`}>
          <span className="sr-only">{isOpen ? "Close" : "Open"} answer</span>
          <Plus
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 size-[19px] -translate-x-1/2 -translate-y-1/2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
          />
          <Minus
            aria-hidden="true"
            className={`absolute left-1/2 top-1/2 size-[19px] -translate-x-1/2 -translate-y-1/2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}
          />
        </span>
      </button>
      <div
        id={panelId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-[45px] pl-[75px] pr-[76px] text-[17px] leading-[1.9] text-[#45433f] max-md:pb-8 max-md:pl-[59px] max-md:pr-2 max-md:text-[15px]">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
