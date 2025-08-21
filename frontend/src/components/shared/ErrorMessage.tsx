"use client";

interface ErrorMessageProps {
  message?: string;
  className?: string;
  fallbackMessage?: string;
}

/**
 * Reusable ErrorMessage component that provides consistent error states
 * Supports custom error messages and fallback text
 * Maintains semantic HTML structure for accessibility
 */
export default function ErrorMessage({
  message,
  className = "",
  fallbackMessage = "An error occurred. Please try again later.",
}: ErrorMessageProps) {
  return (
    <div
      className={`text-center ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <p className="text-red-500" aria-hidden="true">
        {message || fallbackMessage}
      </p>
      <span className="sr-only">Error: {message || fallbackMessage}</span>
    </div>
  );
}
