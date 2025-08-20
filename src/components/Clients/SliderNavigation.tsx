"use client";

import { useDirection } from "@/hooks/useDirection";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export default function SliderNavigation() {
  const { isRTL } = useDirection();

  return (
    <motion.div
      className={`flex gap-4 sm:gap-6 lg:gap-10 mt-4 sm:mt-6 justify-center md:justify-end ${
        isRTL ? "md:!justify-end" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* In RTL, we swap the button order, so this "prev" button becomes "next" in RTL */}
      <motion.button
        className="cursor-pointer swiper-prev w-12 h-12 sm:w-14 sm:h-14 md:w-[67px] md:h-[67px] rounded-full bg-[#5d3c2c]/70 flex items-center justify-center hover:bg-[#5d3c2c] transition-colors"
        aria-label="Previous"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true }}
      >
        <svg
          width="20"
          height="20"
          className="sm:w-6 sm:h-6 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left arrow for LTR, right arrow for RTL */}
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rtl:hidden"
          />
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden rtl:block"
          />
        </svg>
      </motion.button>

      {/* In RTL, we swap the button order, so this "next" button becomes "prev" in RTL */}
      <motion.button
        className="cursor-pointer swiper-next w-12 h-12 sm:w-14 sm:h-14 md:w-[67px] md:h-[67px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Next"
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        whileTap="tap"
        viewport={{ once: true }}
      >
        <svg
          width="20"
          height="20"
          className="sm:w-6 sm:h-6 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Right arrow for LTR, left arrow for RTL */}
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="#4b2615"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rtl:hidden"
          />
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="#4b2615"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden rtl:block"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
