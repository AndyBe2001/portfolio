import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { DeepLearningArchitecture } from "@/components/showcase/deep-learning/deep-learning-architecture";
import { DeepLearningContext } from "@/components/showcase/deep-learning/deep-learning-context";
import { DeepLearningFeature } from "@/components/showcase/deep-learning/deep-learning-feature";
import { DeepLearningHero } from "@/components/showcase/deep-learning/deep-learning-hero";
import { DeepLearningResult } from "@/components/showcase/deep-learning/deep-learning-result";
import { DeepLearningTimeline } from "@/components/showcase/deep-learning/deep-learning-timeline";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations(
    "pages.showcase.deep-learning.metadata"
  );
  const locale = await getLocale();
  const [ogLocale, ...ogAlternateLocale] =
    localeAliases[locale as keyof typeof localeAliases];

  return merge({}, DEFAULT_METADATA, {
    title: translation("title"),
    description: translation("description"),
    keywords: translation("keywords"),
    openGraph: {
      title: translation("title"),
      description: translation("description"),
      url: `https://www.andytsai.com/${locale}/showcase/deep-learning`,
      locale: ogLocale,
      alternateLocale: ogAlternateLocale,
    },
  });
};

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
