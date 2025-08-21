import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files for English and Arabic
import enTranslations from "../locales/en.json";
import arTranslations from "../locales/ar.json";

// Define available languages and their translation resources
const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

// Check if we're running on the server side
// This is crucial for preventing hydration mismatches between server and client
const isServer = typeof window === "undefined";

// Initialize i18next with React integration
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    lng: isServer ? "en" : undefined, // Force English on server to prevent hydration mismatch
    debug: false,

    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },

    detection: {
      // Only detect language on client side to prevent hydration mismatch
      // Server always uses English, client detects from localStorage, navigator, or HTML tag
      order: isServer ? [] : ["localStorage", "navigator", "htmlTag"],
      caches: isServer ? [] : ["localStorage"], // Cache detected language in localStorage
    },

    // Ensure consistent behavior on server and client
    react: {
      useSuspense: false, // Disable Suspense to prevent hydration issues
    },
  });

export default i18n;
