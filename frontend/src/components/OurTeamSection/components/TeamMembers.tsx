"use client";

import { TeamMemberType } from "@/app/types/types";
import TeamMember from "./TeamMember";
import BaseSlider from "../../shared/BaseSlider";
import { useDirection } from "@/hooks/useDirection";
import { motion } from "framer-motion";

interface TeamMembersProps {
  data: TeamMemberType[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const buttonVariants = {
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

export default function TeamMembers({ data }: TeamMembersProps) {
  const { isRTL } = useDirection();

  return (
    <motion.div
      className="relative mt-19"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Prev Button */}
      <motion.button
        aria-label="Previous"
        className="team-prev absolute left-0 rtl:right-0 rtl:left-auto top-1/2 -translate-y-1/2 z-10 h-10 w-10"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <span className="block text-4xl cursor-pointer leading-none">
          {isRTL ? "<" : "<"}
        </span>
      </motion.button>

      {/* Next Button */}
      <motion.button
        aria-label="Next"
        className="team-next absolute right-0 rtl:left-0 rtl:right-auto top-1/2 -translate-y-1/2 z-10 h-10 w-10"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <span className="block text-4xl leading-none cursor-pointer">
          {isRTL ? ">" : ">"}
        </span>
      </motion.button>

      {/* Responsive padding-inline */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-[120px] xl:px-[137px]">
        <BaseSlider
          items={data.map((member, index) => (
            <motion.div
              key={member.id || member.title}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
          breakpoints={{
            768: { slidesPerView: 2 }, // md
            1024: { slidesPerView: 3 }, // lg
          }}
          navigation={{
            prevEl: isRTL ? ".team-next" : ".team-prev",
            nextEl: isRTL ? ".team-prev" : ".team-next",
          }}
          autoplayDelay={2000}
          customAutoplayDirection={isRTL} // For team members: LTR should go left to right (reverseDirection: false), RTL should go right to left (reverseDirection: true)
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
