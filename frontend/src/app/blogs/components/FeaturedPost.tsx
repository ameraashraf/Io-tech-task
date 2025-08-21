"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { BlogPost } from "../types/types";

interface FeaturedPostProps {
  blogPost: BlogPost;
}

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

const featuredCardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export const FeaturedPost = ({ blogPost }: FeaturedPostProps) => {
  const { t } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  return (
    <motion.div className="mb-16" variants={itemVariants}>
      <motion.h2
        className="text-2xl font-bold text-[#4b2615] mb-8"
        initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("pages.blogs.featuredArticle", "Featured Article")}
      </motion.h2>
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        variants={featuredCardVariants}
        whileHover="hover"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <motion.div
            className="relative h-64 md:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="p-8 md:p-12">
            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="px-3 py-1 bg-[#4b2615] text-white text-sm rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {blogPost.category}
              </motion.span>
              <span className="text-sm text-muted-foreground">
                {blogPost.readTime}
              </span>
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-[#4b2615] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {blogPost.title}
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {blogPost.excerpt}
            </motion.p>
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 bg-[#4b2615] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-semibold">
                    {blogPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </motion.div>
                <div>
                  <p className="font-medium text-[#4b2615]">
                    {blogPost.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {blogPost.date}
                  </p>
                </div>
              </div>
              <motion.button
                className="px-6 py-2 bg-[#4b2615] text-white rounded-lg hover:bg-[#3d1f11] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("pages.blogs.readMore", "Read More")}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
