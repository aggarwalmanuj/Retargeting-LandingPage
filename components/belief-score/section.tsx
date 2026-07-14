import type { ReactNode } from "react"

/**
 * Section - consistent vertical rhythm + centered max-width container shared by
 * every block, with an optional trailing hairline and a tinted surface variant.
 */
export function Section({
  id,
  children,
  tinted = false,
  hairline = true,
  className = "",
}: {
  id?: string
  children: ReactNode
  tinted?: boolean
  hairline?: boolean
  className?: string
}) {
  return (
    <section id={id} className={`relative ${className}`.trim()}>
      {tinted && (
        <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      )}
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        {children}
      </div>
      {hairline && <div className="hairline" />}
    </section>
  )
}

/** Mono "instrument" eyebrow led by a hairline tick. */
export function Eyebrow({
  children,
  center = false,
  className = "",
}: {
  children: ReactNode
  center?: boolean
  className?: string
}) {
  return (
    <p className={`eyebrow ${center ? "justify-center" : ""} ${className}`.trim()}>
      <span className="tick" aria-hidden />
      {children}
    </p>
  )
}
