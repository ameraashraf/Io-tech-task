import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useTranslation } from "react-i18next";
import { serviceData } from "../data/services";

/**
 * Custom hook to handle service translations
 * Provides translated service data based on current language
 * Falls back to original service data if translations are not available
 */
export function useServiceTranslation() {
  const { t, ready } = useHydrationSafeTranslation();
  const { i18n } = useTranslation();

  /**
   * Get translated service data for a specific service ID
   * @param serviceId - The service identifier
   * @returns Translated service object or original if translation not available
   */
  const getTranslatedService = (serviceId: string) => {
    const service = serviceData[serviceId as keyof typeof serviceData];
    if (!service) return null;

    // If not ready or not Arabic, return original service
    if (!ready || i18n.language !== "ar") {
      return service;
    }

    // Map service IDs to translation keys
    const serviceKeyMap: Record<string, string> = {
      "legal-consultation": "legalConsultation",
      "foreign-investment": "foreignInvestment",
      contracts: "contracts",
      insurance: "insurance",
      "defense-cases": "defenseCases",
      "banks-financial": "banksFinancial",
      "corporate-governance": "corporateGovernance",
      "internal-regulations": "internalRegulations",
      "companies-institutions": "companiesInstitutions",
      arbitration: "arbitration",
      "intellectual-property": "intellectualProperty",
      "corporate-restructuring": "corporateRestructuring",
      "establishing-companies": "establishingCompanies",
      "commercial-agencies": "commercialAgencies",
      "vision-2030": "supportingVision2030",
      "companies-liquidation": "companiesLiquidation",
    };

    const translationKey = serviceKeyMap[serviceId];
    if (!translationKey) return service;

    // Build translated service object
    const translatedService: any = {
      ...service,
      title: t(`pages.services.${translationKey}.title`, service.title),
      description: t(
        `pages.services.${translationKey}.description`,
        service.description
      ),
      conclusion: t(
        `pages.services.${translationKey}.conclusion`,
        service.conclusion
      ),
    };

    // Handle sections if they exist
    if (service.sections && Array.isArray(service.sections)) {
      translatedService.sections = service.sections.map(
        (section: any, index: number) => {
          const translatedSection = { ...section };

          // Translate section title and content
          if (section.title) {
            const sectionKey = getSectionKey(translationKey, index);
            if (sectionKey) {
              translatedSection.title = t(
                `pages.services.${translationKey}.sections.${sectionKey}.title`,
                section.title
              );
              translatedSection.content = t(
                `pages.services.${translationKey}.sections.${sectionKey}.content`,
                section.content
              );

              // Translate items if they exist
              if (section.items && Array.isArray(section.items)) {
                translatedSection.items = section.items.map(
                  (item: string, itemIndex: number) =>
                    t(
                      `pages.services.${translationKey}.sections.${sectionKey}.items.${itemIndex}`,
                      item
                    )
                );
              }
            }
          }

          return translatedSection;
        }
      );
    }

    return translatedService;
  };

  /**
   * Helper function to get section translation keys
   * Maps section indices to specific translation keys for detailed services
   */
  const getSectionKey = (serviceKey: string, index: number): string | null => {
    const sectionMaps: Record<string, string[]> = {
      legalConsultation: ["generalLegal", "corporateLegal", "individualLegal"],
      foreignInvestment: [
        "marketEntry",
        "regulatoryCompliance",
        "operationalSupport",
      ],
    };

    return sectionMaps[serviceKey]?.[index] || null;
  };

  return {
    getTranslatedService,
    ready,
    isArabic: i18n.language === "ar",
  };
}
