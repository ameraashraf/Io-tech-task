"use client";

import Image from "next/image";
import HeroSlider from "./HeroSlider";
import { motion } from "framer-motion";

/**
 * Animation variants for content section
 * Provides smooth entrance animation with staggered timing
 */
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

/**
 * Animation variants for profile image
 * Includes entrance animation and hover effects
 */
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.3, // Staggered delay for sequential animation
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05, // Subtle scale effect on hover
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

/**
 * HeroSection component displays the main landing area
 * Features a background image, animated content slider, and profile image
 * Uses responsive design to adapt to different screen sizes
 */
export default function HeroSection() {
  return (
    <section className="relative w-full h-auto md:h-[90vh]">
      {/* Background image container */}
      <figure className="absolute inset-0 -z-10">
        <Image
          src="/backgroundImage.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority // Load this image with high priority for better UX
        />
      </figure>

      {/* Main content container with responsive layout */}
      <div className="relative container mx-auto h-auto md:h-full flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-8 px-4 sm:px-6 lg:px-0 py-8 pt-20 lg:pt-10">
        {/* Hero Slider - Animated content section */}
        <motion.div
          className="md:flex-1 min-w-0 w-full pt-5 md:pt-0"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroSlider />
        </motion.div>

        {/* Profile Image - Hidden on mobile, visible on desktop */}
        <motion.div
          className="shrink-0 mx-auto md:mx-0 hidden justify-center items-center md:flex"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] mx-auto">
            <Image
              src="/Man.png"
              alt="Man"
              width={320}
              height={320}
              className="object-contain p-6"
              priority // Load this image with high priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
