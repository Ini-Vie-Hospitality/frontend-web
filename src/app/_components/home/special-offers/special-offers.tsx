import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal/reveal";
import { offers } from "./offers";

export function OurSpecialOffers() {
  return (
    <section
      id="offers"
      className="bg-[#f8f5ef] pt-[clamp(52px,4vw,64px)] pb-[clamp(48px,4vw,64px)] text-[#302824]"
      aria-labelledby="special-offers-title"
    >
      <header className="mx-auto max-w-[820px] px-6 text-center">
        <Reveal variant="fade-up">
          <p className="text-[11px] font-medium uppercase tracking-[.38em] text-[#38312d] sm:text-[12px]">
            Our Special Offers
          </p>
        </Reveal>

        <Reveal variant="clip-up" delay={80}>
          <h2
            id="special-offers-title"
            className="mt-5 font-serif text-[clamp(3rem,5vw,4.7rem)] font-normal leading-[.98] tracking-[-.04em]"
          >
            Your Bali escape,
            <br />
            thoughtfully elevated.
          </h2>
        </Reveal>

        <Reveal variant="slide-right" delay={160}>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-[1.55] text-[#5f5955] sm:text-[17px]">
            Thoughtfully curated stays, seasonal privileges, and exclusive benefits
            <br className="hidden md:block" />
            designed to make every iNi ViE journey through Bali even more memorable.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={220}>
          <Link
            href="https://inivie.com/offers"
            className="mt-7 inline-flex border-b border-[#a96f38] pb-1.5 text-[15px] text-[#403834] transition-colors hover:text-[#a96f38] sm:text-[17px]"
          >
            Explore All Offers
          </Link>
        </Reveal>
      </header>

      <div className="mx-auto mt-[clamp(44px,3.2vw,52px)] grid max-w-[1600px] grid-cols-1 gap-x-6 gap-y-12 px-[clamp(20px,3.3vw,48px)] md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Reveal
            key={offer.id}
            variant={offer.reveal}
            delay={offer.delay}
          >
            <article aria-labelledby={`offer-title-${offer.id}`}>
              <Link
                href={offer.href}
                className="group block overflow-hidden focus-visible:outline-offset-4"
              >
                <div className="relative aspect-[434/431] overflow-hidden bg-[#ded5c8]">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 33vw"
                  />
                </div>

                <p className="mt-6 text-[12px] font-medium uppercase tracking-[.25em] text-[#a9723d] sm:text-[13px]">
                  {offer.id} <span className="mx-2">/</span> {offer.category}
                </p>

                <h3
                  id={`offer-title-${offer.id}`}
                  className="mt-2.5 font-serif text-[clamp(2.5rem,3.25vw,3rem)] font-normal leading-none tracking-[-.035em]"
                >
                  {offer.title}
                </h3>
              </Link>

              <p className="mt-4 max-w-[425px] text-[15px] leading-[1.65] text-[#6a6460] sm:text-[16px]">
                {offer.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
