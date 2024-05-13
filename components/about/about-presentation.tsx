import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLocale, getTranslations } from "next-intl/server";

import CV_DOWNLOAD_LINK from "@/data/cv-download-link.json";
import { Link } from "@/navigation";
import { AboutPresentationDescription } from "./about-presentation-description";
import { AboutPresentationPicture } from "./about-presentation-picture";
import { AboutPresentationTitle } from "./about-presentation-title";

export const AboutPresentation = async () => {
  const t = await getTranslations("About.home");
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  return (
    <section className="mx-auto mb-16 grid min-h-[calc(100dvh-80px)] w-full max-w-7xl place-items-center">
      <div className="grid w-full grid-cols-1 grid-rows-[auto_auto_auto] gap-x-14 gap-y-9 md:grid-cols-[auto_auto] md:grid-rows-[auto_auto]">
        <AboutPresentationPicture imageAlt={t("itsme")} />
        <AboutPresentationTitle>
          <h1 className="text-4xl">{t("title")}</h1>
          <Link
            href={CV_DOWNLOAD_LINK[locale as keyof typeof CV_DOWNLOAD_LINK]}
            target="_blank"
            className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 flex h-14 items-center rounded-xl px-4 text-white transition-colors">
            {ct("download")} {ct("resume").toLowerCase()}
            <FontAwesomeIcon icon={faDownload} className="ml-4" />
          </Link>
        </AboutPresentationTitle>
        <AboutPresentationDescription>
          <p className="indent-8">{t("presentation")}</p>
          <p className="indent-8">{t("experience")}</p>
          <p className="indent-8 lg:col-span-2">{t("hobby")}</p>
        </AboutPresentationDescription>
      </div>
    </section>
  );
};
