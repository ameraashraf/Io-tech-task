"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import { OurTeamSection } from "@/components/OurTeamSection";
import Clients from "@/components/Clients/Clients";
import { motion } from "framer-motion";
import {
  containerVariants,
  sectionVariants,
} from "@/components/shared/AnimationVariants";

/**
 * Home page component that displays the main landing sections
 * Uses Framer Motion for smooth entrance animations
 * Includes hero section, team section, and client testimonials
 */
export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero section with animated entrance */}
      <motion.section variants={sectionVariants} aria-label="Hero section">
        <HeroSection />
      </motion.section>
      {/* Team section with animated entrance */}
      <motion.section variants={sectionVariants} aria-label="Our team section">
        <OurTeamSection />
      </motion.section>
      {/* Client testimonials section with animated entrance */}
      <motion.section
        variants={sectionVariants}
        aria-label="Client testimonials"
      >
        <Clients />
      </motion.section>
    </motion.main>
  );
}
