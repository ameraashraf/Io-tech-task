"use client";

import Image from "next/image";
import { Testimonial } from "@/app/types/types";
import { motion } from "framer-motion";

interface TestimonialSlideProps {
  testimonial: Testimonial;
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function TestimonialSlide({
  testimonial,
}: TestimonialSlideProps) {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center gap-6 md:gap-8 lg:gap-12">
      <motion.div
        className="testimonial-image md:col-span-1 lg:col-span-3 flex justify-center md:justify-start rtl:md:justify-end order-2 md:order-1"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={374}
          height={374}
          loading="lazy"
          className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[374px] h-auto"
          onError={(e) => {
            // إذا فشلت الصورة، استخدم الصورة الافتراضية
            const target = e.target as HTMLImageElement;
            target.src = "/Man.png";
          }}
        />
      </motion.div>

      <motion.div
        className="testimonial-content md:col-span-1 lg:col-span-7 order-1 md:order-2 text-center md:text-left rtl:md:text-right"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.blockquote
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-relaxed mb-3 sm:mb-4"
          variants={textVariants}
        >
          {testimonial.text}
        </motion.blockquote>

        <motion.div className="mb-4 sm:mb-6" variants={textVariants}>
          <motion.h4
            className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {testimonial.name}
          </motion.h4>
          <motion.p
            className="text-xs sm:text-sm opacity-90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {testimonial.title}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
