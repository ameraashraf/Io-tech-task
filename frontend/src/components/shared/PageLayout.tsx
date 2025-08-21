"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import PageHero from "./PageHero";
import { useDirection } from "@/hooks/useDirection";

interface PageLayoutProps {
  heroAlt: string;
  heroHeight?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  containerVariants?: any;
  sectionVariants?: any;
  initial?: string;
  animate?: string;
  whileInView?: string;
  viewport?: any;
}

/**
 * Reusable PageLayout component that provides consistent page structure
 * Combines PageHero with animated section container for consistent styling
 * Handles common animation patterns and responsive container styling
 */
export default function PageLayout({
  heroAlt,
  heroHeight = "h-[40vh] md:h-[50vh] lg:h-[60vh]",
  children,
  className = "",
  ariaLabel = "Page content",
  containerVariants,
  sectionVariants,
  initial = "hidden",
  animate = "visible",
  whileInView,
  viewport = { once: true },
}: PageLayoutProps) {
  const { isRTL } = useDirection();

  return (
    <main>
      <PageHero alt={heroAlt} heightClassName={heroHeight} />

      <motion.section
        className={`container mx-auto px-4 py-16 md:py-24 ${className}`}
        variants={sectionVariants}
        initial={initial}
        animate={animate}
        whileInView={whileInView}
        viewport={viewport}
        dir={isRTL ? "rtl" : "ltr"}
        aria-label={ariaLabel}
      >
        {children}
      </motion.section>
    </main>
  );
}
