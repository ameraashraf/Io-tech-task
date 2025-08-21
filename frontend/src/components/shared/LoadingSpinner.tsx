"use client";

import { ReactNode } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white";
  message?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Reusable LoadingSpinner component that provides consistent loading states
 * Supports different sizes, colors, and optional loading messages
 * Maintains semantic HTML structure for accessibility
 */
export default function LoadingSpinner({
  size = "md",
  color = "primary",
  message = "Loading...",
  className = "",
  children,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const colorClasses = {
    primary: "border-primary",
    white: "border-white",
  };

  return (
    <div
      className={`text-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 ${colorClasses[color]} mx-auto`}
        aria-hidden="true"
      />
      {message && (
        <p className="mt-4 text-muted" aria-hidden="true">
          {message}
        </p>
      )}
      {children}
      <span className="sr-only">Loading content</span>
    </div>
  );
}
