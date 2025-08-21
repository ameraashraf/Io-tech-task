"use client";

import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from "react-hot-toast";
import LanguageInitializer from "./LanguageInitializer";
import LoadingScreen from "./LoadingScreen";
import "@/lib/i18n";

/**
 * AppProviders component that wraps the entire application with necessary providers
 * Handles global state management, data fetching, internationalization, and loading states
 */
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a stable QueryClient instance that persists across re-renders
  // Configure default options for queries and mutations
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1, // Only retry failed requests once
            staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
            refetchOnWindowFocus: false, // Don't refetch when window regains focus
          },
          mutations: {
            retry: 0, // Don't retry failed mutations
          },
        },
      })
  );

  // State management for loading and initialization flow
  const [isLanguageInitialized, setIsLanguageInitialized] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch between server and client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * Callback function called when language initialization is complete
   * Ensures minimum loading time for smooth user experience and handles fade-out transition
   */
  const handleLanguageInitialized = () => {
    setIsLanguageInitialized(true);

    // Ensure minimum loading time for smooth user experience
    const minimumLoadTime = 400; // 400ms minimum

    setTimeout(() => {
      setIsTransitioning(true);

      // Add fade out transition time
      setTimeout(() => {
        setShowLoading(false);
        setIsTransitioning(false);
      }, 300); // 300ms fade out
    }, minimumLoadTime);
  };

  // Prevent hydration mismatch by not showing loading screen until mounted
  // This ensures server and client render the same content initially
  if (!isMounted) {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LanguageInitializer onInitialized={handleLanguageInitialized} />
          {children}
          <Toaster position="top-center" />
        </Provider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <LanguageInitializer onInitialized={handleLanguageInitialized} />
        {showLoading ? (
          // Show loading screen with fade transition
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <LoadingScreen />
          </div>
        ) : (
          // Show main application content
          <>
            {children}
            <Toaster position="top-center" />
          </>
        )}
      </Provider>
    </QueryClientProvider>
  );
}
