"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { href: "#whats-waiting", label: "What's waiting" },
  { href: "#the-gate", label: "The Gate" },
  { href: "#begin", label: "Begin" },
]

const CTA_HREF = "#begin"

export function MinimalHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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

  useEffect(() => {
    if (mobileOpen) {
      setHidden(false)
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hidden ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
        } ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6 sm:h-20 sm:gap-4 sm:px-12 lg:px-24">
          <a
            href="#hero"
            aria-label="Home"
            className="group inline-flex shrink-0 items-center"
          >
            <span className="brand-mark brand-mark-sm sm:!w-[128px]" aria-hidden />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group/nav relative text-[0.78rem] uppercase tracking-[0.22em] text-foreground/80 transition-colors duration-300 hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ink transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a href={CTA_HREF} className="s-btn !hidden text-[0.7rem] lg:!inline-flex">
              Pick up where I left off
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen ? "true" : "false"}
              onClick={() => setMobileOpen((o) => !o)}
              className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-foreground/30 text-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] hover:border-ink hover:bg-foreground/5 hover:text-ink active:scale-[0.96] lg:hidden"
            >
              <span className="sr-only">
                {mobileOpen ? "Close menu" : "Open menu"}
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="h-4 w-4" strokeWidth={1.4} />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X className="h-4 w-4" strokeWidth={1.4} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          data-palette="marine"
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="absolute inset-0 bg-ink/35 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-0 flex max-h-[100dvh] flex-col border-b border-border bg-background"
            style={{ paddingTop: "64px" }}
          >
            <nav
              className="flex flex-col gap-1 overflow-y-auto px-5 py-8 sm:px-8"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between rounded-md px-4 py-4 font-serif text-[26px] leading-tight text-ink transition-colors duration-300 hover:bg-secondary/60"
                >
                  <span className="relative inline-block">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-ink/70 transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-foreground/55 transition-all duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    strokeWidth={1.6}
                  />
                </a>
              ))}
            </nav>
            <div className="border-t border-border px-5 pb-7 pt-5 sm:px-8">
              <a
                href={CTA_HREF}
                onClick={() => setMobileOpen(false)}
                className="s-btn w-full justify-center"
              >
                Pick up where I left off
              </a>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-foreground/55">
                About two minutes · No commitment
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
