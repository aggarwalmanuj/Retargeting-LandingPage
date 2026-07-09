import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Welcome back — pick up where you left off",
  description:
    "You started something and stepped away before you got your reflection. Two minutes will show you what's underneath the pattern.",
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      {/* Marine palette is locked at the body so the entire canvas — including
          any area outside the page wrapper — resolves to the deep-teal theme. */}
      <body
        data-palette="marine"
        className="min-h-screen bg-background font-sans text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  )
}
