"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { useSearch } from "@/features/search/useSearch";
import SearchResultItem from "./SearchResultItem";
import SearchPagination from "./SearchPagination";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import ErrorMessage from "@/components/shared/ErrorMessage";

export default function SearchResultsList() {
  const {
    results,
    isLoading,
    error,
    currentResults,
    paginationInfo,
    handlePageChange,
    handleItemsPerPageChange,
  } = useSearch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, ready } = useHydrationSafeTranslation();

  const handleItemsPerPageChangeWithURL = (items: number) => {
    handleItemsPerPageChange(items);
    updateURL(1, items);
  };

  const updateURL = (page: number, items: number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (page > 1) {
      params.set("page", page.toString());
    } else {
      params.delete("page");
    }

    if (items !== 5) {
      params.set("items", items.toString());
    } else {
      params.delete("items");
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="py-12">
          <LoadingSpinner
            message={
              ready
                ? t("pages.searchResults.loading", "Searching...")
                : "Searching..."
            }
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="py-12">
          <ErrorMessage
            message={
              ready
                ? `${t(
                    "pages.searchResults.error",
                    "Error loading search results"
                  )}: ${error}`
                : `Error: ${error}`
            }
          />
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="space-y-6">
        <div className="py-12">
          <p className="text-gray-600 text-center">
            {ready
              ? t(
                  "pages.searchResults.noResults",
                  "No results found. Try a different search term."
                )
              : "No results found. Try a different search term."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Results */}
      <div className="space-y-4">
        {currentResults.map((result) => (
          <SearchResultItem key={result.id} result={result} />
        ))}
      </div>

      {/* Pagination */}
      {paginationInfo.totalPages > 1 && (
        <SearchPagination
          currentPage={paginationInfo.currentPage}
          totalPages={paginationInfo.totalPages}
          totalResults={paginationInfo.totalResults}
          itemsPerPage={paginationInfo.itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChangeWithURL}
        />
      )}
    </div>
  );
}
