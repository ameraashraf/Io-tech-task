"use client";

import { useTranslation } from "react-i18next";
import { useMemo, useEffect, useState } from "react";

export function useDirection() {
  const { i18n } = useTranslation();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const direction = useMemo(() => {
    // During SSR or before hydration, default to LTR to prevent mismatch
    if (!isHydrated) {
      return "ltr";
    }
    return i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language, isHydrated]);

  const isRTL = direction === "rtl";
  const isLTR = direction === "ltr";

  return {
    direction,
    isRTL,
    isLTR,
    language: isHydrated ? i18n.language : "en",
    isHydrated,
  };
}
