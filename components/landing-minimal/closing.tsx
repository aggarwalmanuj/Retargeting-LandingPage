import { Reveal, WordReveal } from "./motion"
import { PrimaryCta } from "./cta"

/** V - Closing. The last, warmest invitation back into the diagnostic. */
export function ClosingSection() {
  return (
    <section className="relative overflow-hidden" id="begin">
      {/* atmospheric placeholder backdrop (swap for real imagery) */}
      <div
        className="img-placeholder absolute inset-0 -z-10"
        data-label=""
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/92 to-background"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-12 sm:py-28 lg:px-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6 text-foreground/70">
                <span className="pulse-dot mr-2.5" aria-hidden />
                V · A closing
              </p>
            </Reveal>

            <h2 className="max-w-[13ch] font-serif text-[2.05rem] leading-[1.07] text-ink sm:text-[3rem] sm:leading-[1.05] lg:text-[3.4rem] xl:text-[3.8rem]">
              <WordReveal
                segments={[
                  { kind: "text", text: "Two minutes." },
                  { kind: "br" },
                  { kind: "italic", text: "One honest reflection." },
                ]}
              />
            </h2>

            <Reveal
              delay={300}
              className="mt-7 max-w-xl text-[15.5px] leading-[1.75] text-foreground/90 sm:text-[1.08rem]"
            >
              <p>
                Pick up where you left off. Five quiet questions, and the
                language for what you already knew - your reflection, your score,
                and a clear next step.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" delay={200} className="lg:col-span-5">
            <div className="s-card p-7 sm:p-9">
              <p className="eyebrow mb-3 text-foreground/60">Begin</p>
              <p className="font-serif text-[1.5rem] leading-tight text-ink sm:text-[1.75rem]">
                Finish the diagnostic and get your reflection.
              </p>
              <PrimaryCta className="mt-7" />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="hairline" />
    </section>
  )
}
