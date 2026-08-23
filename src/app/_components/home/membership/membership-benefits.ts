import type { LucideIcon } from "lucide-react";
import { Diamond, Gift, ShoppingBag, Tags } from "lucide-react";

export type MembershipBenefit = {
  label: string;
  icon: LucideIcon;
};

export const membershipBenefits = [
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
