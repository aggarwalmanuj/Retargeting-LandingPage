/** @type {import('next').NextConfig} */

// This page is statically prerendered (SSG), which rules out a per-request CSP
// nonce - Next only stamps nonces during dynamic render. Forcing the page
// dynamic just to noncE the CSP would discard the static-delivery win this work
// is about. So script-src uses 'unsafe-inline' to permit Next's own inline
// hydration bootstrap. The residual XSS surface is minimal here: the page takes
// no user input, loads zero third-party scripts, and is noindex. Everything
// else stays locked to 'self'. (The B2B deploy uses a nonce because it renders
// dynamically and loads GA/Meta/Calendly - not the case on this page.)
// HSTS matches the B2B aimerge.live deploy.
//
// Dev needs two relaxations production must NOT have: 'unsafe-eval' (React
// Refresh / HMR compiles in the browser) and ws: (the HMR socket). Without
// them the dev bundle can't execute and the page renders blank. Both are
// gated to development only.
const isDev = process.env.NODE_ENV !== "production"

// Analytics hosts. PostHog is deliberately NOT listed: all of its traffic
// (events + assets) is reverse-proxied through /ingest (rewrites below), so
// it is same-origin and covered by 'self' - which also defeats ad blockers
// that drop *.posthog.com by hostname. The Meta Pixel loads fbevents.js from
// connect.facebook.net and beacons to www.facebook.com, so those two need
// explicit entries or the pixel silently fails with a CSP violation.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://connect.facebook.net${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.facebook.com",
  "media-src 'self'",
  "font-src 'self'",
  `connect-src 'self' https://www.facebook.com https://connect.facebook.net${isDev ? " ws:" : ""}`,
  // PostHog's session recorder spawns a Web Worker from a blob URL even when
  // the script itself is same-origin.
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
]

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },
  // Same-origin reverse proxy for PostHog - keeps analytics on 'self' in the
  // CSP and survives ad blockers that filter by hostname.
  async rewrites() {
    return [
      // More specific rule first.
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ]
  },
}

export default nextConfig
