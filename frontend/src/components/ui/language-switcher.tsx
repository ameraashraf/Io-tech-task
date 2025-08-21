"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

type Language = "ar" | "en";

/**
 * Language option interface for dropdown configuration
 */
interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
}

/**
 * Available language options for the switcher
 * Each option includes the language code, English label, and native label
 */
const languageOptions: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "en" },
  { code: "ar", label: "Arabic", nativeLabel: "ar" },
];

/**
 * Props interface for the LanguageSwitcher component
 */
interface LanguageSwitcherProps {
  defaultLanguage?: Language;
  onLanguageChange?: (language: Language) => void;
  className?: string;
}

/**
 * LanguageSwitcher component provides a dropdown interface for language selection
 * Handles hydration, language synchronization, and accessibility features
 * Supports RTL languages and includes smooth animations
 */
export function LanguageSwitcher({
  defaultLanguage = "en",
  onLanguageChange,
  className,
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language>(defaultLanguage);
  const [isHydrated, setIsHydrated] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Handle hydration to prevent server/client mismatch
  React.useEffect(() => {
    setIsHydrated(true);
    // Set the actual language from i18n once hydrated
    const currentLanguage = i18n.language as Language;
    if (
      currentLanguage &&
      (currentLanguage === "ar" || currentLanguage === "en")
    ) {
      setSelectedLanguage(currentLanguage);
    }
  }, [i18n.language]);

  // Sync with i18n language changes after hydration
  React.useEffect(() => {
    if (isHydrated) {
      const currentLanguage = i18n.language as Language;
      if (
        currentLanguage !== selectedLanguage &&
        (currentLanguage === "ar" || currentLanguage === "en")
      ) {
        setSelectedLanguage(currentLanguage);
      }
    }
  }, [i18n.language, selectedLanguage, isHydrated]);

  // Handle language change from i18n events
  React.useEffect(() => {
    if (isHydrated) {
      const handleLanguageChanged = (lng: string) => {
        if (lng === "ar" || lng === "en") {
          setSelectedLanguage(lng as Language);
        }
      };

      i18n.on("languageChanged", handleLanguageChanged);
      return () => {
        i18n.off("languageChanged", handleLanguageChanged);
      };
    }
  }, [i18n, isHydrated]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Handle language selection and change
   * Updates local state, i18n language, and calls optional callback
   */
  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    onLanguageChange?.(language);
    setIsOpen(false);
  };

  // Use the defaultLanguage for server-side rendering and until hydrated
  const displayLanguage = isHydrated ? selectedLanguage : defaultLanguage;
  const selectedOption = languageOptions.find(
    (option) => option.code === displayLanguage
  );

  return (
    <div
      ref={dropdownRef}
      className={cn("relative inline-block text-left", className)}
    >
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center justify-between gap-1 rounded-lg border border-white/70 bg-transparent px-2 py-2 text-sm font-medium text-white/90 transition-colors duration-200",
          "hover:bg-white/10 hover:border-white/90 focus:outline-none focus:ring-2 focus:ring-white/50",
          "min-w-[60px]",
          isOpen && "bg-white/10 border-white/90"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">{selectedOption?.nativeLabel}</span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 mt-2 w-full min-w-[80px] origin-top-right rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
            role="listbox"
            aria-label="Language options"
          >
            <div className="py-1">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleLanguageChange(option.code)}
                  className={cn(
                    "w-full px-2 py-2 text-left text-sm transition-colors duration-150",
                    "hover:bg-white/20 focus:bg-white/20 focus:outline-none",
                    "flex items-center justify-between",
                    displayLanguage === option.code
                      ? "bg-white/20 text-white font-medium"
                      : "text-white/80 hover:text-white"
                  )}
                  role="option"
                  aria-selected={displayLanguage === option.code}
                >
                  <span className="flex items-center gap-2">
                    <span>{option.nativeLabel}</span>
                  </span>
                  {displayLanguage === option.code && (
                    <span className="text-white/80">✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
