import { NextRequest, NextResponse } from "next/server";

// WayForPay hands the buyer back to approvedUrl with a POST carrying the
// payment payload — unless «Выключить отправку POST на returnUrl» is ticked in
// the button's settings, and it is not. A Next.js page route answers GET only,
// so that POST came back 405: the buyer paid and landed on a blank error page
// instead of the one holding their book. Verified against production on
// 2026-09-28 — GET 200, POST 405.
//
// A 303 hands the browser the same URL to re-fetch with GET, so the page
// renders no matter which way WayForPay chooses to send them. The posted
// payload is dropped deliberately: nothing on this page reads it, and a body
// the buyer's own browser carried is not proof of payment in any case — that
// belongs in the server-to-server webhook, not here.
export function middleware(req: NextRequest) {
  if (req.method === "POST") {
    return NextResponse.redirect(new URL(req.nextUrl.pathname, req.url), 303);
  }
  return NextResponse.next();
}

// Scoped to the one path a payment provider posts to. Widening this matcher
// would start rewriting POSTs meant for API routes.
export const config = {
  matcher: ["/book/1341/thank-you"],
};
