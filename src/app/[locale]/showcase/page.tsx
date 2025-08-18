import { ShowcaseHero } from "@/components/showcase/showcase-hero";
import { ShowcaseProject } from "@/components/showcase/showcase-project";

export default async function ShowcasePage() {
  return (
    <main>
      <ShowcaseHero />
      <ShowcaseProject />
    </main>
  );
}
