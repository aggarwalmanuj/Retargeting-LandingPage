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

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
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
}

export default nextConfig
