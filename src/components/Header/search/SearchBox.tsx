"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { Input } from "@/components/ui/input";
import { useSearch } from "@/features/search/useSearch";
import SearchSuggestions from "./SearchSuggestions";

// Helper function to detect Arabic text (imported from searchSlice)
const containsArabic = (text: string): boolean => {
  const arabicRegex =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
};

interface SearchBoxProps {
  isOpen: boolean;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  boxRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * SearchBox component provides a comprehensive search interface
 * Includes autocomplete suggestions, keyboard navigation, and accessibility features
 * Uses Framer Motion for smooth animations and transitions
 */
export default function SearchBox({
  isOpen,
  onClose,
  inputRef,
  boxRef,
}: SearchBoxProps) {
  const { t } = useHydrationSafeTranslation();

  // Get search functionality from custom hook
  // This includes query management, suggestions, and search actions
  const {
    query,
    suggestions,
    isLoading,
    showSuggestions,
    handleSearchChange,
    handleSearchSubmit,
    handleSuggestionClick,
    handleShowSuggestions,
  } = useSearch();

  /**
   * Handle search input changes
   * Updates the search query and triggers suggestion fetching
   */
  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchChange(e.target.value);
    },
    [handleSearchChange]
  );

  /**
   * Handle keyboard events for enhanced user experience
   * Enter key submits the search, Escape key closes the search box
   */
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && query.trim()) {
        e.preventDefault();
        handleSearchSubmit(query);
        onClose();
      }
    },
    [query, handleSearchSubmit, onClose]
  );

  /**
   * Handle search form submission
   * Prevents default form behavior and triggers search if query is valid
   */
  const handleFormSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        handleSearchSubmit(query);
        onClose();
      }
    },
    [query, handleSearchSubmit, onClose]
  );

  /**
   * Handle suggestion selection
   * Navigates to the selected suggestion and closes the search box
   */
  const handleSuggestionSelect = React.useCallback(
    (suggestion: any) => {
      handleSuggestionClick(suggestion);
      onClose();
    },
    [handleSuggestionClick, onClose]
  );

  /**
   * Handle clearing the search input
   * Resets the query and focuses the input
   */
  const handleClearInput = React.useCallback(() => {
    handleSearchChange("");
    inputRef.current?.focus();
  }, [handleSearchChange]);

  // Don't render anything if search box is not open
  if (!isOpen) return null;

  return (
    <motion.div
      ref={boxRef}
      className="relative"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 12 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <form
        role="search"
        aria-label={t("header.search.searchTheSite", "Site search")}
        onSubmit={handleFormSubmit}
        className="relative w-[300px] md:w-[360px] xl:w-[350px]"
      >
        {/* Hidden label for screen readers */}
        <label htmlFor="site-search-input" className="sr-only">
          {t("header.search.searchTheSite", "Search the site")}
        </label>

        {/* Search icon positioned absolutely */}
        <div className="pointer-events-none absolute left-3 rtl:right-3 rtl:left-auto top-1/2 -translate-y-1/2">
          <Image
            src="/Search.png"
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
        </div>

        {/* Main search input with RTL support */}
        <Input
          id="site-search-input"
          name="q"
          ref={inputRef}
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={t("header.search.placeholder", "Type to search...")}
          autoComplete="off"
          className="h-10 w-full rounded-2xl border border-white/70 bg-transparent pl-10 rtl:pr-10 rtl:pl-10 pr-20 text-white placeholder:text-white/60 focus:border-white focus:ring-white/30"
        />

        {/* Search button with loading state */}
        <button
          type="submit"
          aria-label={t("header.search.searchTheSite", "Search")}
          disabled={isLoading}
          className="absolute right-8 rtl:left-8 rtl:right-auto top-1/2 -translate-y-1/2 rounded-full p-1 text-white/80 hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            // Loading spinner when search is in progress
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            // Search icon when not loading
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </button>

        {/* Clear button - only shown when there's text in the input */}
        {query.trim() && (
          <button
            type="button"
            aria-label={t("header.search.clearSearch", "Clear search")}
            onClick={handleClearInput}
            className="absolute right-5 rtl:left-5 rtl:right-auto top-1/2 -translate-y-1/2 rounded-full p-1 text-white/80 hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Search suggestions dropdown */}
        {showSuggestions && (
          <SearchSuggestions
            suggestions={suggestions}
            isLoading={isLoading}
            onSuggestionClick={handleSuggestionSelect}
          />
        )}

        {/* Search hint when query is entered but no suggestions are shown */}
        {!showSuggestions && query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-1 text-xs text-white/60 text-center">
            {t(
              "pages.searchResults.searchHint",
              "Press Enter or click search to find results"
            )}
            {containsArabic(query) && (
              <div className="mt-1 text-xs text-white/50">
                {t(
                  "pages.searchResults.arabicSearchHint",
                  "Searching in Arabic content"
                )}
              </div>
            )}
          </div>
        )}
      </form>
    </motion.div>
  );
}
