import { BrandIntroduction } from "@/components/home/brand-introduction";
import { CulinaryJourney } from "@/components/home/culinary-journey";
import { Navbar } from "@/components/layout/navbar";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero/hero";
import { Footer } from "@/components/layout/footer";
import { WellnessHarmony } from "@/components/home/wellness-harmony";
import { WhatsNew } from "@/components/home/whats-new";

export default function Home() {
  return (
    <main>
      <Navbar heroId="hero" />
      <Hero />
      <section id="booking" className="booking-anchor" aria-hidden="true" />
      <BrandIntroduction />
      <FeaturedProperties />
      <CulinaryJourney />
      <WellnessHarmony />
      <WhatsNew />
      <FaqSection />
      <Footer />
    </main>
  );
}
