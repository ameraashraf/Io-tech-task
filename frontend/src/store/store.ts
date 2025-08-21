import { configureStore } from "@reduxjs/toolkit";
import subscriptionFormReducer from "@/features/subscriptionForm/subscriptionFormSlice";
import searchReducer from "@/features/search/searchSlice";

/**
 * Redux store configuration
 * Combines all feature slices into a single store
 * Uses Redux Toolkit for simplified store setup and development tools
 */
export const store = configureStore({
  reducer: {
    subscriptionForm: subscriptionFormReducer, // Manages newsletter subscription form state
    search: searchReducer, // Manages search functionality and results
  },
});

// Export TypeScript types for use throughout the application
// These types are inferred from the store configuration
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
