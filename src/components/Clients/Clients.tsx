"use client";

import ClientsContent from "./ClientsContent";
import ClientHeader from "./ClientsHeader";
import { motion } from "framer-motion";
import { useClientSections, transformClientTestimonials } from "./hooks";
import { useTranslation } from "react-i18next";

/**
 * Animation variants for the clients section container
 * Provides staggered entrance animation for child components
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Animation variants for individual client section items
 * Provides smooth entrance animation with upward movement
 */
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

/**
 * Clients component displays client testimonials and section information
 * Fetches data from API, handles loading and error states, and transforms
 * API data to display testimonials in a carousel format
 */
export default function Clients() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  // Fetch client section data from API
  const { data, isLoading, error } = useClientSections(currentLocale);

  // Transform API data to extract testimonials and section metadata
  const { testimonials, sectionTitle, sectionDescription } =
    transformClientTestimonials(data);

  // Loading state with spinner
  if (isLoading) {
    return (
      <motion.section
        className="bg-primary"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" container mx-auto flex flex-col gap-15 lg:pt-25 pb-15 pt-10 lg:pb-40 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <ClientHeader />
          </motion.div>
          <motion.div
            className="py-8 flex justify-center"
            variants={itemVariants}
          >
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  // Error state with user-friendly message
  if (error) {
    return (
      <motion.section
        className="bg-primary"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" container mx-auto flex flex-col gap-15 lg:pt-25 pb-15 pt-10 lg:pb-40 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <ClientHeader />
          </motion.div>
          <motion.div className="py-8 text-center" variants={itemVariants}>
            <p className="text-red-200">Failed to load client testimonials.</p>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className=" container mx-auto flex flex-col gap-15 lg:pt-25 pb-15 pt-10 lg:pb-40 px-4 sm:px-6 lg:px-8">
        {/* Client section header with title and description */}
        <motion.div variants={itemVariants}>
          <ClientHeader title={sectionTitle} description={sectionDescription} />
        </motion.div>

        {/* Client testimonials carousel */}
        <motion.div variants={itemVariants}>
          <ClientsContent testimonials={testimonials} />
        </motion.div>
      </div>
    </motion.section>
  );
}
