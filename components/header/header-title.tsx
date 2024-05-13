import { getTranslations } from "next-intl/server";

import { Link } from "@/navigation";

export const HeaderTitle = async () => {
  const t = await getTranslations("Common");

  return (
    <Link href="/" className="hidden sm:block">
      {t("sitename")}
    </Link>
  );
};
