import dayjs from "dayjs";
import { getLocale, getTranslations } from "next-intl/server";

import { SlideOnView } from "@/components/transition/slide-on-view";

import "dayjs/locale/fr";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

interface AboutExperienceItemProps {
  title: string;
  duration: string;
  location: string;
  children: React.ReactNode;
}
const AboutExperienceItem = ({
  title,
  duration,
  location,
  children,
}: AboutExperienceItemProps) => (
  <SlideOnView className="bg-primary-50/50 dark:bg-primary-950/50 flex w-full flex-col gap-10 rounded-2xl border px-8 py-8 md:flex-row">
    <div className="w-60 shrink-0">
      <h3 className="text-xl leading-loose">{title}</h3>
      <h5>{duration}</h5>
      <h5>{location}</h5>
    </div>
    <div>{children}</div>
  </SlideOnView>
);

export const AboutExperience = async () => {
  const t = await getTranslations("About.experiences");

  const locale = await getLocale();
  dayjs.locale(locale.toLowerCase());

  return (
    <section className="mx-auto mb-16 w-full max-w-7xl">
      <SlideOnView className="mb-10 text-4xl">{t("title")}</SlideOnView>
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
