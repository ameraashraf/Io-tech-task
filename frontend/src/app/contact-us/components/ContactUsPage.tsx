"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { ContactUsHeader } from "./ContactUsHeader";
import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";
import { FAQSection } from "./FAQSection";
import PageLayout from "@/components/shared/PageLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { containerVariants } from "@/components/shared/AnimationVariants";

export default function ContactUsPage() {
  const { t, ready } = useHydrationSafeTranslation();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <PageLayout heroAlt="Contact Us Hero">
        <LoadingSpinner message="Loading..." />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroAlt="Contact Us Hero"
      ariaLabel="Contact information"
      sectionVariants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <ContactUsHeader />
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInformation />
        </div>
        <FAQSection />
      </motion.div>
    </PageLayout>
  );
}
