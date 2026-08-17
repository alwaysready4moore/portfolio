import type { MetadataRoute } from "next";

const baseUrl = "https://www.alwaysready4moore.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/font-lab"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/font-lab"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
