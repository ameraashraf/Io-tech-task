"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
};

export const ContactForm = () => {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      variants={formVariants}
      whileHover="hover"
    >
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        {t("pages.contactUs.form.title", "Send Us a Message")}
      </motion.h2>
      <motion.form
        className="space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#4b2615] mb-2"
            >
              {t("pages.contactUs.form.firstName", "First Name *")}
            </label>
            <motion.input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
              placeholder={t(
                "pages.contactUs.form.placeholders.firstName",
                "Enter your first name"
              )}
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#4b2615] mb-2"
            >
              {t("pages.contactUs.form.lastName", "Last Name *")}
            </label>
            <motion.input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
              placeholder={t(
                "pages.contactUs.form.placeholders.lastName",
                "Enter your last name"
              )}
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#4b2615] mb-2"
          >
            {t("pages.contactUs.form.email", "Email Address *")}
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
            placeholder={t(
              "pages.contactUs.form.placeholders.email",
              "Enter your email address"
            )}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#4b2615] mb-2"
          >
            {t("pages.contactUs.form.phone", "Phone Number")}
          </label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
            placeholder={t(
              "pages.contactUs.form.placeholders.phone",
              "Enter your phone number"
            )}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <label
            htmlFor="company"
            className="block text-sm font-medium text-[#4b2615] mb-2"
          >
            {t("pages.contactUs.form.company", "Company Name")}
          </label>
          <motion.input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
            placeholder={t(
              "pages.contactUs.form.placeholders.company",
              "Enter your company name"
            )}
            whileFocus="focus"
            variants={inputVariants}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <label
            htmlFor="service"
            className="block text-sm font-medium text-[#4b2615] mb-2"
          >
            {t("pages.contactUs.form.service", "Service of Interest")}
          </label>
          <motion.select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent"
            whileFocus="focus"
            variants={inputVariants}
          >
            <option value="">
              {t(
                "pages.contactUs.form.serviceOptions.select",
                "Select a service"
              )}
            </option>
            <option value="legal-consultation">
              {t(
                "pages.contactUs.form.serviceOptions.legalConsultation",
                "Legal Consultation Services"
              )}
            </option>
            <option value="foreign-investment">
              {t(
                "pages.contactUs.form.serviceOptions.foreignInvestment",
                "Foreign Investment Services"
              )}
            </option>
            <option value="contracts">
              {t("pages.contactUs.form.serviceOptions.contracts", "Contracts")}
            </option>
            <option value="insurance">
              {t("pages.contactUs.form.serviceOptions.insurance", "Insurance")}
            </option>
            <option value="corporate-governance">
              {t(
                "pages.contactUs.form.serviceOptions.corporateGovernance",
                "Corporate Governance"
              )}
            </option>
            <option value="arbitration">
              {t(
                "pages.contactUs.form.serviceOptions.arbitration",
                "Arbitration"
              )}
            </option>
            <option value="intellectual-property">
              {t(
                "pages.contactUs.form.serviceOptions.intellectualProperty",
                "Intellectual Property"
              )}
            </option>
            <option value="other">
              {t("pages.contactUs.form.serviceOptions.other", "Other")}
            </option>
          </motion.select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#4b2615] mb-2"
          >
            {t("pages.contactUs.form.message", "Message *")}
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2615] focus:border-transparent resize-none"
            placeholder={t(
              "pages.contactUs.form.placeholders.message",
              "Tell us about your legal needs or questions..."
            )}
            whileFocus="focus"
            variants={inputVariants}
          ></motion.textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-[#4b2615] text-white py-3 px-6 rounded-lg hover:bg-[#3d1f11] transition-colors font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          viewport={{ once: true }}
        >
          {t("pages.contactUs.form.sendMessage", "Send Message")}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
