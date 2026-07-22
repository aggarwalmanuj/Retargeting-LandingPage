import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { PrimaryCta } from "./cta"
import { Accordion, type FaqItem } from "./accordion"

const steps = [
  {
    n: "1",
    title: "Choose One Pattern",
    body: "Focus on one repeated situation that matters now. Not your whole life. Not every problem. One moment.",
  },
  {
    n: "2",
    title: "Describe What Happens",
    body: "Use your own words. There is no perfect response. Messy answers are allowed.",
  },
  {
    n: "3",
    title: "Receive Your Pattern-to-Belief Map",
    body: "Your result shows the repeated moment, a possible belief, the reinforcing loop, the moment to watch, and the next evidence.",
  },
  {
    n: "4",
    title: "Decide What Fits",
    body: "Keep what feels accurate. Question, correct, refine, or reject what does not. The result is a hypothesis for reflection. You remain the authority.",
  },
]

const faqs: FaqItem[] = [
  {
    q: "Why does the page say my Belief Score is waiting?",
    a: (
      <>
        <p>
          The phrase is a reminder that a personalized Belief Score is available
          for you to complete. It does not mean the system already knows your
          result.
        </p>
        <p>
          Your score is created from the information you choose to provide. Where
          a saved assessment is technically available, the button may return you
          to it. Otherwise, the button will begin a new guided reflection.
        </p>
      </>
    ),
  },
  {
    q: "Does the Belief Score claim belief is the cause of my difficulty?",
    a: (
      <>
        <p>No.</p>
        <p>
          The repeated pattern may be affected by practical, medical,
          neurological, professional, financial, relational, organizational, or
          environmental conditions. The Belief Score examines whether a meaning
          or belief may also have become attached to one repeated experience. It
          does not claim belief is the sole cause.
        </p>
      </>
    ),
  },
  {
    q: "Is this a diagnosis, personality test, or professional evaluation?",
    a: (
      <>
        <p>No.</p>
        <p>
          The Belief Score does not diagnose a condition, determine professional
          competence, evaluate employment suitability, or assign a permanent
          personality type. It is a reflective and educational tool focused on
          one pattern you choose to describe.
        </p>
      </>
    ),
  },
  {
    q: "Is technology deciding what is true about me?",
    a: (
      <>
        <p>No. Technology helps organize the information you provide.</p>
        <p>
          It may suggest a possible relationship between the repeated moment,
          your response, the consequence, the meaning, and a possible belief. You
          decide what fits.
        </p>
      </>
    ),
  },
  {
    q: "What if the result feels inaccurate?",
    a: (
      <>
        <p>Treat it as a hypothesis. Keep what feels useful. Correct, refine, question, or reject what does not.</p>
        <p>
          The result is not a final statement about your identity, capability,
          future, or value.
        </p>
      </>
    ),
  },
  {
    q: "Is the complete Belief Score free?",
    a: (
      <>
        <p>Yes. You receive the complete free result before any optional paid offer is presented. No credit card is required.</p>
        <p>A paid next step may be offered afterward. It is optional.</p>
      </>
    ),
  },
  {
    q: "View privacy, technology, research, and professional-boundary details",
    a: (
      <>
        <p className="font-medium text-ink">Research foundation</p>
        <p>
          Research across learning, expectations, stress, attention, identity,
          social evaluation, decision-making, and behavior suggests prior beliefs
          may influence what people notice, expect, avoid, and attempt, and how
          they respond under pressure. This does not mean belief is the sole
          cause of any life, medical, professional, relational, financial, or
          business outcome. The AI Merge methodology combines established
          principles with a proprietary interpretive framework and should be
          treated as reflective and educational unless direct validation research
          establishes stronger claims.
        </p>
        <p className="font-medium text-ink">How technology supports the result</p>
        <p>
          The system organizes the information you provide. It does not
          independently know your history, does not read your mind, does not
          overwrite beliefs, and does not replace professional support or
          personal judgment.
        </p>
        <p className="font-medium text-ink">Privacy and data</p>
        <p>
          Before publication, what is collected, why, where it is stored, which
          vendors process it, whether humans may review it, retention, deletion
          and access, model-training use, and any sharing will be verified and
          disclosed. Nothing here should be read as a claim that data is
          confidential, anonymous, never reviewed, never sold, or excluded from
          training unless that has been verified.
        </p>
        <p className="font-medium text-ink">Professional boundaries</p>
        <p>
          The Belief Score is not medical advice, mental-health treatment,
          psychotherapy, crisis support, diagnosis, legal advice, financial
          advice, employment evaluation, sales consulting, business consulting,
          professional certification, or a guarantee of any outcome. Use personal
          judgment and qualified support where needed.
        </p>
      </>
    ),
  },
]

/**
 * BLOCK 12 - How It Works + Essential Questions. Four compact steps + a FAQ
 * accordion (all closed by default, one open at a time).
 */
export function HowItWorksBlock() {
  return (
    <Section id="how-it-works">
      <Reveal>
        <Eyebrow>The steps</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-4xl">
          Complete your Belief Score in four steps
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 70} className="s-card p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.8rem] text-signal">
                {String(s.n).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" aria-hidden />
            </div>
            <h3 className="mt-4 font-serif text-[1.3rem] leading-tight text-ink sm:text-[1.45rem]">
              {s.title}
            </h3>
            <p className="mt-2 text-[1rem] leading-[1.6] text-foreground/80">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-9 sm:mt-11">
        <PrimaryCta location="how_it_works" />
      </Reveal>

      {/* Essential questions */}
      <div className="mt-16 sm:mt-20">
        <Reveal>
          <h3 className="font-serif text-[1.7rem] leading-tight text-ink sm:text-[2.1rem]">
            Essential questions
          </h3>
        </Reveal>
        <Reveal delay={100} className="mt-6">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </Section>
  )
}
