"use client";

import React from "react";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

/**
 * Props for `FooterBottom`.
 * - `children`: usually a set of footer links rendered before the copyright.
 */
interface FooterBottomProps {
  children?: React.ReactNode;
  year?: number;
}

/**
 * Bottom area of the site footer. Arranges provided content and shows copyright.
 */
export default function FooterBottom({ children, year }: FooterBottomProps) {
  const { t, ready, isHydrated } = useHydrationSafeTranslation();
  const displayYear = year ?? (isHydrated ? new Date().getFullYear() : 2024);
  return (
    <div className="footer-section fade-in-up flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-between gap-4 md:gap-8 py-6 md:py-8 -mx-4 xl:mx-0 px-4 xl:px-0">
      {children}

      <p className="copyright mt-4 xl:mt-0" aria-live="polite">
        © {displayYear}. {t("footer.copyright", "All rights reserved.")}
      </p>
    </div>
  );
}
