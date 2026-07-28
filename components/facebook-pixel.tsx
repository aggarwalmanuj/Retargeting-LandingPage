"use client";

// Meta Pixel: consent-gated loader.
// Rendered once in the root layout. The pixel sets cookies, so the script is
// only injected after GDPR consent — immediately for returning visitors who
// already accepted, or the moment the banner's Accept is pressed.
//
// Single-page site: the base snippet's PageView is the only page event
// needed, so there's no route tracker here.

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  getConsent,
  getServerConsentSnapshot,
  subscribeConsent,
} from "@/lib/consent";
import { FB_PIXEL_ID, isValidPixelId } from "@/lib/fbpixel";

export function FacebookPixel() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsent,
    getServerConsentSnapshot
  );

  if (consent !== "granted" || !isValidPixelId(FB_PIXEL_ID)) return null;

  return (
    <Script id="fb-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}
