import type { MetadataRoute } from "next";

const siteUrl = "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
