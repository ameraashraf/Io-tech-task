"use client";

import { motion } from "framer-motion";

interface ClientsHeaderProps {
  title?: string;
  description?: string;
}

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
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

export default function ClientsHeader({
  title = "What our clients are saying",
  description = "Our clients range from individual investors, to local, international as well as fortune 500 companies.Our clients range from individual investors, to local, international as well as fortune 500 companies.",
}: ClientsHeaderProps) {
  return (
    <motion.div
      className="text-white text-center lg:text-left rtl:lg:text-right"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-4 sm:mb-6"
        variants={textVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed"
        variants={textVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
