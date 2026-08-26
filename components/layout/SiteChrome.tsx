"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Routes that ship their own full-bleed nav/footer and must not inherit the
// site's default chrome (e.g. the standalone Кузня concept preview).
const NO_CHROME_PREFIXES = ["/kuznya-preview"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = NO_CHROME_PREFIXES.some((p) => pathname?.startsWith(p));

  if (bare) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
