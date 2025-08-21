"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { contactMethodsData } from "../data/contactMethodsData";
import { officesData } from "../data/officesData";

const contactVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export const ContactInformation = () => {
  const { t } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  return (
    <motion.div className="space-y-8" variants={contactVariants}>
      {/* Office Locations */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.h3
          className="text-xl font-bold text-[#4b2615] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {t("pages.contactUs.offices.title", "Our Offices")}
        </motion.h3>

        <div className="space-y-6">
          {officesData.map((office, index) => (
            <motion.div
              key={office.key}
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-[#4b2615] mb-2">
                {t(office.titleKey, office.titleFallback)}
              </h4>
              <p className="text-muted-foreground mb-2 whitespace-pre-line">
                {t(office.addressKey, office.addressFallback)}
              </p>
              <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground"
                whileHover={{ x: isRTL ? -5 : 5 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {t("pages.contactUs.offices.viewOnMap", "View on Map")}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Methods */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8"
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.h3
          className="text-xl font-bold text-[#4b2615] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {t("pages.contactUs.contactMethods.title", "Contact Methods")}
        </motion.h3>

        <div className="space-y-4">
          {contactMethodsData.map((method, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ x: isRTL ? -5 : 5 }}
            >
              <motion.div
                className="w-12 h-12 bg-[#4b2615] rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={method.icon}
                  />
                </svg>
              </motion.div>
              <div>
                <p className="font-medium text-[#4b2615]">
                  {t(
                    `pages.contactUs.contactMethods.${method.key}.title`,
                    method.key.charAt(0).toUpperCase() + method.key.slice(1)
                  )}
                </p>
                <p className="text-muted-foreground">
                  {t(
                    `pages.contactUs.contactMethods.${method.key}.value`,
                    "Value not available"
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        className="bg-red-50 border border-red-200 rounded-lg p-6"
        variants={cardVariants}
        whileHover="hover"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-lg font-bold text-red-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {t("pages.contactUs.emergency.title", "Emergency Contact")}
        </motion.h3>
        <motion.p
          className="text-red-700 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t(
            "pages.contactUs.emergency.subtitle",
            "For urgent legal matters outside business hours:"
          )}
        </motion.p>
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ x: isRTL ? -5 : 5 }}
        >
          <svg
            className="w-5 h-5 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="font-medium text-red-800">
            {t("pages.contactUs.emergency.phone", "+966 50 123 4567")}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
