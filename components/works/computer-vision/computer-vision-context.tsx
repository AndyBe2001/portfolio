import { getTranslations } from "next-intl/server";

import { WorkContext } from "../work-context";
import { WorkTitle } from "../work-title";

export const ComputerVisionContext = async () => {
  const t = await getTranslations("Work.computervision.context");

  return (
    <section className="mx-auto mb-16 max-w-6xl">
      <WorkTitle>{t("title")}</WorkTitle>
      <article className="flex flex-col gap-8">
        <WorkContext className="">
          <h4 className="mb-5 text-4xl">{t("pandemic.title")}</h4>
          <p>{t("pandemic.description")}</p>
        </WorkContext>
        <WorkContext className="">
          <h4 className="mb-5 text-4xl">{t("restriction.title")}</h4>
          <p>{t("restriction.description")}</p>
        </WorkContext>
        <WorkContext className="">
          <h4 className="mb-5 text-4xl">{t("goal.title")}</h4>
          <p className="">{t("goal.description")}</p>
        </WorkContext>
      </article>
    </section>
  );
};
