"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useOurTeamPage } from "../hooks";
import { TeamHeader } from "./TeamHeader";
import { LeadershipSection } from "./sections/LeadershipSection";
import { LegalExpertsSection } from "./sections/LegalExpertsSection";
import { TeamStats } from "./sections/TeamStats";
import { JoinOurTeam } from "./sections/JoinOurTeam";
import PageLayout from "@/components/shared/PageLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import ErrorMessage from "@/components/shared/ErrorMessage";
import { containerVariants } from "@/components/shared/AnimationVariants";

export default function OurTeamPage() {
  const { t, ready } = useHydrationSafeTranslation();
  const { teamMembersData, isLoading, error } = useOurTeamPage();

  if (!ready) {
    return (
      <PageLayout heroAlt="Our Team Hero">
        <LoadingSpinner message="Loading..." />
      </PageLayout>
    );
  }

  if (isLoading) {
    return (
      <PageLayout heroAlt="Our Team Hero">
        <LoadingSpinner
          message={t("pages.ourTeam.loading", "Loading team members...")}
        />
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout heroAlt="Our Team Hero">
        <ErrorMessage
          message={t(
            "pages.ourTeam.error",
            "Failed to load team members. Please try again later."
          )}
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroAlt="Our Team Hero"
      ariaLabel="Our team content"
      sectionVariants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TeamHeader />
        <LeadershipSection members={teamMembersData.slice(0, 3)} />
        <LegalExpertsSection members={teamMembersData.slice(3)} />
        <TeamStats />
        <JoinOurTeam />
      </motion.div>
    </PageLayout>
  );
}
