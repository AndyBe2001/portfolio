import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const defaultLocale = "en";
export const locales = ["en", "fr", "zh-cn", "zh-tw"];
export const localesName = {
  en: "English",
  fr: "Français",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文",
};

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../languages/${locale}.json`)).default,
  };
});
