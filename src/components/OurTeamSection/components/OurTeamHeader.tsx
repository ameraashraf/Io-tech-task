"use client";

import { motion } from "framer-motion";

interface OurTeamHeaderProps {
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

export default function OurTeamHeader({
  title = "Our Team",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
}: OurTeamHeaderProps) {
  return (
    <motion.div
      className="text-center"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        className="text-[42px] text-primary font-bold"
        variants={textVariants}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-lg font-medium mt-5 max-w-3xl mx-auto text-foreground"
        variants={textVariants}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
