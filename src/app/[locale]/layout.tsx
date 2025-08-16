import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import React from "react";

import { SplashScreen } from "@/components/splash-screen";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/utils/tailwindcss";

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
      <body className={cn("max-w-dvw overflow-x-clip transition-colors")}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">
            <SplashScreen>
              {header}
              {children}
              {footer}
            </SplashScreen>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
