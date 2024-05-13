import { getTranslations } from "next-intl/server";

import { HeaderLink } from "./header-link";

export const HeaderLinks = async () => {
  const t = await getTranslations("Common");

  return (
    <ul className="flex flex-1 sm:justify-end sm:gap-4 md:gap-6">
      <li className="hover:text-primary-600 sm:hidden">
        <HeaderLink href="/">{t("home")}</HeaderLink>
      </li>
      <li className="hover:text-primary-600">
        <HeaderLink href="/about">{t("about")}</HeaderLink>
      </li>
      <li className="hover:text-primary-600">
        <HeaderLink href="/#works">{t("works")}</HeaderLink>
      </li>
    </ul>
  );
};
