import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"
import { TestimonialReel } from "./testimonial-reel"

const testimonials = [
  {
    quote: "There’s a stress part of my brain that has gone silent.",
    name: "Nick H.",
    role: "Video Producer",
  },
  {
    quote:
      "It shifted something within. It’s something I’m going to be reading over and over again.",
    name: "Oliver",
    role: "Real Estate",
  },
]

/**
 * BLOCK 11 - Participant Proof. Approved human proof, kept light. Exact wording
 * and consent must be verified before launch.
 */
export function ProofBlock() {
  return (
    <Section id="proof">
      <Reveal>
        <Eyebrow>In their words</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-4xl">
          What participants have noticed through AI Merge
        </h2>
      </Reveal>
      <Reveal delay={140} className="mt-5 max-w-xl text-[1.1rem] leading-[1.6] text-foreground/80">
        Experiences reported by AI Merge participants, in their own words. Tap
        any clip to listen.
      </Reveal>

      {/* video reel - anonymous participant clips */}
      <Reveal delay={160} className="mt-10 sm:mt-12">
        <TestimonialReel />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="s-card flex flex-col justify-between gap-8 p-7 sm:p-8"
          >
            <blockquote className="font-serif-italic text-[1.4rem] leading-[1.45] text-ink sm:text-[1.6rem]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3 border-t border-border/70 pt-4">
              <span className="font-serif text-[1.05rem] text-ink">{t.name}</span>
              <span className="tick" aria-hidden />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
                {t.role}
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-8 max-w-2xl text-[0.85rem] leading-relaxed text-foreground/70">
        Individual experiences vary. These accounts reflect personal experiences
        with the full AI Merge experience, not the free Belief Score, and do not
        guarantee that another participant will experience the same result.
      </Reveal>
    </Section>
  )
}
