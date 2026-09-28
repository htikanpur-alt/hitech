import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site",
      lastModified: "2026-09-28",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site/hitech-services.jpeg",
      ],
    },
  ];
}
