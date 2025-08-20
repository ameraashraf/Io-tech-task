"use client";

import React, { useState, useEffect } from "react";

/**
 * LoadingScreen component displays during application initialization
 * Handles language detection and provides a smooth loading experience
 * Uses static translations to avoid i18n dependency during loading
 */
export default function LoadingScreen() {
  const [language, setLanguage] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Detect language from localStorage on component mount
  useEffect(() => {
    // Get language from localStorage immediately when component mounts
    try {
      const savedLanguage = localStorage.getItem("i18nextLng");
      const detectedLang =
        savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")
          ? savedLanguage
          : "en";
      setLanguage(detectedLang);
      setIsReady(true);
    } catch (error) {
      // Fallback to English if localStorage is not available
      setLanguage("en");
      setIsReady(true);
    }
  }, []);

  // Static translations to avoid i18n dependency during loading
  // This prevents hydration issues and ensures consistent loading experience
  const translations = {
    en: {
      loading: "Loading...",
      loadingDescription:
        "Application is loading. Please wait while we prepare your experience.",
    },
    ar: {
      loading: "جاري التحميل...",
      loadingDescription: "يتم تحميل التطبيق. يرجى الانتظار بينما نعد تجربتك.",
    },
  };

  // Don't render anything until we know the language to prevent flash
  // This ensures consistent language display from the start
  if (!isReady || !language) {
    return (
      <div
        className="fixed inset-0 bg-background flex items-center justify-center z-50"
        role="status"
        aria-live="polite"
        aria-label="Loading application"
      >
        {/* Background pattern with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/backgroundImage.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        {/* Loading content - minimal without text */}
        <div className="relative z-10 text-center">
          {/* Animated loading spinner */}
          <div
            className="relative w-16 h-16 mx-auto animate-spin"
            aria-hidden="true"
          >
            <div className="absolute inset-0 border-4 border-primary-foreground/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary-foreground rounded-full"></div>
          </div>

          {/* Simple loading text */}
          <div className="mt-8" aria-hidden="true">
            <div className="flex justify-center space-x-1 rtl:space-x-reverse text-primary-foreground/60">
              <span className="animate-pulse">●</span>
              <span className="animate-pulse delay-100">●</span>
              <span className="animate-pulse delay-200">●</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentTranslations =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      role="status"
      aria-live="polite"
      aria-label="Loading application"
    >
      {/* Background pattern with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/backgroundImage.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Loading message */}
        <div className="mb-8">
          <p className="text-primary-foreground/70 text-lg" aria-hidden="true">
            {currentTranslations.loading}
          </p>
        </div>

        {/* Animated loading spinner */}
        <div
          className="relative w-16 h-16 mx-auto animate-spin"
          aria-hidden="true"
        >
          <div className="absolute inset-0 border-4 border-primary-foreground/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-foreground rounded-full"></div>
        </div>

        {/* Simple loading text */}
        <div className="mt-8" aria-hidden="true">
          <div className="flex justify-center space-x-1 rtl:space-x-reverse text-primary-foreground/60">
            <span className="animate-pulse">●</span>
            <span className="animate-pulse delay-100">●</span>
            <span className="animate-pulse delay-200">●</span>
          </div>
        </div>

        {/* Screen reader text for accessibility */}
        <span className="sr-only">
          {currentTranslations.loadingDescription}
        </span>
      </div>
    </div>
  );
}
