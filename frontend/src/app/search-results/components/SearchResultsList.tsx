"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSearch } from "@/features/search/useSearch";
import SearchResultItem from "./SearchResultItem";
import SearchPagination from "./SearchPagination";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

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
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize page and items per page from URL or reset when results change
  useEffect(() => {
    const pageParam = searchParams.get("page");
    const itemsParam = searchParams.get("items");
    const page = pageParam ? parseInt(pageParam, 10) : 1;
    const items = itemsParam ? parseInt(itemsParam, 10) : 5;

    if (results.length > 0) {
      // Validate items per page
      const validItems = [5, 10, 20].includes(items) ? items : 5;
      handleItemsPerPageChange(validItems);

      // Validate page number
      const validPage = Math.min(
        Math.max(1, page),
        Math.ceil(results.length / validItems)
      );
      handlePageChange(validPage);
    }
  }, [
    results.length,
    searchParams,
    handlePageChange,
    handleItemsPerPageChange,
  ]);

  // Update URL when page or items per page changes
  const handlePageChangeWithURL = (newPage: number) => {
    handlePageChange(newPage);
    updateURL(newPage, paginationInfo.itemsPerPage);
  };

  const handleItemsPerPageChangeWithURL = (newItemsPerPage: number) => {
    handleItemsPerPageChange(newItemsPerPage);
    updateURL(1, newItemsPerPage);
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
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {ready
              ? t("pages.searchResults.loading", "Searching...")
              : "Searching..."}
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <p className="text-red-600">
            {ready
              ? `${t(
                  "pages.searchResults.error",
                  "Error loading search results"
                )}: ${error}`
              : `Error: ${error}`}
          </p>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <p className="text-gray-600">
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
      {/* Results count and items per page selector */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          {ready
            ? t(
                "pages.searchResults.showingResults",
                "Showing {start} to {end} of {total} results"
              )
                .replace("{start}", paginationInfo.startItem.toString())
                .replace("{end}", paginationInfo.endItem.toString())
                .replace("{total}", paginationInfo.totalResults.toString())
            : `Showing ${paginationInfo.startItem} to ${paginationInfo.endItem} of ${paginationInfo.totalResults} results`}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="items-per-page" className="text-sm text-gray-600">
            {ready
              ? t("pages.searchResults.itemsPerPage", "Items per page:")
              : "Items per page:"}
          </label>
          <select
            id="items-per-page"
            value={paginationInfo.itemsPerPage}
            onChange={(e) =>
              handleItemsPerPageChangeWithURL(parseInt(e.target.value, 10))
            }
            className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      {/* Results list */}
      <div className="space-y-0">
        {currentResults.map((result, index) => (
          <div key={result.id}>
            <SearchResultItem result={result} />
            {index < currentResults.length - 1 && (
              <hr className="my-6 border-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8">
        <SearchPagination
          currentPage={paginationInfo.currentPage}
          totalPages={paginationInfo.totalPages}
          totalResults={paginationInfo.totalResults}
          itemsPerPage={paginationInfo.itemsPerPage}
          onPageChange={handlePageChangeWithURL}
        />
      </div>
    </div>
  );
}
