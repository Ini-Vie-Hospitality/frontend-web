

export function conciergeReply(message: string): string | null {
  const prompt = message.trim();
  if (!prompt) return null;

  const normalized = prompt.toLowerCase();
  if (normalized.includes("wellness")) return "Our wellness escapes are designed for restorative Bali moments. I can help you explore the right experience.";
  if (normalized.includes("offer")) return "I can help you discover the latest stay offers and experiences.";
  if (normalized.includes("member")) return "Ini Vie Membership unlocks thoughtful perks across our stays, dining, and wellness experiences.";
  if (normalized.includes("contact")) return "Our hospitality team will be happy to help. You can reach us through the contact details in the footer.";
  if (normalized.includes("book") || normalized.includes("stay")) return "I can help you find the right stay. Use the booking bar to check your preferred dates and destination.";

  return "I can help with reservations, wellness, offers, membership, or connecting you with our hospitality team.";
}
