import { getTranslations } from "next-intl/server";

import { WorkTimeline } from "../work-timeline";
import { WorkTitle } from "../work-title";

export const ComputerVisionTimeline = async () => {
  const t = await getTranslations("Work.computervision.timeline");

  return (
    <section className="mx-auto mb-16 max-w-6xl">
      <WorkTitle>{t("title")}</WorkTitle>
      <WorkTimeline
        className="mx-auto grid w-fit grid-cols-[auto_auto] grid-rows-[auto_auto_auto] gap-x-8 sm:w-full sm:grid-flow-col sm:grid-cols-4 sm:grid-rows-[auto_auto] sm:gap-x-0 sm:gap-y-4"
        items={[
          {
            title: t("research.title"),
            duration: t("research.duration"),
            size: 2,
            contents: [
              t("research.audit"),
              t("research.technology"),
              t("research.stack"),
              t("research.intake"),
            ],
          },
          {
            title: t("design.title"),
            duration: t("design.duration"),
            contents: [t("design.ui"), t("design.feature")],
          },
          {
            title: t("development.title"),
            duration: t("development.duration"),
            contents: [t("development.application")],
            end: true,
          },
        ]}
      />
    </section>
  );
};
