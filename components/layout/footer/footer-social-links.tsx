import Link from "next/link";
import { socialMarks, socials } from "./footer-data";
import { FooterHeading } from "./footer-heading";

export function FooterSocialLinks() {
  return (
    <section
      className="border-l border-[#d8cebf]/25 pl-[clamp(42px,4.1vw,69px)] max-md:mt-11 max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-9"
      aria-labelledby="social-title"
    >
      <FooterHeading>
        <span id="social-title">Follow Our Social Media</span>
      </FooterHeading>
      <div className="mt-[22px] grid gap-[19px] text-[14px] max-md:grid-cols-2 max-md:gap-y-5">
        {socials.map((name) => (
          <Link
            className="flex w-fit items-center gap-[18px] transition-colors hover:text-white"
            href="#social"
            key={name}
          >
            <span
              aria-hidden="true"
              className={`flex size-[18px] items-center justify-center font-semibold leading-none ${name === "LinkedIn" ? "text-[15px]" : "text-[19px]"}`}
            >
              {socialMarks[name]}
            </span>
            {name}
          </Link>
        ))}
      </div>
    </section>
  );
}
