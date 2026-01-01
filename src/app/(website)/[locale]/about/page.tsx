import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

import { AboutHero } from "./about-hero";
import { AboutJourney } from "./about-journey";
import { AboutSkill } from "./about-skill";
import { AboutWorkflow } from "./about-workflow";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations("pages.about.metadata");
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
      url: `https://www.andytsai.com/${locale}/about`,
      locale: ogLocale,
      alternateLocale: ogAlternateLocale,
    },
  });
};

export default function AboutMe() {
  return (
    <main>
      <AboutHero />
      <AboutJourney />
      <AboutSkill />
      <AboutWorkflow />
    </main>
  );
}
