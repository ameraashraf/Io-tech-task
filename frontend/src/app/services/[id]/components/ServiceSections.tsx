/**
 * Interface for individual service section data
 * Defines the structure of content sections within a service page
 * Each section can contain a title, main content, and optional bullet points
 */
interface ServiceSection {
  title?: string; // Optional section title for better content organization
  content?: string; // Main content text describing the service aspect
  items?: string[]; // List of bullet points or features for detailed breakdown
}

interface ServiceSectionsProps {
  sections?: ServiceSection[];
  className?: string;
}

/**
 * ServiceSections component renders the main content areas of a service page
 * Handles dynamic content rendering with titles, descriptions, and bullet point lists
 * Includes responsive design and RTL support for internationalization
 * Uses a structured layout with visual indicators for better content hierarchy
 */
export default function ServiceSections({
  sections = [],
  className = "",
}: ServiceSectionsProps) {
  // Return null if no sections are provided or sections is not an array
  // This prevents rendering empty containers and improves performance
  if (!Array.isArray(sections) || sections.length === 0) return null;

  return (
    <section
      className={`mx-auto mt-6 sm:mt-8 lg:mt-10 space-y-6 sm:space-y-8 lg:space-y-10 ${className}`}
      aria-label="Service details"
    >
      {sections.map((sec, idx) => (
        <article key={idx} className="mb-4 sm:mb-6 lg:mb-8">
          {/* Section title with responsive typography and primary color */}
          {sec.title && (
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-primary">
              {sec.title}
            </h2>
          )}

          {/* Content area with decorative bullet point indicator */}
          <div className="flex gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
            {/* Decorative bullet point indicator for visual hierarchy */}
            <span
              className="flex h-2 w-2 sm:h-3 sm:w-3 shrink-0 grow-0 items-center justify-center rounded-xs bg-primary text-white mt-2 sm:mt-3"
              aria-hidden="true"
            ></span>

            {/* Main content text with responsive styling and muted color */}
            {sec.content && (
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 font-bold max-w-4xl leading-relaxed">
                {sec.content}
              </p>
            )}
          </div>

          {/* Bullet point list with RTL support for Arabic text */}
          {Array.isArray(sec.items) && sec.items.length > 0 && (
            <ul
              className="list-disc pl-6 rtl:pr-6 rtl:pl-0 sm:pl-8 sm:rtl:pr-8 sm:rtl:pl-0 lg:pl-16 lg:rtl:pr-16 lg:rtl:pl-0 space-y-1 sm:space-y-2 mt-2 sm:mt-3 lg:mt-4"
              role="list"
            >
              {sec.items.map((item, i) => (
                <li
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                  key={i}
                  role="listitem"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}
