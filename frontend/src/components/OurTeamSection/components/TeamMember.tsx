"use client";

import { TeamMemberType } from "@/app/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMemberProps {
  member: TeamMemberType;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
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

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export default function TeamMember({ member }: TeamMemberProps) {
  const iconEntries = Object.entries(member.icons ?? {});
  return (
    <motion.div
      className="flex flex-col gap-4 text-center"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Image
          src={member.image}
          alt={member.title}
          width={269}
          height={184}
          onError={(e) => {
            // إذا فشلت الصورة، استخدم الصورة الافتراضية
            const target = e.target as HTMLImageElement;
            target.src = "/Man.png";
          }}
        />
      </motion.div>

      <motion.h5
        className="text-primary font-medium text-2xl leading-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {member.title}
      </motion.h5>
      <motion.p
        className="font-bold text-muted text-sm uppercase tracking-widest leading-7"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {member.position}
      </motion.p>

      <motion.div
        className="flex gap-3 mx-auto items-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {iconEntries.map(([key, src], index) => (
          <motion.a
            key={key}
            href={member.links?.[key]}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image src={src} alt={key} width={24} height={24} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
