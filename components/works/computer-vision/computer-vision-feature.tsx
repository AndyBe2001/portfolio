import {
  faCalculator,
  faChartSimple,
  faFileExport,
  faLocationCrosshairs,
  faRecordVinyl,
} from "@fortawesome/free-solid-svg-icons";
import { getTranslations } from "next-intl/server";

import { WorkFeature } from "../work-feature";
import { WorkTitle } from "../work-title";

export const ComputerVisionFeature = async () => {
  const t = await getTranslations("Work.computervision.feature");

  return (
    <section className="mx-auto mb-16 max-w-6xl">
      <WorkTitle>{t("title")}</WorkTitle>
      <article className="mx-auto grid grid-flow-row grid-cols-1 place-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <WorkFeature icon={faRecordVinyl}>{t("footage")}</WorkFeature>
        <WorkFeature icon={faCalculator}>{t("count")}</WorkFeature>
        <WorkFeature icon={faLocationCrosshairs}>{t("detection")}</WorkFeature>
        <WorkFeature icon={faChartSimple}>{t("analyze")}</WorkFeature>
        <WorkFeature icon={faFileExport}>{t("export")}</WorkFeature>
      </article>
    </section>
  );
};
