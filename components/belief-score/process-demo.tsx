import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { PrimaryCta } from "./cta"
import { MockupFrame } from "./mockup"

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

/**
 * BLOCK 07 - Process Demonstration + Example Result. The real reflection screen,
 * a single worked example traced through the stages, then a real example report.
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
        One honest example, traced from a few sentences to a finished report.
      </Reveal>

      {/* the real question experience */}
      <Reveal delay={160} className="mt-10 sm:mt-12">
        <MockupFrame label="AI Merge · The reflection">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/question.png"
            alt="A question from the reflection"
            className="block w-full"
            loading="lazy"
          />
        </MockupFrame>
        <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground/40">
          A few honest questions · answer in your own words
        </p>
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

      {/* the finished result - real report */}
      <Reveal delay={120} className="mt-16 sm:mt-20">
        <p className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="tick mr-3 align-middle" aria-hidden />
          Example report
        </p>
        <MockupFrame label="AI Merge · Report">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/graphics/reportpdf.png"
            alt="Example of a finished report"
            className="block w-full"
            loading="lazy"
          />
        </MockupFrame>
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
