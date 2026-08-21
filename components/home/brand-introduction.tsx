import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandIntroduction() {
  return (
    <section id="about" className="group grid min-h-[940px] grid-cols-[minmax(220px,23vw)_minmax(520px,1fr)_minmax(220px,23vw)] items-center gap-[clamp(42px,7vw,150px)] overflow-hidden bg-[#f5f0e7] px-[clamp(28px,3.8vw,64px)] py-[76px] text-[#1a1c18] max-[1100px]:grid-cols-[minmax(150px,22vw)_1fr_minmax(150px,22vw)] max-[1100px]:gap-[34px] max-[1100px]:min-h-[760px] max-[1100px]:px-8 max-[1100px]:py-[60px] max-md:grid-cols-2 max-md:gap-4 max-md:min-h-0 max-md:px-5 max-md:py-[72px] max-md:pb-[84px]" aria-labelledby="brand-introduction-title">
      <div className="relative h-[min(82vh,790px)] min-h-[610px] overflow-hidden rounded-[28px] max-[1100px]:h-[580px] max-[1100px]:min-h-0 max-md:col-start-1 max-md:row-start-2 max-md:mt-11 max-md:h-auto max-md:aspect-[4/5] max-md:rounded-[18px]">
        <Image className="object-cover object-[32%_center] transition-transform duration-900 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]" src="/1.avif" alt="Tropical Bali coastline at sunset" fill sizes="(max-width: 767px) 50vw, 22vw" />
      </div>
      <div className="max-w-[760px] text-center max-md:col-span-2 max-md:row-start-1">
        <p className="m-0 text-[13px] uppercase tracking-[.34em] max-md:text-[10px] max-md:tracking-[.27em]">Ini Vie Hospitality</p>
        <span className="mx-auto my-7 block h-0.5 w-[47px] bg-orange max-[1100px]:my-5 max-md:w-[38px]" aria-hidden="true" />
        <h2 id="brand-introduction-title" className="m-0 font-serif text-[clamp(3.4rem,4.5vw,5.45rem)] leading-[1.05] tracking-[-.035em] max-[1100px]:text-[clamp(3.2rem,5.6vw,4.3rem)] max-md:text-[clamp(2.65rem,11.5vw,3.45rem)] max-md:leading-[1.04]"><span>Where Bali&apos;s Beauty</span><br className="max-md:hidden" /> <span>Meets Thoughtful Stays.</span></h2>
        <p className="mx-auto my-[47px] max-w-[550px] text-[17px] leading-[1.75] tracking-[.035em] text-[#4b4a46] max-[1100px]:my-[34px] max-[1100px]:text-[15px] max-md:my-7 max-md:text-[15px] max-md:leading-[1.65] max-md:tracking-[.01em]">Ini Vie Hospitality is a Bali-based hospitality group curating memorable stays, dining destinations, wellness experiences, and lifestyle escapes designed to reflect the character of each destination.</p>
        <Link className="inline-flex min-h-[58px] min-w-[286px] items-center justify-center gap-5 rounded-[9px] bg-[#242522] text-xs font-medium uppercase tracking-[.16em] text-white shadow-[0_14px_24px_rgba(29,28,23,.15)] transition hover:-translate-y-0.5 hover:bg-[#343632] max-md:min-h-14" href="#stays">Discover Ini Vie <ArrowRight className="size-[18px] text-orange" /></Link>
      </div>
      <div className="relative mt-0 h-[min(82vh,790px)] min-h-[610px] overflow-hidden rounded-[28px] max-[1100px]:h-[580px] max-[1100px]:min-h-0 max-md:col-start-2 max-md:row-start-2 max-md:mt-[82px] max-md:h-auto max-md:aspect-[4/5] max-md:rounded-[18px]">
        <Image className="object-cover object-[70%_center] transition-transform duration-900 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.025]" src="/1.avif" alt="Thoughtfully designed tropical villa in Bali" fill sizes="(max-width: 767px) 50vw, 22vw" />
      </div>
    </section>
  );
}
