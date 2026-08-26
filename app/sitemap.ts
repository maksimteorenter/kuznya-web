import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/site";

// Was pointing at kuznya.com, a domain that does not exist — every URL in the
// sitemap was therefore dead to crawlers.
const BASE_URL = "https://www.teorentermaksim.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Placeholder sections stay out until they have real content: listing empty
  // pages is a direct quality signal against the site.
  const live = NAV_ITEMS.filter((i) => !i.comingSoon).map((i) => i.href);

  const routes = Array.from(
    new Set([
      "/",
      "/book/1341",
      "/ua/book/1341",
      "/mentorship",
      ...live,
      "/legal/oferta",
      "/legal/refund",
      "/legal/privacy",
    ]),
  );

  return routes.map((path) => {
    const isBook = path === "/book/1341" || path === "/ua/book/1341";
    const isLegal = path.startsWith("/legal");
    return {
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: isLegal ? ("yearly" as const) : ("weekly" as const),
      priority: isBook ? 1 : isLegal ? 0.2 : 0.6,
    };
  });
}
