import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { PrimaryCta } from "./cta"

const stages = [
  {
    n: "1",
    title: "The Repeated Moment",
    lead: "What keeps happening? One concrete moment, not a broad label.",
    example: "The action is clear, but I move back into explanation, preparation, or delay.",
  },
  {
    n: "2",
    title: "The Possible Belief",
    lead: "What may the repeated experience have taught you to conclude?",
    example: "I cannot trust myself without pressure. · Directness damages trust. · The work is safe while it remains unfinished.",
    note: "A possible interpretation. Not a verdict.",
  },
  {
    n: "3",
    title: "The Reinforcing Loop",
    lead: "How does the pattern keep appearing to prove the same conclusion?",
    example: "uncertainty → familiar response → relief → delayed consequence → stronger belief",
  },
  {
    n: "4",
    title: "The Moment to Watch",
    lead: "Where does the pattern begin? One early moment - not the whole day.",
    example: "The first urge to add more or postpone the direct action.",
  },
  {
    n: "5",
    title: "The Next Evidence",
    lead: "What observable response would suggest another option is available?",
    example: "Complete one clear action before pressure or rebuilding takes over.",
  },
]

/**
 * BLOCK 06 - The Pattern-to-Belief Map. The product mechanism as five connected
 * stages: a horizontal stepper on desktop, a vertical flow on mobile.
 */
export function BeliefMapBlock() {
  return (
    <Section id="belief-map" tinted>
      <Reveal>
        <Eyebrow>The product</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.5rem]">
          Complete your Pattern-to-Belief Map
        </h2>
      </Reveal>
      <Reveal delay={140} className="mt-4 max-w-xl text-[1.02rem] leading-[1.6] text-foreground/70">
        Five connected stages turn one repeated pattern into a clear point of
        observation.
      </Reveal>

      {/* horizontal on desktop, vertical on mobile */}
      <div className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-5 lg:gap-4">
        {stages.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 70}
            className="relative flex gap-4 lg:flex-col lg:gap-0"
          >
            {/* marker + connector */}
            <div className="relative flex flex-col items-center lg:mb-5 lg:flex-row">
              <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-signal/50 bg-background font-serif text-lg text-signal">
                {s.n}
              </span>
              {/* connector line: vertical on mobile, horizontal on desktop */}
              {i < stages.length - 1 && (
                <>
                  <span className="my-1 w-px flex-1 bg-border lg:hidden" aria-hidden />
                  <span className="absolute left-11 top-1/2 hidden h-px w-[calc(100%-2.75rem)] -translate-y-1/2 bg-border lg:block" aria-hidden />
                </>
              )}
            </div>

            <div className="flex-1 pb-2 lg:pb-0">
              <h3 className="font-serif text-[1.2rem] leading-tight text-ink sm:text-[1.3rem]">
                {s.title}
              </h3>
              <p className="mt-2 text-[0.92rem] leading-[1.55] text-foreground/75">
                {s.lead}
              </p>
              <p className="mt-3 border-l-2 border-signal/40 pl-3 font-serif-italic text-[0.9rem] leading-[1.45] text-foreground/85">
                {s.example}
              </p>
              {s.note && (
                <p className="mt-2 text-[0.72rem] uppercase tracking-[0.1em] text-foreground/70">
                  {s.note}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12 sm:mt-14">
        <PrimaryCta location="score_definition" />
        <p className="mt-4 font-serif-italic text-[1.05rem] text-foreground/80">
          Your result is built from your own words.
        </p>
      </Reveal>
    </Section>
  )
}
