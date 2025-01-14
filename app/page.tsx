import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const translation = await getTranslations({ namespace: "", locale: "en" });

  return {
    title: `${translation("Common.sitename")} - ${translation("About.home.title")}`,
    openGraph: {
      title: `${translation("Common.sitename")} - ${translation("About.home.title")}`,
    },
  };
}

export default async function Index() {
  return <></>;
}
