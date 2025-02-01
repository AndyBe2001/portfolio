import { LandingPageCta } from "@/views/landing-page/cta";
import { LandingPageFeature } from "@/views/landing-page/feature";
import { LandingPageHero } from "@/views/landing-page/hero";
import { LandingPageShowcase } from "@/views/landing-page/showcase";

export async function generateMetadata() {}

export default async function IndexPage() {
  return (
    <>
      <LandingPageHero />
      <LandingPageFeature />
      <LandingPageShowcase />
      <LandingPageCta />
    </>
  );
}
