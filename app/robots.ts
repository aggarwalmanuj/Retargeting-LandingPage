import type { MetadataRoute } from "next"

/**
 * Disallow all crawling, consistent with the page's intentional
 * noindex,nofollow (set in app/layout.tsx). This is a retargeting page served
 * to a known audience, not a page meant to be indexed or discovered.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }
}
