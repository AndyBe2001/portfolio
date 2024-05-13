import { getTranslations } from "next-intl/server";

import { Link } from "@/navigation";

export const HomeWorkDetail = async ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  const t = await getTranslations("Index.works");

  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:max-w-2xl lg:flex-col lg:items-start">
      <div>
        <h3 className="mb-2 text-center text-xl sm:text-left">{title}</h3>
        <p className="text-center text-gray-600 dark:text-gray-400 sm:text-left">
          {description}
        </p>
      </div>
      <Link href={link}>
        <button className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900 h-10 rounded-xl px-4 text-white transition-colors md:h-14">
          {t("viewproject")}
        </button>
      </Link>
    </div>
  );
};
