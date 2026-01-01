import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

import { ShowcaseCertificate } from "./showcase-certificate";
import { ShowcaseHero } from "./showcase-hero";
import { ShowcaseProject } from "./showcase-project";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations("pages.showcase.metadata");
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
      url: `https://www.andytsai.com/${locale}/showcase`,
      locale: ogLocale,
      alternateLocale: ogAlternateLocale,
    },
  });
};

export default async function ShowcasePage() {
  return (
    <main>
      <ShowcaseHero />
      <ShowcaseCertificate />
      <ShowcaseProject />
    </main>
  );
}
