import { getTranslations } from "next-intl/server";

import { FooterLink } from "./footer-link";

export const FooterLinks = async () => {
  const t = await getTranslations("Common");

  return (
    <ul className="-ml-1 flex flex-1 gap-0 text-white min-[400px]:gap-2 sm:ml-0 sm:justify-end sm:gap-4 md:gap-6">
      <li className="hover:text-primary-600">
        <FooterLink href="/about">{t("about")}</FooterLink>
      </li>
      <li className="hover:text-primary-600">
        <FooterLink href="/works">{t("works")}</FooterLink>
      </li>
    </ul>
  );
};
