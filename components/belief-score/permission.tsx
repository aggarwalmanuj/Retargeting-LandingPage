import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"

const notNeeded = [
  "explain your whole history",
  "know the belief in advance",
  "use polished language",
  "prove that the pattern is serious enough",
]

const allowed = ["Messy wording", "Uncertainty", "Contradiction"]

/**
 * BLOCK 08 - Completion Permission. Frames the ask as relief: a list of things
 * to set down, against the single thing actually required.
 */
export function PermissionBlock() {
  return (
    <Section id="permission" tinted>
      <Reveal>
        <Eyebrow>Permission</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-4xl">
          You do not need the perfect answer
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-12">
        {/* set down */}
        <Reveal className="lg:col-span-6">
          <span className="eyebrow">You can set this down</span>
          <ul className="mt-5 space-y-3.5">
            {notNeeded.map((line, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-[1.05rem] leading-[1.5] text-muted-foreground"
              >
                <span className="text-signal/60" aria-hidden>
                  &times;
                </span>
                <span>You do not need to {line}.</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* the one thing */}
        <Reveal delay={120} className="lg:col-span-6">
          <span className="eyebrow text-signal/80">You only need this</span>
          <p className="mt-5 font-serif text-[1.5rem] leading-[1.35] text-ink sm:text-[1.9rem]">
            Describe one repeated moment as honestly as you can.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {allowed.map((a) => (
              <span
                key={a}
                className="rounded-full border border-signal/30 bg-card/40 px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-foreground/80"
              >
                {a} welcome
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12 max-w-2xl space-y-2 text-[1.05rem] leading-[1.6] text-foreground/85 sm:mt-14">
        <p>
          You can question the result. You can refine it. You can reject what does
          not fit.
        </p>
        <p className="font-serif-italic text-[1.15rem] text-ink">
          The value comes from completing the reflection - not from performing
          certainty.
        </p>
      </Reveal>
    </Section>
  )
}
