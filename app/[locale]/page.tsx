import { getTranslations } from "next-intl/server";

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
  return <main className="w-full px-5"></main>;
}
