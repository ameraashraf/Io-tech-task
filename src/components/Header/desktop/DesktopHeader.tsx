"use client";
/**
 * Desktop header reproducing your original layout
 */
import React from "react";
import { cn } from "@/lib/utils";
import { NavLink, ServiceColumn } from "@/app/types/types";
import NavLinks from "../navigation/NavLinks";
import HeaderActions from "../actions/HeaderActions";
import Link from "next/link";
import { Logo } from "../core/Logo";
import { motion } from "framer-motion";

type Props = {
  navLinks: NavLink[];
  services: ServiceColumn[];
  isServicesOpen: boolean;
  setIsServicesOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  isScrolled?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function DesktopHeader({
  navLinks,
  services,
  isServicesOpen,
  setIsServicesOpen,
  searchOpen,
  setSearchOpen,
  isScrolled,
}: Props) {
  return (
    <div className="hidden lg:block">
      <motion.div
        className={cn(
          "absolute top-0 left-0 right-0",
          isServicesOpen
            ? "bg-primary"
            : isScrolled
            ? "bg-primary/60"
            : "bg-none"
        )}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className={cn(
            "container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 py-3"
          )}
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Logo />
            </Link>
          </motion.div>

          {/* Hide nav when search is open on desktop */}
          <motion.nav
            className={cn("w-full sm:w-auto", searchOpen && "hidden")}
            aria-hidden={searchOpen}
            variants={itemVariants}
          >
            <NavLinks
              navLinks={navLinks}
              services={services}
              isServicesOpen={isServicesOpen}
              onServicesOpenChange={setIsServicesOpen}
            />
          </motion.nav>

          {/* Pass search state to actions */}
          <motion.div variants={itemVariants}>
            <HeaderActions
              isServicesOpen={isServicesOpen}
              open={searchOpen}
              onOpenChange={setSearchOpen}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
