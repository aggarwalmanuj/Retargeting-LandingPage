// Meta Pixel helpers. Every function is a safe no-op when the pixel is not
// configured or fbevents.js has not loaded.
//
// NOTE: this page fires NO standard conversion events (Lead / Purchase).
// Those belong to the Belief Score funnel, which fires them after the
// visitor converts there — firing them here too would double-count and
// corrupt ad optimization. This page only reports its own funnel-visibility
// events as CUSTOM events.

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? "";

/** Pixel ids are numeric. Reject anything else before it reaches an inline script. */
export function isValidPixelId(id: string): boolean {
  return /^\d{6,20}$/.test(id);
}

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export function pageview(): void {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
}

export function trackCustom(name: string, data?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", name, data ?? {});
}
