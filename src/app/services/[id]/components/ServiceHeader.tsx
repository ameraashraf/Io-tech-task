interface ServiceHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

/**
 * ServiceHeader component displays the main title and description for a service page
 * Uses responsive typography and consistent spacing for optimal readability
 * Handles optional description text with proper conditional rendering
 * Supports both LTR and RTL text directions for internationalization
 */
export default function ServiceHeader({
  title,
  description,
  className = "",
}: ServiceHeaderProps) {
  return (
    <header className={`mx-auto mb-6 sm:mb-8 lg:mb-10 ${className}`}>
      {/* Service title with responsive font sizing and primary color */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-primary">
        {title}
      </h1>

      {/* Optional service description with responsive typography and muted color */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
