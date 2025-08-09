import { Metadata } from "next";

import { HomeHero } from "@/components/home/home-hero";

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export default async function IndexPage() {
  return (
    <main>
      <HomeHero />
    </main>
  );
}
