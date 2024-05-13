import { getTranslations } from "next-intl/server";

import { WorkDesign } from "../work-design";
import { WorkTitle } from "../work-title";

export const ComputerVisionDesign = async () => {
  const t = await getTranslations("Work.computervision.design");

  return (
    <section className="mx-auto mb-16 max-w-6xl">
      <WorkTitle>{t("title")}</WorkTitle>
      <article className="flex flex-col gap-10">
        {/* Footage */}
        <WorkDesign
          title={t("footage.title")}
          imageSrc="/works/computer-vision/detection_illegal.jpg"
          imageAlt={t("footage.title")}>
          <div>
            {t("footage.description1")}
            <br />
            <br />
            {t("footage.description2")}
          </div>
        </WorkDesign>
        {/* Features */}
        <WorkDesign
          title={t("main.title")}
          imageSrc="/works/computer-vision/visitor_count.jpg"
          imageAlt={t("main.title")}>
          <div>
            {t("main.description1")}
            <br />
            <br />
            {t("main.description2")}
            <br />
            <br />
            {t("main.description3")}
          </div>
        </WorkDesign>
        {/* Analyze */}
        <WorkDesign
          title={t("statistic.title")}
          imageSrc="/works/computer-vision/statistic_analyze.png"
          imageAlt={t("statistic.title")}>
          <div>
            {t("statistic.description1")}
            <br />
            <br />
            {t("statistic.description2")}
            <br />
            <br />
            {t("statistic.description3")}
          </div>
        </WorkDesign>
        {/* Setting */}
        <WorkDesign
          title={t("setting.title")}
          imageSrc="/works/computer-vision/setting.png"
          imageAlt={t("setting.title")}>
          <div>
            {t("setting.description1")}
            <br />
            <br />
            {t("setting.description2")}
            <br />
            <br />
            {t("setting.description3")}
          </div>
        </WorkDesign>
      </article>
    </section>
  );
};
