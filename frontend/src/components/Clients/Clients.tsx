"use client";

import ClientsContent from "./ClientsContent";
import ClientHeader from "./ClientsHeader";
import { motion } from "framer-motion";
import { useClientSections, transformClientTestimonials } from "./hooks";
import { useTranslation } from "react-i18next";
import {
  containerVariants,
  itemVariants,
} from "@/components/shared/AnimationVariants";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import ErrorMessage from "@/components/shared/ErrorMessage";

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
        aria-label="Client testimonials"
      >
        <div className=" container mx-auto flex flex-col gap-15 lg:pt-25 pb-15 pt-10 lg:pb-40 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <ClientHeader />
          </motion.div>
          <motion.div
            className="py-8 flex justify-center"
            variants={itemVariants}
          >
            <LoadingSpinner size="sm" color="white" />
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
        aria-label="Client testimonials"
      >
        <div className=" container mx-auto flex flex-col gap-15 lg:pt-25 pb-15 pt-10 lg:pb-40 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants}>
            <ClientHeader />
          </motion.div>
          <motion.div className="py-8 text-center" variants={itemVariants}>
            <ErrorMessage
              message="Failed to load client testimonials."
              className="text-red-200"
            />
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
      aria-label="Client testimonials"
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
