const legalLinks = [
  "Privacy Policy",
  "Terms of Use",
  "AI and Data Disclosure",
  "Professional Services Disclaimer",
  "Medical Disclaimer",
  "Accessibility",
  "Contact",
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
          {legalLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.9rem] text-foreground/70 transition-colors duration-300 hover:text-ink"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hairline mt-10" />

        <div className="mt-6 space-y-2 text-[0.82rem] leading-relaxed text-foreground/55">
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
