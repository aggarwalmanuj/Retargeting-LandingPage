import { ArrowUpRight } from "lucide-react"

const linkGroups = [
  {
    heading: "The diagnostic",
    links: [
      { label: "What's waiting", href: "#whats-waiting" },
      { label: "The gate", href: "#the-gate" },
      { label: "Begin", href: "#begin" },
    ],
  },
  {
    heading: "Quiet pages",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Contact", href: "#contact" },
    ],
  },
]

export function MinimalFooter() {
  return (
    <footer className="relative" id="footer">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-20 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="lg:col-span-5">
            <span className="brand-mark !w-[140px]" aria-hidden />
            <span className="sr-only">Home</span>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/70">
              A precise reflection of what is quietly running you — so the next
              decision can come from somewhere calmer.
            </p>
          </div>

          {/* link groups */}
          {linkGroups.map((group) => (
            <div key={group.heading} className="lg:col-span-3">
              <p className="eyebrow mb-4 text-foreground/55">{group.heading}</p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-[15px] text-foreground/75 transition-colors duration-300 hover:text-ink"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-70"
                        strokeWidth={1.6}
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="hairline mt-14 sm:mt-16" />

        {/* privacy line + copyright */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-[13px] leading-relaxed text-foreground/60">
            Your answers are private and used only to generate your personalized
            reflection. We do not sell your data.
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/45">
            Read at your own pace
          </p>
        </div>
      </div>
    </footer>
  )
}
