import Link from "next/link";
import { Reveal } from "@/components/ui/reveal/reveal";
import { MembershipBenefitItem } from "./membership-benefit-item";
import type { PublishedHomepageData } from "@/content/homepage/types";

export function MembershipSection({
  data,
}: {
  data: PublishedHomepageData["membership"];
}) {
  return (
    <section
      id="membership"
      className="bg-[#f8f5ef] px-[clamp(12px,1.6vw,18px)] py-[clamp(48px,6vw,88px)]"
      aria-labelledby="membership-title"
    >
      <div className="relative isolate min-h-[clamp(720px,90vw,840px)] overflow-hidden bg-[#30241f] text-white lg:min-h-[520px]">
        <video
          className="pointer-events-none absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={data.video} type="video/mp4" />
        </video>
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
                {data.title}
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={80}>
              <p className="mt-3 text-[clamp(1rem,1.45vw,1.2rem)] font-semibold leading-[1.65] tracking-[.035em]">
                {data.subtitle}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={150}>
              <p className="mt-3 max-w-[450px] text-[14px] leading-[1.75] tracking-[.035em] text-white/90 sm:text-[15px]">
                {data.description}
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={220}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={data.primary.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-[4px] bg-[#211c22] px-5 text-[13px] font-medium tracking-[.02em] text-white transition-colors hover:bg-[#332b34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {data.primary.label}
                </Link>
                <Link
                  href={data.secondary.href}
                  className="inline-flex min-h-11 items-center rounded-[4px] border border-white px-5 text-[13px] font-medium tracking-[.02em] text-white transition-colors hover:bg-white/10 hover:text-oran focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {data.secondary.label}
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 self-stretch lg:min-h-[278px]">
            {data.benefits.map((benefit, index) => (
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
