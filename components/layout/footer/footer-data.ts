export type Contact = {
  title: string;
  phone?: string;
  email?: string;
  links?: string[];
};

export const contacts: Contact[] = [
  { title: "Marketing", phone: "+62 812-3868-7387", email: "marcom@inivie.com", links: ["Collaborate with us", "Submit your proposal"] },
  { title: "Media Inquiry", phone: "+62 813 3753-0285", email: "pr@inivie.com" },
  { title: "Human Resource", phone: "+62 812-3729-0110", email: "hire@inivie.com", links: ["View open jobs"] },
  { title: "Reservation", phone: "+62 811-3986-889", email: "reservation@inivie.com", links: ["Submit your inquiry"] },
  { title: "Travel Agent Inquiry", phone: "+62 811-3986-889", email: "salescoordinator@inivie.com", links: ["Submit your inquiry"] },
  { title: "Owners", links: ["About Us"] },
];

export const socials = ["Facebook", "Instagram", "LinkedIn", "YouTube", "Tiktok"] as const;
export const socialMarks = { Facebook: "f", Instagram: "◎", LinkedIn: "in", YouTube: "▶", Tiktok: "♪" };
