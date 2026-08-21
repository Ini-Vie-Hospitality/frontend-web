export function HeroMedia() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <video className="size-full object-cover object-center" autoPlay muted loop playsInline poster="/1.avif" preload="metadata">
        <source src="/new-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,9,.78)_0%,rgba(8,11,9,.48)_28%,rgba(8,11,9,.18)_55%,rgba(8,11,9,.04)_78%),linear-gradient(180deg,rgba(8,11,9,.62)_0%,rgba(8,11,9,.06)_40%,rgba(8,11,9,.32)_100%)]" />
    </div>
  );
}
