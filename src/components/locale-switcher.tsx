"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  ChinaFlagIcon,
  FranceFlagIcon,
  TaiwanFlagIcon,
  UnitedStatesFlagIcon,
} from "@/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

const localeFlags: Record<string, React.ReactNode> = {
  en: <UnitedStatesFlagIcon />,
  fr: <FranceFlagIcon />,
  "zh-cn": <ChinaFlagIcon />,
  "zh-tw": <TaiwanFlagIcon />,
};
const localeNames = {
  en: "English",
  fr: "Français",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
};
export const LocaleSwitcher = () => {
  const translation = useTranslations("components");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={locale}
      onValueChange={value => router.replace(pathname, { locale: value })}>
      <SelectTrigger
        className={"w-fit gap-2"}
        aria-label={translation("locale-switcher")}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {Object.entries(localeNames).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            <span className={"flex items-center gap-2"}>
              {localeFlags[key]}
              {value}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
