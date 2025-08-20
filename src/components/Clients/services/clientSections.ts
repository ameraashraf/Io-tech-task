import axios from "axios";
import { ClientSectionResponse } from "@/app/types/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const fetchClientSections = async (
  locale: string = "en"
): Promise<ClientSectionResponse> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/client-sections?populate[clientData][populate]=*&locale=${locale}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching client sections:", error);
    throw new Error("Failed to fetch client sections");
  }
};
