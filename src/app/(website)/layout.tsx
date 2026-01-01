import { type Metadata } from "next";

import "./global.css";

import { merge } from "lodash";
import { getTranslations } from "next-intl/server";
import React from "react";

import { DEFAULT_METADATA } from "@/constants/metadata";
import { defaultLocale, localeAliases } from "@/i18n/routing";

export const generateMetadata = async (): Promise<Metadata> => {
  const translation = await getTranslations("pages.home.metadata");
  const [ogLocale, ...ogAlternateLocale] =
    localeAliases[defaultLocale as keyof typeof localeAliases];

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
