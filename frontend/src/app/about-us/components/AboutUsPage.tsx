"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { AboutUsHeader } from "./AboutUsHeader";
import { MissionVision } from "./MissionVision";
import { CompanyStory } from "./CompanyStory";
import { Values } from "./Values";
import PageLayout from "@/components/shared/PageLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { containerVariants } from "@/components/shared/AnimationVariants";

export default function AboutUsPage() {
  const { t, ready } = useHydrationSafeTranslation();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <PageLayout heroAlt="About Us Hero">
        <LoadingSpinner message="Loading..." />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroAlt="About Us Hero"
      ariaLabel="About us content"
      sectionVariants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <AboutUsHeader />
        <MissionVision />
        <CompanyStory />
        <Values />
      </motion.div>
    </PageLayout>
  );
}
