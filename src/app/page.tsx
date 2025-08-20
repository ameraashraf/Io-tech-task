"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import Clients from "@/components/Clients/Clients";
import { motion } from "framer-motion";

/**
 * Animation variants for the main container
 * Provides staggered entrance animation for child components
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.1, // Initial delay before first child starts
    },
  },
};

/**
 * Animation variants for individual sections
 * Provides smooth entrance animation with upward movement
 */
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

/**
 * Home page component that displays the main landing sections
 * Uses Framer Motion for smooth entrance animations
 * Includes hero section, team section, and client testimonials
 */
export default function Home() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {/* Hero section with animated entrance */}
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      {/* Team section with animated entrance */}
      <motion.div variants={sectionVariants}>
        <OurTeamSection />
      </motion.div>
      {/* Client testimonials section with animated entrance */}
      <motion.div variants={sectionVariants}>
        <Clients />
      </motion.div>
    </motion.div>
  );
}
