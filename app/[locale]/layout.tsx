import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

import { locales } from "@/configs/i18n";
import { Header } from "@/views/header";

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function IndexLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  setRequestLocale(params.locale);

  return (
    <html lang={params.locale} className="grid place-items-center">
      <head>
        <meta
          name="google-site-verification"
          content="nGRAZR-CeqSsbmWJnVs3B3zoIQWuENGj2ezVpv8vUU8"
        />
      </head>
      <body className="px-4 w-full max-w-6xl">
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
