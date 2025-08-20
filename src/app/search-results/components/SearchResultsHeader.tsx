"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useSearchParams } from "next/navigation";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

export default function SearchResultsHeader() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { t, ready } = useHydrationSafeTranslation();

  if (!ready) {
    return (
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-primary mb-2">
          Search Results
        </h1>
        {query && (
          <p className="text-gray-600">
            Results for:{" "}
            <span className="font-medium text-primary">"{query}"</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-primary mb-2">
        {t("pages.searchResults.title", "Search Results")}
      </h1>
      {query && (
        <p className="text-gray-600">
          {t("pages.searchResults.resultsFor", "Results for")}:{" "}
          <span className="font-medium text-primary">"{query}"</span>
        </p>
      )}
    </div>
  );
}
