import type { Metadata } from "next";
import { Hero } from "@/components/book/Hero";
import { NumberRevealBlock } from "@/components/book/NumberRevealBlock";
import { NotAboutCaptivity } from "@/components/book/NotAboutCaptivity";
import { PainBlock } from "@/components/book/PainBlock";
import { DidntKnowBlock } from "@/components/book/DidntKnowBlock";
import { PromiseBlock } from "@/components/book/PromiseBlock";
import { NotAManualBlock } from "@/components/book/NotAManualBlock";
import { InsideBookQuestions } from "@/components/book/InsideBookQuestions";
import { DayTimeline } from "@/components/book/DayTimeline";
import { WhoShouldReadBlock } from "@/components/book/WhoShouldReadBlock";
import { WhatsInsideBlock } from "@/components/book/WhatsInsideBlock";
import { AuthorBlock } from "@/components/book/AuthorBlock";
import { BookArtifact } from "@/components/book/BookArtifact";
import { DontBuyBlock } from "@/components/book/DontBuyBlock";
import { FaqSection } from "@/components/book/FaqSection";
import { FinalScreen } from "@/components/book/FinalScreen";
import { StickyMobileCTA } from "@/components/book/StickyMobileCTA";
import { BOOK } from "@/lib/content";

const title = "1341 день в плену — Как выжить там, где у тебя забрали всё | Максим Теорентер";
const description =
  "Книга о 1341 дне плена, внутренней свободе, психологической устойчивости и способности человека сохранить себя в предельных обстоятельствах.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "book",
    url: "/book/1341",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 1867,
        alt: `Обложка книги «${BOOK.title}»`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: "/book/1341",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: BOOK.title,
  alternateName: BOOK.subtitle,
  author: {
    "@type": "Person",
    name: BOOK.author,
  },
  numberOfPages: BOOK.pages,
  inLanguage: "ru",
  isAccessibleForFree: false,
  offers: {
    "@type": "Offer",
    price: BOOK.price.replace("$", ""),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    // TODO: replace with the real checkout URL once payment is wired up.
    url: "https://teorentermaksim.com/book/1341",
  },
};

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sales order: hook the pain, make it theirs, land the number, reframe
          what the book actually is, show what holds a person, prove the author,
          then price, objections, FAQ, close. Tones alternate paper/deep so the
          whole page reads as one black-and-white system while scrolling. */}
      <Hero />
      <PainBlock />
      <NumberRevealBlock />
      <NotAboutCaptivity />
      <DidntKnowBlock />
      <PromiseBlock />
      <InsideBookQuestions />
      <DayTimeline />
      <NotAManualBlock />
      <WhoShouldReadBlock />
      <WhatsInsideBlock />
      <AuthorBlock />
      <BookArtifact />
      <DontBuyBlock />
      <FaqSection />
      <FinalScreen />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyMobileCTA />
    </>
  );
}
