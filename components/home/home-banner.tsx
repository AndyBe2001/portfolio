import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";

import { SlideOnView } from "@/components/transition/slide-on-view";
import { CvDownloadLink } from "@/components/ui/cv-download-link";
import { Link } from "@/navigation";

export const HomeBanner = async () => {
  const t = await getTranslations("Index.home");
  const ct = await getTranslations("Common");

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
          <CvDownloadLink />
          <span>{ct("or")}</span>
          <Link target="_blank" href="https://github.com/AndyBe2001">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-primary-600 text-3xl"
            />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/andybe2001/">
            <FontAwesomeIcon
              icon={faLinkedin}
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
