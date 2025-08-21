import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { BlogPost } from "../types/types";
import { blogPosts } from "../data/blogPosts";

export const useBlogsPage = () => {
  const { t, i18n } = useHydrationSafeTranslation();

  // Get translated blog posts based on current language
  const getTranslatedBlogPosts = (): BlogPost[] => {
    const isArabic = i18n.language === "ar";
    return blogPosts.map((post, index) => {
      const postKeys = [
        "corporateGovernance",
        "foreignInvestment",
        "intellectualProperty",
        "arbitration",
        "vision2030",
        "contractLaw",
      ];
      const key = postKeys[index];

      return {
        ...post,
        title: isArabic
          ? t(`pages.blogs.posts.${key}.title`, post.title)
          : post.title,
        excerpt: isArabic
          ? t(`pages.blogs.posts.${key}.excerpt`, post.excerpt)
          : post.excerpt,
        category: isArabic
          ? t(
              `pages.blogs.categories.${post.category
                .toLowerCase()
                .replace(/\s+/g, "")}`,
              post.category
            )
          : post.category,
      };
    });
  };

  const translatedBlogPosts = getTranslatedBlogPosts();

  return {
    translatedBlogPosts,
  };
};
