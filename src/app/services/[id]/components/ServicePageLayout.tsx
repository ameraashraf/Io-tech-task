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
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero section with background image */}
      <div>
        <PageHero alt={service.title} />
      </div>

      {/* Main content body with background styling */}
      <div
        className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/services background.png')" }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back navigation link */}
          <div>
            <BackLink />
          </div>

          {/* Service title and description header */}
          <div>
            <ServiceHeader
              title={service.title}
              description={service.description}
            />
          </div>

          {/* Service content sections */}
          <div>
            <ServiceSections sections={service.sections} />
          </div>

          {/* Service conclusion and call-to-action */}
          <div>
            <ServiceConclusion text={service.conclusion} />
          </div>

          {/* Additional children content (for animations) */}
          {children}
        </div>
      </div>
    </div>
  );
}
