// Unified event tracking: one call fans out to GA4 and the Meta Pixel.
// Both are optional — every function is a silent no-op until the
// corresponding NEXT_PUBLIC_* id is configured, so this is safe to ship
// before the ad/analytics accounts exist.

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Funnel vocabulary — keep names stable, dashboards will be built on them. */
export type TrackEvent =
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "scroll_100"
  | "cta_to_price"
  | "checkout_click"
  | "reader_open"
  | "reader_page"
  | "reader_finish";

export function track(event: TrackEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
  window.fbq?.("trackCustom", event, params);

  // Standard Meta events on top of the custom ones, so ad optimisation
  // works out of the box once the pixel id is set.
  if (event === "checkout_click") {
    window.fbq?.("track", "InitiateCheckout", {
      content_name: "1341-book",
      currency: "USD",
      value: 10,
    });
  }
  if (event === "reader_open") {
    window.fbq?.("track", "ViewContent", { content_name: "1341-excerpt" });
  }
}
