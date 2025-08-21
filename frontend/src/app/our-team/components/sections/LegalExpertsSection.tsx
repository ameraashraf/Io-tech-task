"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

interface Member {
  id?: string | number;
  title: string;
  position: string;
  image: string;
  icons?: { [key: string]: string };
  links?: { [key: string]: string };
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
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

export const LegalExpertsSection = ({ members }: { members: Member[] }) => {
  const { t } = useHydrationSafeTranslation();
  return (
    <motion.div className="mb-20" variants={itemVariants}>
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("pages.ourTeam.legalExperts", "Legal Experts")}
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-64"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={member.image}
                alt={member.title}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="p-6 text-center">
              <motion.h3
                className="text-xl font-bold text-[#4b2615] mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {member.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {member.position}
              </motion.p>
              {member.icons && member.links && (
                <motion.div
                  className="flex justify-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={member.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.icons.whatsapp}
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                  </motion.a>
                  <motion.a
                    href={member.links.phone}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.icons.phone}
                      alt="Phone"
                      width={20}
                      height={20}
                    />
                  </motion.a>
                  <motion.a
                    href={member.links.email}
                    className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.icons.email}
                      alt="Email"
                      width={20}
                      height={20}
                    />
                  </motion.a>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
