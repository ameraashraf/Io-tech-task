"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

const categories = [
  { id: "team", label: "Team", labelAr: "الفريق" },
  { id: "services", label: "Services", labelAr: "الخدمات" },
];

export default function SearchSidebar() {
  const [activeCategory, setActiveCategory] = useState("team");
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL } = useDirection();

  return (
    <div className="bg-gray-50 px-6 py-10 lg:py-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="space-y-8">
        {categories.map((category) => {
          const displayLabel =
            isRTL && ready
              ? t(`pages.searchCategories.${category.id}`, category.labelAr)
              : category.label;

          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
              )}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <span
                className={cn(
                  "relative inline-block text-center w-fit text-xl font-semibold text-primary"
                )}
              >
                {displayLabel}
                <motion.span
                  className="absolute left-0 -bottom-1 h-0.5 bg-current"
                  variants={{
                    rest: { width: 0, opacity: 0 },
                    hover: { width: "100%", opacity: 1 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.5,
                  }}
                />
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
