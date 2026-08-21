"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const properties = [
  {
    name: "Leedon Villa Seminyak",
    category: "Luxury Villa",
    description: "Elegant villa living with warm tropical design, curated privacy, and a memorable Bali stay.",
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=85",
    href: "#leedon-villa",
  },
  {
    name: "Ajowa Resort",
    category: "Resort Experience",
    description: "A refined resort experience blending tropical atmosphere, contemporary comfort, and destination-led hospitality.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
    href: "#ajowa-resort",
  },
  {
    name: "La Mewali Resort",
    category: "Resort Experience",
    description: "A considered retreat shaped by lush surroundings, warm service, and the easy rhythm of Bali.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    href: "#la-mewali-resort",
  },
];

export function FeaturedProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleProperties = [0, 1].map((offset) => properties[(activeIndex + offset) % properties.length]);

  function moveSlide(direction: number) {
    setActiveIndex((current) => (current + direction + properties.length) % properties.length);
  }

  return (
    <section id="stays" className="featured-properties" aria-labelledby="featured-properties-title">
      <div className="featured-progress" aria-label={`Slide ${activeIndex + 1} of ${properties.length}`}>
        <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
        <span><i style={{ width: `${((activeIndex + 1) / properties.length) * 100}%` }} /></span>
        <span>{String((activeIndex + 1) % properties.length + 1).padStart(2, "0")}</span>
        <span>{String((activeIndex + 2) % properties.length + 1).padStart(2, "0")}</span>
      </div>
      <div className="featured-layout">
        <div className="featured-copy">
          <p className="section-kicker">Curated Collection</p>
          <h2 id="featured-properties-title">Discover Curated Stays<br />Designed For You</h2>
          <p className="featured-intro">We present a carefully selected collection of Ini Vie properties — from intimate villas to immersive resorts — designed to match your style of stay and the spirit of Bali.</p>
          <Link className="featured-link" href="#all-properties">Explore All Properties <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="property-grid">
          {visibleProperties.map((property) => (
            <Link className="property-card" href={property.href} key={property.name}>
              <div className="property-image">
                <Image src={property.image} alt={property.name} fill sizes="(max-width: 767px) 88vw, 28vw" />
                <div className="property-overlay" />
                <div className="property-card-content">
                  <span className="property-category">{property.category}</span>
                  <h3>{property.name}</h3>
                  <p>{property.description}</p>
                  <span className="property-cta">{activeIndex === 0 ? "Discover Stay" : "Explore Property"}<ArrowRight aria-hidden="true" /></span>
                </div>
                <span className="property-arrow"><ArrowUpRight aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="featured-controls">
        <button type="button" aria-label="Previous properties" onClick={() => moveSlide(-1)}><ArrowLeft aria-hidden="true" /></button>
        <button type="button" aria-label="Next properties" onClick={() => moveSlide(1)}><ArrowRight aria-hidden="true" /></button>
      </div>
    </section>
  );
}
