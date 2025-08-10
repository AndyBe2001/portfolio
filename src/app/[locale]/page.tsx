import { Metadata } from "next";

import { HomeHero } from "@/components/home/home-hero";
import { HomeNavigation } from "@/components/home/home-navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export default async function IndexPage() {
  return (
    <main>
      <HomeHero />
      <HomeNavigation />
    </main>
  );
}
