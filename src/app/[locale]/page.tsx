import { merge } from "lodash";
import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { HomeHero } from "@/components/home/home-hero";
import { HomeNavigation } from "@/components/home/home-navigation";
import { DEFAULT_METADATA } from "@/constants/metadata";
import { localeAliases } from "@/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations("pages.home.metadata");
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
      url: "https://www.andytsai.com",
      locale: ogLocale,
      alternateLocale: ogAlternateLocale,
    },
  });
};

export default async function IndexPage() {
  return (
    <main>
      <HomeHero />
      <HomeNavigation />
    </main>
  );
}
