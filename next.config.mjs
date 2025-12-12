import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: "./" },
};

export default withNextIntl(nextConfig);
