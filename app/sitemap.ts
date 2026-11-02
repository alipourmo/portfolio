import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const ROUTES = [
  { path: "", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/research", priority: 0.8 },
  { path: "/about", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return ROUTES.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
