import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SearchResult } from "@/features/search/searchSlice";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

interface Props {
  result: SearchResult;
}

export default function SearchResultItem({ result }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Get the appropriate title and excerpt based on language direction
  const displayTitle = isRTL && result.titleAr ? result.titleAr : result.title;
  const displayExcerpt =
    isRTL && result.excerptAr ? result.excerptAr : result.excerpt;

  return (
    <article className="py-4" dir={isRTL ? "rtl" : "ltr"}>
      <h3 className="text-lg font-medium text-primary mb-2">{displayTitle}</h3>

      {isExpanded && (
        <p className="text-gray-600 mb-4 leading-relaxed">{displayExcerpt}</p>
      )}

      <button
        onClick={toggleExpanded}
        className="inline-flex items-center text-primary hover:text-primary/80 font-medium cursor-pointer transition-colors underline mb-4 mt-2"
      >
        {isExpanded
          ? ready
            ? t("pages.searchResults.readLess", "Read less")
            : "Read less"
          : ready
          ? t("pages.searchResults.readMore", "Read more")
          : "Read more"}
      </button>
    </article>
  );
}
