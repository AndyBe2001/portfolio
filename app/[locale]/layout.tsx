import { Analytics } from "@vercel/analytics/react";
import { unstable_setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { locales } from "@/configs/i18n";
import { ThemeProvider } from "@/providers/theme-provider";

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function IndexLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body className="dark:bg-dark bg-light text-sm text-gray-900 transition-colors dark:text-white sm:text-base">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
