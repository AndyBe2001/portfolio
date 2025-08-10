import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import { Nunito_Sans } from "next/font/google";
import React from "react";

import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/utils/tailwindcss";

const font = Nunito_Sans({ subsets: ["latin", "latin-ext"], weight: ["400"] });

export async function generateMetadata(): Promise<Metadata> {
  return {
    appleWebApp: { title: "Andy - Portfolio" },
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
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(font.className, "overflow-x-clip")}>
        <div className={"mx-auto max-w-7xl px-5"}>
          <NextIntlClientProvider>
            <ThemeProvider attribute="class">
              {header}
              {children}
              {footer}
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
