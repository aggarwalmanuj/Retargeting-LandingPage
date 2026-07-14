import { Reveal } from "../landing-minimal/motion"
import { Eyebrow } from "./section"
import { PrimaryCta, TrustLine } from "./cta"
import { MAP_FIELDS } from "./data"

/**
 * BLOCK 13 - Final CTA. Returns to the unfinished value and asks for one clear
 * action. No new identity, paid offer, urgency, scarcity, or second CTA.
 */
export function FinalCtaBlock() {
  return (
    <section id="final" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-28 lg:px-12">
        <Reveal>
          <Eyebrow center>Begin</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-serif text-[2.1rem] leading-[1.1] text-ink sm:text-5xl sm:leading-[1.05]">
            The pattern already caught your attention.
            <br />
            <span className="font-serif-italic">Complete the map.</span>
          </h2>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-7 max-w-xl text-[1.05rem] leading-[1.65] text-foreground/80">
          Choose one repeated moment. Describe what happens in your own words.
          Receive your personalized Pattern-to-Belief Map showing:
        </Reveal>

        <ul className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-x-4 gap-y-2">
          {MAP_FIELDS.map((f) => (
            <li
              key={f.n}
              className="text-[0.9rem] text-foreground/70"
            >
              <span className="text-signal">·</span> {f.title.toLowerCase()}
            </li>
          ))}
        </ul>

        <Reveal delay={250} className="mt-10 sm:mt-12">
          <PrimaryCta location="final" />
          <TrustLine className="mx-auto mt-4 max-w-md" />
        </Reveal>

        <Reveal delay={300} className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-foreground/60">
          Your result is a starting point for reflection. Not a final statement
          about who you are.
        </Reveal>
      </div>
      <div className="hairline" />
    </section>
  )
}
