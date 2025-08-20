"use client";

import BaseSlider from "../shared/BaseSlider";
import { useDirection } from "@/hooks/useDirection";
import { motion } from "framer-motion";
import { useHeroSections, transformHeroSlides } from "./hooks";
import { useTranslation } from "react-i18next";

const slideVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export default function HeroSlider() {
  const { isRTL } = useDirection();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const { data, isLoading, error } = useHeroSections(currentLocale);

  // Transform the API data to match existing component expectations
  const heroSlides = data ? transformHeroSlides(data) : [];

  // Loading state
  if (isLoading) {
    return (
      <div className="relative">
        <div className="flex flex-col gap-8 text-white pl-16 rtl:pr-16 rtl:pl-0 lg:pl-24 lg:rtl:pr-24 lg:rtl:pl-0">
          <div className="flex flex-col gap-6">
            <div className="animate-pulse">
              <div className="h-8 sm:h-10 md:h-12 lg:h-14 bg-white/20 rounded mb-4"></div>
              <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-white/20 rounded mb-2"></div>
              <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-white/20 rounded mb-2"></div>
              <div className="h-4 sm:h-5 md:h-6 lg:h-7 bg-white/20 rounded w-3/4"></div>
            </div>
            <div className="animate-pulse">
              <div className="h-10 sm:h-12 lg:h-14 bg-white/20 rounded-2xl w-32"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="relative">
        <div className="flex flex-col gap-8 text-white pl-16 rtl:pr-16 rtl:pl-0 lg:pl-24 lg:rtl:pr-24 lg:rtl:pl-0">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold">
              Error
            </h1>
            <p className="text-sm/6 sm:text-base/7 lg:text-lg/8 text-white/90 max-w-3xl">
              Something went wrong while loading the content. Please try again
              later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // If no data, show empty state
  if (!heroSlides.length) {
    return (
      <div className="relative">
        <div className="flex flex-col gap-8 text-white pl-16 rtl:pr-16 rtl:pl-0 lg:pl-24 lg:rtl:pr-24 lg:rtl:pl-0">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold">
              No Content
            </h1>
            <p className="text-sm/6 sm:text-base/7 lg:text-lg/8 text-white/90 max-w-3xl">
              No content available at the moment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <style jsx>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          margin: 4px 0 !important;
          transition: all 0.3s ease;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          background: #fff !important;
          transform: scale(1.2);
        }
        .hero-pagination .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.6) !important;
        }
      `}</style>

      {/* Navigation Arrow and Pagination */}
      <div className="absolute left-0 rtl:right-0 rtl:left-auto top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-25">
        <motion.button
          aria-label="Previous slide"
          className="hero-prev p-2 text-white hover:text-gray-300 transition focus:outline-none focus:ring-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            {/* Left arrow for LTR */}
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rtl:hidden"
            />
            {/* Right arrow for RTL */}
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden rtl:block"
            />
          </svg>
        </motion.button>

        <div className="hero-pagination flex flex-col items-center gap-3" />
      </div>

      <button className="hero-next hidden" aria-hidden="true" />

      <BaseSlider
        items={heroSlides.map((s) => (
          <motion.div
            key={s.id}
            className="flex flex-col gap-8 text-white pl-16 rtl:pr-16 rtl:pl-0 lg:pl-24 lg:rtl:pr-24 lg:rtl:pl-0"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col gap-6">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {s.title}
              </motion.h1>
              <motion.p
                className="text-sm/6 sm:text-base/7 lg:text-lg/8 text-white/90 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {s.description}
              </motion.p>
            </div>
            <motion.button
              className="bg-white text-[#2c2c2c] w-fit px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-2xl hover:bg-white/90 text-sm sm:text-base lg:text-lg font-medium transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {s.ctaText}
            </motion.button>
          </motion.div>
        ))}
        speed={700}
        autoplayDelay={2500}
        navigation={{
          prevEl: isRTL ? ".hero-next" : ".hero-prev",
          nextEl: isRTL ? ".hero-prev" : ".hero-next",
        }}
        pagination={{
          el: ".hero-pagination",
          renderBullet: (_i, className) =>
            `<span class="${className} block w-2 h-2 rounded-full"></span>`,
        }}
        className="w-full"
      />
    </div>
  );
}
