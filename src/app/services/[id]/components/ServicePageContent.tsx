import ServicePageLayout from "./ServicePageLayout";

interface ServicePageContentProps {
  service: any;
}

/**
 * ServicePageContent component provides a static version of the service page
 * Used during server-side rendering and initial hydration to prevent animation mismatches
 * This component renders the same content as ServicePageAnimated but without animations
 */
export default function ServicePageContent({
  service,
}: ServicePageContentProps) {
  return <ServicePageLayout service={service} />;
}
