import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

import { ExperienceHero } from "./experience-hero";
import { ExperienceStart } from "./experience-start";
import { ExperienceTimeline } from "./experience-timeline";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations("pages.experience.metadata");
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
      url: `https://www.andytsai.com/${locale}/experience`,
      locale: ogLocale,
      alternateLocale: ogAlternateLocale,
    },
  });
};

export default async function ExperiencePage() {
  return (
    <main className={"space-y-0!"}>
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceStart />
    </main>
  );
}
