import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import { Nunito_Sans } from "next/font/google";
import React from "react";

import { routing } from "@/i18n/routing";

const font = Nunito_Sans({ subsets: ["latin", "latin-ext"], weight: ["400"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    other: {
      "google-site-verification": "nGRAZR-CeqSsbmWJnVs3B3zoIQWuENGj2ezVpv8vUU8",
    },
  };
}
export async function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function IndexLayout({
  header,
  footer,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={font.className}>
        <NextIntlClientProvider>
          {header}
          {children}
          {footer}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
