"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { FUNNEL_HREF } from "./cta"

/**
 * Minimal header - brand wordmark + the single CTA. Deliberately low-height so
 * it doesn't eat above-the-fold space (per the hero "do not add" notes).
 */
export function BeliefHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (y < 64) setHidden(false)
      else if (y > lastY.current + 6) setHidden(true)
      else if (y < lastY.current - 6) setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
      } ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-6 sm:h-20 sm:px-10 lg:px-12">
        <a
          href="#top"
          aria-label="AI Merge home"
          className="group inline-flex shrink-0 items-center"
        >
          <span className="brand-mark brand-mark-sm sm:!w-[128px]" aria-hidden />
        </a>

        {/* always visible - short label on mobile, full label from sm up */}
        <a
          href={FUNNEL_HREF}
          data-cta-location="header"
          className="s-btn group shrink-0 gap-2 px-4 text-[0.6rem] sm:px-6 sm:text-[0.68rem]"
        >
          <span className="sm:hidden">Free Score</span>
          <span className="hidden sm:inline">Complete Your Free Score</span>
          <ArrowRight
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
            strokeWidth={1.8}
            aria-hidden
          />
        </a>
      </div>
    </header>
  )
}
