"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
};

const iconVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const MissionVision = () => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 mb-20"
      variants={itemVariants}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div
          className="w-16 h-16 bg-[#4b2615] rounded-full flex items-center justify-center mb-6"
          variants={iconVariants}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-semibold text-[#4b2615] mb-4">
          {t("pages.aboutUs.mission.title", "Our Mission")}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {t(
            "pages.aboutUs.mission.description",
            "To provide exceptional legal services that empower our clients to achieve their business objectives while ensuring compliance with local and international regulations."
          )}
        </p>
      </motion.div>

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div
          className="w-16 h-16 bg-[#4b2615] rounded-full flex items-center justify-center mb-6"
          variants={iconVariants}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-semibold text-[#4b2615] mb-4">
          {t("pages.aboutUs.vision.title", "Our Vision")}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {t(
            "pages.aboutUs.vision.description",
            "To be the most trusted legal partner for businesses seeking growth and success in the dynamic Middle Eastern market."
          )}
        </p>
      </motion.div>
    </motion.div>
  );
};
