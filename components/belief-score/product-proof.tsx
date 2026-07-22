import { Reveal } from "../landing-minimal/motion"
import { Eyebrow } from "./section"
import { MockupFrame } from "./mockup"

// the five result fields, shown immediately so "what do I get" is answered
// before any argument. Wording matches the annotated spec exactly.
const fields = [
  { title: "The Repeated Moment", q: "What keeps happening?" },
  {
    title: "A Possible Belief",
    q: "What may the repeated experience have taught you to conclude?",
  },
  {
    title: "The Reinforcing Loop",
    q: "How may the pattern keep appearing to prove the same belief?",
  },
  { title: "The Moment to Watch", q: "Where does the familiar response begin?" },
  {
    title: "The Next Evidence",
    q: "What observable action would suggest another response is available?",
  },
]

/**
 * BLOCK 02 - Early Product Proof. Answers "what do I actually get" first by
 * naming the five result fields, backed by a real report screenshot and one
 * approved participant quote.
 */
export function ProductProofBlock() {
  return (
    <section id="product-proof" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <Reveal>
          <Eyebrow>The result</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-2xl font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.4rem]">
            See what you receive
          </h2>
        </Reveal>
        <Reveal delay={120} className="mt-5 max-w-xl text-[1.1rem] leading-[1.6] text-foreground/85">
          Your completed Belief Score creates a personalized result showing:
        </Reveal>

        <div className="mt-10 grid items-start gap-10 sm:mt-12 lg:grid-cols-12 lg:gap-14">
          {/* the five named fields - the value made concrete first */}
          <Reveal as="ul" delay={140} className="min-w-0 lg:col-span-5">
            <div className="divide-y divide-border border-y border-border">
              {fields.map((f, i) => (
                <li key={f.title} className="flex items-baseline gap-5 py-5">
                  <span className="font-mono text-[0.8rem] text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[1.25rem] leading-tight text-ink sm:text-[1.35rem]">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-[1rem] leading-[1.55] text-foreground/75">
                      {f.q}
                    </p>
                  </div>
                </li>
              ))}
            </div>
          </Reveal>

          {/* real report screenshot as supporting proof */}
          <Reveal as="div" delay={180} className="min-w-0 lg:col-span-7">
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
