/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./configs/i18n.ts");

const nextConfig = {};

export default withNextIntl(nextConfig);
