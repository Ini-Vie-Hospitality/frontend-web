"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Stays", "Experiences", "Wellness", "About"];
const navItemClass = "relative whitespace-nowrap text-[13px] font-medium uppercase tracking-[.16em] after:absolute after:inset-x-0 after:-bottom-[9px] after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100";

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
        <Link className={`flex shrink-0 items-center transition-[width,height] duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] max-md:size-[58px] ${brandSize}`} href="/" aria-label="Ini Vie Hospitality home">
          <Image className="size-full object-contain" src="/inivie-white.png" alt="Ini Vie Hospitality" width={236} height={235} priority />
        </Link>
        <nav className="ml-auto mr-[clamp(55px,7.7vw,148px)] flex items-center gap-[clamp(34px,3.35vw,64px)] max-[1100px]:hidden" aria-label="Primary navigation">
          {links.map((link) => <Link className={navItemClass} key={link} href={`#${link.toLowerCase()}`}>{link}</Link>)}
        </nav>
        <div className="ml-auto flex items-center">
          <button className="flex cursor-pointer items-center border-0 bg-transparent text-[13px] font-medium uppercase tracking-[.16em] max-md:hidden" type="button" aria-label="Select language">
            EN
            <ChevronDown className="ml-1.5 size-[15px]" aria-hidden="true" />
          </button>
          <span className="mx-[30px] h-[34px] w-px bg-current opacity-20 max-md:hidden" aria-hidden="true" />
          <Link className={`${navItemClass} max-md:text-[11px]`} href="#booking">Book Your Stay</Link>
          <button className="ml-[34px] grid cursor-pointer place-items-center border-0 bg-transparent py-2 transition-transform duration-250 hover:translate-x-0.5 max-md:ml-[18px]" type="button" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="main-menu" onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X className="size-7 stroke-[1.25]" aria-hidden="true" /> : <Menu className="size-7 stroke-[1.25]" aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[110] bg-[rgba(7,9,7,.55)] transition-opacity duration-350 ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden="true" onClick={closeMenu} />
      <aside id="main-menu" className={`fixed inset-y-0 right-0 z-[120] flex w-[min(460px,100vw)] flex-col bg-[#121411] px-[clamp(28px,4vw,64px)] pt-[34px] pb-12 text-ivory transition-transform duration-[450ms] ease-[cubic-bezier(.22,1,.36,1)] max-md:px-[22px] max-md:pt-7 max-md:pb-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!isMenuOpen}>
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[.22em] text-ivory/58">
          <span>Explore Ini Vie</span>
          <button className="grid size-11 cursor-pointer place-items-center rounded-full border border-ivory/28 bg-transparent" type="button" aria-label="Close menu" onClick={closeMenu}><X className="size-5 stroke-[1.25]" aria-hidden="true" /></button>
        </div>
        <nav className="my-auto grid gap-[21px]" aria-label="Mobile navigation">
          {links.map((link) => <Link className="w-max font-serif text-[clamp(3rem,8vw,5rem)] leading-none tracking-[-.035em] transition-[color,transform] duration-200 hover:translate-x-1.5 hover:text-orange max-md:text-[clamp(2.7rem,13vw,4rem)]" key={link} href={`#${link.toLowerCase()}`} tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu}>{link}</Link>)}
        </nav>
        <Link className="flex min-h-[59px] items-center justify-center rounded-sm bg-orange text-xs font-medium uppercase tracking-[.14em] hover:bg-orange-hover" href="#booking" tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu}>Book Your Stay</Link>
      </aside>
    </>
  );
}
