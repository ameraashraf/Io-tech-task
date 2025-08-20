"use client";

import { StatsGrid } from "@/components/shared/StatsGrid";
import { teamStatsData } from "../../data/teamStatsData";

export const TeamStats = () => {
  return (
    <StatsGrid
      titleKey="pages.ourTeam.teamStats"
      titleFallback="Our Team at a Glance"
      stats={teamStatsData}
    />
  );
};
