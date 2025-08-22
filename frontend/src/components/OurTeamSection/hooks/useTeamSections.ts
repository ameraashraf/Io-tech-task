import { useQuery } from "@tanstack/react-query";
import { TeamSectionResponse, TeamMemberType } from "@/app/types/types";
import { fetchTeamSections } from "../services/teamSections";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const useTeamSections = (locale: string = "en") => {
  return useQuery({
    queryKey: ["team-sections", locale],
    queryFn: () => fetchTeamSections(locale),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
// Helper function to transform API data to match existing TeamMemberType
export const transformTeamMembers = (
  apiData: TeamSectionResponse
): TeamMemberType[] => {
  if (!apiData?.data?.[0]?.teamMembers) {
    return [];
  }

  return apiData.data[0].teamMembers.map((member) => ({
    id: member.id,
    title: member.name,
    position: member.description,
    image: member.memberImage.url.startsWith("http")
      ? member.memberImage.url
      : member.memberImage.url.startsWith("/")
      ? `${API_BASE_URL}${member.memberImage.url}`
      : `${API_BASE_URL}/${member.memberImage.url}`,
    icons: {
      whatsapp: "/whats.svg",
      phone: "/phone.svg",
      email: "/mes.svg",
    },
    links: {
      whatsapp: member.Memberlinks.whatsappLink,
      phone: `tel:${member.Memberlinks.phoneNumber}`,
      email: `mailto:${member.Memberlinks.email}`,
    },
  }));
};
