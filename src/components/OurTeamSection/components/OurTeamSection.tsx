"use client";

import { TeamMemberType } from "@/app/types/types";
import TeamMembers from "./TeamMembers";
import OurTeamHeader from "./OurTeamHeader";
import { motion } from "framer-motion";
import { useTeamSections, transformTeamMembers } from "../hooks";
import { useTranslation } from "react-i18next";

/**
 * Animation variants for the team section container
 * Provides staggered entrance animation for child components
 */
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

/**
 * Animation variants for individual team section items
 * Provides smooth entrance animation with upward movement
 */
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

/**
 * OurTeamSection component displays team members and section information
 * Fetches data from API, handles loading and error states, and transforms
 * API data to match component expectations
 */
export default function OurTeamSection() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  // Fetch team section data from API
  const { data, isLoading, error } = useTeamSections(currentLocale);

  // Transform the API data to match existing component expectations
  const teamMembersData = data ? transformTeamMembers(data) : [];
  const sectionData = data?.data?.[0];

  // Loading state with skeleton UI
  if (isLoading) {
    return (
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <OurTeamHeader />
        </motion.div>
        <motion.div className="mt-10 sm:mt-12 lg:mt-16" variants={itemVariants}>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted">Loading team members...</p>
          </div>
        </motion.div>
      </motion.section>
    );
  }

  // Error state with user-friendly message
  if (error) {
    return (
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <OurTeamHeader />
        </motion.div>
        <motion.div className="mt-10 sm:mt-12 lg:mt-16" variants={itemVariants}>
          <div className="text-center">
            <p className="text-red-500">
              Failed to load team members. Please try again later.
            </p>
          </div>
        </motion.div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Team section header with title and description */}
      <motion.div variants={itemVariants}>
        <OurTeamHeader
          title={sectionData?.sectionTitle}
          description={sectionData?.sectionDescription}
        />
      </motion.div>

      {/* Team members grid */}
      <motion.div className="mt-10 sm:mt-12 lg:mt-16" variants={itemVariants}>
        <TeamMembers data={teamMembersData} />
      </motion.div>
    </motion.section>
  );
}
