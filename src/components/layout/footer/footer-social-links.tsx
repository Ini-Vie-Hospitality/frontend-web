import Link from "next/link";
import type { PublishedHomepageData } from "@/content/homepage/types";
import { FooterHeading } from "./footer-heading";

const marks = {
  facebook: "f",
  instagram: "◎",
  linkedin: "in",
  youtube: "▶",
  tiktok: "♪",
};
type Social = PublishedHomepageData["footer"]["socials"][number];

export function FooterSocialLinks({
  title,
  socials,
}: {
  title: string;
  socials: Social[];
}) {
  return (
    <section
      className="border-l border-[#d8cebf]/25 pl-[clamp(42px,4.1vw,69px)] max-md:mt-11 max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-9"
      aria-labelledby="social-title"
    >
      <FooterHeading>
        <span id="social-title">{title}</span>
      </FooterHeading>
      <div className="mt-[22px] grid gap-[19px] text-[14px] max-md:grid-cols-2 max-md:gap-y-5">
        {socials.map((social) => (
          <Link
            className="flex w-fit items-center gap-[18px] transition-colors hover:text-white"
            href={social.href}
            key={social.label}
          >
            <span
              aria-hidden="true"
              className={`flex size-[18px] items-center justify-center font-semibold leading-none ${social.icon === "linkedin" ? "text-[15px]" : "text-[19px]"}`}
            >
              {marks[social.icon]}
            </span>
            {social.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
