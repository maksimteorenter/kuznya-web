import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getPresignedDownloadUrl } from "@/lib/storage";
import { createHash } from "node:crypto";

// The token in the URL is a bearer secret — we only ever look it up by its
// hash, matching how a password would be checked, so a DB read/backup leak
// can't be turned into working download links.
export async function GET(req: NextRequest, { params }: { params: { token: string } }) {
  const tokenHash = createHash("sha256").update(params.token).digest("hex");

  const record = await prisma.downloadToken.findUnique({
    where: { tokenHash },
    include: { contentFile: true },
  });

  if (!record) {
    return NextResponse.json({ error: "invalid link" }, { status: 404 });
  }

  // Expiry and download-limit only gate THIS link — they never touch
  // Entitlement. A buyer whose token ran out still owns the book; they need
  // a new link (support/self-serve "resend"), not a repurchase.
  if (record.expiresAt < new Date()) {
    return NextResponse.json({ error: "this link has expired — request a new one" }, { status: 410 });
  }
  if (record.downloadCount >= record.maxDownloads) {
    return NextResponse.json({ error: "download limit reached for this link — request a new one" }, { status: 429 });
  }

  await prisma.downloadToken.update({
    where: { id: record.id },
    data: { downloadCount: { increment: 1 }, lastDownloadAt: new Date() },
  });

  const filename = `${record.contentFile.storageKey.split("/").pop() ?? "download"}`;
  const presignedUrl = await getPresignedDownloadUrl(record.contentFile.storageKey, filename);

  // 302 to a short-lived presigned R2 URL — the buyer's browser/Telegram
  // never sees the bucket, credentials, or storage key, only this one-time
  // signed link that expires in minutes regardless of the DownloadToken's
  // own (much longer) 72h window.
  return NextResponse.redirect(presignedUrl);
}
