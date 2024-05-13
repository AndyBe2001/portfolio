import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { AboutCertificate } from "@/components/about/about-certificate";
import { AboutExperience } from "@/components/about/about-experience";
import { AboutPresentation } from "@/components/about/about-presentation";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Common");
  const r = await getTranslations("About.home");

  return {
    title: `${t("sitename")} - ${r("title")}`,
    openGraph: {
      title: `${t("sitename")} - ${r("title")}`,
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
      <AboutPresentation />
      <AboutExperience />
      <AboutCertificate />
    </main>
  );
}
