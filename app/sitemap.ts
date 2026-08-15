import type { MetadataRoute } from "next";
import { publicPages } from "@/lib/routes";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return publicPages
    .filter((page) => page.path !== "/llms.txt")
    .map((page) => ({
      url: page.path === "/" ? siteUrl : `${siteUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
}
