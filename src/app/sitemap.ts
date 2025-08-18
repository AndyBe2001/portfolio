import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://www.andytsai.com";
  const routes: MetadataRoute.Sitemap = [
    { url: "", priority: 1, changeFrequency: "yearly" },
    { url: "/about", changeFrequency: "yearly" },
    { url: "/experience", changeFrequency: "yearly" },
    { url: "/showcase", changeFrequency: "yearly" },
    { url: "/showcase/deep-learning", changeFrequency: "yearly" },
  ];

  return routes.map(route => ({
    url: `${domain}${route.url}`,
    lastModified: new Date(),
    priority: route.priority ?? 0.5,
    changeFrequency: route.changeFrequency ?? "yearly",
    alternates: {
      languages: {
        en: `${domain}/en${route.url}`,
        fr: `${domain}/fr${route.url}`,
        "zh-CN": `${domain}/zh-cn${route.url}`,
        "zh-TW": `${domain}/zh-tw${route.url}`,
      },
    },
  }));
}
