import { LandingPageHero } from "@/views/landing-page/landing-page-hero";

export async function generateMetadata() {}

export default async function IndexPage() {
  return (
    <main>
      <LandingPageHero />
    </main>
  );
}
