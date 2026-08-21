type HeroContentProps = { onBookingRequest: () => void };

export function HeroContent({ onBookingRequest }: HeroContentProps) {
  return (
    <div className="hero-content">
      <p className="eyebrow">Ini Vie Hospitality</p>
      <h1 id="hero-title">Stay Beyond<br />The Ordinary.</h1>
      <p className="hero-copy">Discover thoughtfully designed stays across Bali&apos;s most inspiring destinations.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#stays">Explore Our Stays <span aria-hidden="true">→</span></a>
        <a className="button button-secondary" href="#about">Discover Ini Vie</a>
      </div>
      <button className="mobile-availability button button-primary" type="button" onClick={onBookingRequest}>Check Availability</button>
    </div>
  );
}
