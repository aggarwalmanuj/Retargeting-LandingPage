import type { Metadata } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { siteUrl, siteName, pageTitle, pageDescription } from "./lib/site"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // match the reference: optical sizing + SOFT axis for the softer editorial cut
  axes: ["opsz", "SOFT"],
})

// the "instrument readout" layer - labels, eyebrows, field names
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  // Absolute-URL base for the social-share metadata below. This does NOT enable
  // indexing - the page stays noindex/nofollow (see robots + app/robots.ts). It
  // only lets shared links (paid social, email, SMS, DMs) render a preview card.
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName,
    title: pageTitle,
    description: pageDescription,
    url: siteUrl,
    // og:image is auto-injected from app/opengraph-image.tsx (1200x630).
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    // twitter:image is auto-injected from app/twitter-image.tsx.
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      {/* Marine palette is locked at the body so the entire canvas - including
          any area outside the page wrapper - resolves to the deep-teal theme. */}
      <body
        data-palette="marine"
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        // browser extensions (e.g. ColorZilla) inject attributes onto <body>
        // before hydration; this stops the resulting dev-only warning.
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
