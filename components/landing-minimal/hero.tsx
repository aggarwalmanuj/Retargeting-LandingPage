import Image from "next/image"
import { Reveal, WordReveal } from "./motion"
import { PrimaryCta } from "./cta"

export function MinimalHero() {
  return (
    <section className="relative" id="hero">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-12 sm:pb-24 sm:pt-16 lg:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* --- text column ------------------------------------------- */}
          <div>
            <p className="eyebrow mb-6 text-foreground/70 sm:mb-8">
              <span className="pulse-dot mr-2.5" aria-hidden />
              Welcome back
            </p>

            <h1 className="font-serif text-[2.25rem] leading-[1.1] text-ink sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
              <WordReveal
                segments={[
                  { kind: "text", text: "You started" },
                  { kind: "br" },
                  { kind: "text", text: "something." },
                  { kind: "br" },
                  { kind: "italic", text: "You didn't finish it." },
                ]}
              />
            </h1>

            <Reveal
              as="p"
              delay={300}
              className="mt-6 max-w-xl text-[1.15rem] leading-[1.6] text-foreground/90 sm:mt-8 sm:text-[1.25rem]"
            >
              You came here once and stepped away before you got your reflection.
              Nothing changed while you were gone. Two minutes will show you
              what&apos;s underneath the pattern.
            </Reveal>

            <Reveal as="div" delay={500} className="mt-8 sm:mt-10">
              <PrimaryCta />
            </Reveal>

            <Reveal
              as="div"
              delay={700}
              className="mt-10 flex items-center gap-4 sm:mt-12 sm:gap-6"
            >
              <span className="hairline-anim block h-px w-10 bg-foreground/40 sm:w-12" />
              <p className="text-[0.82rem] leading-snug tracking-wide text-foreground/70 sm:text-[0.9rem]">
                <span className="font-serif text-[1.05rem] text-ink underline-draw sm:text-[1.15rem]">
                  Private by design.
                </span>
                <span className="mx-2 text-foreground/40">·</span>
                Your answers are only used to generate your reflection.
              </p>
            </Reveal>
          </div>

          {/* --- image column ------------------------------------------ */}
          <Reveal as="div" delay={200}>
            <div className="signal-halo relative">
              <div className="relative h-80 w-full overflow-hidden rounded-sm sm:h-[26rem] lg:h-[34rem]">
                <Image
                  src="/images/hero.jpg"
                  alt="A person in a quiet, reflective moment, looking out a window - the stillness the diagnostic is meant to compose"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority
                />
                {/* subtle teal wash to settle the warm photo into the palette */}
                <div
                  className="pointer-events-none absolute inset-0 bg-background/15 mix-blend-multiply"
                  aria-hidden
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 sm:mt-6 sm:gap-6">
                <p className="eyebrow text-foreground/60">I · Arrival</p>
                <p className="max-w-64 text-right font-serif-italic text-[15px] leading-snug text-foreground/80 sm:text-base">
                  &ldquo;The loop is still the loop. It hasn&apos;t gone
                  anywhere.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="hairline" />
    </section>
  )
}
