"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

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
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {Object.entries(localeNames).map(([key, value]) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
