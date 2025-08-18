import { DeepLearningArchitecture } from "@/components/showcase/deep-learning/deep-learning-architecture";
import { DeepLearningContext } from "@/components/showcase/deep-learning/deep-learning-context";
import { DeepLearningFeature } from "@/components/showcase/deep-learning/deep-learning-feature";
import { DeepLearningHero } from "@/components/showcase/deep-learning/deep-learning-hero";
import { DeepLearningResult } from "@/components/showcase/deep-learning/deep-learning-result";
import { DeepLearningTimeline } from "@/components/showcase/deep-learning/deep-learning-timeline";

export default async function DeepLearningPage() {
  return (
    <main>
      <DeepLearningHero />
      <DeepLearningContext />
      <DeepLearningTimeline />
      <DeepLearningFeature />
      <DeepLearningArchitecture />
      <DeepLearningResult />
    </main>
  );
}
