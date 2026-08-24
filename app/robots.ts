import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // Was kuznya.com, a domain that does not exist — crawlers could never
    // fetch the sitemap.
    sitemap: "https://www.teorentermaksim.com/sitemap.xml",
    host: "https://www.teorentermaksim.com",
  };
}
