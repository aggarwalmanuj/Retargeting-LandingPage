import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"

const beginnings = [
  "one meaningful task started before urgency",
  "one recommendation made before more explanation",
  "one follow-up completed before uncertainty becomes silence",
  "one offer held stable long enough for the market to answer",
  "one result received before moving to the next demand",
  "one boundary protected before pressure decides for you",
]

// the real movement the section describes - a sequence, so it is shown as one.
const movement = ["Capable but repeating", "Pattern-aware", "Action-visible", "Evidence-building"]

/**
 * BLOCK 09 - Identity Transition. The movement without a grand new identity.
 */
export function IdentityBlock() {
  return (
    <Section id="identity">
      <Reveal>
        <Eyebrow>The movement</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 max-w-3xl font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.5rem]">
          The goal is not to become a different person
        </h2>
      </Reveal>

      {/* the quiet progression */}
      <Reveal delay={140} className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
        {movement.map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-foreground/70">
              {step}
            </span>
            {i < movement.length - 1 && (
              <span className="text-signal/70" aria-hidden>
                &rarr;
              </span>
            )}
          </span>
        ))}
      </Reveal>

      <Reveal delay={160} className="mt-9 max-w-2xl space-y-4 text-[1.05rem] leading-[1.65] text-foreground/85">
        <p>
          It is not to eliminate every delay, or to become permanently direct,
          focused, disciplined, productive, confident, or certain.
        </p>
        <p className="font-serif text-[1.35rem] leading-[1.4] text-ink sm:text-[1.6rem]">
          It is to stop treating one repeated response as final proof of who you
          are.
        </p>
      </Reveal>

      {/* beginnings - small units of new evidence */}
      <Reveal delay={120} className="mt-10">
        <span className="eyebrow">A different response may begin with</span>
        <ul className="mt-5 grid max-w-4xl gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {beginnings.map((b, i) => (
            <li
              key={i}
              className="flex items-baseline gap-3 border-b border-border/70 pb-3.5 text-[1.02rem] leading-[1.45] text-foreground/90"
            >
              <span className="font-mono text-[0.75rem] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}.</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="mt-10 max-w-2xl text-[1.05rem] leading-[1.65] text-muted-foreground">
        One action does not rewrite an identity. But it can create evidence that
        the old response is not the only one available.
      </Reveal>

      <div className="mt-10 max-w-2xl space-y-2 border-l-2 border-signal/40 pl-6">
        <Reveal className="font-serif text-[1.4rem] leading-[1.35] text-ink sm:text-[1.7rem]">
          Recognition is useful.
        </Reveal>
        <Reveal delay={80} className="font-serif-italic text-[1.4rem] leading-[1.35] text-signal sm:text-[1.7rem]">
          New evidence is what changes what the pattern can mean.
        </Reveal>
      </div>
    </Section>
  )
}
