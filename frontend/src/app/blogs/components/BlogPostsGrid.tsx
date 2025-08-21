"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";
import { BlogPost } from "../types/types";

interface BlogPostsGridProps {
  blogPosts: BlogPost[];
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
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export const BlogPostsGrid = ({ blogPosts }: BlogPostsGridProps) => {
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
        {t("pages.blogs.latestArticles", "Latest Articles")}
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-48"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <div className="p-6">
              <motion.div
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="px-3 py-1 bg-[#4b2615] text-white text-sm rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {post.category}
                </motion.span>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-[#4b2615] mb-3 line-clamp-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {post.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-4 line-clamp-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {post.excerpt}
              </motion.p>
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-8 h-8 bg-[#4b2615] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white text-sm font-semibold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-medium text-sm text-[#4b2615]">
                      {post.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
                <motion.button
                  className="text-[#4b2615] hover:text-[#3d1f11] font-medium text-sm"
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("pages.blogs.readMore", "Read More")} {isRTL ? "←" : "→"}
                </motion.button>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};
