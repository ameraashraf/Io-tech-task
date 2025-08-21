"use client";

import Link from "next/link";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

interface BackLinkProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackLink({
  href = "/",
  label,
  className = "",
}: BackLinkProps) {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  // Use translation for default label, fallback to prop or hardcoded text
  const displayLabel = label || t("common.back", "Back");

  if (!ready) {
    // Show loading state or default content during hydration
    return (
      <div className={`mb-8 sm:mb-12 lg:mb-16 ${className}`}>
        <div className="text-primary/80 font-bold flex items-center gap-2 text-lg sm:text-xl lg:text-2xl">
          <span className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={isRTL ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
            </svg>
          </span>
          {label || "Back"}
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-8 sm:mb-12 lg:mb-16 ${className}`}>
      <Link
        href={href}
        className="text-primary/80 font-bold flex items-center gap-2 text-lg sm:text-xl lg:text-2xl"
      >
        <span className="text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Flip arrow direction for RTL */}
            <path d={isRTL ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"} />
          </svg>
        </span>
        {displayLabel}
      </Link>
    </div>
  );
}
