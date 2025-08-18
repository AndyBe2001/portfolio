import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { ShowcaseCertificate } from "@/components/showcase/showcase-certificate";
import { ShowcaseHero } from "@/components/showcase/showcase-hero";
import { ShowcaseProject } from "@/components/showcase/showcase-project";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

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
