export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  content: string;
};

export const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "bot",
  content: "Welcome to Ini Vie Hospitality. I can help you discover stays, dining, wellness, and reservations.",
};

export const quickPrompts = [
  "Explore our stays",
  "Make a reservation",
  "Discover dining",
];

export function getDummyReply(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (/(book|reservation|availability|available)/.test(normalizedMessage)) {
    return "Our reservations team can help find the right stay for your dates. Select Book Your Stay to begin your enquiry.";
  }

  if (/(dining|restaurant|culinary|food)/.test(normalizedMessage)) {
    return "Discover refined dining experiences across Bali, from Japanese dining to immersive steakhouse moments.";
  }

  if (/(wellness|spa|treatment)/.test(normalizedMessage)) {
    return "Our wellness experiences are designed around calm, restoration, and the rhythm of each destination.";
  }

  if (/(stay|villa|property|resort|room)/.test(normalizedMessage)) {
    return "Ini Vie curates distinctive villas and resorts across Bali. Tell me which destination or stay style you have in mind.";
  }

  return "Thank you for your message. Our concierge can guide you to the right stay, experience, or reservation detail.";
}
