type NavigationLink = {
  label: string;
  desktopLabel?: string;
  href: `#${string}`;
  desktop: boolean;
};

export const navigationLinks: readonly NavigationLink[] = [
  { label: "About", href: "#about", desktop: false },
  { label: "Stays", href: "#stays", desktop: true },
  { label: "Dining", href: "#dining", desktop: true },
  { label: "Wellness", href: "#wellness", desktop: true },
  { label: "Membership", href: "#membership", desktop: true },
  { label: "Our Story", href: "#our-story", desktop: true },
  {
    label: "Special Offers",
    desktopLabel: "Offers",
    href: "#offers",
    desktop: true,
  },
  { label: "What's New", href: "#journal", desktop: false },
  { label: "Featured In", href: "#featured-in", desktop: false },
  { label: "FAQ", href: "#faq", desktop: false },
];

export const navItemClass = "relative whitespace-nowrap text-[13px] font-medium uppercase tracking-[.16em] after:absolute after:inset-x-0 after:-bottom-[9px] after:h-px after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-250 hover:after:origin-left hover:after:scale-x-100";

export function homepageHref(href: string) {
  return href.startsWith("#") ? `/${href}` : href;
}
