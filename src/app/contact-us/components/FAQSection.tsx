"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

export const FAQSection = () => {
  const { t } = useHydrationSafeTranslation();

  const faqItems = ["consultation", "remote", "languages", "confidentiality"];

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t("pages.contactUs.faq.title", "Frequently Asked Questions")}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {faqItems.map((faqKey, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.h3
              className="font-semibold text-[#4b2615] mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {t(
                `pages.contactUs.faq.${faqKey}.question`,
                "Question not available"
              )}
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.1 }}
              viewport={{ once: true }}
            >
              {t(
                `pages.contactUs.faq.${faqKey}.answer`,
                "Answer not available"
              )}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
