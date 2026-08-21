type HeroContentProps = { onBookingRequest: () => void };

const buttonBase = "inline-flex min-h-15 items-center justify-center rounded-sm px-8 text-xs font-medium uppercase tracking-[.12em] transition active:translate-y-px";

export function HeroContent({ onBookingRequest }: HeroContentProps) {
  return (
    <div className="absolute top-[20.5%] left-[4.7%] z-20 w-[min(580px,42vw)] max-md:inset-x-5.5 max-md:top-auto max-md:bottom-28 max-md:w-auto">
      <p className="mb-7 text-[13px] font-medium uppercase tracking-[.32em] max-md:mb-5 max-md:text-[11px] max-md:tracking-[.25em]">Ini Vie Hospitality</p>
      <h1 id="hero-title" className="m-0 font-serif text-[clamp(4.5rem,5.2vw,5.75rem)] leading-[.98] tracking-[-.025em] text-ivory max-lg:text-[clamp(3.8rem,7vw,4.8rem)] max-md:text-[clamp(2.8rem,12vw,3.4rem)]">Stay Beyond<br />The Ordinary.</h1>
      <p className="my-8.5 max-w-[430px] text-lg leading-[1.65] text-soft-white/90 max-md:my-6 max-md:max-w-[360px] max-md:text-base max-md:leading-[1.55]">Discover thoughtfully designed stays across Bali&apos;s most inspiring destinations.</p>
      <div className="flex gap-4.5 max-md:hidden">
        <a className={`${buttonBase} bg-orange text-soft-white hover:bg-orange-hover`} href="#stays">Explore Our Stays <span className="ml-4 text-[22px] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></a>
        <a className={`${buttonBase} border border-soft-white/70 bg-transparent hover:border-soft-white hover:bg-white/10`} href="#about">Discover Ini Vie</a>
      </div>
      <button className={`${buttonBase} hidden w-full bg-orange text-soft-white hover:bg-orange-hover max-md:flex`} type="button" onClick={onBookingRequest}>Check Availability</button>
    </div>
  );
}
