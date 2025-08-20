"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * Props interface for the BaseSlider component
 * Provides comprehensive configuration options for Swiper slider
 */
interface BaseSliderProps {
  items: ReactNode[]; // Array of React nodes to render as slides
  spaceBetween?: number; // Space between slides in pixels
  slidesPerView?: number; // Number of slides visible at once
  breakpoints?: Record<number, { slidesPerView: number }>; // Responsive breakpoints
  loop?: boolean; // Whether to enable infinite loop
  autoplayDelay?: number; // Delay between autoplay transitions in milliseconds
  pauseOnMouseEnter?: boolean; // Whether to pause autoplay on mouse enter
  navigation?: { prevEl: string; nextEl: string }; // Navigation button selectors
  pagination?: {
    el: string;
    renderBullet?: (index: number, className: string) => string;
  }; // Pagination configuration
  speed?: number; // Transition speed in milliseconds
  className?: string; // Additional CSS classes
  customAutoplayDirection?: boolean; // Optional override for autoplay direction
}

/**
 * BaseSlider component built on top of Swiper.js
 * Provides RTL support, language detection, and comprehensive configuration options
 * Handles complex scenarios like language switching and direction changes
 */
export default function BaseSlider({
  items,
  spaceBetween = 32,
  slidesPerView = 1,
  breakpoints,
  loop = true,
  autoplayDelay = 2000,
  pauseOnMouseEnter = true,
  navigation,
  pagination,
  speed = 600,
  className = "",
  customAutoplayDirection,
}: BaseSliderProps) {
  // State management for RTL support and language detection
  const [isRTL, setIsRTL] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLanguageReady, setIsLanguageReady] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Handle component mounting to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Complex effect for language and direction detection
  useEffect(() => {
    if (!isMounted) return;

    /**
     * Update direction based on current HTML dir attribute
     * This ensures slider direction matches the page direction
     */
    const updateDirection = () => {
      const newIsRTL = document.documentElement.dir === "rtl";
      setIsRTL(newIsRTL);
    };

    /**
     * Check if language initialization is complete
     * Looks for required HTML attributes to determine if language is ready
     */
    const checkLanguageReady = () => {
      // Look for the language initialization marker
      const isReady =
        document.documentElement.hasAttribute("lang") &&
        document.documentElement.hasAttribute("dir");
      setIsLanguageReady(isReady);

      if (isReady) {
        updateDirection();
      }
    };

    checkLanguageReady();

    // Listen for custom language ready event from LanguageInitializer
    const handleLanguageReady = (event: CustomEvent) => {
      setIsLanguageReady(true);
      setIsRTL(event.detail.isRTL);
    };

    window.addEventListener(
      "languageReady",
      handleLanguageReady as EventListener
    );

    // Watch for direction changes using MutationObserver
    // This handles dynamic language switching without page reload
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "dir" ||
          mutation.attributeName === "lang"
        ) {
          checkLanguageReady();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "lang"],
    });

    return () => {
      observer.disconnect();
      window.removeEventListener(
        "languageReady",
        handleLanguageReady as EventListener
      );
    };
  }, [isMounted]);

  // Handle autoplay direction change when RTL changes
  useEffect(() => {
    if (swiperRef.current && autoplayDelay && isLanguageReady) {
      // Stop autoplay before changing direction
      if (swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }

      // Update autoplay direction based on RTL state
      if (swiperRef.current.params && swiperRef.current.params.autoplay) {
        // Use custom direction if provided, otherwise use default RTL logic
        const reverseDirection =
          customAutoplayDirection !== undefined
            ? customAutoplayDirection
            : isRTL;
        swiperRef.current.params.autoplay.reverseDirection = reverseDirection;
      }

      // Restart autoplay with new direction after a short delay
      setTimeout(() => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          swiperRef.current.autoplay.start();
        }
      }, 100);
    }
  }, [isRTL, autoplayDelay, isLanguageReady]);

  // Force re-render when direction changes by using key
  // This ensures Swiper is properly re-initialized with new direction
  const swiperKey = `swiper-${
    isMounted ? (isRTL ? "rtl" : "ltr") : "initial"
  }-${isLanguageReady}`;

  // Show loading state until both mounted and language is ready
  // This prevents hydration mismatches and ensures proper initialization
  if (!isMounted || !isLanguageReady) {
    return (
      <div className="w-full h-48 flex items-center justify-center opacity-50">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-full flex items-center justify-center">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Loading slider...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        key={swiperKey} // Force re-initialization when direction changes
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        loop={loop}
        speed={speed}
        direction="horizontal"
        dir={isRTL ? "rtl" : "ltr"}
        navigation={navigation}
        pagination={pagination}
        autoplay={
          autoplayDelay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter,
                reverseDirection:
                  customAutoplayDirection !== undefined
                    ? customAutoplayDirection
                    : isRTL,
              }
            : false
        }
        className={className}
      >
        {items.map((node, i) => (
          <SwiperSlide key={i}>{node}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
