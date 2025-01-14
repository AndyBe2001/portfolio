import { getTranslations } from "next-intl/server";

import { AboutCertificate } from "@/components/about/about-certificate";
import { AboutExperience } from "@/components/about/about-experience";
import { AboutPresentation } from "@/components/about/about-presentation";

export async function generateMetadata() {
  const t = await getTranslations("Common");
  const r = await getTranslations("About.home");

  return {
    title: `${t("sitename")} - ${r("title")}`,
    openGraph: {
      title: `${t("sitename")} - ${r("title")}`,
    },
  };
}

export default async function IndexPage() {
  return (
    <main className="w-full px-5">
      <AboutPresentation />
      <AboutExperience />
      <AboutCertificate />
    </main>
  );
}
