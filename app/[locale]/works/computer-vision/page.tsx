import { getTranslations } from "next-intl/server";

import { ComputerVisionArchitecture } from "@/components/works/computer-vision/computer-vision-architecture";
import { ComputerVisionBanner } from "@/components/works/computer-vision/computer-vision-banner";
import { ComputerVisionContext } from "@/components/works/computer-vision/computer-vision-context";
import { ComputerVisionDesign } from "@/components/works/computer-vision/computer-vision-design";
import { ComputerVisionFact } from "@/components/works/computer-vision/computer-vision-fact";
import { ComputerVisionFeature } from "@/components/works/computer-vision/computer-vision-feature";
import { ComputerVisionTimeline } from "@/components/works/computer-vision/computer-vision-timeline";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Common");
  const r = await getTranslations("Work.computervision");

  return {
    title: `${t("sitename")} - ${r("title")}`,
    openGraph: {
      title: `${t("sitename")} - ${r("title")}`,
    },
  };
}
type Props = {
  params: { lang: string };
};
export default async function IndexPage({ params }: Props) {
  return (
    <main className="w-full px-5">
      <ComputerVisionBanner />
      <ComputerVisionFact />
      <ComputerVisionContext />
      <ComputerVisionTimeline />
      <ComputerVisionFeature />
      <ComputerVisionArchitecture />
      <ComputerVisionDesign />
    </main>
  );
}
