"use client";

import { useSyncExternalStore } from "react";
import { buildScorecardUrl, SCORECARD_BASE_URL } from "./scorecard";

// The URL depends on client-only state (localStorage / cookies). Nothing
// external changes it after first read, so subscribe is a no-op.
const subscribe = () => () => {};

/**
 * The funnel href for every CTA on the page.
 *
 * SSR and the first hydration render emit the bare entry point — no hydration
 * mismatch, and a very fast pre-hydration click still lands on the funnel
 * (just without attribution). The client snapshot then enriches the href with
 * stored first-touch attribution, the stable visitor ref, and `lp=retarget`.
 */
export function useFunnelHref(): string {
  return useSyncExternalStore(
    subscribe,
    buildScorecardUrl,
    () => SCORECARD_BASE_URL
  );
}
