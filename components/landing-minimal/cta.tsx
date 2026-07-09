import { ArrowRight } from "lucide-react"

/** Destination: the diagnostic funnel with the Curious / Frustrated / Ready gate. */
export const FUNNEL_HREF = "/diagnostic"

/**
 * PrimaryCta - the retargeting call to action. Same button + honest sub-line
 * everywhere it appears, so the promise stays consistent down the page.
 */
export function PrimaryCta({
  className = "",
  showSubline = true,
}: {
  className?: string
  showSubline?: boolean
}) {
  return (
    <div className={className}>
      <a href={FUNNEL_HREF} className="s-btn group">
        Pick up where I left off
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.8}
          aria-hidden
        />
      </a>
      {showSubline && (
        <p className="mt-4 max-w-md text-[0.82rem] leading-relaxed text-foreground/65">
          Takes about two minutes. Answer honestly - the more truthful you are,
          the more accurate your reflection.
        </p>
      )}
    </div>
  )
}
