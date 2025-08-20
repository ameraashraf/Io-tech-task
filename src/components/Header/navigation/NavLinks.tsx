"use client";
/**
 * Top-level nav links + ServicesDropdown entry.
 */
import React from "react";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import { NavLink, ServiceColumn } from "@/app/types/types";
import { cn } from "@/lib/utils";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

interface Props {
  navLinks: NavLink[];
  services: ServiceColumn[];
  isServicesOpen?: boolean;
  onServicesOpenChange?: (open: boolean) => void;
}

export default function NavLinks({
  navLinks,
  services,
  isServicesOpen,
  onServicesOpenChange,
}: Props) {
  const { t, ready } = useHydrationSafeTranslation();

  return (
    <ul
      className={cn(
        "flex flex-col sm:flex-row items-center gap-4 sm:gap-7",
        isServicesOpen ? "text-white" : "text-black"
      )}
    >
      {navLinks.map((link, index) => (
        <li key={index} className="text-white">
          {link.dropdown ? (
            <ServicesDropdown
              services={services}
              href={link.href}
              name={
                link.translationKey
                  ? t(link.translationKey, link.name)
                  : link.name
              }
              open={isServicesOpen}
              onOpenChange={onServicesOpenChange}
            />
          ) : link.disabled ? (
            <span className="cursor-default select-none">
              {link.translationKey
                ? t(link.translationKey, link.name)
                : link.name}
            </span>
          ) : (
            <Link href={link.href!}>
              {link.translationKey
                ? t(link.translationKey, link.name)
                : link.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
