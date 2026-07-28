"use client";

// Page-level funnel events: landing_page_view once on mount, then
// scroll_depth_25/50/75/90 (each at most once). Renders nothing.
//
// Together with cta_click (fired by the CTAs), this gives the LP's own
// view -> engagement -> click rate, which the funnel's admin cannot see:
// the funnel only ever meets visitors who already clicked through.

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const THRESHOLDS = [25, 50, 75, 90] as const;

export function LandingAnalytics() {
  useEffect(() => {
    trackEvent("landing_page_view");

    const fired = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const t of THRESHOLDS) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          trackEvent(`scroll_depth_${t}`);
        }
      }
      if (fired.size === THRESHOLDS.length) {
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
