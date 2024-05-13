import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { HomeBanner } from "@/components/home/home-banner";
import { HomeStack } from "@/components/home/home-stack";
import { HomeWork } from "@/components/home/home-work";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Common");

  return {
    title: `${t("sitename")} - ${t("portfolio")}`,
    openGraph: {
      title: `${t("sitename")} - ${t("portfolio")}`,
    },
  };
}
type Props = {
  params: { locale: string };
};
export default async function IndexPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="w-full px-5">
      <HomeBanner />
      <HomeStack />
      <HomeWork />
    </main>
  );
}
