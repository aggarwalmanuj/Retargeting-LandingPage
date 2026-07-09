# Retargeting Landing Page

A dedicated landing page for the retargeting audience — visitors who came through
either gateway and left without completing the diagnostic or buying. The copy
stays generic (never names the source) and routes back into the diagnostic
funnel with the readiness gate.

Built to match the [scorecard-funnel](https://github.com/aggarwalmanuj/scorecard-funnel)
theme: deep-teal "marine" editorial palette, Fraunces serif headlines, Inter body.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **Tailwind CSS 4**
- **next/font** (Fraunces + Inter, self-optimized)
- Deploys to **Vercel** with zero config

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build locally
```

## Structure

```
app/
  layout.tsx                 # fonts + root layout
  page.tsx                   # assembles the sections (marine palette locked)
  globals.css                # theme tokens, buttons, hairlines, motion
components/landing-minimal/
  header.tsx                 # sticky nav + mobile menu
  hero.tsx                   # I · Welcome back
  reminder.tsx               # II · The honest reminder
  whats-waiting.tsx          # III · What's waiting
  gate.tsx                   # IV · The gate (gravity line)
  closing.tsx                # V · A closing (final CTA)
  footer.tsx                 # footer + privacy line
  cta.tsx                    # shared CTA button (FUNNEL_HREF)
  motion.tsx                 # scroll reveal + word reveal
public/images/hero.jpg       # hero portrait
public/newui-logo.png        # brand wordmark (CSS-masked)
```

## Configuration

- **CTA destination** — set `FUNNEL_HREF` in `components/landing-minimal/cta.tsx`
  (currently `/diagnostic`) to the real diagnostic funnel URL.
- The page is `noindex` (see `app/layout.tsx`) so retargeting traffic stays
  measurable on its own URL.
