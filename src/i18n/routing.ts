import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "zh-cn", "zh-tw"];
export const localeAliases = {
  en: ["en-US", "en-GB"],
  fr: ["fr-FR", "fr-CA"],
  "zh-cn": ["zh-CN"],
  "zh-tw": ["zh-TW"],
};
export const defaultLocale = "en";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en",
});
