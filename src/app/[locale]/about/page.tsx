import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { AboutHero } from "@/components/about/about-hero";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutSkill } from "@/components/about/about-skill";
import { AboutWorkflow } from "@/components/about/about-workflow";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

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
