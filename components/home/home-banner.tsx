import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLocale, getTranslations } from "next-intl/server";

import CV_DOWNLOAD_LINK from "@/data/cv-download-link.json";
import { Link } from "@/navigation";
import { HomeBannerAction } from "./home-banner-action";
import { HomeBannerDescription } from "./home-banner-description";
import { HomeBannerGreeting } from "./home-banner-greeting";
import { HomeBannerScrolldown } from "./home-banner-scrolldown";

export const HomeBanner = async () => {
  const t = await getTranslations("Index.home");
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  return (
    <section className="mx-auto flex h-[calc(100dvh-80px)] w-full max-w-5xl flex-col justify-between">
      <div className="mb-20 mt-12 flex w-full flex-1 flex-col justify-center">
        <HomeBannerGreeting>{t("greeting")}</HomeBannerGreeting>
        <HomeBannerDescription>{t("description")}</HomeBannerDescription>
        <HomeBannerAction>
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
        </HomeBannerAction>
      </div>
      <HomeBannerScrolldown text={ct("scrolldown")} />
    </section>
  );
};
