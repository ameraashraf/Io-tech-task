"use client";
import { motion, AnimatePresence } from "framer-motion";
import { SearchSuggestion } from "@/features/search/searchSlice";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

interface Props {
  suggestions: SearchSuggestion[];
  isLoading: boolean;
  onSuggestionClick: (suggestion: SearchSuggestion) => void;
}

export default function SearchSuggestions({
  suggestions,
  isLoading,
  onSuggestionClick,
}: Props) {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onSuggestionClick(suggestion);
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="p-4 text-center text-gray-500">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-sm">
            {ready
              ? t("pages.searchResults.loading", "Searching...")
              : "Searching..."}
          </p>
        </div>
      </motion.div>
    );
  }

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-80 overflow-y-auto"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="py-2">
          {suggestions.map((suggestion, index) => {
            // Get the appropriate title and category based on language direction
            const displayTitle =
              isRTL && suggestion.titleAr
                ? suggestion.titleAr
                : suggestion.title;
            const displayCategory =
              isRTL && suggestion.categoryAr
                ? suggestion.categoryAr
                : suggestion.category;

            // Show both languages when available for better user experience
            const showBilingual =
              suggestion.titleAr && suggestion.title !== suggestion.titleAr;

            return (
              <motion.button
                key={suggestion.id}
                initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between group"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                    {displayTitle}
                  </div>
                  {/* Show alternative language title when available */}
                  {showBilingual && (
                    <div className="text-sm text-gray-600 mt-1 italic">
                      {isRTL ? suggestion.title : suggestion.titleAr}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mt-1">
                    {displayCategory}
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-primary transition-colors">
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
                      d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
                    />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
