import Link from "next/link";
import { navigationLinks, navItemClass } from "./navigation-data";

export function DesktopNavigation() {
  return (
    <nav
      className="ml-auto mr-[clamp(28px,3.5vw,64px)] flex items-center gap-[clamp(20px,1.8vw,34px)] max-[1100px]:hidden"
      aria-label="Primary navigation"
    >
      {navigationLinks
        .filter(({ desktop }) => desktop)
        .map(({ desktopLabel, href, label }) => (
          <Link className={navItemClass} key={href} href={href}>
            {desktopLabel ?? label}
          </Link>
        ))}
    </nav>
  );
}
