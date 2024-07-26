import { getTranslations } from "next-intl/server";

import { FadeInOnView } from "@/components/transition/fade-in-on-view";
import { Link } from "@/navigation";
import { HeaderLanguage } from "./header-language";
import { HeaderTheme } from "./header-theme";

export const Header = async () => {
  const t = await getTranslations("Common");

  return (
    <header className="dark:bg-dark bg-light sticky left-0 top-0 z-10 h-20 w-full px-5 transition-colors">
      <FadeInOnView
        tag="nav"
        className="mx-auto flex h-full w-full max-w-6xl items-center">
        {/* Title */}
        <Link href="/" className="hidden sm:block text-sm">
          <h4 className="text-lg leading-none font-semibold dark:text-primary-400">
            {t("sitename")}
          </h4>
          {t("aka")}
        </Link>
        {/* Links */}
        <ul className="flex flex-1 sm:justify-end sm:gap-4 md:gap-6">
          <li className="hover:text-primary-600 sm:hidden">
            <Link
              className="after:bg-primary-600 relative whitespace-nowrap px-1 after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:translate-y-1 after:scale-x-0 after:opacity-0 after:transition-all  after:content-[''] after:hover:scale-x-100 after:hover:opacity-100"
              href="/">
              {t("home")}
            </Link>
          </li>
          <li className="hover:text-primary-600">
            <Link
              className="after:bg-primary-600 relative whitespace-nowrap px-1 after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:translate-y-1 after:scale-x-0 after:opacity-0 after:transition-all  after:content-[''] after:hover:scale-x-100 after:hover:opacity-100"
              href="/about">
              {t("about")}
            </Link>
          </li>
          <li className="hover:text-primary-600">
            <Link
              className="after:bg-primary-600 relative whitespace-nowrap px-1 after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:translate-y-1 after:scale-x-0 after:opacity-0 after:transition-all  after:content-[''] after:hover:scale-x-100 after:hover:opacity-100"
              href="/#works">
              {t("works")}
            </Link>
          </li>
        </ul>
        {/* Separator */}
        <div className="mx-8 h-2/5 w-[0.5px] bg-gray-300 dark:bg-white"></div>
        {/* Options */}
        <div className="flex items-center gap-4 sm:gap-6">
          <HeaderTheme />
          <HeaderLanguage />
        </div>
      </FadeInOnView>
    </header>
  );
};
