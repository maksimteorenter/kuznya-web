import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // /kuznya-preview is an older, parallel take on the club page. Kept in the
    // repo at Maksim's request but closed to the public: its content
    // contradicts the live offer at /forge. Also noindex'd on the page itself.
    rules: { userAgent: "*", allow: "/", disallow: "/kuznya-preview" },
    // Was kuznya.com, a domain that does not exist — crawlers could never
    // fetch the sitemap.
    sitemap: "https://www.teorentermaksim.com/sitemap.xml",
    host: "https://www.teorentermaksim.com",
  };
}
