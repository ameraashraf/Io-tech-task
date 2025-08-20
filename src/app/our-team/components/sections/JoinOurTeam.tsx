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

export const JoinOurTeam = () => {
  const { t } = useHydrationSafeTranslation();
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center"
      variants={itemVariants}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t("pages.ourTeam.joinTeam.title", "Join Our Growing Team")}
      </motion.h2>
      <motion.p
        className="text-muted-foreground mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t(
          "pages.ourTeam.joinTeam.subtitle",
          "We're always looking for talented legal professionals who share our passion for excellence and commitment to client success."
        )}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-3 bg-[#4b2615] text-white rounded-lg hover:bg-[#3d1f11] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("pages.ourTeam.joinTeam.viewPositions", "View Open Positions")}
        </motion.button>
        <motion.button
          className="px-8 py-3 border border-[#4b2615] text-[#4b2615] rounded-lg hover:bg-[#4b2615] hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("pages.ourTeam.joinTeam.sendCV", "Send Your CV")}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
