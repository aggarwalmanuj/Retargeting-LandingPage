import { Reveal } from "./motion"

/** II — The honest reminder. Generic on purpose; never names the source. */
export function ReminderSection() {
  return (
    <section className="relative" id="reminder">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 sm:py-24 lg:px-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6 text-foreground/70">
                <span className="pulse-dot mr-2.5" aria-hidden />
                II · The honest reminder
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-[2rem] leading-[1.08] text-ink sm:text-4xl lg:text-5xl">
                Maybe you got busy.
                <br />
                <span className="font-serif-italic text-foreground/80">
                  That&apos;s normal.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal
              delay={200}
              className="max-w-2xl space-y-6 text-[15.5px] leading-[1.75] text-foreground/90 sm:text-[1.08rem]"
            >
              <p>
                Maybe you got busy. Maybe something pulled your attention. Maybe
                part of you wasn&apos;t ready to look. That&apos;s normal.
              </p>
              <p className="font-serif text-[1.35rem] leading-[1.5] text-ink sm:text-[1.6rem]">
                But the loop is still the loop. The thing that brought you here in
                the first place hasn&apos;t gone anywhere.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  )
}
