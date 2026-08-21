import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BrandIntroduction() {
  return (
    <section
      id="about"
      className="brand-introduction"
      aria-labelledby="brand-introduction-title"
    >
      <div className="brand-introduction-image brand-introduction-image-left">
        <Image
          src="/1.avif"
          alt="Tropical Bali coastline at sunset"
          fill
          sizes="(max-width: 767px) 100vw, 22vw"
        />
      </div>

      <div className="brand-introduction-content">
        <p className="section-kicker">Ini Vie Hospitality</p>
        <span className="brand-introduction-rule" aria-hidden="true" />
        <h2 id="brand-introduction-title">
          Where Bali&apos;s Beauty
          <br />
          Meets Thoughtful Stays.
        </h2>
        <p className="brand-introduction-description">
          Ini Vie Hospitality is a Bali-based hospitality group curating memorable stays,
          dining destinations, wellness experiences, and lifestyle escapes designed to
          reflect the character of each destination.
        </p>
        <Link className="brand-introduction-button" href="#stays">
          Discover Ini Vie
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="brand-introduction-image brand-introduction-image-right">
        <Image
          src="/1.avif"
          alt="Thoughtfully designed tropical villa in Bali"
          fill
          sizes="(max-width: 767px) 100vw, 22vw"
        />
      </div>
    </section>
  );
}
