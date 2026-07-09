"use client"

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react"

/**
 * Reveal — fades + lifts its children into view on scroll, mirroring the
 * reference's editorial "reveal" timing. Honors prefers-reduced-motion via CSS.
 */
export function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: `reveal ${inView ? "is-in" : ""} ${className}`.trim(),
      style: { animationDelay: `${delay}ms` },
    },
    children
  )
}

type Segment =
  | { kind: "text"; text: string }
  | { kind: "italic"; text: string }
  | { kind: "br" }

/**
 * WordReveal — staggers each word upward. Accepts mixed text / italic / break
 * segments so a headline can carry an emphasized second line.
 */
export function WordReveal({ segments }: { segments: readonly Segment[] }) {
  let wordIndex = 0

  return (
    <span className="word-reveal">
      {segments.map((seg, i) => {
        if (seg.kind === "br") return <br key={`br-${i}`} />
        const italic = seg.kind === "italic"
        return (
          <span
            key={`seg-${i}`}
            className={italic ? "font-serif-italic" : undefined}
          >
            {seg.text.split(" ").map((word, w) => {
              const idx = wordIndex++
              return (
                <span
                  key={`w-${i}-${w}`}
                  style={{ animationDelay: `${idx * 90 + 120}ms` }}
                >
                  {word}
                  {w < seg.text.split(" ").length - 1 ? " " : ""}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
