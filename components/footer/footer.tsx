import { getTranslations } from "next-intl/server";

import { Link } from "@/navigation";

export const Footer = async () => {
  const t = await getTranslations("Common");

  return (
    <footer className="bg-primary-600 mt-8 min-h-[300px] w-full px-5 pb-14 pt-12  dark:bg-[#100e1b]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 sm:flex-row sm:gap-6">
        <h1 className="text-lg font-semibold text-white">
          {t("sitename")} • {new Date().getFullYear()}
        </h1>
        <ul className="-ml-1 flex flex-1 gap-0 text-white min-[400px]:gap-2 sm:ml-0 sm:justify-end sm:gap-4 md:gap-6">
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
      </div>
    </footer>
  );
};
