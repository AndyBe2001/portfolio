import dayjs from "dayjs";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";

import "dayjs/locale/fr";
import "dayjs/locale/zh-cn";
import "dayjs/locale/zh-tw";

import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

interface AboutCertificateItemProps {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  children: React.ReactNode;
}
const AboutCertificateItem = async ({
  title,
  date,
  imageSrc,
  imageAlt,
  link,
  children,
}: AboutCertificateItemProps) => {
  const t = await getTranslations("About.certificates");

  return (
    <SlideOnView className="bg-primary-50/50 dark:bg-primary-950/50 flex w-full flex-col items-center gap-4 rounded-2xl px-8 py-4">
      <div className="grid h-24 place-items-center">
        <Image
          src={imageSrc}
          width="0"
          height="0"
          alt={imageAlt}
          className="mb-3 rounded-xl"
          sizes="100vw"
          style={{
            display: "block",
            width: "auto",
            height: "auto",
            maxHeight: "96px",
          }}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl leading-normal">{title}</h3>
        <h5 className="text-gray-600 dark:text-gray-300">{date}</h5>
      </div>
      <p className="mt-3 text-justify">{children}</p>
      {link && (
        <a href={link} target="_blank" className="underline underline-offset-2">
          {t("view")}
        </a>
      )}
    </SlideOnView>
  );
};

export const AboutCertificate = async () => {
  const t = await getTranslations("About.certificates");

  const locale = await getLocale();
  dayjs.locale(locale.toLowerCase());

  return (
    <section className="mx-auto mb-16 w-full max-w-6xl">
      <SlideOnView className="mb-10 text-4xl">{t("title")}</SlideOnView>
      <article className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <AboutCertificateItem
          title={t("aws.title")}
          date={dayjs("7 December 2023").format("LL")}
          link="https://qj1affpgixr8zsed.public.blob.vercel-storage.com/AWS%20Certified%20Cloud%20Practitioner%20Certificate.pdf"
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
