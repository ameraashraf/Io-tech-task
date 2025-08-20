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

export interface IconGridItem {
  icon: string;
  key: string;
  titleKey?: string;
  descriptionKey?: string;
}

interface IconGridProps {
  titleKey: string;
  titleFallback: string;
  items: IconGridItem[];
  gridCols?: string;
  showTitles?: boolean;
  showDescriptions?: boolean;
  className?: string;
}

export const IconGrid = ({
  titleKey,
  titleFallback,
  items,
  gridCols = "md:grid-cols-3",
  showTitles = true,
  showDescriptions = true,
  className = "mb-16",
}: IconGridProps) => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div className={className} variants={itemVariants}>
      <motion.h2
        className="text-3xl font-bold text-[#4b2615] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t(titleKey, titleFallback)}
      </motion.h2>
      <div className={`grid ${gridCols} gap-8`}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="w-20 h-20 bg-[#4b2615] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
            </motion.div>
            {showTitles && item.titleKey && (
              <h3 className="text-xl font-semibold text-[#4b2615] mb-3">
                {t(
                  item.titleKey,
                  item.key.charAt(0).toUpperCase() + item.key.slice(1)
                )}
              </h3>
            )}
            {showDescriptions && item.descriptionKey && (
              <p className="text-muted-foreground">
                {t(item.descriptionKey, "Description not available")}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
