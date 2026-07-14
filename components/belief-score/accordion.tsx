"use client"

import { useState, type ReactNode } from "react"
import { Plus } from "lucide-react"

export type FaqItem = { q: string; a: ReactNode }

/**
 * Accordion - FAQ list. One item open at a time (matches the mobile spec), all
 * closed by default. Works identically on desktop.
 */
export function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-[1.15rem] leading-snug text-ink sm:text-[1.3rem]">
                {item.q}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-foreground/50 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? "rotate-45" : ""
                }`}
                strokeWidth={1.6}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 pb-6 pr-8 text-[1rem] leading-[1.65] text-foreground/80">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
