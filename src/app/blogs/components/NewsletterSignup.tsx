"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

export const NewsletterSignup = () => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div
      className="bg-gray-50 rounded-lg p-8 md:p-12 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.h3
        className="text-2xl font-bold text-[#4b2615] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t("pages.blogs.newsletter.title", "Stay Updated with Legal Insights")}
      </motion.h3>
      <motion.p
        className="text-muted-foreground mb-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t(
          "pages.blogs.newsletter.subtitle",
          "Subscribe to our newsletter to receive the latest legal updates, industry insights, and expert analysis delivered directly to your inbox."
        )}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="email"
          placeholder={t(
            "pages.blogs.newsletter.placeholder",
            "Enter your email address"
          )}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button
          className="px-6 py-3 bg-[#4b2615] text-white rounded-lg hover:bg-[#3d1f11] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("pages.blogs.newsletter.subscribe", "Subscribe")}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
