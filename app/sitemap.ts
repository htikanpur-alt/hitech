import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://hitech-industries-kanpur.best-bay-3257.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-09-28",
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/hitech-services.jpeg`,
      ],
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: "2026-09-28",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...["privacy-policy", "terms-and-conditions", "disclaimer", "cancellation-and-refund"].map((page) => ({
      url: `${siteUrl}/${page}`,
      lastModified: "2026-09-28",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
