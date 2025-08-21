import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import {
  useTeamSections,
  transformTeamMembers,
} from "@/components/OurTeamSection/hooks";

export const useOurTeamPage = () => {
  const { i18n } = useHydrationSafeTranslation();
  const currentLocale = i18n.language;
  const { data, isLoading, error } = useTeamSections(currentLocale);
  const teamMembersData = data ? transformTeamMembers(data) : [];

  return { teamMembersData, isLoading, error };
};
