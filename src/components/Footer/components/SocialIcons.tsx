"use client";
import React from "react";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
/**
 * Props for `SocialIcons`.
 * - `children`: list items (<li>) with individual social links.
 */
interface SocialIconsProps {
  children?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

/**
 * Horizontal list wrapper for social media icons. Expects <li> children.
 */
export default function SocialIcons({
  children,
  ariaLabel,
  className = "",
}: SocialIconsProps) {
  const { t, ready } = useHydrationSafeTranslation();
  const defaultAriaLabel = ariaLabel || t("footer.socialMedia", "Social media");

  return (
    <ul
      className={`social-icons flex items-center justify-center flex-wrap gap-6 md:gap-7 md:mt-0 ${className}`}
      role="list"
      aria-label={defaultAriaLabel}
    >
      {children}
    </ul>
  );
}
