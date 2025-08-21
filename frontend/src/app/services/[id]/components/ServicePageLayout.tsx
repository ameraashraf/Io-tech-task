import PageHero from "@/components/shared/PageHero";
import BackLink from "@/components/shared/BackLink";
import ServiceHeader from "./ServiceHeader";
import ServiceSections from "./ServiceSections";
import ServiceConclusion from "./ServiceConclusion";
import { useDirection } from "@/hooks/useDirection";

interface ServicePageLayoutProps {
  service: any;
  children?: React.ReactNode;
}

/**
 * ServicePageLayout component provides the main structure for service pages
 * Organizes content into logical sections: hero, header, content sections, and conclusion
 * Uses a background image and responsive container for consistent styling
 * Supports RTL languages for internationalization
 */
export default function ServicePageLayout({
  service,
  children,
}: ServicePageLayoutProps) {
  const { isRTL } = useDirection();

  return (
    <article
      dir={isRTL ? "rtl" : "ltr"}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Hero section with background image */}
      <section aria-label="Service hero">
        <PageHero alt={service.title} />
      </section>

      {/* Main content body with background styling */}
      <section
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services background.png')" }}
        aria-label="Service content"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back navigation link */}
          <nav aria-label="Breadcrumb navigation">
            <BackLink />
          </nav>

          {/* Service title and description header */}
          <header>
            <ServiceHeader
              title={service.title}
              description={service.description}
            />
          </header>

          {/* Service content sections */}
          <ServiceSections sections={service.sections} />

          {/* Service conclusion and call-to-action */}
          <footer>
            <ServiceConclusion text={service.conclusion} />
          </footer>

          {/* Additional children content (for animations) */}
          {children}
        </div>
      </section>
    </article>
  );
}
