import type { Metadata } from "next";
import { RebootView } from "@/components/reboot/RebootView";
import { REBOOT_LANDING } from "@/lib/content";

const L = REBOOT_LANDING;

export const metadata: Metadata = {
  title: L.meta.title,
  description: L.meta.description,
  alternates: { canonical: "/reboot" },
};

export default function RebootPage() {
  return <RebootView L={L} locale="ru" />;
}
