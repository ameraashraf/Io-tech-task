import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Custom hook that provides hydration-safe translation functionality
 * Prevents translation mismatches between server and client rendering
 * Returns fallback values until hydration is complete and translations are ready
 */
export function useHydrationSafeTranslation() {
  const { t, i18n, ready } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark component as hydrated after mount
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  /**
   * Safe translation function that prevents hydration mismatches
   * Returns fallback value or key until translations are fully loaded
   * @param key - Translation key
   * @param options - Translation options including fallback
   * @returns Translated string or fallback
   */
  const safeT = (key: string, options?: any) => {
    if (!isHydrated || !ready) {
      return options?.fallback || key;
    }
    return t(key, options);
  };

  return {
    t: safeT,
    i18n,
    ready: ready && isHydrated,
    isHydrated,
  };
}
