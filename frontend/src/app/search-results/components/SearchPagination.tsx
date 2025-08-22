"use client";
import { useMemo, KeyboardEvent, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export default function SearchPagination({
  currentPage,
  totalPages,
  totalResults,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: SearchPaginationProps) {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
        break;
      case "ArrowRight":
        e.preventDefault();
        if (currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
        break;
      case "Home":
        e.preventDefault();
        onPageChange(1);
        break;
      case "End":
        e.preventDefault();
        onPageChange(totalPages);
        break;
    }
  };

  // Don't show pagination if there are no results or only one page
  if (totalResults === 0 || totalPages <= 1) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-between"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="navigation"
      aria-label="Search results pagination"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="text-sm text-gray-600">
        {ready
          ? t(
              "pages.searchResults.showingResults",
              "Showing {start} to {end} of {total} results"
            )
              .replace(
                "{start}",
                ((currentPage - 1) * itemsPerPage + 1).toString()
              )
              .replace(
                "{end}",
                Math.min(currentPage * itemsPerPage, totalResults).toString()
              )
              .replace("{total}", totalResults.toString())
          : `Showing ${(currentPage - 1) * itemsPerPage + 1} to ${Math.min(
              currentPage * itemsPerPage,
              totalResults
            )} of ${totalResults} results`}
        <span className="ml-2">
          {ready
            ? t("pages.searchResults.page", "Page {current} of {total}")
                .replace("{current}", currentPage.toString())
                .replace("{total}", totalPages.toString())
            : `(Page ${currentPage} of ${totalPages})`}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors",
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          )}
          aria-label={
            ready
              ? t("pages.searchResults.previousPage", "Go to previous page")
              : "Go to previous page"
          }
        >
          {isRTL ? ">" : "<"}
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                page === currentPage
                  ? "bg-primary text-white"
                  : page === "..."
                  ? "text-gray-400 cursor-default"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              aria-label={
                page === "..."
                  ? ready
                    ? t("pages.searchResults.morePages", "More pages")
                    : "More pages"
                  : ready
                  ? t(
                      "pages.searchResults.goToPage",
                      "Go to page {page}"
                    ).replace("{page}", page.toString())
                  : `Go to page ${page}`
              }
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors",
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          )}
          aria-label={
            ready
              ? t("pages.searchResults.nextPage", "Go to next page")
              : "Go to next page"
          }
        >
          {isRTL ? "<" : ">"}
        </button>
      </div>
    </div>
  );
}
