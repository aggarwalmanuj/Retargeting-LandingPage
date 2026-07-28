"use client";

// GDPR cookie banner. Renders only for visitors with no stored decision;
// analytics (PostHog, Meta Pixel) stay off until "Accept" is pressed.
// Consent is an external store (localStorage + change event), so
// useSyncExternalStore keeps server and client renders consistent.

import { useSyncExternalStore } from "react";
import {
  getConsent,
  getServerConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";

export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsentSnapshot
  );

  // "unknown" = still hydrating; null = no decision yet (show the banner).
  if (consent !== null) return null;

  return (
    <section
      aria-label="Cookie consent"
      // Sits above the mobile sticky CTA (z-50) so the decision is reachable,
      // and left-anchored on desktop so it never covers the CTA column.
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:p-0"
    >
      <div className="rounded-lg border border-border bg-card/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-foreground/60">
          Cookies, briefly
        </p>
        <p className="mt-2 text-[0.82rem] leading-relaxed text-foreground/80">
          We use cookies for analytics and to measure our ads. Accept to help
          us improve the page, or decline and we&apos;ll only use what&apos;s
          strictly necessary.{" "}
          <a
            href="https://www.aimerge.live/privacy"
            className="underline underline-offset-4 hover:text-ink"
          >
            Privacy policy
          </a>
        </p>
        <div className="mt-3.5 flex gap-2">
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="s-btn min-h-[44px] flex-1 justify-center text-[0.7rem]"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="min-h-[44px] flex-1 rounded-full border border-border px-4 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:border-ink hover:text-ink"
          >
            Decline
          </button>
        </div>
      </div>
    </section>
  );
}
