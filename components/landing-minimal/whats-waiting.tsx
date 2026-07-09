import { Reveal } from "./motion"

const takeaways = [
  {
    n: "01",
    title: "A personalized reflection",
    body: "Written back in your own words — what the pattern has been quietly telling you.",
  },
  {
    n: "02",
    title: "Your score",
    body: "A clear read on the belief underneath, not a tally of your productivity.",
  },
  {
    n: "03",
    title: "A clear action plan",
    body: "One honest next step for what to actually do about it.",
  },
]

/** III — What's waiting. The payoff for finishing the diagnostic. */
export function WhatsWaitingSection() {
  return (
    <section className="relative" id="whats-waiting">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* header */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6 text-foreground/70">
                <span className="pulse-dot mr-2.5" aria-hidden />
                III · What&apos;s waiting
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-[2rem] leading-[1.08] text-ink sm:text-4xl lg:text-5xl">
                It listens for the belief
                <br />
                <span className="font-serif-italic text-foreground/80">
                  underneath the pattern.
                </span>
              </h2>
            </Reveal>
            <Reveal
              delay={220}
              className="mt-7 max-w-md space-y-4 text-[15.5px] leading-[1.75] text-foreground/90 sm:text-[1.05rem]"
            >
              <p>
                AI Merge doesn&apos;t measure your productivity. Finish the
                diagnostic and you get a personalized reflection, your score, and
                a clear plan for what to do next.
              </p>
            </Reveal>
          </div>

          {/* editorial numbered list */}
          <div className="lg:col-span-7">
            <div className="border-t border-border">
              {takeaways.map((item, i) => (
                <Reveal
                  key={item.n}
                  delay={i * 90}
                  className="grid grid-cols-12 gap-4 border-b border-border py-7 sm:py-8"
                >
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-serif-italic text-lg text-foreground/40 sm:text-xl">
                      {item.n}
                    </span>
                  </div>
                  <div className="col-span-10 sm:col-span-11">
                    <h3 className="font-serif text-[1.4rem] leading-tight text-ink sm:text-[1.6rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-foreground/75 sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  )
}
