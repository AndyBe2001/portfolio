import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLocale, getTranslations } from "next-intl/server";

import { SlideOnView } from "@/components/transition/slide-on-view";
import { Link } from "@/navigation";

import CV_DOWNLOAD_LINK from "@/data/cv-download-link.json";

export const HomeBanner = async () => {
  const t = await getTranslations("Index.home");
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  return (
    <section className="mx-auto flex h-[calc(100dvh-80px)] w-full max-w-5xl flex-col justify-between">
      <div className="mb-20 mt-12 flex w-full flex-1 flex-col justify-center">
        <SlideOnView tag="h5">{t("greeting")}</SlideOnView>
        <SlideOnView
          tag="h3"
          className="mb-9 mt-5 text-4xl text-gray-600 dark:text-gray-300">
          {t("description")}
        </SlideOnView>
        <SlideOnView className="flex items-center gap-4">
          <Link
            target="_blank"
            href={CV_DOWNLOAD_LINK[locale as keyof typeof CV_DOWNLOAD_LINK]}
            className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900 flex h-14 items-center rounded-xl px-4 text-white transition-colors">
            {[ct("download"), ct("resume").toLowerCase()].join(
              ["en", "fr"].includes(locale) ? " " : ""
            )}
            <FontAwesomeIcon icon={faDownload} className="ml-4" />
          </Link>
          <span>{ct("or")}</span>
          <Link target="_blank" href="https://github.com/AndyBe2001">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-primary-600 text-3xl"
            />
          </Link>
          <Link target="_blank" href="mailto:andybe034@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:text-primary-600 text-3xl"
            />
          </Link>
        </SlideOnView>
      </div>
      <SlideOnView className="pb-20">
        <span className="pr-2">{ct("scrolldown")}</span>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-primary-600 animate-bounce"
        />
      </SlideOnView>
    </section>
  );
};
