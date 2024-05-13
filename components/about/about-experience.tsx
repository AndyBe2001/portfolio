import dayjs from "dayjs";
import { getLocale, getTranslations } from "next-intl/server";

import { AboutExperienceItem } from "./about-experience-item";
import { AboutExperienceTitle } from "./about-experience-title";

import "dayjs/locale/fr";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export const AboutExperience = async () => {
  const t = await getTranslations("About.experiences");

  const locale = await getLocale();
  dayjs.locale(locale.toLowerCase());

  return (
    <section className="mx-auto mb-16 w-full max-w-7xl">
      <AboutExperienceTitle>{t("title")}</AboutExperienceTitle>
      <article className="flex flex-col gap-4">
        <AboutExperienceItem
          title={t("infotech.title")}
          duration={dayjs("1 February 2023").format("LL") + " - Today"}
          location={t("infotech.location")}>
          <h3 className="mb-4 text-xl">{t("infotech.content.core.title")}</h3>
          <p className="mb-4 text-justify text-gray-600 dark:text-gray-400">
            {t("infotech.content.core.detail")}
          </p>
          <h3 className="mb-4 text-xl">{t("infotech.content.webapp.title")}</h3>
          <p className="text-justify text-gray-600 dark:text-gray-400">
            {t("infotech.content.webapp.detail")}
          </p>
        </AboutExperienceItem>
        <AboutExperienceItem
          title={t("university.title")}
          duration={
            dayjs("3 August 2021").format("LL") +
            " - " +
            dayjs("16 January 2023").format("LL")
          }
          location={t("university.location")}>
          <p className="text-justify text-gray-600 dark:text-gray-400">
            {t("university.detail")}
          </p>
        </AboutExperienceItem>
      </article>
    </section>
  );
};
