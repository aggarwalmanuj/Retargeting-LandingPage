/**
 * Centralized, deployment-agnostic site configuration.
 *
 * `siteUrl` is the canonical origin the current deploy is served from. It is the
 * single source of truth for every ABSOLUTE URL the app emits (metadataBase,
 * Open Graph / Twitter `og:image` + `og:url`, and any future canonical / sitemap
 * / structured-data URLs) - crawlers and chat clients require absolute URLs when
 * they render a link preview.
 *
 * It is NOT hardcoded to any one host so the same codebase ships to production,
 * staging, preview, and customer-specific deployments without code changes.
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL      - explicit per-deploy override (always wins)
 *   2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL - auto-provided host, if any
 *   3. http://localhost:3000     - local-dev fallback
 *
 * This does NOT change the page's intentional noindex/nofollow posture (see
 * app/layout.tsx and app/robots.ts); it only lets shared links render a preview
 * card and keeps absolute URLs correct on whatever host serves the page.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit

  // Vercel provides these without an https:// scheme; add it. The stable
  // production alias is preferred over the per-deployment preview host.
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL
  if (vercelHost) return `https://${vercelHost}`

  return "http://localhost:3000"
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, "")

export const siteName = "Your Belief Score"

/**
 * Canonical page copy. Single source of truth so the <title>, the Open Graph /
 * Twitter titles, and the share-image `alt` text can never drift apart - change
 * it here and every surface updates together.
 */
export const pageTitle = "Your Belief Score Is Waiting"
export const pageDescription =
  "Return to the pattern that caught your attention and see what it may have taught you to believe. Complete your free, personalized Belief Score."
