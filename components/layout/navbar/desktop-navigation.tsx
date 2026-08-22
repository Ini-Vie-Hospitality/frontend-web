import Link from "next/link";
import { navigationLinks, navItemClass } from "./navigation-data";

export function DesktopNavigation() {
  return (
    <nav
      className="ml-auto mr-[clamp(55px,7.7vw,148px)] flex items-center gap-[clamp(34px,3.35vw,64px)] max-[1100px]:hidden"
      aria-label="Primary navigation"
    >
      {navigationLinks.map((link) => (
        <Link
          className={navItemClass}
          key={link}
          href={`#${link.toLowerCase()}`}
        >
          {link}
        </Link>
      ))}
    </nav>
  );
}
