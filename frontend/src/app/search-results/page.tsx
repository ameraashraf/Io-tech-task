"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import PageHero from "@/components/shared/PageHero";
import BackLink from "@/components/shared/BackLink";
import SearchSidebar from "./components/SearchSidebar";
import SearchResultsHeader from "./components/SearchResultsHeader";
import SearchResultsList from "./components/SearchResultsList";

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

const sectionVariants = {
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

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const { isRTL } = useDirection();

  return (
    <main>
      {/* Hero section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        aria-label="Search results hero"
      >
        <PageHero />
      </motion.section>

      {/* Main content area */}
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        aria-label="Search results content"
      >
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-x-8 lg:gap-y-4">
          <motion.nav
            className="mb-0 lg:col-start-2"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            aria-label="Breadcrumb navigation"
          >
            <BackLink className="mb-0 lg:col-start-2" />
          </motion.nav>

          {/* Left Sidebar */}
          <motion.aside
            className="lg:row-start-2"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            aria-label="Search filters"
          >
            <SearchSidebar />
          </motion.aside>

          {/* Right Content Area */}
          <motion.article
            className="lg:row-start-2 lg:col-start-2"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Search results"
          >
            <SearchResultsHeader />
            <SearchResultsList />
          </motion.article>
        </div>
      </motion.section>
    </main>
  );
}

export default function SearchResultsPage() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <SearchResultsContent />
    </motion.div>
  );
}
