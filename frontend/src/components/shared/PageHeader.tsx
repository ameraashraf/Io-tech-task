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

interface PageHeaderProps {
  titleKey: string;
  titleFallback: string;
  subtitleKey: string;
  subtitleFallback: string;
}

export const PageHeader = ({
  titleKey,
  titleFallback,
  subtitleKey,
  subtitleFallback,
}: PageHeaderProps) => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div className="text-center mb-16" variants={itemVariants}>
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4b2615] mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t(titleKey, titleFallback)}
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {t(subtitleKey, subtitleFallback)}
      </motion.p>
    </motion.div>
  );
};
