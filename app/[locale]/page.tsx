import { getTranslations } from "next-intl/server";

import { HomeBanner } from "@/components/home/home-banner";
import { HomeStack } from "@/components/home/home-stack";
import { HomeWork } from "@/components/home/home-work";

export async function generateMetadata() {
  const t = await getTranslations("Common");

  return {
    title: `${t("sitename")} - ${t("portfolio")}`,
    openGraph: {
      title: `${t("sitename")} - ${t("portfolio")}`,
    },
  };
}

export default async function IndexPage() {
  return (
    <main className="w-full px-5">
      <HomeBanner />
      <HomeStack />
      <HomeWork />
    </main>
  );
}
