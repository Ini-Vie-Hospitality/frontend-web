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
import { loadHomepageData } from "@/content/homepage/loader";

export default async function Home() {
  const data = await loadHomepageData();
  return <main>
    {data.navbar && <Navbar heroId="hero" data={data.navbar} />}
    <section id="booking" className="booking-anchor" aria-hidden="true" />
    <Hero />
    {data.brandIntroduction && <BrandIntroduction data={data.brandIntroduction} />}
    {data.featuredProperties && <FeaturedProperties data={data.featuredProperties} />}
    {data.culinary && <CulinaryJourney data={data.culinary} />}
    {data.wellness && <WellnessHarmony data={data.wellness} />}
    {data.membership && <MembershipSection data={data.membership} />}
    {data.ourStory && <OurStory data={data.ourStory} />}
    {data.specialOffers && <OurSpecialOffers data={data.specialOffers} />}
    {data.whatsNew && <WhatsNew data={data.whatsNew} />}
    {data.featuredIn && <FeaturedIn data={data.featuredIn} />}
    {data.faq && <FaqSection data={data.faq} />}
    {data.footer && <Footer data={data.footer} />}
  </main>;
}
