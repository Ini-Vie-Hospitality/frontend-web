import { BrandIntroduction } from "@/components/home/brand-introduction";
import { Navbar } from "@/components/layout/navbar";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { Hero } from "@/components/home/hero/hero";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar heroId="hero" />
      <Hero />
      <section id="booking" className="booking-anchor" aria-hidden="true" />
      <BrandIntroduction />
      <FeaturedProperties />
      <Footer />
    </main>
  );
}
