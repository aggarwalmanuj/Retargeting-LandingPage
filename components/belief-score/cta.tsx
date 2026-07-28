"use client"

import { ArrowRight } from "lucide-react"
import { useFunnelHref } from "@/lib/use-funnel-href"
import { trackEvent, type CtaLocation } from "@/lib/analytics"

/**
 * Destination for every CTA on the page. Resume-or-begin routing is handled
 * server-side at this URL; the public label never changes.
 *
 * This bare constant is the SSR / pre-hydration fallback only. Live CTAs use
 * `useFunnelHref()`, which appends the visitor's first-touch attribution
 * (utm/click ids), their stable `ref`, and `lp=retarget` — the last of which
 * also selects the funnel's retargeting vertical (welcome-back copy).
 */
export const FUNNEL_HREF = "https://www.aimerge.live/challenge/audience"

export const CTA_LABEL = "Complete Your Free Belief Score"

/**
 * PrimaryCta - the one action on the page. `location` is surfaced as a
 * data-cta-location attribute so analytics can attribute clicks per the
 * spec's tracking table (hero, recognition, score_definition, ...).
 */
export function PrimaryCta({
  location,
  className = "",
  full = false,
  label = CTA_LABEL,
}: {
  location: CtaLocation
  className?: string
  full?: boolean
  label?: string
}) {
  const href = useFunnelHref()
  return (
    <a
      href={href}
      // Fire-and-forget so it never delays the navigation that follows.
      onClick={() => trackEvent("cta_click", { location })}
      data-cta-location={location}
      className={`s-btn group ${full ? "w-full" : ""} ${className}`.trim()}
    >
      {label}
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.8}
        aria-hidden
      />
    </a>
  )
}

/** The recurring reassurance line shown under most CTAs. */
export function TrustLine({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[0.82rem] leading-relaxed text-foreground/65 ${className}`.trim()}
    >
      Free · Personalized · No credit card · Reflective, not diagnostic
    </p>
  )
}
