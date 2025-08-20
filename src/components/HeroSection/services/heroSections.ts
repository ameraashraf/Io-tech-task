import axios from "axios";
import { HeroSectionResponse } from "@/app/types/types";

const API_BASE_URL = "http://localhost:1337/api";

export const fetchHeroSections = async (
  locale: string = "en"
): Promise<HeroSectionResponse> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/hero-sections?populate[heroSection][populate]=*&locale=${locale}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching hero sections:", error);
    throw new Error("Failed to fetch hero sections");
  }
};
