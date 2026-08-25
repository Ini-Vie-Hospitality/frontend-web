"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { PublishedHomepageData } from "@/content/homepage/types";

type Popup = NonNullable<PublishedHomepageData["popup"]>;

export function HomepagePopup({ data }: { data?: Popup }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!data?.image || !data.href) return;
    const timer = window.setTimeout(() => setIsOpen(true), 400);
    return () => window.clearTimeout(timer);
  }, [data]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  if (!data?.image || !data.href || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[140] grid place-items-center bg-[#1a1712]/70 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <section
        className="relative w-[min(560px,100%)]"
        role="dialog"
        aria-modal="true"
        aria-label={data.alt}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close announcement"
          autoFocus
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 grid size-8 place-items-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,.85)] transition hover:scale-110"
        >
          <X className="size-5" />
        </button>
        <a href={data.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={data.image}
            alt={data.alt}
            width={1915}
            height={907}
            sizes="(max-width: 767px) 92vw, 560px"
            priority
            className="h-auto w-full"
          />
        </a>
      </section>
    </div>
  );
}
