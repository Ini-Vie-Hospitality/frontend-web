import Link from "next/link";
import { homepageHref, navItemClass } from "./navigation-data";
import type { NavigationLink } from "@/content/homepage/types";

export function DesktopNavigation({ links }: { links: NavigationLink[] }) {
  return (
    <nav
      className="ml-auto mr-[clamp(28px,3.5vw,64px)] flex items-center gap-[clamp(20px,1.8vw,34px)] max-[1100px]:hidden"
      aria-label="Primary navigation"
    >
      {links.map(({ href, label }) => (
          <Link className={navItemClass} key={href} href={homepageHref(href)}>
            {label}
          </Link>
        ))}
    </nav>
  );
}
