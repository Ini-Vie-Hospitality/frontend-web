import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { Contact } from "@/content/homepage/types";
import { FooterHeading } from "./footer-heading";

export function FooterContactBlock({ contact }: { contact: Contact }) {
  return (
    <section className="min-w-0">
      <FooterHeading>{contact.title}</FooterHeading>
      <div className="mt-4 grid gap-[9px] text-[14px] leading-[1.45] text-[#d8cebf] max-md:text-[13px]">
        {contact.phone && <a className="flex w-fit items-center gap-4 transition-colors hover:text-white" href={contact.phone.href}><Phone aria-hidden="true" className="size-[17px] shrink-0 stroke-[1.45]" />{contact.phone.label}</a>}
        {contact.email && <a className="flex w-fit items-center gap-4 transition-colors hover:text-white" href={contact.email.href}><Mail aria-hidden="true" className="size-[17px] shrink-0 stroke-[1.45]" />{contact.email.label}</a>}
        {contact.actions.map((action, index) => <Link className={`flex w-fit items-center gap-3 text-[#e06a0b] transition-colors hover:text-[#f58a2b] ${index ? "mt-1" : "mt-2"}`} href={action.href} key={action.label}>{action.label}<ArrowUpRight aria-hidden="true" className="size-[15px] stroke-[1.6]" /></Link>)}
      </div>
    </section>
  );
}
