import { Reveal } from "@/components/ui/reveal/reveal";
import { Diamond, Gift, ShoppingBag, Tags } from "lucide-react";
import type { PublishedHomepageData } from "@/content/homepage/types";

type Benefit = PublishedHomepageData["membership"]["benefits"][number];
const icons: Record<Benefit["icon"], typeof Diamond> = { diamond: Diamond, gift: Gift, "shopping-bag": ShoppingBag, tags: Tags };

export function MembershipBenefitItem({
  benefit,
  index,
}: {
  benefit: PublishedHomepageData["membership"]["benefits"][number];
  index: number;
}) {
  const Icon = icons[benefit.icon];
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
