"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { performSearch, resetPagination } from "@/features/search/searchSlice";
import SearchResultsHeader from "./components/SearchResultsHeader";
import SearchSidebar from "./components/SearchSidebar";
import SearchResultsList from "./components/SearchResultsList";
import PageHero from "@/components/shared/PageHero";
import BackLink from "@/components/shared/BackLink";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/useDirection";

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
  const dispatch = useDispatch<AppDispatch>();
  const { results, isLoading, error } = useSelector(
    (state: RootState) => state.search
  );
  const { t } = useTranslation();
  const { isRTL } = useDirection();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      dispatch(performSearch(query));
      // Remove resetPagination to avoid conflicts with SearchResultsList pagination initialization
    }
  }, [searchParams, dispatch]);

  return (
    <motion.div
      className="min-h-screen bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <motion.div variants={sectionVariants}>
        <PageHero />
      </motion.div>

      {/* Main content area */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={sectionVariants}
      >
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-x-8 lg:gap-y-4">
          <motion.div
            className="mb-0 lg:col-start-2"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <BackLink className="mb-0 lg:col-start-2" />
          </motion.div>

          {/* Left Sidebar */}
          <motion.div
            className="lg:row-start-2"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SearchSidebar />
          </motion.div>

          {/* Right Content Area */}
          <motion.div
            className="lg:row-start-2 lg:col-start-2"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SearchResultsHeader />
            <SearchResultsList />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SearchResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
