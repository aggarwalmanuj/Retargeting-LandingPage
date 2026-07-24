import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"

const clarifies = [
  "the exact moment the pattern begins;",
  "the possible belief active inside it;",
  "the loop that keeps reinforcing it;",
  "the earliest point where another response could become available;",
  "the action that would count as different evidence.",
]

/**
 * BLOCK 04 - Silent Skepticism. Voices the objection plainly, then answers it.
 * The five clarifications are a real enumeration, so they are numbered.
 */
export function SkepticismBlock() {
  return (
    <Section id="skepticism" tinted>
      <Reveal>
        <Eyebrow>The honest objection</Eyebrow>
      </Reveal>

      {/* the visitor's own doubt, voiced with presence */}
      <Reveal delay={100}>
        <p className="mt-6 text-[1rem] text-muted-foreground">
          You may already be thinking:
        </p>
        <blockquote className="mt-4 max-w-3xl font-serif-italic text-[1.9rem] leading-[1.3] text-ink sm:text-[2.7rem]">
          &ldquo;I understand the pattern. Another insight is not enough.&rdquo;
        </blockquote>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-12">
        {/* rebuttal */}
        <Reveal className="space-y-4 text-[1.05rem] leading-[1.65] text-foreground/90 lg:col-span-5">
          <p className="font-serif text-[1.3rem] leading-[1.4] text-ink">
            That may be true.
          </p>
          <p>
            Recognition alone does not automatically change what happens when the
            moment returns.
          </p>
          <p>
            The Belief Score is not asking you to collect another explanation. It
            is designed to help make five things clearer.
          </p>
        </Reveal>

        {/* the five, numbered */}
        <Reveal
          as="ul"
          delay={120}
          className="divide-y divide-border border-y border-border lg:col-span-7"
        >
          {clarifies.map((c, i) => (
            <li key={i} className="flex items-baseline gap-5 py-4">
              <span className="font-mono text-[0.8rem] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.05rem] leading-[1.5] text-foreground/90">
                {c}
              </span>
            </li>
          ))}
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12 max-w-2xl border-l-2 border-signal/40 pl-6 text-[1.1rem] leading-[1.6] text-ink sm:mt-14">
        You do not have to accept every part of the result. You only have to
        decide whether completing the map is more useful than leaving the pattern
        as an unfinished insight.
      </Reveal>
    </Section>
  )
}
