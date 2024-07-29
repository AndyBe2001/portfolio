import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";
import { CvDownloadLink } from "@/components/ui/cv-download-link";

export const AboutPresentation = async () => {
  const t = await getTranslations("About.home");
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  return (
    <section className="mx-auto mb-16 grid min-h-[calc(100dvh-80px)] w-full max-w-6xl place-items-center">
      <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] gap-x-14 gap-y-9 md:grid-cols-[auto_auto] md:grid-rows-[auto_auto]">
        <SlideOnView className="my-auto mx-auto h-fit w-full max-w-xs md:row-span-2">
          <Image
            className="!static rounded-2xl"
            src="/portrait.webp"
            alt={t("itsme")}
            layout="fill"
            objectFit="contain"
          />
        </SlideOnView>
        <SlideOnView className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <h1 className="text-4xl">{t("title")}</h1>
          <CvDownloadLink />
        </SlideOnView>
        <SlideOnView className="bg-primary-50 dark:bg-primary-950 grid h-fit grid-flow-row grid-cols-1 gap-8 rounded-2xl py-12 px-8 lg:grid-cols-[auto_auto] lg:grid-rows-[auto_auto]">
          <p className="indent-8">{t("presentation")}</p>
          <p className="indent-8">{t("experience")}</p>
          <p className="indent-8 lg:col-span-2">{t("hobby")}</p>
        </SlideOnView>
      </div>
    </section>
  );
};
