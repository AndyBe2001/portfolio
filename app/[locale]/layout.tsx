import { FooterView } from "@/components/footer/footer-view";
import { HeaderView } from "@/components/header/header-view";
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
  return (
    <html lang={params.locale}>
      <body className="dark:bg-dark bg-light text-sm text-gray-900 transition-colors dark:text-white sm:text-base">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderView />
          {children}
          <FooterView />
        </ThemeProvider>
      </body>
    </html>
  );
}
