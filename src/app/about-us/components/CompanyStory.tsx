"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

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

export const CompanyStory = () => {
  const { t } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  return (
    <motion.div
      className="bg-gray-50 p-8 md:p-12 rounded-lg mb-16"
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold text-[#4b2615] mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("pages.aboutUs.story.title", "Our Story")}
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              "pages.aboutUs.story.paragraph1",
              "Founded with a vision to bridge the gap between traditional legal services and modern business needs, our company has grown from a small local practice to a comprehensive legal services provider."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {t(
              "pages.aboutUs.story.paragraph2",
              "Over the years, we have successfully represented hundreds of clients, from startups to multinational corporations, helping them navigate complex legal landscapes and achieve their objectives."
            )}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t(
              "pages.aboutUs.story.paragraph3",
              "Our team of experienced attorneys and legal professionals brings together deep local knowledge and international expertise to deliver results that matter."
            )}
          </p>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="text-xl font-semibold text-[#4b2615] mb-4">
            {t("pages.aboutUs.achievements.title", "Key Achievements")}
          </h4>
          <ul className="space-y-3">
            {(() => {
              const achievements = t("pages.aboutUs.achievements.items", {
                returnObjects: true,
                fallback: [
                  "500+ Successful Cases",
                  "15+ Years of Experience",
                  "50+ Expert Attorneys",
                  "98% Client Satisfaction",
                ],
              });
              const achievementsArray = Array.isArray(achievements)
                ? achievements
                : [
                    "500+ Successful Cases",
                    "15+ Years of Experience",
                    "50+ Expert Attorneys",
                    "98% Client Satisfaction",
                  ];
              return achievementsArray.map(
                (achievement: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-muted-foreground"
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-[#4b2615] rounded-full mr-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    ></motion.span>
                    {achievement}
                  </motion.li>
                )
              );
            })()}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};
