export function HeroMedia() {
  return (
    <div className="hero-media" aria-hidden="true">
      <video autoPlay muted loop playsInline poster="/1.avif" preload="metadata">
        <source src="/new-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
