import { Reveal } from "../landing-minimal/motion"
import { Eyebrow } from "./section"
import { ResultMockup } from "./mockup"
import { MAP_FIELDS } from "./data"

/**
 * BLOCK 02 - Early Product Proof. Makes the unfinished value concrete right
 * after the hero: the five result fields shown as a realistic result interface,
 * paired with one approved participant quote.
 */
export function ProductProofBlock() {
  return (
    <section id="product-proof" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <Reveal>
          <Eyebrow>See what you receive</Eyebrow>
        </Reveal>

        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-12 lg:gap-14">
          {/* explanation */}
          <div className="min-w-0 lg:col-span-6">
            <Reveal delay={80}>
              <h2 className="font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.4rem]">
                Your completed Belief Score creates a personalized result showing:
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {MAP_FIELDS.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.n}
                  delay={i * 60}
                  className="flex gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/40 font-serif text-[0.95rem] text-signal">
                    {f.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.15rem] leading-tight text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-foreground/70">
                      {f.q}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* result interface mockup */}
          <Reveal as="div" delay={150} className="min-w-0 lg:col-span-6 lg:pt-2">
            <ResultMockup />
            <p className="mt-3 text-center text-[0.72rem] uppercase tracking-[0.16em] text-foreground/40">
              Illustrative result · your words create your own map
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <figure className="mt-12 max-w-2xl border-l-2 border-signal/50 pl-5 sm:mt-14 sm:pl-6">
            <blockquote className="font-serif-italic text-[1.25rem] leading-[1.5] text-ink sm:text-[1.5rem]">
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
