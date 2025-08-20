/**
 * Animation variants for service page components
 * Provides consistent animation patterns across the service page
 * Uses Framer Motion for smooth, performant animations
 */

/**
 * Container animation variant for staggered entrance effects
 * Controls the overall animation timing and child element staggering
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
      delayChildren: 0.1, // Initial delay before first child starts
    },
  },
};

/**
 * Section animation variant for main content areas
 * Provides smooth upward entrance animation for page sections
 */
export const sectionVariants = {
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
 * Fade in up animation variant for smaller content elements
 * Used for text blocks, cards, and other content items
 */
export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
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
 * Slide in from left animation variant
 * Used for sidebar content, navigation elements, or secondary content
 */
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
