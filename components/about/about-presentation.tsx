import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";
import CV_DOWNLOAD_LINK from "@/data/cv-download-link.json";
import { Link } from "@/navigation";

export const AboutPresentation = async () => {
  const t = await getTranslations("About.home");
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  return (
    <section className="mx-auto mb-16 grid min-h-[calc(100dvh-80px)] w-full max-w-7xl place-items-center">
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
          <Link
            href={CV_DOWNLOAD_LINK[locale as keyof typeof CV_DOWNLOAD_LINK]}
            target="_blank"
            className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 flex h-14 items-center rounded-xl px-4 text-white transition-colors">
            {ct("download")} {ct("resume").toLowerCase()}
            <FontAwesomeIcon icon={faDownload} className="ml-4" />
          </Link>
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
