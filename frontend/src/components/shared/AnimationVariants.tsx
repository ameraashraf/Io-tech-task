/**
 * Shared animation variants for consistent animations across the application
 * Provides reusable Framer Motion animation configurations
 * Centralizes animation patterns to ensure consistency and maintainability
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
 * Item animation variant for individual content elements
 * Provides smooth entrance animation with upward movement
 */
export const itemVariants = {
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
 * Card animation variant for card-like components
 * Provides scale and fade entrance animation with hover effects
 */
export const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
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
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

/**
 * Header animation variant for page headers
 * Provides smooth entrance animation for title and description elements
 */
export const headerVariants = {
  hidden: { opacity: 0, y: -20 },
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
 * Staggered container variant with customizable timing
 * Allows for different stagger timing based on content type
 */
export const createStaggeredContainer = (staggerDelay: number = 0.2) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});
