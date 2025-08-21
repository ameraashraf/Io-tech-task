interface ServiceConclusionProps {
  text?: string;
  className?: string;
}

/**
 * ServiceConclusion component displays the closing content for a service page
 * Renders as a footer element with a top border to separate it from main content
 * Only renders when conclusion text is provided, otherwise returns null
 * Supports both LTR and RTL text directions for internationalization
 */
export default function ServiceConclusion({
  text,
  className = "",
}: ServiceConclusionProps) {
  // Return null if no conclusion text is provided
  // This prevents rendering empty footer elements and improves performance
  if (!text) return null;

  return (
    <footer
      className={`mx-auto mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-10 border-t border-gray-200 ${className}`}
    >
      {/* Conclusion text with responsive typography and muted color */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {text}
      </p>
    </footer>
  );
}
