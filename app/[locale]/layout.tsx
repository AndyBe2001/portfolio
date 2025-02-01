import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Nunito_Sans } from "next/font/google";

import { LOCALES } from "@/constants/i18n";
import { cn } from "@/utils/tailwindcss";
import { Footer } from "@/views/footer";
import { Header } from "@/views/header";

const font = Nunito_Sans({ subsets: ["latin", "latin-ext"], weight: ["400"] });

export async function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
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
      <body className={cn(font.className, "")}>
        <NextIntlClientProvider>
          <Header />
          <main className="px-4 w-full max-w-7xl">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
