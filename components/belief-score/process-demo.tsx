import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { PrimaryCta } from "./cta"

// the first item is the raw input; the five that follow are the map stages.
const trace = [
  {
    kind: "input" as const,
    title: "Your words",
    body: "“I know the next useful action, but when the moment arrives, I start preparing more, explaining more, or waiting until the pressure becomes impossible to ignore.”",
  },
  {
    title: "The Repeated Moment",
    body: "A clear action is available. You move back into preparation, explanation, or delay.",
  },
  {
    title: "A Possible Belief",
    body: "“I can trust myself only when pressure removes the choice.”",
    quote: true,
  },
  {
    title: "The Reinforcing Loop",
    body: "Uncertainty rises. Delay creates temporary relief. Pressure grows. Urgency finally creates movement. The mind records: “Pressure worked.”",
  },
  {
    title: "The Moment to Watch",
    body: "The first urge to add more, reopen the decision, or postpone the direct action.",
  },
  {
    title: "The Next Evidence",
    body: "Complete one bounded action before urgency becomes necessary.",
  },
]

const exampleResult = [
  {
    label: "Your Recurring Pattern",
    body: "When the next useful action becomes clear, you return to preparation, explanation, or delay.",
  },
  {
    label: "A Possible Belief Underneath",
    body: "“I cannot rely on myself until the situation becomes urgent.”",
    quote: true,
  },
  {
    label: "How the Pattern May Keep Proving Itself",
    body: "The action becomes visible. Uncertainty rises. You add more, prepare again, delay the decision. Pressure grows. Eventually urgency creates movement. The mind records: “I needed the pressure.”",
  },
  {
    label: "The Moment to Watch",
    body: "The first moment you feel pulled to add more instead of completing the available action.",
  },
  {
    label: "What Different Evidence Could Look Like",
    body: "Complete one clear, proportionate action before urgency becomes necessary.",
  },
  {
    label: "One Practical Next Step",
    body: "Write the smallest action that would make the pattern operationally different - not emotionally perfect.",
  },
]

/**
 * BLOCK 07 - Process Demonstration + Example Result. A single worked example
 * read as a connected trace: raw words at the top, the five stages beneath it,
 * then a full illustrative result.
 */
export function ProcessDemoBlock() {
  let stageNo = 0
  return (
    <Section id="process">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-serif text-[2.1rem] leading-[1.1] text-ink sm:text-[2.6rem]">
          See how the Belief Score works
        </h2>
      </Reveal>
      <Reveal delay={140} className="mt-5 max-w-xl text-[1.15rem] leading-[1.6] text-foreground/80">
        One honest example, traced from a few sentences to a finished map.
      </Reveal>

      {/* the connected trace */}
      <div className="mt-12 max-w-2xl sm:mt-14">
        {trace.map((step, i) => {
          const isInput = step.kind === "input"
          if (!isInput) stageNo += 1
          const last = i === trace.length - 1
          return (
            <Reveal
              key={i}
              delay={i * 60}
              className="relative grid grid-cols-[2.5rem_1fr] gap-5 sm:gap-6"
            >
              {/* rail: node + connecting line */}
              <div className="relative flex justify-center">
                {!last && (
                  <span
                    className="absolute left-1/2 top-9 bottom-0 w-px -translate-x-1/2 bg-border"
                    aria-hidden
                  />
                )}
                <span
                  className={`z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                    isInput
                      ? "border-signal/60 bg-signal/10 text-signal"
                      : "border-border bg-background text-signal"
                  }`}
                >
                  {isInput ? (
                    <span className="h-2 w-2 rounded-full bg-signal" aria-hidden />
                  ) : (
                    <span className="font-mono text-[0.85rem]">{stageNo}</span>
                  )}
                </span>
              </div>

              {/* content */}
              <div className={last ? "pb-0" : "pb-10"}>
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {step.title}
                </p>
                <p
                  className={`mt-2.5 leading-[1.55] ${
                    isInput || step.quote
                      ? "font-serif-italic text-[1.2rem] text-ink sm:text-[1.32rem]"
                      : "text-[1.12rem] text-foreground/90"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* the finished result */}
      <Reveal delay={120} className="mt-16 sm:mt-20">
        <div className="s-card overflow-hidden">
          <div className="flex items-center justify-between gap-4 border-b border-border bg-secondary/50 px-6 py-5 sm:px-8">
            <h3 className="font-serif text-[1.5rem] text-ink sm:text-[1.7rem]">
              Example Belief Score Result
            </h3>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              Illustrative
            </span>
          </div>
          <div className="divide-y divide-border">
            {exampleResult.map((row, i) => (
              <div key={i} className="px-6 py-6 sm:px-8">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </p>
                <p
                  className={`mt-2.5 leading-[1.6] ${
                    row.quote
                      ? "font-serif-italic text-[1.2rem] text-ink"
                      : "text-[1.12rem] text-foreground/90"
                  }`}
                >
                  {row.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="mt-8 max-w-2xl space-y-2 text-[1.05rem] leading-[1.6] text-muted-foreground">
        <p className="font-serif-italic text-[1.15rem] text-ink">
          Your result will be built from your own words.
        </p>
        <p>
          This example does not predict your result. You may accept, refine,
          question, or reject any part of your Pattern-to-Belief Map.
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-10 sm:mt-12">
        <PrimaryCta location="sample_result" />
      </Reveal>
    </Section>
  )
}
