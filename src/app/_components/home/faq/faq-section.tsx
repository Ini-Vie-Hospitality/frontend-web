"use client";

import { useState } from "react";
import { FaqItem } from "./faq-item";
import { FloralMark } from "./floral-mark";
import type { PublishedHomepageData } from "@/content/homepage/types";

export function FaqSection({ data }: { data: PublishedHomepageData["faq"] }) {
  if (!data.items.length) return null;
  return <FaqContent data={data} />;
}

function FaqContent({ data }: { data: PublishedHomepageData["faq"] }) {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section
      id="faq"
      className="relative isolate min-h-[941px] overflow-hidden bg-[#f8f4ee] px-[clamp(28px,7vw,118px)] py-[clamp(76px,7vw,116px)] text-[#1a1c18] max-md:min-h-0"
      aria-labelledby="faq-title"
    >
      <FloralMark />
      <div className="relative mx-auto grid grid-cols-[480px_1fr] gap-[168px] pr-[22px] max-[1400px]:grid-cols-[420px_1fr] max-[1400px]:gap-[90px] max-[1100px]:grid-cols-[.75fr_1.25fr] max-[1100px]:gap-16 max-[1100px]:pr-0 max-[900px]:grid-cols-1 max-[900px]:gap-16">
        <div className="flex flex-col">
          <p className="text-[13px] font-medium uppercase tracking-[.28em] text-[#9c8975] max-md:text-[10px]">
            {data.eyebrow}
          </p>
          <span className="mt-[27px] h-0.5 w-[30px] bg-[#e06a0b]" aria-hidden="true" />
          <h2
            id="faq-title"
            className="mt-[43px] max-w-[510px] font-serif text-[clamp(3.4rem,4.8vw,5.35rem)] leading-[.99] tracking-[-.035em] max-md:mt-8 max-md:text-[clamp(2.8rem,12vw,4rem)]"
          >
            {data.title.split("\n").map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
          <p className="mt-[29px] max-w-[430px] text-[17px] leading-[1.75] text-[#3e3d39] max-md:text-[15px]">
            {data.description}
          </p>
        </div>

        <div className="-mt-[27px]">
          {data.items.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
