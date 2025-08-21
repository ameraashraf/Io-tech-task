"use client";

import { TeamMemberType } from "@/app/types/types";
import TeamMembers from "./TeamMembers";
import OurTeamHeader from "./OurTeamHeader";
import { motion } from "framer-motion";
import { useTeamSections, transformTeamMembers } from "../hooks";
import { useTranslation } from "react-i18next";
import {
  containerVariants,
  itemVariants,
} from "@/components/shared/AnimationVariants";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import ErrorMessage from "@/components/shared/ErrorMessage";
import PageContainer from "@/components/shared/PageContainer";

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
      <PageContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ariaLabel="Team section"
      >
        <motion.div variants={itemVariants}>
          <OurTeamHeader />
        </motion.div>
        <motion.div className="mt-10 sm:mt-12 lg:mt-16" variants={itemVariants}>
          <LoadingSpinner message="Loading team members..." />
        </motion.div>
      </PageContainer>
    );
  }

  // Error state with user-friendly message
  if (error) {
    return (
      <PageContainer
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ariaLabel="Team section"
      >
        <motion.div variants={itemVariants}>
          <OurTeamHeader />
        </motion.div>
        <motion.div className="mt-10 sm:mt-12 lg:mt-16" variants={itemVariants}>
          <ErrorMessage message="Failed to load team members. Please try again later." />
        </motion.div>
      </PageContainer>
    );
  }

  return (
    <PageContainer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ariaLabel="Team section"
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
    </PageContainer>
  );
}
