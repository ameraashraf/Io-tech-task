"use client";

import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import BlogsHeader from "./BlogsHeader";
import FeaturedPost from "./FeaturedPost";
import BlogPostsGrid from "./BlogPostsGrid";
import NewsletterSignup from "./NewsletterSignup";
import { useBlogsPage } from "../hooks";
import PageLayout from "@/components/shared/PageLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import { containerVariants } from "@/components/shared/AnimationVariants";

export default function BlogsPage() {
  const { t, ready } = useHydrationSafeTranslation();
  const { translatedBlogPosts } = useBlogsPage();

  // Don't render until translations are ready to prevent hydration mismatch
  if (!ready) {
    return (
      <PageLayout heroAlt="Blog Hero">
        <LoadingSpinner message="Loading..." />
      </PageLayout>
    );
  }

  return (
    <PageLayout
      heroAlt="Blog Hero"
      ariaLabel="Blog posts"
      sectionVariants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <BlogsHeader />
        <FeaturedPost blogPost={translatedBlogPosts[0]} />
        <BlogPostsGrid blogPosts={translatedBlogPosts.slice(1)} />
        <NewsletterSignup />
      </motion.div>
    </PageLayout>
  );
}
