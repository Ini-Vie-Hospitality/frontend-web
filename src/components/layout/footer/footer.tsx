import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FooterContactBlock } from "./footer-contact-block";
import { contacts } from "./footer-data";
import { FooterSocialLinks } from "./footer-social-links";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#121411] px-[clamp(34px,3.9vw,66px)] pt-[58px] pb-[45px] text-[#d8cebf] max-md:px-5 max-md:pt-16"
      aria-label="Ini Vie Hospitality footer"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(13,14,12,.88)_0%,rgba(13,14,12,.74)_34%,rgba(13,14,12,.42)_68%,rgba(13,14,12,.7)_100%),linear-gradient(180deg,rgba(13,14,12,.16),rgba(13,14,12,.66)),url('/bg-footer.png')] bg-cover bg-[center_42%]" />
      <div className="relative mx-auto max-w-[1540px]">
        <div className="grid grid-cols-[1fr_1.08fr_1fr] border-b border-[#d8cebf]/30 pb-[57px] max-md:block max-md:pb-11">
          <div className="flex min-h-[223px] flex-col items-center justify-center px-[5%] text-center max-md:min-h-0 max-md:px-0 max-md:pb-12">
            <Image className="h-auto w-[174px] object-contain opacity-80 sepia-[.16] max-md:w-[150px]" src="/inivie-white.png" alt="Ini Vie Hospitality" width={236} height={235} />
            <p className="mt-[18px] max-w-[286px] text-[14px] leading-[1.82]">Curating meaningful stays, destinations, wellness, and lifestyle experiences across Bali.</p>
          </div>
          <section className="min-h-[223px] border-l border-[#d8cebf]/30 pl-[clamp(44px,5.05vw,84px)] max-md:min-h-0 max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-9" aria-labelledby="head-office-title">
            <h2 id="head-office-title" className="text-[clamp(1.5rem,1.72vw,2rem)] leading-none text-[#e9dfcf] [font-family:Georgia,serif]">Head office</h2>
            <address className="mt-[28px] grid max-w-[430px] gap-[16px] text-[14px] leading-[1.7] not-italic max-md:text-[13px]">
              <span className="flex items-start gap-[18px]"><MapPin aria-hidden="true" className="mt-[3px] size-[18px] shrink-0 stroke-[1.45]" />Jl. Persada II No.888, Kerobokan, Kec. Kuta Utara,<br className="max-[1220px]:hidden" /> Kabupaten Badung, Bali 80361</span>
              <a className="flex w-fit items-center gap-[18px] transition-colors hover:text-white" href="tel:+623619346082"><Phone aria-hidden="true" className="size-[18px] shrink-0 stroke-[1.45]" />+62 361 9346082</a>
              <a className="flex w-fit items-center gap-[18px] transition-colors hover:text-white" href="mailto:info@inivie.com"><Mail aria-hidden="true" className="size-[18px] shrink-0 stroke-[1.45]" />info@inivie.com</a>
              <Link className="mt-1 flex w-fit items-center gap-[18px] transition-colors hover:text-white" href="#map"><ArrowUpRight aria-hidden="true" className="size-[17px] shrink-0" />View on map <ArrowUpRight aria-hidden="true" className="ml-1 size-[14px] text-[#e06a0b]" /></Link>
            </address>
          </section>
          <section className="min-h-[223px] border-l border-[#d8cebf]/30 pl-[clamp(44px,4vw,67px)] max-md:min-h-0 max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-9" aria-labelledby="subscribe-title">
            <h2 id="subscribe-title" className="text-[clamp(1.5rem,1.72vw,2rem)] leading-none text-[#e9dfcf] [font-family:Georgia,serif]">Subscribe</h2>
            <p className="mt-[28px] max-w-[210px] text-[14px] leading-[1.8]">Receive latest offers and<br />promos without spam</p>
            <Link className="mt-[34px] flex h-[59px] w-[200px] items-center justify-center gap-[21px] border border-[#d96d1a] text-[14px] font-medium text-[#e06a0b] transition-colors hover:bg-[#e06a0b] hover:text-[#121411] max-md:mt-7" href="#subscribe">Subscribe <ArrowUpRight aria-hidden="true" className="size-[18px]" /></Link>
          </section>
        </div>
        <div className="grid grid-cols-[2.65fr_1.25fr] gap-[clamp(45px,5vw,83px)] border-b border-[#d8cebf]/30 py-[32px] max-md:block max-md:py-11">
          <div className="grid grid-cols-3 gap-x-[clamp(38px,4.1vw,69px)] gap-y-[43px] max-md:grid-cols-1 max-md:gap-y-10">
            {contacts.map((contact) => <FooterContactBlock key={contact.title} contact={contact} />)}
          </div>
          <FooterSocialLinks />
        </div>
        <div className="relative flex min-h-[59px] items-end justify-between pt-[31px] text-[13px] leading-none tracking-[.035em] max-md:block max-md:pt-7 max-md:text-[11px]">
          <Link className="flex w-fit items-center gap-[14px] transition-colors hover:text-white" href="#policy">General Policy <ArrowUpRight aria-hidden="true" className="size-[15px] text-[#e06a0b]" /></Link>
          <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-serif tracking-[.13em] max-md:static max-md:mt-7 max-md:block max-md:translate-x-0">2026 iNi ViE Hospitality. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}
