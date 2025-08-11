import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import { Noto_Sans_SC, Noto_Sans_TC, Nunito_Sans } from "next/font/google";
import React from "react";

import { SplashScreen } from "@/components/splash-screen";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/utils/tailwindcss";

const NunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-nunito",
});
const NotoSansSC = Noto_Sans_SC({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-noto-sc",
});
const NotoSansTC = Noto_Sans_TC({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-noto-tc",
});

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
      <body className={cn(NunitoSans.className, NotoSansSC, "overflow-x-clip")}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">
            <SplashScreen>
              <div className={"mx-auto max-w-7xl px-5"}>
                {header}
                {children}
                {footer}
              </div>
            </SplashScreen>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
