import { Reveal } from "./motion"

/**
 * IV — The gate. The generic "gravity line" that qualifies for genuine intent.
 * Deliberately quiet and centered: it should feel like a held breath before
 * the CTA, not a sales pitch.
 */
export function GateSection() {
  return (
    <section className="relative overflow-hidden" id="the-gate">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-10 sm:py-28 lg:px-16">
        <Reveal>
          <p className="eyebrow mb-8 justify-center text-foreground/60">
            IV · The gate
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-serif-italic text-[1.7rem] leading-[1.35] text-ink sm:text-[2.4rem] sm:leading-[1.3]">
            This isn&apos;t for curiosity. It&apos;s for change.
          </p>
        </Reveal>

        <Reveal delay={260} className="mx-auto mt-8 max-w-xl">
          <span className="hairline-anim mx-auto mb-8 block h-px w-12 bg-foreground/40" />
          <p className="text-[15.5px] leading-[1.8] text-foreground/80 sm:text-[1.08rem]">
            If you&apos;re only curious, this will feel like too much.
            <br className="hidden sm:block" /> If you&apos;re ready, it will feel
            like <span className="font-serif-italic text-ink">relief.</span>
          </p>
        </Reveal>
      </div>
      <div className="hairline" />
    </section>
  )
}
