import { getTranslations } from "next-intl/server";

import { WorkFact } from "../work-fact";

export const ComputerVisionFact = async () => {
  const t = await getTranslations("Work.computervision.fact");

  return (
    <section className="mx-auto mb-16 grid max-w-6xl grid-cols-2 gap-y-4 gap-x-4 text-base sm:grid-cols-2 md:grid-cols-4 md:justify-items-center md:text-lg">
      <WorkFact
        title={t("role")}
        contents={[t("researcher"), t("developer"), t("UIUX")]}
      />
      <WorkFact
        title={t("tool")}
        contents={["Visual Studio Code", "Anaconda", "Google Colab"]}
      />
      <WorkFact title={t("duration")} contents={[t("time")]} />
      <WorkFact title={t("platform")} contents={["Windows", "MacOS"]} />
    </section>
  );
};
