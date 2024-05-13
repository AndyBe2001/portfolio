import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const defaultLocale = "en";
export const locales = ["en", "fr", "zh-CN", "zh-TW"];
export const localesName = {
  en: "English",
  fr: "Français",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../languages/${locale}.json`)).default,
  };
});
