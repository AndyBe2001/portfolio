import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { routing } from "@/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export default async function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

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
