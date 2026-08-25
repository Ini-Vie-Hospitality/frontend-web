import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import type { HomepageData } from "@/content/homepage/types";
import { BrandIntroduction } from "./brand-introduction/brand-introduction";
import { CulinaryJourney } from "./culinary-journey/culinary-journey";
import { FaqSection } from "./faq/faq-section";
import { FeaturedIn } from "./featured-in/featured-in";
import { FeaturedProperties } from "./featured-properties/featured-properties";
import { Hero } from "./hero/hero";
import { HomepagePopup } from "./homepage-popup";
import { MembershipSection } from "./membership/membership-section";
import { OurStory } from "./our-story/our-story";
import { OurSpecialOffers } from "./special-offers/special-offers";
import { WellnessHarmony } from "./wellness-harmony/wellness-harmony";
import { WhatsNew } from "./whats-new/whats-new";

export function HomepageView({
  data,
  navigationBaseHref = "/",
}: {
  data: HomepageData;
  navigationBaseHref?: string;
}) {
  return (
    <main>
      {data.navbar && (
        <Navbar
          heroId="hero"
          data={data.navbar}
          navigationBaseHref={navigationBaseHref}
        />
      )}
      <section id="booking" className="booking-anchor" aria-hidden="true" />
      <Hero />
      <HomepagePopup data={data.popup ?? undefined} />
      {data.brandIntroduction && (
        <BrandIntroduction data={data.brandIntroduction} />
      )}
      {data.featuredProperties && (
        <FeaturedProperties data={data.featuredProperties} />
      )}
      {data.culinary && <CulinaryJourney data={data.culinary} />}
      {data.wellness && <WellnessHarmony data={data.wellness} />}
      {data.membership && <MembershipSection data={data.membership} />}
      {data.ourStory && <OurStory data={data.ourStory} />}
      {data.specialOffers && <OurSpecialOffers data={data.specialOffers} />}
      {data.whatsNew && <WhatsNew data={data.whatsNew} />}
      {data.featuredIn && <FeaturedIn data={data.featuredIn} />}
      {data.faq && <FaqSection data={data.faq} />}
      {data.footer && <Footer data={data.footer} />}
    </main>
  );
}
