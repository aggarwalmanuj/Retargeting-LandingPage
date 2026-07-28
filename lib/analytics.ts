// Unified funnel-event helper. Every page event (landing_page_view,
// scroll_depth_*, cta_click) flows through here so PostHog and the Meta
// Pixel always see the same event names and payloads. Both sinks are
// consent-gated upstream and no-op safely when absent.

import posthog from "posthog-js";
import { trackCustom } from "./fbpixel";
import { LP_SLUG } from "./scorecard";

/** CTA placements tracked separately, matching this page's blocks. */
export type CtaLocation =
  | "header"
  | "hero"
  | "recognition"
  | "score_definition"
  | "sample_result"
  | "how_it_works"
  | "final"
  | "mobile_sticky";

export function trackEvent(
  name: string,
  props?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  // Every event carries the doorway slug so events from all landing pages
  // stay separable in one PostHog project.
  const payload = { lp: LP_SLUG, ...props };
  try {
    // __loaded is false until posthog.init runs (i.e. before consent).
    if (posthog.__loaded) posthog.capture(name, payload);
  } catch {
    // Analytics must never break the page.
  }
  trackCustom(name, payload);
}
