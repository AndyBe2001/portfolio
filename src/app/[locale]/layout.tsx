import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import React from "react";

import { SplashScreen } from "@/components/splash-screen";
import { routing } from "@/i18n/routing";
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

  const jsonLd = {
    // "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Andy Tsai",
        url: "https://www.andytsai.com",
        image:
          "https://www.andytsai.com/_next/image?url=%2Fabout%2Fportrait.webp&w=96&q=75",
        sameAs: [
          "https://www.facebook.com/andy.beraharison",
          "https://www.linkedin.com/in/andybe2001",
          "https://github.com/AndyBe2001",
        ],
        jobTitle: "Full-Stack Developer",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+261-380967979",
          contactType: "customer service",
          areaServed: "Worldwide",
        },
        description:
          "A passionate developer with projects spanning web development, cloud architectures, and creative tech solutions.",
      },
    ],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("max-w-dvw overflow-x-clip transition-colors")}>
        <Script
          id={"jsonLd"}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
