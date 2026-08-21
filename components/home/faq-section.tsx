"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { question: "How can I make a reservation with Ini Vie Hospitality?", answer: "Our reservations team can help you find the right stay and arrange your booking." },
  { question: "What time are check-in and check-out?", answer: "Check-in times may vary by property, while check-out details are provided with each reservation. Guests may contact the property team for special arrival arrangements." },
  { question: "Can I request airport transfers or special arrangements?", answer: "Yes. Please contact our reservations team before arrival so we can arrange airport transfers or special requests." },
  { question: "Are breakfast and other experiences included in my stay?", answer: "Inclusions vary by property and package. Your reservation details will include everything covered during your stay." },
  { question: "Can I modify or cancel my reservation?", answer: "Reservation changes and cancellation terms depend on the property and booking conditions." },
  { question: "How can I contact the property before arrival?", answer: "Our reservations team can connect you with the property before your arrival." },
];

function FloralMark() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-24 h-[270px] w-[360px] text-[#d8c6ad]/60" viewBox="0 0 360 270" fill="none">
      <g stroke="currentColor" strokeWidth="1">
        <path d="M32 270c8-44 34-69 76-75-19-35-6-66 28-87 11 33 2 58-23 75 45-4 71 15 80 57-35-2-59-17-72-45-16 38-42 63-89 75Z" />
        <path d="M113 270c3-48 28-83 74-104-5-39 16-67 57-81 1 36-16 61-45 75 40 6 65 31 68 72-35-9-55-30-61-62-22 43-52 76-93 100Z" />
        <path d="M209 270c-4-40 15-71 56-93 4-35 29-55 65-59-7 32-28 51-59 57 35 15 49 42 42 78-28-15-42-38-40-67-22 38-43 66-64 84Z" />
        <circle cx="107" cy="139" r="8" /><circle cx="184" cy="104" r="9" /><circle cx="264" cy="119" r="7" />
        <path d="M107 131l-7-14m7 14 12-10m-12 10-13 2m90-42-8-15m8 15 14-8m-14 8-15 4m95 0-5-15m5 15 15-3m-15 3-10 10" />
      </g>
    </svg>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="relative isolate min-h-[941px] overflow-hidden bg-[#f8f4ee] px-[clamp(28px,7vw,118px)] py-[clamp(76px,7vw,116px)] text-[#1a1c18] max-md:min-h-0" aria-labelledby="faq-title">
      <FloralMark />
      <div className="relative mx-auto grid grid-cols-[480px_1fr] gap-[168px] pr-[22px] max-[1400px]:grid-cols-[420px_1fr] max-[1400px]:gap-[90px] max-[1100px]:grid-cols-[.75fr_1.25fr] max-[1100px]:gap-16 max-[1100px]:pr-0 max-[900px]:grid-cols-1 max-[900px]:gap-16">
        <div className="flex flex-col">
          <p className="text-[13px] font-medium uppercase tracking-[.28em] text-[#9c8975] max-md:text-[10px]">Frequently Asked Questions</p>
          <span className="mt-[27px] h-0.5 w-[30px] bg-[#e06a0b]" aria-hidden="true" />
          <h2 id="faq-title" className="mt-[43px] max-w-[510px] font-serif text-[clamp(3.4rem,4.8vw,5.35rem)] leading-[.99] tracking-[-.035em] max-md:mt-8 max-md:text-[clamp(2.8rem,12vw,4rem)]">Everything You<br />Need to Know.</h2>
          <p className="mt-[29px] max-w-[430px] text-[17px] leading-[1.75] text-[#3e3d39] max-md:text-[15px]">Find helpful information about reservations, check-in, experiences, and your stay with Ini Vie Hospitality.</p>
          <div className="mt-[72px] flex min-h-[174px] max-w-[463px] items-center rounded-[7px] border border-[#e1d6c8] pr-[27px] py-6 max-md:mt-10">
            <div className="flex w-[115px] shrink-0 items-center justify-center border-r border-[#ded3c5]"><svg aria-hidden="true" className="h-[48px] w-[55px] stroke-[#e06a0b]" viewBox="0 0 55 48" fill="none" strokeWidth="1.6"><path d="M7 38h41M11 34h33M13 34v-5c0-9 6-16 14-16s15 7 15 16v5M27 13V8m-3 0h7M8 41h39" /><circle cx="27.5" cy="5" r="2.5" /></svg></div>
            <div className="pl-[38px]">
              <h3 className="font-serif text-[21px] leading-none">Still have a question?</h3>
              <p className="mt-[10px] text-[15px] text-[#595650]">Our team is here to assist you.</p>
              <a className="mt-[34px] flex items-center gap-5 text-[12px] font-medium uppercase tracking-[.25em] text-[#e06a0b]" href="#contact">Contact Our Concierge <ArrowRight aria-hidden="true" className="size-[21px] tracking-normal" /></a>
            </div>
          </div>
        </div>

        <div className="-mt-[27px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index + 1}`;
            return (
              <div className="border-b border-[#d9d0c6] first:border-t" key={faq.question}>
                <button className={`flex w-full items-center gap-8 text-left max-md:min-h-[91px] max-md:gap-4 ${index === 0 ? "min-h-[91px]" : "min-h-[108px]"}`} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className={`w-[43px] shrink-0 text-[20px] ${isOpen ? "text-[#e06a0b]" : "text-[#9f9283]"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-[25px] leading-[1.2] tracking-[-.02em] max-md:text-[19px]">{faq.question}</span>
                  <span className={`ml-auto grid size-[52px] shrink-0 place-items-center rounded-full border max-md:size-11 ${isOpen ? "border-[#e06a0b] text-[#e06a0b]" : "border-[#d5cdc4] text-[#1a1c18]"}`}><span className="sr-only">{isOpen ? "Close" : "Open"} answer</span>{isOpen ? <Minus aria-hidden="true" className="size-[19px]" /> : <Plus aria-hidden="true" className="size-[19px]" />}</span>
                </button>
                <div id={panelId} hidden={!isOpen} className="pb-[45px] pl-[75px] pr-[76px] text-[17px] leading-[1.9] text-[#45433f] max-md:pb-8 max-md:pl-[59px] max-md:pr-2 max-md:text-[15px]">{faq.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
