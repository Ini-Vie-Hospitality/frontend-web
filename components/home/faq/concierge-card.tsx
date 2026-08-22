import { ArrowRight } from "lucide-react";

export function ConciergeCard() {
  return (
    <div className="mt-[72px] flex min-h-[174px] max-w-[463px] items-center rounded-[7px] border border-[#e1d6c8] pr-[27px] py-6 max-md:mt-10">
      <div className="flex w-[115px] shrink-0 items-center justify-center border-r border-[#ded3c5]">
        <svg
          aria-hidden="true"
          className="h-[48px] w-[55px] stroke-[#e06a0b]"
          viewBox="0 0 55 48"
          fill="none"
          strokeWidth="1.6"
        >
          <path d="M7 38h41M11 34h33M13 34v-5c0-9 6-16 14-16s15 7 15 16v5M27 13V8m-3 0h7M8 41h39" />
          <circle cx="27.5" cy="5" r="2.5" />
        </svg>
      </div>
      <div className="pl-[38px]">
        <h3 className="font-serif text-[21px] leading-none">Still have a question?</h3>
        <p className="mt-[10px] text-[15px] text-[#595650]">Our team is here to assist you.</p>
        <a
          className="mt-[34px] flex items-center gap-5 text-[12px] font-medium uppercase tracking-[.25em] text-[#e06a0b]"
          href="#contact"
        >
          Contact Our Concierge
          <ArrowRight aria-hidden="true" className="size-[21px] tracking-normal" />
        </a>
      </div>
    </div>
  );
}
