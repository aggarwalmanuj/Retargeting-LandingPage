// Client instrumentation (Next 15.3+ convention): runs before the app
// becomes interactive.

import posthog from "posthog-js";
import { captureFirstTouchAttribution } from "@/lib/attribution";
import { getConsent, onConsentChange } from "@/lib/consent";

// Attribution is captured unconditionally and as early as possible — it is
// strictly-necessary first-party data (it only rides the outbound funnel
// URL), it sets no third-party cookies, and the campaign params exist ONLY
// on this first load. Waiting for a consent click would lose them.
captureFirstTouchAttribution();

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const enableDev = process.env.NEXT_PUBLIC_POSTHOG_ENABLE_DEV === "true";

function startPostHog(): void {
  if (
    !token ||
    typeof window === "undefined" ||
    // Dev clicks pollute prod funnels; offline dev machines spam "Failed to fetch".
    (process.env.NODE_ENV !== "production" && !enableDev)
  ) {
    return;
  }
  posthog.init(token, {
    // Own-origin reverse proxy (next.config rewrites) — defeats ad blockers
    // that drop *.posthog.com by hostname.
    api_host: "/ingest",
    // Dashboard host for toolbar links only — never the proxy.
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com",
    defaults: "2026-01-30",
    capture_pageview: true,
    persistence: "localStorage+cookie",
    debug: process.env.NODE_ENV !== "production",
    session_recording: { maskAllInputs: true },
    loaded: (ph) => {
      // A stale opt-out flag in localStorage silently blocks ALL captures
      // forever; opting back in makes capture self-healing.
      try {
        if (ph.has_opted_out_capturing()) ph.opt_in_capturing();
      } catch {
        // ignore
      }
    },
  });
}

// GDPR: PostHog sets cookies/localStorage, so it only starts after explicit
// consent — immediately for returning visitors who already accepted, or the
// moment the banner's Accept is pressed.
if (typeof window !== "undefined") {
  if (getConsent() === "granted") {
    startPostHog();
  } else {
    onConsentChange((value) => {
      if (value === "granted") startPostHog();
    });
  }
}
