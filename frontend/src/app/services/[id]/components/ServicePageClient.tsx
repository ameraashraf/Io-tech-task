"use client";

import ServicePageAnimated from "./ServicePageAnimated";
import ServicePageContent from "./ServicePageContent";
import { useServicePageMount } from "./useServicePageMount";
import { useServiceTranslation } from "../hooks";

interface ServicePageClientProps {
  service: any;
}

/**
 * ServicePageClient component handles the client-side rendering of service pages
 * Manages hydration to prevent animation mismatches between server and client
 * Renders static content initially, then switches to animated version after mount
 * Handles service translations based on current language
 */
export default function ServicePageClient({ service }: ServicePageClientProps) {
  // Check if component is mounted to prevent hydration issues
  const isMounted = useServicePageMount();

  // Get translated service data based on current language
  const { getTranslatedService, ready } = useServiceTranslation();
  const translatedService = getTranslatedService(service.id);

  // Prevent hydration mismatch by not rendering animations until mounted
  // This ensures server and client render the same content initially
  if (!isMounted || !ready) {
    return <ServicePageContent service={translatedService || service} />;
  }

  // Render animated version after component is mounted and translations are ready
  return <ServicePageAnimated service={translatedService || service} />;
}
