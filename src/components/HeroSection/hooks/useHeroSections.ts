import { useQuery } from "@tanstack/react-query";
import { HeroSectionResponse } from "@/app/types/types";
import { fetchHeroSections } from "../services/heroSections";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const useHeroSections = (locale: string = "en") => {
  return useQuery({
    queryKey: ["hero-sections", locale],
    queryFn: () => fetchHeroSections(locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

// Helper function to transform API data to match existing hero slides structure
export const transformHeroSlides = (
  apiData: HeroSectionResponse
): Array<{
  id: string;
  title: string;
  description: string;
  ctaText: string;
}> => {
  if (!apiData?.data?.[0]?.heroSection) {
    return [];
  }

  return apiData.data[0].heroSection.map((slide) => ({
    id: `slide-${slide.id}`,
    title: slide.title,
    description: slide.description,
    ctaText: slide.ctaText,
  }));
};
