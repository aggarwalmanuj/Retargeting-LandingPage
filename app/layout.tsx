import type { Metadata } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import "./globals.css"

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
  title: "Your Belief Score Is Waiting",
  description:
    "Return to the pattern that caught your attention and see what it may have taught you to believe. Complete your free, personalized Belief Score.",
  robots: { index: false, follow: false },
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
