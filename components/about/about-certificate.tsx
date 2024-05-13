import dayjs from "dayjs";
import { getLocale, getTranslations } from "next-intl/server";

import { AboutCertificateItem } from "./about-certificate-item";
import { AboutCertificateTitle } from "./about-certificate-title";

import "dayjs/locale/fr";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export const AboutCertificate = async () => {
  const t = await getTranslations("About.certificates");

  const locale = await getLocale();
  dayjs.locale(locale.toLowerCase());

  return (
    <section className="mx-auto mb-16 w-full max-w-7xl">
      <AboutCertificateTitle>{t("title")}</AboutCertificateTitle>
      <article className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <AboutCertificateItem
          title={t("aws.title")}
          date={dayjs("7 December 2023").format("LL")}
          imageSrc="/aws.png"
          imageAlt="AWS Cloud Practiioner Badge">
          {t("aws.description")}
        </AboutCertificateItem>
        <AboutCertificateItem
          title={t("excellence.title")}
          date={dayjs("11 June 2023").format("LL")}
          imageSrc="/mingchuan.webp"
          imageAlt="Ming Chuan University Logo">
          {t("excellence.description")}
        </AboutCertificateItem>
        <AboutCertificateItem
          title={t("jury.title")}
          date={dayjs("9 December 2022").format("LL")}
          imageSrc="/mingchuan.webp"
          imageAlt="Ming Chuan University Logo">
          {t("jury.description")}
        </AboutCertificateItem>
      </article>
    </section>
  );
};
