import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { PrimaryCta } from "./cta"

// neutral scenario labels - never name the source vertical, only the shape.
const maybes = [
  {
    tag: "A task",
    line: "The important task that stayed open until pressure became intense.",
  },
  {
    tag: "A conversation",
    line: "The strong conversation that became softer when a decision was needed.",
  },
  {
    tag: "A system",
    line: "The offer, page, framework, or system that kept improving while the direct action remained unfinished.",
  },
  {
    tag: "A knowing",
    line: "The feeling that you know what to do - but cannot always access that version of yourself when the moment arrives.",
  },
]

/**
 * BLOCK 03 - Recognition Reminder. Four cross-vertical scenarios as a scannable
 * grid, then the single shared question underneath them.
 */
export function RecognitionBlock() {
  return (
    <Section id="recognition">
      <Reveal>
        <Eyebrow>Recognition</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 max-w-2xl font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.5rem]">
          You may already know which moment brought you here
        </h2>
      </Reveal>

      {/* four scenarios, scannable */}
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:mt-12 sm:grid-cols-2">
        {maybes.map((m, i) => (
          <Reveal
            key={i}
            delay={i * 70}
            className="flex flex-col gap-3 bg-card/40 p-6 sm:p-7"
          >
            <span className="eyebrow text-signal/80">{m.tag}</span>
            <p className="text-[1.02rem] leading-[1.55] text-foreground/90">
              {m.line}
            </p>
          </Reveal>
        ))}
      </div>

      {/* the shared question underneath */}
      <div className="mt-14 grid gap-8 sm:mt-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="text-[1rem] leading-[1.6] text-muted-foreground">
            The visible situations are different. The question underneath them may
            be similar:
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8">
          <p className="border-l-2 border-signal/50 pl-6 font-serif text-[1.6rem] leading-[1.35] text-ink sm:text-[2.1rem]">
            What has the repeated pattern started teaching you about who you are,
            what you can trust, or what is possible?
          </p>
          <p className="mt-6 pl-6 text-[1rem] leading-[1.6] text-muted-foreground">
            The pattern may already be familiar. The meaning attached to it may be
            less visible.
          </p>
        </Reveal>
      </div>

      <Reveal delay={150} className="mt-12 sm:mt-14">
        <PrimaryCta location="recognition" />
      </Reveal>
    </Section>
  )
}
