import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import { BrandIntroduction } from "./_components/home/brand-introduction/brand-introduction";
import { CulinaryJourney } from "./_components/home/culinary-journey/culinary-journey";
import { FaqSection } from "./_components/home/faq/faq-section";
import { FeaturedIn } from "./_components/home/featured-in/featured-in";
import { FeaturedProperties } from "./_components/home/featured-properties/featured-properties";
import { Hero } from "./_components/home/hero/hero";
import { MembershipSection } from "./_components/home/membership/membership-section";
import { OurStory } from "./_components/home/our-story/our-story";
import { OurSpecialOffers } from "./_components/home/special-offers/special-offers";
import { WellnessHarmony } from "./_components/home/wellness-harmony/wellness-harmony";
import { WhatsNew } from "./_components/home/whats-new/whats-new";

export default function Home() {
  return (
    <main>
      <Navbar heroId="hero" />
      <section id="booking" className="booking-anchor" aria-hidden="true" />
      <Hero />
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
