"use client";

import PageHero from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { useOurTeamPage } from "../hooks";
import { TeamHeader } from "./TeamHeader";
import { LeadershipSection } from "./sections/LeadershipSection";
import { LegalExpertsSection } from "./sections/LegalExpertsSection";
import { TeamStats } from "./sections/TeamStats";
import { JoinOurTeam } from "./sections/JoinOurTeam";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function OurTeamPage() {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();
  const { teamMembersData, isLoading, error } = useOurTeamPage();

  if (!ready) {
    return (
      <>
        <PageHero
          alt="Our Team Hero"
          heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
        />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <PageHero
          alt="Our Team Hero"
          heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
        />
        <div
          className="container mx-auto px-4 py-16 md:py-24"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted">
              {t("pages.ourTeam.loading", "Loading team members...")}
            </p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHero
          alt="Our Team Hero"
          heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
        />
        <div
          className="container mx-auto px-4 py-16 md:py-24"
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="text-center">
            <p className="text-red-500">
              {t(
                "pages.ourTeam.error",
                "Failed to load team members. Please try again later."
              )}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero
        alt="Our Team Hero"
        heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
      />

      <motion.section
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <TeamHeader />
        <LeadershipSection members={teamMembersData.slice(0, 3)} />
        <LegalExpertsSection members={teamMembersData.slice(3)} />
        <TeamStats />
        <JoinOurTeam />
      </motion.section>
    </>
  );
}
