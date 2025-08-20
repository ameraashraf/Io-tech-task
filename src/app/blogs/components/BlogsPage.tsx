"use client";

import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { useBlogsPage } from "../hooks";
import { BlogsHeader } from "./BlogsHeader";
import { FeaturedPost } from "./FeaturedPost";
import { BlogPostsGrid } from "./BlogPostsGrid";
import { NewsletterSignup } from "./NewsletterSignup";

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

export default function BlogsPage() {
  const { t, i18n, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();
  const { translatedBlogPosts } = useBlogsPage();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <>
        <PageHero
          alt="Blog Hero"
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
        alt="Blog Hero"
        heightClassName="h-[40vh] md:h-[50vh] lg:h-[60vh]"
      />

      <motion.section
        className="container mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <BlogsHeader />
        <FeaturedPost blogPost={translatedBlogPosts[0]} />
        <BlogPostsGrid blogPosts={translatedBlogPosts.slice(1)} />
        <NewsletterSignup />
      </motion.section>
    </>
  );
}
