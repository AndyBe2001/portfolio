import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./configs/i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    localePrefix: "as-needed",
  });
