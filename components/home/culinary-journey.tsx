import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const diningDestinations = [
  { name: "Norii Seminyak", location: "Seminyak, Bali", category: "Japanese", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85", href: "#norii-seminyak" },
  { name: "Riserva Steakhouse", location: "Ubud, Bali", category: "Immersive Dining", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85", href: "#riserva-steakhouse" },
  { name: "Terra Verte", location: "Ubud, Bali", category: "Mediterranean", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", href: "#terra-verte" },
];

export function CulinaryJourney() {
  return (
    <section id="dining" className="relative overflow-hidden bg-[#100e0b] px-[clamp(24px,2.4vw,40px)] pt-[clamp(48px,5vw,84px)] pb-[clamp(32px,3vw,48px)] text-[#f1e9dc]" aria-labelledby="culinary-journey-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(141,74,20,.12),transparent_35%),linear-gradient(110deg,rgba(0,0,0,.3),transparent_58%,rgba(125,75,26,.07))]" />
      <div className="relative grid min-h-[800px] grid-cols-[minmax(420px,.92fr)_minmax(700px,1.55fr)] gap-[clamp(44px,3.7vw,74px)] max-[1150px]:grid-cols-[minmax(330px,.8fr)_1.45fr] max-[1150px]:gap-10 max-md:block">
        <div className="relative min-h-[800px] overflow-hidden rounded-[6px] max-[1150px]:min-h-[650px] max-md:min-h-0 max-md:aspect-[.8] max-md:rounded-[5px]">
          <Image className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.025]" src="https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4?auto=format&fit=crop&w=1400&q=85" alt="Chef preparing a dish over an open flame" fill sizes="(max-width: 767px) 100vw, 36vw" priority />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,.06),rgba(5,4,3,.14)_48%,rgba(5,4,3,.62))]" />
        </div>

        <div className="flex min-w-0 flex-col pt-[18px] max-md:pt-14">
          <div className="flex items-start justify-between gap-8 max-md:block">
            <div>
              <p className="m-0 text-[13px] font-medium uppercase tracking-[.25em] text-[#e46d0b] max-md:text-[11px]">Curated Culinary</p>
              <span className="my-[29px] block h-px w-[47px] bg-[#e46d0b] max-md:my-6 max-md:w-[31px]" aria-hidden="true" />
              <h2 id="culinary-journey-title" className="m-0 font-serif text-[clamp(3.8rem,5.25vw,5.9rem)] font-normal leading-[.98] tracking-[-.045em] max-[1150px]:text-[clamp(3.3rem,5.5vw,5rem)] max-md:text-[clamp(3.2rem,14vw,4.8rem)]">The Culinary Journey</h2>
              <p className="mt-[46px] mb-0 text-[17px] leading-[1.5] text-[#a69b8c] max-md:mt-7 max-md:text-[15px]">Opening a new chapter in refined dining experience</p>
            </div>
            <Link className="mt-[172px] flex shrink-0 items-center gap-4 text-[16px] text-[#c9beb0] transition-colors hover:text-[#e46d0b] max-[1150px]:mt-[145px] max-md:mt-8 max-md:text-[14px]" href="#all-dining">View All Dining <ArrowRight className="size-[27px] text-[#e46d0b] max-md:size-6" /></Link>
          </div>

          <div className="mt-[39px] grid grid-cols-3 gap-[17px] max-[1150px]:gap-3 max-md:mt-10 max-md:grid-cols-[repeat(3,78vw)] max-md:overflow-x-auto max-md:pb-2 max-md:snap-x max-md:snap-mandatory max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden">
            {diningDestinations.map((destination) => (
              <Link className="group min-w-0 overflow-hidden rounded-[7px] border border-[#6c5d4a]/65 bg-[#17130e] transition-colors hover:border-[#e46d0b] max-md:snap-start" href={destination.href} key={destination.name}>
                <div className="relative aspect-[.88] overflow-hidden border-b border-[#3e352b]">
                  <Image className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]" src={destination.image} alt={destination.name} fill sizes="(max-width: 767px) 78vw, 20vw" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,4,0),rgba(8,6,4,.08)_62%,rgba(8,6,4,.3))]" />
                </div>
                <div className="min-h-[196px] p-[25px] max-[1150px]:p-5 max-md:min-h-[180px] max-md:p-5">
                  <h3 className="m-0 font-serif text-[clamp(1.65rem,1.85vw,2.15rem)] font-normal leading-[1.05] tracking-[-.035em] max-md:text-[2rem]">{destination.name}</h3>
                  <p className="mt-3 mb-[16px] text-[15px] text-[#a69b8c]">{destination.location}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-[4px] border border-[#938577] px-[11px] py-[6px] text-[11px] text-[#d3c8ba]">{destination.category}</span>
                    <span className="rounded-[4px] border border-[#e46d0b] px-[11px] py-[6px] text-[11px] text-[#e46d0b]">New Opening</span>
                  </div>
                  <span className="mt-[26px] flex items-center gap-5 text-[14px] text-[#d3c8ba]">Discover Dining <ArrowRight className="size-[22px] text-[#e46d0b]" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-[28px] flex items-center gap-8 text-[11px] uppercase tracking-[.25em] text-[#8d6747] max-md:mt-9 max-md:gap-5 max-md:text-[9px]">
        <span>Ini Vie Hospitality</span>
        <span className="h-7 w-px bg-[#6c5d4a]" aria-hidden="true" />
        <span>Bali</span>
        <span className="ml-auto font-serif text-[42px] normal-case leading-none tracking-[-.18em] text-[#a58b73] max-md:text-[34px]" aria-label="Ini Vie">I<span className="relative -left-1">V</span></span>
      </div>
    </section>
  );
}
