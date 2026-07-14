import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"

const knowings = [
  "I wait for pressure.",
  "I soften the ask.",
  "I keep building.",
  "I overexplain.",
  "I lose structure.",
  "I struggle to receive the result.",
]

const questions = [
  "Where does the pattern begin early enough to notice?",
  "What action would create evidence that the familiar response is not the only one available?",
]

/**
 * BLOCK 05 - Why the Insight May Still Feel Unfinished. A contrast: what is
 * already recognized, and the gap of what stays unanswered.
 */
export function UnfinishedBlock() {
  return (
    <Section id="unfinished">
      <Reveal>
        <Eyebrow>The gap</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 max-w-2xl font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.5rem]">
          Recognition can be accurate and still remain incomplete
        </h2>
      </Reveal>

      {/* what is already recognized */}
      <Reveal delay={150} className="mt-12 sm:mt-14">
        <span className="eyebrow">Already recognized</span>
        <div className="mt-4 flex flex-wrap gap-3">
          {knowings.map((k, i) => (
            <span
              key={i}
              className="rounded-full border border-border bg-secondary/50 px-4 py-2 font-serif-italic text-[0.95rem] text-ink/90 sm:text-[1.05rem]"
            >
              &ldquo;{k}&rdquo;
            </span>
          ))}
        </div>
      </Reveal>

      {/* the gap: what stays unanswered */}
      <Reveal delay={120} className="mt-12 sm:mt-14">
        <p className="max-w-2xl text-[1.05rem] leading-[1.65] text-foreground/85">
          That recognition may be completely accurate. But it may still leave two
          important questions unanswered.
        </p>
        <span className="eyebrow mt-8 text-signal/80">Still unanswered</span>
        <div className="mt-5 space-y-px overflow-hidden rounded-lg border border-border bg-border">
          {questions.map((q, i) => (
            <div key={i} className="flex items-baseline gap-5 bg-card/40 px-6 py-6 sm:px-7">
              <span className="font-mono text-[0.85rem] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-[1.3rem] leading-[1.35] text-ink sm:text-[1.55rem]">
                {q}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-10 max-w-2xl space-y-3 text-[1.05rem] leading-[1.65] text-foreground/85">
        <p className="font-serif text-[1.2rem] text-ink">
          That is the purpose of completing the Belief Score.
        </p>
        <p className="text-muted-foreground">
          Not to explain your whole life. Not to define your identity. To take one
          repeated pattern and make the next useful point of observation more
          visible.
        </p>
      </Reveal>
    </Section>
  )
}
