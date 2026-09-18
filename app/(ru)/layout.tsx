import type { Metadata } from "next";
import { RootShell } from "@/components/layout/RootShell";

export const metadata: Metadata = {
  // Canonical host is the www one the apex redirects to; using the bare domain
  // here made every generated absolute URL a redirect hop.
  metadataBase: new URL("https://www.teorentermaksim.com"),
  title: {
    default: "Максим Теорентер — вернуть опору в себе и начать двигаться дальше",
    template: "%s | Максим Теорентер",
  },
  description:
    "Максим Теорентер: практические программы для тех, кто переживает тяжёлый период или чувствует, что застрял. «Перезагрузка», «Кузня силы», личная работа, книга «1341 день в плену».",
  applicationName: "Кузня Силы",
  authors: [{ name: "Максим Теорентер" }],
  creator: "Максим Теорентер",
  publisher: "Максим Теорентер",
  keywords: [
    "Максим Теорентер",
    "1341 день в плену",
    "книга о плене",
    "психологическая устойчивость",
    "Кузня Силы",
    "как пережить кризис",
    "мемуары о плене",
  ],
  // Google Search Console ownership token for www.teorentermaksim.com.
  // Google revokes verification if this disappears, so it lives in code
  // rather than an env var that can be lost on a project migration.
  verification: {
    google:
      process.env.NEXT_PUBLIC_GSC_VERIFICATION ??
      "8fP2EqnAI-moZsVGeh6OIjqsnOQZgtgEJnWtf-L8zhw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Максим Теорентер",
    locale: "ru_RU",
    alternateLocale: ["uk_UA"],
    type: "website",
  },
  // Matches the paper ground so mobile browser chrome does not clash.
  themeColor: "#EDEAE4",
};

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ru">{children}</RootShell>;
}
