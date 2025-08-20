"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageInitializerProps {
  onInitialized?: () => void;
}

/**
 * LanguageInitializer component handles the complex process of setting up
 * internationalization, RTL support, and language persistence
 * This component doesn't render anything but manages global language state
 */
export default function LanguageInitializer({
  onInitialized,
}: LanguageInitializerProps) {
  const { i18n } = useTranslation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  /**
   * Enhanced direction and language handling function
   * Sets up HTML attributes, CSS classes, and localStorage for language persistence
   * Dispatches custom events to notify other components when language is ready
   */
  const handleLanguageChange = (lng: string) => {
    if (typeof window === "undefined") return;

    const isRTL = lng === "ar";
    const htmlElement = document.documentElement;

    // Set language and direction with explicit attributes for accessibility
    htmlElement.setAttribute("lang", lng);
    htmlElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Add/remove RTL class for additional styling control
    // This allows CSS to target RTL-specific styles
    if (isRTL) {
      htmlElement.classList.add("rtl");
      htmlElement.classList.remove("ltr");
    } else {
      htmlElement.classList.add("ltr");
      htmlElement.classList.remove("rtl");
    }

    // Store the language preference in localStorage for persistence
    try {
      localStorage.setItem("i18nextLng", lng);
    } catch (error) {
      console.warn("Could not save language preference:", error);
    }

    // Dispatch a custom event to notify components that language is ready
    // This allows other components to react to language changes
    const event = new CustomEvent("languageReady", {
      detail: { language: lng, isRTL },
    });
    window.dispatchEvent(event);
  };

  // First useEffect: Handle mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Main language initialization effect
  useEffect(() => {
    if (isMounted && !isInitialized) {
      const initializeLanguage = async () => {
        try {
          // Add a small delay to ensure i18n is fully loaded
          await new Promise((resolve) => setTimeout(resolve, 50));

          // Get saved language from localStorage if available
          let savedLanguage: string | null = null;
          try {
            savedLanguage = localStorage.getItem("i18nextLng");
          } catch (error) {
            console.warn("Could not access localStorage:", error);
          }

          // If we have a saved language and it's valid, use it
          if (
            savedLanguage &&
            (savedLanguage === "ar" || savedLanguage === "en")
          ) {
            // If we have a saved language and it's different from current, change it
            if (savedLanguage !== i18n.language) {
              await i18n.changeLanguage(savedLanguage);
            }
            handleLanguageChange(savedLanguage);
          } else {
            // No saved language, use current language or default to 'en'
            const currentLang =
              i18n.language === "en" || i18n.language === "ar"
                ? i18n.language
                : "en";

            // Ensure we change to the correct language if needed
            if (currentLang !== i18n.language) {
              await i18n.changeLanguage(currentLang);
            }

            handleLanguageChange(currentLang);
          }

          setIsInitialized(true);
          // Notify parent that initialization is complete
          onInitialized?.();
        } catch (error) {
          console.warn("Failed to initialize language:", error);
          // Fallback to English if initialization fails
          try {
            await i18n.changeLanguage("en");
            handleLanguageChange("en");
          } catch (fallbackError) {
            console.error("Failed to set fallback language:", fallbackError);
            handleLanguageChange("en");
          }

          setIsInitialized(true);
          onInitialized?.();
        }
      };

      // Add a timeout to prevent infinite loading if something goes wrong
      const timeoutId = setTimeout(() => {
        if (!isInitialized) {
          console.warn("Language initialization timed out, using fallback");
          handleLanguageChange("en");
          setIsInitialized(true);
          onInitialized?.();
        }
      }, 3000); // 3 second timeout

      initializeLanguage();

      // Listen for language changes after initialization
      const handleLanguageChanged = (lng: string) => {
        handleLanguageChange(lng);
      };

      i18n.on("languageChanged", handleLanguageChanged);

      return () => {
        clearTimeout(timeoutId);
        i18n.off("languageChanged", handleLanguageChanged);
      };
    }
  }, [i18n, isInitialized, isMounted, onInitialized]);

  // Handle language changes after initialization
  // This ensures the DOM is updated when language changes
  useEffect(() => {
    if (isInitialized) {
      handleLanguageChange(i18n.language);
    }
  }, [i18n.language, isInitialized]);

  return null; // This component doesn't render anything
}
