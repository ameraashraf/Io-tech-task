"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export interface StatItem {
  number: string;
  translationKey: string;
  fallback: string;
}

interface StatsGridProps {
  titleKey: string;
  titleFallback: string;
  stats: StatItem[];
  className?: string;
}

export const StatsGrid = ({
  titleKey,
  titleFallback,
  stats,
  className = "bg-gray-50 rounded-lg p-8 md:p-12 mb-16",
}: StatsGridProps) => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div
      className={className}
      variants={statsVariants}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t(titleKey, titleFallback)}
      </motion.h2>
      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={statItemVariants}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="text-4xl font-bold text-[#4b2615] mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {stat.number}
            </motion.div>
            <p className="text-muted-foreground">
              {t(stat.translationKey, stat.fallback)}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
