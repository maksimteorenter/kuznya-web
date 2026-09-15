// The one shell both language trees share: fonts, chrome, analytics, skip
// link. Only `lang` differs. Route groups `(ru)` and `(ua)` each have their
// own root layout that renders this with the right value — the App Router way
// to get a per-language <html lang> while every page stays static. Reading
// the pathname in a single root layout would have made all of them dynamic.
import localFont from "next/font/local";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Analytics } from "@/components/analytics/Analytics";
import "@/app/globals.css";

// Self-hosted (not next/font/google): this environment's dev server cannot
// reach Google Fonts at runtime, which was causing multi-minute compiles and
// intermittent 500s. Local files avoid any network dependency.
const oswald = localFont({
  src: [
    { path: "../public/fonts/Oswald-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Oswald-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Oswald-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Oswald-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-oswald",
  display: "swap",
});

// Editorial voice — quotes, philosophical statements, the author's inner
// monologue. Contrasts with Oswald's industrial display weight.
const garamond = localFont({
  src: [
    { path: "../public/fonts/CormorantGaramond-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/CormorantGaramond-400-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/CormorantGaramond-500-Italic.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-garamond",
  display: "swap",
});

// UI voice — body copy, buttons, nav, FAQ, technical detail.
const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-400.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-500.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-600.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export function RootShell({ lang, children }: { lang: "ru" | "uk"; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${oswald.variable} ${garamond.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-blood focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:tracking-[0.1em] focus:text-white"
        >
          К содержанию
        </a>
        <MotionProvider>
          <SiteChrome>
            <main id="main">{children}</main>
          </SiteChrome>
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
