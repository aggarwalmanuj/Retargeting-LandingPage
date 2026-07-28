// First-touch acquisition attribution.
//
// Ad clicks land here with utm/click-id params in the URL, but the visitor
// converts on the Belief Score funnel (a different domain), by which time the
// query string is long gone. So we capture once, as early as possible, and
// stash it in localStorage; lib/scorecard.ts reads it back and appends it to
// the outbound funnel URL.
//
// Everything here is defensive: attribution must never break the page.

const STORAGE_KEY = "retarget-first-touch";
const MAX_LEN = 500;

export type FirstTouch = {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  fbclid?: string;
  gclid?: string;
  ttclid?: string;
  msclkid?: string;
};

/** Campaign-grade signal: a real ad/campaign marker, not just a referrer. */
function hasCampaignSignal(t: FirstTouch): boolean {
  return Boolean(
    t.utmSource ||
      t.utmMedium ||
      t.utmCampaign ||
      t.utmTerm ||
      t.utmContent ||
      t.fbclid ||
      t.gclid ||
      t.ttclid ||
      t.msclkid
  );
}

/**
 * Store the acquiring channel. First touch wins, with one deliberate
 * exception: a stored record holding ONLY a referrer (e.g. an organic visit
 * last week) is upgraded when a real campaign click arrives — otherwise that
 * organic visit would permanently mask the paid click that actually drove the
 * conversion. Mirrors the funnel's own rule so both ends agree.
 */
export function captureFirstTouchAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const existingRaw = window.localStorage.getItem(STORAGE_KEY);
    if (existingRaw) {
      let existing: FirstTouch | null = null;
      try {
        existing = JSON.parse(existingRaw) as FirstTouch;
      } catch {
        existing = null;
      }
      // A campaign-grade first touch is final.
      if (existing && hasCampaignSignal(existing)) return;
    }

    const params = new URLSearchParams(window.location.search);
    const get = (k: string) => params.get(k)?.slice(0, MAX_LEN) || undefined;
    const touch: FirstTouch = {
      landingPage: window.location.href.slice(0, MAX_LEN),
      utmSource: get("utm_source"),
      utmMedium: get("utm_medium"),
      utmCampaign: get("utm_campaign"),
      utmTerm: get("utm_term"),
      utmContent: get("utm_content"),
      fbclid: get("fbclid"),
      gclid: get("gclid"),
      ttclid: get("ttclid"),
      msclkid: get("msclkid"),
    };

    // Only an EXTERNAL referrer is an acquisition source; same-origin
    // navigation is noise.
    const ref = document.referrer;
    if (ref) {
      try {
        if (new URL(ref).origin !== window.location.origin) {
          touch.referrer = ref.slice(0, MAX_LEN);
        }
      } catch {
        touch.referrer = ref.slice(0, MAX_LEN);
      }
    }

    // Nothing meaningful to record (direct visit, no referrer) — leave the
    // slot open so a later campaign click can claim it.
    if (!hasCampaignSignal(touch) && !touch.referrer) return;
    // Don't let one referrer-only record replace another.
    if (existingRaw && !hasCampaignSignal(touch)) return;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(touch));
  } catch {
    // localStorage unavailable (private mode, etc.) — never break the page.
  }
}

/** Read the persisted first-touch record. Empty object if none. */
export function getStoredFirstTouch(): FirstTouch {
  try {
    if (typeof window === "undefined") return {};
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as FirstTouch;
  } catch {
    // corrupt/unavailable storage must never break the page
  }
  return {};
}
