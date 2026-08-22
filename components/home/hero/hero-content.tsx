const buttonClass = "inline-flex min-h-15 items-center justify-center rounded-sm border-0 px-8 text-xs font-medium uppercase tracking-[.12em] transition-[background-color,border-color,transform] duration-220 active:translate-y-px";

export function HeroContent() {
  return (
    <div className="absolute top-[20.5%] left-[4.7%] z-20 w-[min(580px,42vw)] max-[1100px]:top-[20%] [@media(max-height:820px)_and_(min-width:768px)]:top-[18%] max-[1100px]:w-[54vw] max-md:inset-x-[22px] max-md:top-auto max-md:bottom-28 max-md:w-auto">
      <p className="mb-7 text-[13px] font-medium uppercase tracking-[.32em] max-md:mb-5 max-md:text-[11px] max-md:tracking-[.25em]">Ini Vie Hospitality</p>
      <h1 id="hero-title" className="m-0 font-serif text-[clamp(4.5rem,5.2vw,5.75rem)] leading-[.98] tracking-[-.025em] text-ivory max-[1100px]:text-[clamp(3.8rem,7vw,4.8rem)] max-md:text-[clamp(2.8rem,12vw,3.4rem)]">Stay Beyond<br />The Ordinary.</h1>
      <p className="my-[34px] max-w-[430px] text-lg [@media(max-height:820px)_and_(min-width:768px)]:my-6 leading-[1.65] text-soft-white/92 max-md:my-6 max-md:max-w-90 max-md:text-base max-md:leading-[1.55]">Discover thoughtfully designed stays across Bali&apos;s most inspiring destinations.</p>
      <div className="flex gap-[18px] max-md:hidden">
        <a className={`${buttonClass} bg-[#e06a0b] text-[#f8f7f3] hover:bg-[#c95c07]`} href="#stays">Explore Our Stays <span className="ml-4 inline-block text-[22px] transition-transform duration-220 hover:translate-x-[3px]" aria-hidden="true">→</span></a>
        <a className={`${buttonClass} border border-soft-white/70 bg-transparent hover:border-soft-white/95 hover:bg-white/8`} href="#about">Discover Ini Vie</a>
      </div>
    </div>
  );
}
