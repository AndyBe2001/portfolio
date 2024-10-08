import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./configs/i18n";

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(en|fr|zh-cn|zh-tw)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
