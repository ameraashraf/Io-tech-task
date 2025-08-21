"use client";

import PageHero from "@/components/shared/PageHero";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { ContactUsHeader } from "./ContactUsHeader";
import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";
import { FAQSection } from "./FAQSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ContactUsPage() {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <>
        <PageHero
          alt="Contact Us Hero"
          heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
        />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero
        alt="Contact Us Hero"
        heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
      />

      <motion.section
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <ContactUsHeader />
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInformation />
        </div>
        <FAQSection />
      </motion.section>
    </>
  );
}
