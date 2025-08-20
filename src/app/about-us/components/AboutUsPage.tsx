"use client";

import PageHero from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { AboutUsHeader } from "./AboutUsHeader";
import { MissionVision } from "./MissionVision";
import { CompanyStory } from "./CompanyStory";
import { Values } from "./Values";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function AboutUsPage() {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <>
        <PageHero
          alt="About Us Hero"
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

  return (
    <>
      <PageHero
        alt="About Us Hero"
        heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
      />

      <motion.section
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-4xl mx-auto">
          <AboutUsHeader />
          <MissionVision />
          <CompanyStory />
          <Values />
        </div>
      </motion.section>
    </>
  );
}
