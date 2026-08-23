import { BrandIntroduction } from "@/components/home/brand-introduction";
import { CulinaryJourney } from "@/components/home/culinary-journey";
import { Navbar } from "@/components/layout/navbar";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero/hero";
import { Footer } from "@/components/layout/footer";
import { MembershipSection } from "@/components/home/membership-section";
import { OurSpecialOffers } from "@/components/home/our-special-offers";
import { OurStory } from "@/components/home/our-story";
import { WellnessHarmony } from "@/components/home/wellness-harmony";
import { WhatsNew } from "@/components/home/whats-new";
import { FeaturedIn } from "@/components/home/featured-in";


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
      <MembershipSection />
      <OurStory />
      <OurSpecialOffers />
      <WhatsNew />
      <FeaturedIn />
      <FaqSection />
      <Footer />
    </main>
  );
}
