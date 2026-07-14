import { MAP_FIELDS } from "./data"

/**
 * MockupFrame - a soft "app window" chrome used to present product visuals as
 * clearly-styled placeholders. Not a screenshot; a tasteful stand-in until the
 * approved result interface is dropped in.
 */
export function MockupFrame({
  label,
  children,
}: {
  label?: string
  children: React.ReactNode
}) {
  return (
    <div className="signal-halo relative">
      <div className="overflow-hidden rounded-xl border border-border bg-card/70 shadow-[0_24px_60px_-30px_rgba(5,18,26,0.7)] backdrop-blur-sm">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          {label && (
            <span className="ml-2 min-w-0 truncate font-mono text-[0.68rem] uppercase tracking-[0.12em] text-foreground/45">
              {label}
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

/**
 * ResultMockup - an illustrative rendering of a completed Pattern-to-Belief Map
 * result. Makes the product tangible. Clearly a sample, not a real user result.
 */
export function ResultMockup() {
  const samples = [
    "The action is clear, but I move back into preparation or delay.",
    "I cannot trust myself without pressure.",
    "uncertainty → familiar response → relief → stronger belief",
    "The first urge to add more instead of acting.",
    "Complete one bounded action before urgency takes over.",
  ]

  return (
    <MockupFrame label="AI Merge · Pattern-to-Belief Map">
      <div className="space-y-px bg-border/60">
        <div className="flex items-center justify-between gap-3 bg-card px-5 py-4">
          <div>
            <p className="font-serif text-[1.05rem] text-ink">Your result</p>
            <p className="text-[0.72rem] uppercase tracking-[0.14em] text-foreground/45">
              Built from your own words
            </p>
          </div>
          <span className="rounded-full border border-signal/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-signal">
            Sample
          </span>
        </div>

        {MAP_FIELDS.map((f, i) => (
          <div key={f.n} className="flex gap-4 bg-card px-5 py-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-signal/40 font-serif text-[0.85rem] text-signal">
              {f.n}
            </span>
            <div className="min-w-0">
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-foreground/50">
                {f.title}
              </p>
              <p className="mt-1 text-[0.92rem] leading-snug text-foreground/85">
                {samples[i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MockupFrame>
  )
}
