import { ExperienceHero } from "@/components/experience/experience-hero";
import { ExperienceStart } from "@/components/experience/experience-start";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export default async function ExperiencePage() {
  return (
    <main className={"!space-y-0"}>
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceStart />
    </main>
  );
}
