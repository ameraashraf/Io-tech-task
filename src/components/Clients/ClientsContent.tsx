"use client";
import Image from "next/image";
import BaseSlider from "../shared/BaseSlider";
import TestimonialSlide from "./TestimonialSlide";
import SliderNavigation from "./SliderNavigation";
import { Testimonial } from "@/app/types/types";
import { useDirection } from "@/hooks/useDirection";
import { motion } from "framer-motion";

interface ClientsContentProps {
  testimonials: Testimonial[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function ClientsContent({ testimonials }: ClientsContentProps) {
  const { isRTL } = useDirection();

  return (
    <motion.div
      className="relative px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Slider */}
      <motion.div variants={itemVariants}>
        <BaseSlider
          items={testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialSlide testimonial={testimonial} />
            </motion.div>
          ))}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: isRTL ? ".swiper-next" : ".swiper-prev",
            nextEl: isRTL ? ".swiper-prev" : ".swiper-next",
          }}
          autoplayDelay={2500}
          className="relative"
        />
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div variants={itemVariants}>
        <SliderNavigation />
      </motion.div>
    </motion.div>
  );
}
