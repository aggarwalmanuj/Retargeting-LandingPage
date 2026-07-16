import { Reveal, WordReveal } from "../landing-minimal/motion"
import { PrimaryCta, TrustLine } from "./cta"
import { VslPlayer } from "./vsl-player"

/**
 * BLOCK 01 - Hero. Restores recognition and moves straight to continuation.
 * Order is fixed: eyebrow, headline, VSL, CTA, trust line, compact result line.
 * No supporting paragraph between headline, VSL, and CTA (per spec).
 */
export function HeroBlock() {
  return (
    <section id="hero" className="relative">
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-12 text-center sm:px-10 sm:pb-24 sm:pt-16 lg:px-12">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="pulse-dot" aria-hidden />
            AI Merge · Free Personalized Belief Score
          </p>
        </Reveal>

        <h1 className="mx-auto mt-7 max-w-2xl text-balance font-serif text-[2.5rem] leading-[1.06] tracking-[-0.01em] text-ink sm:mt-9 sm:text-[3.75rem] sm:leading-[1.02]">
          <WordReveal
            segments={[
              { kind: "text", text: "Your Belief Score Is" },
              { kind: "br" },
              { kind: "italic", text: "Waiting" },
            ]}
          />
        </h1>

        <Reveal
          as="p"
          delay={250}
          className="mx-auto mt-6 max-w-xl text-[1.15rem] leading-[1.55] text-foreground sm:mt-7 sm:text-[1.35rem]"
        >
          Return to the pattern that caught your attention - and see what it may
          have taught you to believe.
        </Reveal>

        {/* VSL - real video with three chips floating on the frame border */}
        <Reveal as="div" delay={400} className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <VslPlayer />
        </Reveal>

        <Reveal as="div" delay={550} className="mt-9 sm:mt-11">
          <PrimaryCta location="hero" />
          <TrustLine className="mx-auto mt-4 max-w-md" />
        </Reveal>

        {/* compact result line */}
        <Reveal
          as="p"
          delay={700}
          className="mx-auto mt-8 max-w-md text-[0.95rem] text-foreground/70"
        >
          <span className="font-serif text-ink">Your words</span> → your
          personalized <span className="font-serif text-ink">Pattern-to-Belief Map</span>
        </Reveal>
      </div>

      <div className="hairline" />
    </section>
  )
}
