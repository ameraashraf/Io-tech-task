import axios from "axios";
import { TeamSectionResponse } from "@/app/types/types";

const API_BASE_URL = "http://localhost:1337/api";

export const fetchTeamSections = async (
  locale: string = "en"
): Promise<TeamSectionResponse> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/team-sections?populate[teamMembers][populate]=*&locale=${locale}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching team sections:", error);
    throw new Error("Failed to fetch team sections");
  }
};
