"use client"

import { useEffect, useState } from "react"
import { FUNNEL_HREF } from "./cta"
import { ArrowRight } from "lucide-react"

/**
 * Mobile sticky CTA - appears only after the hero leaves view, full-width,
 * >=44px tap target. Hidden on desktop where the header CTA is always present.
 * Label: "Continue My Belief Score" (per the mobile-sticky spec).
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) return
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href={FUNNEL_HREF}
        data-cta-location="mobile_sticky"
        className="s-btn group min-h-[44px] w-full"
      >
        Continue My Belief Score
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={1.8}
          aria-hidden
        />
      </a>
    </div>
  )
}
