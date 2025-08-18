import { AboutHero } from "@/components/about/about-hero";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutSkill } from "@/components/about/about-skill";
import { AboutWorkflow } from "@/components/about/about-workflow";

export default function AboutMe() {
  return (
    <main className={"space-y-40 overflow-x-clip"}>
      <AboutHero />
      <AboutJourney />
      <AboutSkill />
      <AboutWorkflow />
    </main>
  );
}
