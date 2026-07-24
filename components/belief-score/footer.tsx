// aimerge.live only publishes /privacy and /terms; the remaining legal
// items live inside the Terms page's disclaimer language, so they point
// there until dedicated pages exist. Contact is a real mailto.
const legalLinks = [
  { label: "Privacy Policy", href: "https://www.aimerge.live/privacy" },
  { label: "Terms of Use", href: "https://www.aimerge.live/terms" },
  { label: "AI and Data Disclosure", href: "https://www.aimerge.live/terms" },
  {
    label: "Professional Services Disclaimer",
    href: "https://www.aimerge.live/terms",
  },
  { label: "Medical Disclaimer", href: "https://www.aimerge.live/terms" },
  { label: "Accessibility", href: "https://www.aimerge.live/terms" },
  { label: "Contact", href: "mailto:feedback@tetranoodle.com" },
]

/**
 * BLOCK 14 - Footer & Legal. Placeholder links to be replaced with approved
 * live URLs before launch.
 */
export function BeliefFooter() {
  return (
    <footer id="footer" className="relative pb-24 sm:pb-0">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <span className="brand-mark !w-[132px]" aria-hidden />
        <span className="sr-only">AI Merge</span>
        <p className="mt-4 font-serif text-[1.2rem] text-ink">
          See the pattern. Decide what fits. Build new evidence.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5" aria-label="Legal">
          {legalLinks.map((l) => {
            const external = l.href.startsWith("http")
            return (
              <a
                key={l.label}
                href={l.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[0.9rem] text-foreground/70 transition-colors duration-300 hover:text-ink"
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        <div className="hairline mt-10" />

        <div className="mt-6 space-y-2 text-[0.82rem] leading-relaxed text-foreground/70">
          <p>© TetraNoodle Technologies. All rights reserved.</p>
          <p>
            AI Merge is proprietary intellectual property created by Manuj
            Aggarwal and published in the Mensa Research Journal.
          </p>
        </div>
      </div>
    </footer>
  )
}
