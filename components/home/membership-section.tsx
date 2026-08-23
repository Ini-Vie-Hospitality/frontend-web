import type { LucideIcon } from "lucide-react";
import { Diamond, Gift, ShoppingBag, Tags } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../ui/reveal";

const membershipBenefits = [
  {
    label: "Priority VIP Welcome",
    icon: Diamond,
  },
  {
    label: "Special Celebration Setup",
    icon: Gift,
  },
  {
    label: "Exclusive Savings at Restaurants, Spa & Club Outlets",
    icon: ShoppingBag,
  },
  {
    label: "Access to Monthly Member Promotions",
    icon: Tags,
  },
] satisfies readonly MembershipBenefit[];

const membershipVideoId = "VxWfMIRvLoI";
const membershipVideoUrl =
  `https://www.youtube-nocookie.com/embed/${membershipVideoId}`
  + `?autoplay=1&mute=1&controls=0&loop=1&playlist=${membershipVideoId}`
  + "&playsinline=1&rel=0&modestbranding=1";

type MembershipBenefit = {
  label: string;
  icon: LucideIcon;
};

export function MembershipSection() {
  return (
    <section
      id="membership"
      className="bg-[#f8f5ef] px-[clamp(12px,1.6vw,18px)] py-[clamp(48px,6vw,88px)]"
      aria-labelledby="membership-title"
    >
      <div className="relative isolate min-h-[clamp(720px,90vw,840px)] overflow-hidden bg-[#30241f] text-white lg:min-h-[520px]">
        <iframe
          src={membershipVideoUrl}
          title="iNi ViE membership background video"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 motion-reduce:hidden"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,16,13,.82)_0%,rgba(31,20,16,.7)_48%,rgba(24,16,13,.76)_100%)]"
          aria-hidden="true"
        />

        <div className="grid min-h-[inherit] items-center gap-10 px-[clamp(24px,7.6vw,94px)] py-[clamp(58px,8vw,84px)] lg:grid-cols-[46%_54%] lg:gap-8 lg:py-[clamp(64px,6vw,88px)]">
          <div className="max-w-[470px]">
            <Reveal variant="clip-up">
              <h2
                id="membership-title"
                className="font-sans text-[clamp(1.8rem,2.6vw,2.15rem)] font-normal uppercase leading-tight tracking-[-.025em]"
              >
                Join Weinivie Membership
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={80}>
              <p className="mt-3 text-[clamp(1rem,1.45vw,1.2rem)] font-semibold leading-[1.65] tracking-[.035em]">
                Turn Bali Into Yours. Make Every Journey More Rewarding.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={150}>
              <p className="mt-3 max-w-[450px] text-[14px] leading-[1.75] tracking-[.035em] text-white/90 sm:text-[15px]">
                Become a WEINIVIE member and enjoy exclusive access to
                unforgettable experiences across Bali. Discover special
                privileges, personalized offers, and curated moments designed
                just for you.
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={220}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://booking.inivie.com/en/register"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-[4px] bg-[#211c22] px-5 text-[13px] font-medium tracking-[.02em] text-white transition-colors hover:bg-[#332b34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Become a Member ↗
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex min-h-11 items-center rounded-[4px] border border-white px-5 text-[13px] font-medium tracking-[.02em] text-white transition-colors hover:bg-white hover:text-[#30241f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Discover More ↗
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 self-stretch lg:min-h-[278px]">
            {membershipBenefits.map((benefit, index) => (
              <MembershipBenefitItem
                key={benefit.label}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MembershipBenefitItem({
  benefit,
  index,
}: {
  benefit: MembershipBenefit;
  index: number;
}) {
  const Icon = benefit.icon;
  const dividerClasses = [
    "border-b border-white/25",
    "border-b border-l border-white/25",
    "",
    "border-l border-white/25",
  ][index];

  return (
    <Reveal
      variant={index % 2 === 0 ? "fade-up" : "clip-up"}
      delay={120 + index * 70}
      className={dividerClasses}
    >
      <div className="flex h-full min-h-[136px] flex-col items-center justify-center px-3 py-7 text-center sm:px-6">
        <Icon
          className="size-7 stroke-[1.6] text-white"
          aria-hidden="true"
        />
        <p className="mt-5 max-w-[210px] text-[12px] font-semibold leading-[1.45] tracking-[.02em] sm:text-[13px]">
          {benefit.label}
        </p>
      </div>
    </Reveal>
  );
}
