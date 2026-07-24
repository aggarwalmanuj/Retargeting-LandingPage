import Image from "next/image"
import { Reveal } from "../landing-minimal/motion"
import { Section, Eyebrow } from "./section"

const credentials = [
  "Founder and CIO, TetraNoodle Technologies",
  "Creator of AI Merge",
  "Holder of four patents",
  "Published in the Mensa Research Journal",
]

const logos = [
  { name: "IBM", src: "/logos/ibm.png", h: "h-5", w: 2500, ht: 1000 },
  { name: "Microsoft", src: "/logos/microsoft.png", h: "h-6", w: 500, ht: 500 },
  { name: "T-Mobile", src: "/logos/tmobile.png", h: "h-8", w: 225, ht: 225 },
  { name: "Pearson", src: "/logos/pearson.png", h: "h-7", w: 1420, ht: 1556 },
  { name: "United Nations", src: "/logos/un.png", h: "h-9", w: 3840, ht: 3269 },
]

/**
 * BLOCK 10 - Founder & Credibility. Concise authority, not the full cold-traffic
 * founder narrative. Photo + logos are placeholders; wording needs verification.
 */
export function FounderBlock() {
  return (
    <Section id="founder" tinted>
      <Reveal>
        <Eyebrow>The creator</Eyebrow>
      </Reveal>

      <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-12">
        {/* photo */}
        <Reveal as="div" delay={100} className="lg:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border">
            <Image
              src="/images/founder.jpg"
              alt="Manuj Aggarwal, creator of AI Merge"
              fill
              sizes="(max-width: 1024px) 100vw, 340px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        {/* statement */}
        <div className="lg:col-span-8">
          <Reveal delay={150}>
            <h2 className="font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-4xl">
              Why I built the Belief Score
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <blockquote className="mt-6 border-l-2 border-signal/50 pl-5 font-serif-italic text-[1.25rem] leading-[1.5] text-ink sm:pl-6 sm:text-[1.5rem]">
              &ldquo;I could often see the pattern clearly. That did not always
              mean I could see what the pattern had taught me to believe.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={250} className="mt-6 max-w-2xl space-y-3 text-[1.02rem] leading-[1.65] text-foreground/85">
            <p>
              I knew how to solve problems. I knew how to build. I knew how to
              create value. I could still watch familiar responses appear when
              uncertainty, pressure, visibility, receiving, or direct action
              became real.
            </p>
            <p>
              Understanding the behavior was useful. It did not always reveal the
              conclusion the repeated experience had created underneath it. That
              gap became part of the reason I created AI Merge.
            </p>
            <p className="text-foreground/70">
              The purpose is not to let technology define you. It is to help make
              one connection easier to see - then return the authority to you.
            </p>
            <p className="font-serif text-[1.1rem] text-ink">- Manuj Aggarwal</p>
          </Reveal>
        </div>
      </div>

      {/* credentials */}
      <Reveal delay={120} className="mt-10 border-t border-border pt-8 sm:mt-12">
        <p className="font-serif text-[1.25rem] text-ink">Manuj Aggarwal</p>
        <ul className="mt-3 flex flex-col gap-1.5 text-[0.98rem] text-foreground/75 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {credentials.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-signal" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* logo wall */}
      <Reveal delay={140} className="mt-8">
        <p className="eyebrow text-foreground/70">Professional experience behind AI Merge</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
          {logos.map((l) => (
            <span key={l.name} className="logo-chip">
              <Image
                src={l.src}
                alt={`${l.name} logo`}
                width={l.w}
                height={l.ht}
                sizes="120px"
                className={`${l.h} w-auto`}
              />
            </span>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-[0.78rem] leading-relaxed text-foreground/70">
          Organizations shown reflect prior professional work by Manuj Aggarwal
          and do not imply endorsement of AI Merge, the Belief Score, TetraNoodle
          Technologies, or this offer.
        </p>
      </Reveal>
    </Section>
  )
}
