import { getTranslations } from "next-intl/server";

import { FooterLinks } from "./footer-links";

export const FooterView = async () => {
  const t = await getTranslations("Common");

  return (
    <footer className="bg-primary-600 mt-8 min-h-[300px] w-full px-5 pb-14 pt-12  dark:bg-[#100e1b]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 sm:flex-row sm:gap-6">
        <h1 className="text-lg font-semibold text-white">
          {t("sitename")} • {new Date().getFullYear()}
        </h1>
        <FooterLinks />
      </div>
    </footer>
  );
};
