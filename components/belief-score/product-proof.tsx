import { Reveal } from "../landing-minimal/motion"
import { Eyebrow } from "./section"
import { MockupFrame } from "./mockup"

/**
 * BLOCK 02 - Early Product Proof. Makes the value concrete with a real report
 * screenshot, paired with one approved participant quote.
 */
export function ProductProofBlock() {
  return (
    <section id="product-proof" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <Reveal>
          <Eyebrow>See what you receive</Eyebrow>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 sm:mt-10 lg:grid-cols-12 lg:gap-14">
          {/* explanation */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={80}>
              <h2 className="font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.4rem]">
                A personalized, private report - built from your own words
              </h2>
            </Reveal>
            <Reveal
              delay={140}
              className="mt-6 space-y-4 text-[1.1rem] leading-[1.6] text-foreground/85"
            >
              <p>
                It reads back the repeated pattern you describe, the belief that
                may sit underneath it, and the earliest moment where a different
                response becomes available.
              </p>
              <p className="text-muted-foreground">
                A precise reflection you can keep - not a verdict.
              </p>
            </Reveal>
          </div>

          {/* real report screenshot */}
          <Reveal as="div" delay={150} className="min-w-0 lg:col-span-7">
            <MockupFrame label="AI Merge · Your report">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/graphics/reportsummary.png"
                alt="Example of a personalized report"
                className="block w-full"
                loading="lazy"
              />
            </MockupFrame>
            <p className="mt-3 text-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-foreground/40">
              Example report · your answers create your own
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <figure className="mt-12 max-w-2xl border-l-2 border-signal/50 pl-5 sm:mt-14 sm:pl-6">
            <blockquote className="font-serif-italic text-[1.3rem] leading-[1.5] text-ink sm:text-[1.55rem]">
              &ldquo;It helped me see the pattern differently - not just judge
              myself for repeating it.&rdquo;
            </blockquote>
            {/* REQUIRED BEFORE LAUNCH: replace with an exact approved statement. */}
          </figure>
        </Reveal>
      </div>
      <div className="hairline" />
    </section>
  )
}
