import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/site";

const BASE_URL = "https://kuznya.com"; // TODO: confirm final domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set(["/", "/book/1341", ...NAV_ITEMS.map((i) => i.href)]);

  return Array.from(routes).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/book/1341" ? 1 : 0.6,
  }));
}
