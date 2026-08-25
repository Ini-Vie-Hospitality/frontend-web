export const quickPrompts = [
  { label: "Book a Stay", prompt: "How can I make a booking?" },
  {
    label: "Explore Wellness",
    prompt: "What wellness experiences are available?",
  },
  { label: "View Offers", prompt: "What offers are available?" },
  { label: "Membership", prompt: "Tell me about membership." },
  { label: "Contact Us", prompt: "How can I contact the hospitality team?" },
];

export const conciergeQuickPrompts = quickPrompts.map(({ prompt }) => prompt);

export function conciergeReply(message: string): string | null {
  return message.trim()
    ? "I can help with stays, wellness, dining, offers, membership, or booking."
    : null;
}
