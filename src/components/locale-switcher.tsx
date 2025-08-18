"use client";

import { useLocale } from "next-intl";
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
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      value={locale}
      onValueChange={value => router.replace(pathname, { locale: value })}>
      <SelectTrigger className={"w-fit gap-2"}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {Object.entries(localeNames).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            <span className={"flex gap-2 items-center"}>
              {localeFlags[key]}
              {value}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
