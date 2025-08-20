"use client";

import React from "react";

/**
 * Props for `FooterLinks`.
 * - `children`: list items (<li>) with link content.
 */
interface FooterLinksProps {
  children?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

/**
 * Wrapper for footer navigation links. Expects <li> children and
 * handles responsive grid layout.
 */
export default function FooterLinks({
  children,
  ariaLabel = "Footer links",
  className = "",
}: FooterLinksProps) {
  return (
    <ul
      className={`footer-links grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 text-center w-full xl:w-auto ${className}`}
      role="list"
      aria-label={ariaLabel}
    >
      {children}
    </ul>
  );
}
