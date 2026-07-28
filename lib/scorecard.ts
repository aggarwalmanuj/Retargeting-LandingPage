// Builds the outbound link that hands a visitor off to the AI Merge Belief
// Score funnel, carrying our stored acquisition data as URL query params.
// The funnel reads these on page load (first-touch) and persists them onto
// the lead row, so the marketing team can see which ad/campaign produced a
// completed score. No API call, no other integration — our only job is to
// build the URL correctly.

import { getStoredFirstTouch } from "./attribution";

/** The Belief Score entry point. */
export const SCORECARD_BASE_URL =
  "https://www.aimerge.live/challenge/audience";

/**
 * Short slug identifying THIS landing page. The funnel uses it for two
 * things at once: acquisition reporting ("which doorway sent them") and
 * vertical selection — `retarget` maps to the funnel's `retargeting`
 * vertical, which serves the welcome-back copy instead of main's.
 */
export const LP_SLUG = "retarget";

/**
 * Channel defaults for organic / direct visitors who carry no stored ad
 * attribution. Real first-touch values from an actual ad click override
 * these per-param below; `lp` always marks the doorway regardless.
 */
const DEFAULT_UTMS: Record<string, string> = {
  utm_source: "retarget",
  utm_medium: "organic",
  utm_campaign: "retarget-doorway",
};

const REF_STORAGE_KEY = "aimerge-ref";

function newRef(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return `${LP_SLUG}_${crypto.randomUUID()}`;
    }
  } catch {
    // fall through to the best-effort fallback
  }
  return `${LP_SLUG}_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

/**
 * Stable, first-party visitor id sent as `ref`: the JOIN key the funnel
 * stores so a completed score reconciles 1:1 back to this visitor.
 * Generated once and persisted; first touch wins.
 */
export function getOrCreateVisitorRef(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.localStorage.getItem(REF_STORAGE_KEY);
    if (existing) return existing;
    const id = newRef();
    window.localStorage.setItem(REF_STORAGE_KEY, id);
    return id;
  } catch {
    // localStorage unavailable (private mode): still send a ref for this
    // click so attribution flows, even though it can't persist.
    return newRef();
  }
}

/** Read a single cookie value (browser only). Undefined if absent. */
function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * Build the full funnel URL with every value we have. Params are set via
 * URLSearchParams (encoded for us); any param we lack is omitted entirely,
 * never sent empty.
 */
export function buildScorecardUrl(): string {
  const dest = new URL(SCORECARD_BASE_URL);
  const ft = getStoredFirstTouch();

  const params: Record<string, string | undefined> = {
    // Real ad-click attribution wins; organic visitors fall back to defaults.
    utm_source: ft.utmSource ?? DEFAULT_UTMS.utm_source,
    utm_medium: ft.utmMedium ?? DEFAULT_UTMS.utm_medium,
    utm_campaign: ft.utmCampaign ?? DEFAULT_UTMS.utm_campaign,
    utm_term: ft.utmTerm,
    utm_content: ft.utmContent,
    // Click ids attribute the eventual Lead/Purchase (fired on the funnel)
    // back to this ad click — the funnel's pixel reads fbclid and sets _fbc.
    fbclid: ft.fbclid,
    gclid: ft.gclid,
    ttclid: ft.ttclid,
    msclkid: ft.msclkid,
    // Forward this page's Meta browser cookies for Conversions API match
    // quality. Best-effort.
    fbp: readCookie("_fbp"),
    fbc: readCookie("_fbc"),
    ref: getOrCreateVisitorRef(),
    // Doubles as the funnel's vertical selector (retarget -> retargeting).
    lp: LP_SLUG,
  };

  for (const [key, value] of Object.entries(params)) {
    if (value) dest.searchParams.set(key, value);
  }

  return dest.toString();
}
