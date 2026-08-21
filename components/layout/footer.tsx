import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

type Contact = {
  title: string;
  phone?: string;
  email?: string;
  links?: string[];
};

const contacts: Contact[] = [
  { title: "Marketing", phone: "+62 812-3868-7387", email: "marcom@inivie.com", links: ["Collaborate with us", "Submit your proposal"] },
  { title: "Media Inquiry", phone: "+62 813 3753-0285", email: "pr@inivie.com" },
  { title: "Human Resource", phone: "+62 812-3729-0110", email: "hire@inivie.com", links: ["View open jobs"] },
  { title: "Reservation", phone: "+62 811-3986-889", email: "reservation@inivie.com", links: ["Submit your inquiry"] },
  { title: "Travel Agent Inquiry", phone: "+62 811-3986-889", email: "salescoordinator@inivie.com", links: ["Submit your inquiry"] },
  { title: "Owners", links: ["About Us"] },
];

const socials = ["Facebook", "Instagram", "LinkedIn", "YouTube", "Tiktok"];

function ContactBlock({ contact }: { contact: Contact }) {
  return (
    <section className="footer-contact">
      <h3>{contact.title}</h3>
      {contact.phone && <a href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone aria-hidden="true" />{contact.phone}</a>}
      {contact.email && <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" />{contact.email}</a>}
      {contact.links?.map((link) => <Link href="#contact" key={link}>{link}<ArrowUpRight aria-hidden="true" /></Link>)}
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <div className="footer-brand">
          <Image src="/inivie-white.png" alt="Ini Vie Hospitality" width={236} height={235} />
          <p>Curating meaningful stays, destinations, wellness, and lifestyle experiences across Bali.</p>
        </div>
        <div className="footer-office">
          <h2>Head office</h2>
          <address>
            <span><MapPin aria-hidden="true" />Jl. Persada II No.888, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</span>
            <a href="tel:+623619346082"><Phone aria-hidden="true" />+62 361 9346082</a>
            <a href="mailto:info@inivie.com"><Mail aria-hidden="true" />info@inivie.com</a>
            <Link href="#map"><ArrowUpRight aria-hidden="true" />View on map</Link>
          </address>
        </div>
        <div className="footer-subscribe">
          <h2>Subscribe</h2>
          <p>Receive latest offers and promos without spam</p>
          <Link href="#subscribe">Subscribe <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="footer-details">
        <div className="footer-contact-grid">{contacts.map((contact) => <ContactBlock contact={contact} key={contact.title} />)}</div>
        <section className="footer-socials">
          <h3>Follow Our Social Media</h3>
          {socials.map((social) => <Link href="#social" key={social}>{social}</Link>)}
        </section>
      </div>
      <div className="footer-legal">
        <Link href="#policy">General Policy <ArrowUpRight aria-hidden="true" /></Link>
        <span>2026 Ini Vie Hospitality. All Rights Reserved</span>
      </div>
    </footer>
  );
}
