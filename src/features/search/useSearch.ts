import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import {
  setQuery,
  setShowSuggestions,
  fetchSearchSuggestions,
  performSearch,
  clearSearch,
  setCurrentPage,
  setItemsPerPage,
  resetPagination,
  selectCurrentPageResults,
  selectPaginationInfo,
} from "./searchSlice";

/**
 * Custom hook that provides comprehensive search functionality
 * Manages search state, suggestions, results, and pagination
 * Handles navigation to search results page and suggestion interactions
 */
export const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  // Get search state from Redux store
  const { query, suggestions, results, isLoading, error, showSuggestions } =
    useSelector((state: RootState) => state.search);

  // Get pagination data using selectors for performance optimization
  const currentResults = useSelector(selectCurrentPageResults);
  const paginationInfo = useSelector(selectPaginationInfo);

  /**
   * Handle search input changes
   * Updates query and fetches suggestions if query is not empty
   * @param value - New search query value
   */
  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(setQuery(value));

      if (value.trim()) {
        dispatch(fetchSearchSuggestions(value));
      } else {
        dispatch(setShowSuggestions(false));
      }
    },
    [dispatch]
  );

  /**
   * Handle search form submission
   * Performs full search and navigates to results page
   * @param searchQuery - The search query to submit
   */
  const handleSearchSubmit = useCallback(
    (searchQuery: string) => {
      if (searchQuery.trim()) {
        dispatch(performSearch(searchQuery));
        dispatch(setShowSuggestions(false));
        router.push(`/search-results?q=${encodeURIComponent(searchQuery)}`);
      }
    },
    [dispatch, router]
  );

  /**
   * Handle suggestion selection
   * Updates query, performs search, and navigates to results
   * @param suggestion - Selected suggestion object
   */
  const handleSuggestionClick = useCallback(
    (suggestion: any) => {
      dispatch(setQuery(suggestion.title));
      dispatch(setShowSuggestions(false));
      dispatch(performSearch(suggestion.title));
      router.push(`/search-results?q=${encodeURIComponent(suggestion.title)}`);
    },
    [dispatch, router]
  );

  /**
   * Clear all search state
   * Resets query, suggestions, results, and pagination
   */
  const handleClearSearch = useCallback(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  /**
   * Control suggestions dropdown visibility
   * @param show - Whether to show suggestions
   */
  const handleShowSuggestions = useCallback(
    (show: boolean) => {
      dispatch(setShowSuggestions(show));
    },
    [dispatch]
  );

  // Pagination handlers for managing search results pagination

  /**
   * Change current page
   * @param newPage - New page number
   */
  const handlePageChange = useCallback(
    (newPage: number) => {
      dispatch(setCurrentPage(newPage));
    },
    [dispatch]
  );

  /**
   * Change items per page
   * @param newItemsPerPage - New number of items per page
   */
  const handleItemsPerPageChange = useCallback(
    (newItemsPerPage: number) => {
      dispatch(setItemsPerPage(newItemsPerPage));
    },
    [dispatch]
  );

  /**
   * Reset pagination to first page
   */
  const handleResetPagination = useCallback(() => {
    dispatch(resetPagination());
  }, [dispatch]);

  return {
    // State values
    query,
    suggestions,
    results,
    isLoading,
    error,
    showSuggestions,
    currentResults,
    paginationInfo,

    // Search action handlers
    handleSearchChange,
    handleSearchSubmit,
    handleSuggestionClick,
    handleClearSearch,
    handleShowSuggestions,

    // Pagination action handlers
    handlePageChange,
    handleItemsPerPageChange,
    handleResetPagination,
  };
};
