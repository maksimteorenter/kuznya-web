import { Button } from "@/components/ui/Button";
import { BOOK } from "@/lib/content";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-void/95 px-4 py-3 backdrop-blur md:hidden">
      <Button href={BOOK.checkoutUrl} className="w-full">
        Получить книгу · {BOOK.price}
      </Button>
    </div>
  );
}
