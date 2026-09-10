import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "node:crypto";

// The missing link in the current flow: today's WayForPay button is one
// static URL shared by every buyer, so the webhook has no way to know WHO
// paid. This endpoint mints a per-buyer orderReference (embedding the
// SendPulse Telegram contact id) and redirects into WayForPay's hosted
// checkout with it — the bot calls this instead of linking straight to a
// static payment button.
//
// WayForPay's hosted-checkout GET/redirect flow also needs its own request
// signature (same HMAC-MD5 pattern as the callback, over a different field
// set) — left as a TODO here rather than guessed at, since getting this
// wrong fails silently as "invalid signature" on WayForPay's side with no
// useful error surfaced to us. Confirm the exact field order against
// WayForPay's "Merchant-side signature" docs before wiring this live.
//
// Usage: /api/checkout/start?product=book_1341&telegramContactId=XXXX&amount=15&currency=USD

const PRODUCT_CATALOG: Record<string, { amountCents: number; currency: string; title: string }> = {
  book_1341: { amountCents: 1500, currency: "USD", title: "1341 день в плену" },
  kuznya_club: { amountCents: 10000, currency: "USD", title: "Кузня Силы" },
};

export async function GET(req: NextRequest) {
  const productSlug = req.nextUrl.searchParams.get("product");
  const telegramContactId = req.nextUrl.searchParams.get("telegramContactId");

  if (!productSlug || !telegramContactId) {
    return NextResponse.json({ error: "product and telegramContactId are required" }, { status: 400 });
  }

  const product = PRODUCT_CATALOG[productSlug];
  if (!product) {
    return NextResponse.json({ error: "unknown product" }, { status: 404 });
  }

  const orderReference = `${productSlug}__${telegramContactId}__${randomBytes(6).toString("hex")}`;

  // TODO: sign this request per WayForPay's merchant-signature spec and
  // build the actual redirect (either their hosted-page GET params, or a
  // server-rendered auto-submitting POST form — WayForPay documents both;
  // pick the one matching how MERCHANT_ACCOUNT is configured) before this
  // route is used by the bot for real.
  return NextResponse.json({
    orderReference,
    amountCents: product.amountCents,
    currency: product.currency,
    title: product.title,
    note: "signing + redirect not implemented yet — see TODO in this file",
  });
}
