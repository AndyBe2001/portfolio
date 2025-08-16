import { ShowcaseContent } from "@/components/showcase/showcase-content";
import { ShowcaseHero } from "@/components/showcase/showcase-hero";

export default async function ShowcasePage() {
  return (
    <main>
      <ShowcaseHero />
      <ShowcaseContent />
    </main>
  );
}
