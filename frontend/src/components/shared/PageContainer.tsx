"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useDirection } from "@/hooks/useDirection";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  variants?: any;
  initial?: string;
  animate?: string;
  whileInView?: string;
  viewport?: any;
  background?: string;
}

/**
 * Reusable PageContainer component that provides consistent section styling
 * Handles common motion.section patterns with container styling
 * Supports background colors and responsive padding
 */
export default function PageContainer({
  children,
  className = "",
  ariaLabel = "Page content",
  variants,
  initial = "hidden",
  animate = "visible",
  whileInView,
  viewport = { once: true },
  background,
}: PageContainerProps) {
  const { isRTL } = useDirection();

  const baseClasses = "container mx-auto px-4 py-16 md:py-24";
  const backgroundClasses = background ? `bg-${background}` : "";
  const containerClasses = `${baseClasses} ${backgroundClasses} ${className}`;

  return (
    <motion.section
      className={containerClasses}
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={ariaLabel}
    >
      {children}
    </motion.section>
  );
}
