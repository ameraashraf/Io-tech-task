"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

interface SearchTriggerProps {
  onOpen: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export default function SearchTrigger({
  onOpen,
  triggerRef,
}: SearchTriggerProps) {
  const { t } = useHydrationSafeTranslation();

  return (
    <motion.button
      ref={triggerRef}
      type="button"
      onClick={onOpen}
      aria-label={t("header.search.openSearch", "Open search")}
      className="p-0 m-0 bg-transparent border-0 inline-flex"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <Image
        src="/Search.png"
        alt="Search icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
    </motion.button>
  );
}
