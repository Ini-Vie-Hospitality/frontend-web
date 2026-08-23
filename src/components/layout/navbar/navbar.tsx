"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileMenu } from "./mobile-menu";
import { navItemClass } from "./navigation-data";

export function Navbar({ heroId }: { heroId: string }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const navbarState = isHeroVisible
    ? "h-24"
    : "h-[74px] border-b border-white/12 bg-[rgba(14,16,14,.96)] shadow-[0_4px_24px_rgba(0,0,0,.16)] backdrop-blur-xl";
  const brandSize = isHeroVisible ? "size-[76px]" : "size-[62px]";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] flex items-center px-[clamp(32px,3.35vw,64px)] text-[rgba(248,247,243,.94)] transition-[background-color,color,height,border-color,box-shadow] duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] max-md:h-20 max-md:px-[22px] ${navbarState}`}>
        <Link
          className={`flex shrink-0 items-center transition-[width,height] duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] max-md:size-[58px] ${brandSize}`}
          href="/"
          aria-label="Ini Vie Hospitality home"
        >
          <Image
            className="size-full object-contain"
            src="/inivie-white.png"
            alt="Ini Vie Hospitality"
            width={236}
            height={235}
            priority
          />
        </Link>
        <DesktopNavigation />
        <div className="ml-auto flex items-center">
          <button
            className="flex cursor-pointer items-center border-0 bg-transparent text-[13px] font-medium uppercase tracking-[.16em] max-md:hidden"
            type="button"
            aria-label="Select language"
          >
            EN
            <ChevronDown className="ml-1.5 size-[15px]" aria-hidden="true" />
          </button>
          <span className="mx-[30px] h-[34px] w-px bg-current opacity-20 max-md:hidden" aria-hidden="true" />
          <Link className={`${navItemClass} max-md:text-[11px]`} href="#booking">
            Book Your Stay
          </Link>
          <button
            className="ml-[34px] grid cursor-pointer place-items-center border-0 bg-transparent py-2 transition-transform duration-250 hover:translate-x-0.5 max-md:ml-[18px]"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="size-7 stroke-[1.25]" aria-hidden="true" />
            ) : (
              <Menu className="size-7 stroke-[1.25]" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
