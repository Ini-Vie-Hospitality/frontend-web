import Link from "next/link";
import { X } from "lucide-react";
import { homepageHref } from "./navigation-data";
import type { NavigationLink, PublishedHomepageData } from "@/content/homepage/types";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  links: NavigationLink[];
  content: PublishedHomepageData["navbar"]["mobile"];
};

export function MobileMenu({ isOpen, onClose, links, content }: MobileMenuProps) {
  const tabIndex = isOpen ? 0 : -1;

  return (
    <>
      <div
        className={`fixed inset-0 z-[110] bg-[rgba(7,9,7,.55)] transition-opacity duration-350 ${isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        id="main-menu"
        className={`fixed inset-y-0 right-0 z-[120] flex w-[min(460px,100vw)] flex-col bg-[#121411] px-[clamp(28px,4vw,64px)] pt-[34px] pb-12 text-ivory transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] max-md:px-[22px] max-md:pt-7 max-md:pb-8 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[.22em] text-ivory/58">
          <span>{content.eyebrow}</span>
          <button
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/28 bg-transparent"
            type="button"
            aria-label={content.closeLabel}
            onClick={onClose}
          >
            <X className="size-5 stroke-[1.25]" aria-hidden="true" />
          </button>
        </div>
        <nav
          className="mt-8 grid min-h-0 flex-1 content-start gap-[clamp(10px,1.8vh,18px)] overflow-y-auto pb-4 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              className="w-max font-serif text-[clamp(2rem,6vw,3.5rem)] leading-none tracking-[-.035em] transition-[color,transform] duration-200 hover:translate-x-1.5 hover:text-orange max-md:text-[clamp(2rem,9vw,3rem)]"
              key={href}
              href={homepageHref(href)}
              tabIndex={tabIndex}
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
