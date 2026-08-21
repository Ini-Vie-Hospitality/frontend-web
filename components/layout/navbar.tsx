"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Stays", "Experiences", "Wellness", "About"];

type NavbarProps = {
  heroId: string;
};

export function Navbar({ heroId }: NavbarProps) {
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

  return (
    <>
      <header className={`navbar ${isHeroVisible ? "navbar-hero" : "navbar-scrolled"}`}>
        <Link className="brand" href="/" aria-label="Ini Vie Hospitality home">
          <Image src="/inivie-white.png" alt="Ini Vie Hospitality" width={236} height={235} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="language" type="button" aria-label="Select language">
            EN
            <ChevronDown aria-hidden="true" />
          </button>
          <span className="nav-divider" aria-hidden="true" />
          <Link className="book-link" href="#booking">
            Book Your Stay
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div className={`menu-backdrop ${isMenuOpen ? "is-open" : ""}`} aria-hidden="true" onClick={closeMenu} />
      <aside id="main-menu" className={`menu-sidebar ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="menu-sidebar-header">
          <span>Explore Ini Vie</span>
          <button type="button" aria-label="Close menu" onClick={closeMenu}><X aria-hidden="true" /></button>
        </div>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`} tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu}>
              {link}
            </Link>
          ))}
        </nav>
        <Link className="menu-book-button" href="#booking" tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu}>
          Book Your Stay
        </Link>
      </aside>
    </>
  );
}
