export interface TeamStatItem {
  number: string;
  translationKey: string;
  fallback: string;
}

export const teamStatsData: TeamStatItem[] = [
  {
    number: "50+",
    translationKey: "pages.ourTeam.stats.attorneys",
    fallback: "Expert Attorneys",
  },
  {
    number: "15+",
    translationKey: "pages.ourTeam.stats.experience",
    fallback: "Years Experience",
  },
  {
    number: "500+",
    translationKey: "pages.ourTeam.stats.cases",
    fallback: "Successful Cases",
  },
  {
    number: "98%",
    translationKey: "pages.ourTeam.stats.satisfaction",
    fallback: "Client Satisfaction",
  },
];
