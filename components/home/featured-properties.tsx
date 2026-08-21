"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const properties = [
  { name: "Leedon Villa Seminyak", category: "Luxury Villa", description: "Elegant villa living with warm tropical design, curated privacy, and a memorable Bali stay.", image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85", href: "#leedon-villa" },
  { name: "Ajowa Resort", category: "Resort Experience", description: "A refined resort experience blending tropical atmosphere, contemporary comfort, and destination-led hospitality.", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85", href: "#ajowa-resort" },
  { name: "La Mewali Resort", category: "Resort Experience", description: "A considered retreat shaped by lush surroundings, warm service, and the easy rhythm of Bali.", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85", href: "#la-mewali-resort" },
];

export function FeaturedProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleProperties = [0, 1].map((offset) => properties[(activeIndex + offset) % properties.length]);
  const moveSlide = (direction: number) => setActiveIndex((current) => (current + direction + properties.length) % properties.length);

  return (
    <section id="stays" className="relative min-h-[940px] overflow-hidden bg-[#f5f0e7] px-[clamp(28px,5vw,92px)] pt-[clamp(105px,9vw,160px)] pb-[132px] text-[#171815] max-md:min-h-0 max-md:px-5 max-md:pt-[76px] max-md:pb-[118px]" aria-labelledby="featured-properties-title">
      <div className="mb-28 flex items-center gap-7 text-[19px] max-[1100px]:mb-[72px] max-md:mb-[65px] max-md:gap-[15px] max-md:text-[15px]" aria-label={`Slide ${activeIndex + 1} of ${properties.length}`}>
        <strong className="font-semibold">{String(activeIndex + 1).padStart(2, "0")}</strong>
        <span className="relative h-0.5 w-[min(280px,16vw)] bg-[#d0c8bb] max-md:w-[120px]"><i className="absolute inset-y-0 left-0 bg-orange transition-[width] duration-350" style={{ width: `${((activeIndex + 1) / properties.length) * 100}%` }} /></span>
        <span className="text-[#9d9386]">{String((activeIndex + 1) % properties.length + 1).padStart(2, "0")}</span>
        <span className="text-[#9d9386]">{String((activeIndex + 2) % properties.length + 1).padStart(2, "0")}</span>
      </div>
      <div className="grid grid-cols-[minmax(400px,.92fr)_minmax(600px,1.35fr)] items-center gap-[clamp(48px,7vw,130px)] max-[1100px]:grid-cols-1 max-[1100px]:gap-12 max-md:block">
        <div className="max-w-[590px]">
          <p className="mb-7 text-xs font-medium uppercase tracking-[.24em] text-[#a86422]">Curated Collection</p>
          <h2 id="featured-properties-title" className="m-0 font-serif text-[clamp(3.35rem,4.2vw,5rem)] leading-[1.1] tracking-[-.04em] max-md:text-[clamp(2.75rem,11vw,3.5rem)]">Discover Curated Stays<br />Designed For You</h2>
          <p className="my-[34px] max-w-[500px] text-[17px] leading-[1.7] text-[#4c4b47] max-md:my-7 max-md:text-[15px]">We present a carefully selected collection of Ini Vie properties — from intimate villas to immersive resorts — designed to match your style of stay and the spirit of Bali.</p>
          <Link className="inline-flex min-h-16 items-center gap-7 rounded-[9px] bg-[#20211f] px-[30px] text-sm text-white shadow-[0_12px_20px_rgba(30,29,24,.12)] transition hover:-translate-y-0.5 hover:bg-[#343632] max-md:min-h-[58px] max-md:px-6 max-md:text-[13px]" href="#all-properties">Explore All Properties <ArrowRight className="size-[21px] text-orange" /></Link>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-6 max-md:mt-[54px] max-md:grid-cols-[repeat(2,86vw)] max-md:gap-[14px] max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
          {visibleProperties.map((property) => (
            <Link className="group block min-w-0 max-md:snap-start" href={property.href} key={property.name}>
              <div className="relative h-[696px] overflow-hidden rounded-[25px] bg-[#242820] max-[1100px]:h-[560px] max-md:h-auto max-md:aspect-[3/4.35] max-md:rounded-[20px]">
                <Image className="object-cover transition-transform duration-650 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]" src={property.image} alt={property.name} fill sizes="(max-width: 767px) 88vw, 28vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,7,0)_35%,rgba(7,9,7,.2)_54%,rgba(7,9,7,.96)_100%)]" />
                <div className="absolute inset-x-[30px] bottom-[30px] text-white max-md:inset-x-[22px] max-md:bottom-6">
                  <span className="mb-[14px] block text-[11px] uppercase tracking-[.06em]">{property.category}</span>
                  <h3 className="m-0 font-serif text-[clamp(2rem,2.1vw,2.7rem)] leading-[1.08] tracking-[-.03em] max-md:text-[2rem]">{property.name}</h3>
                  <p className="my-[18px] mb-[25px] text-[15px] leading-[1.55] max-md:text-sm">{property.description}</p>
                  <span className="flex w-max items-center gap-7 border-b border-white/46 pb-[10px] text-[15px] text-white">{activeIndex === 0 ? "Discover Stay" : "Explore Property"}<ArrowRight className="size-[22px] text-orange" /></span>
                </div>
                <span className="absolute top-[22px] right-[22px] grid size-[42px] place-items-center rounded-full border border-soft-white/55 text-soft-white opacity-0 transition-opacity duration-220 group-hover:opacity-100 max-md:opacity-100"><ArrowUpRight className="size-[18px]" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute right-[clamp(28px,5vw,92px)] bottom-[45px] flex gap-[18px] max-md:right-5 max-md:bottom-8">
        <button className="grid size-[58px] cursor-pointer place-items-center rounded-full border border-[#d4cabc] bg-transparent text-[#34322e] transition hover:border-orange hover:bg-orange hover:text-white max-md:size-[52px]" type="button" aria-label="Previous properties" onClick={() => moveSlide(-1)}><ArrowLeft className="size-[22px] stroke-[1.3]" /></button>
        <button className="grid size-[58px] cursor-pointer place-items-center rounded-full border border-[#c97b29] bg-transparent text-orange transition hover:bg-orange hover:text-white max-md:size-[52px]" type="button" aria-label="Next properties" onClick={() => moveSlide(1)}><ArrowRight className="size-[22px] stroke-[1.3]" /></button>
      </div>
    </section>
  );
}
