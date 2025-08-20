"use client";
/**
 * Mobile top bar and integrated MobileMenu
 */
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

import MobileMenu from "./MobileMenu";
import { NavLink, ServiceColumn } from "@/app/types/types";
import { Logo } from "../core/Logo";

type Props = {
  navLinks: NavLink[];
  services: ServiceColumn[];
  menuState: boolean;
  isScrolled: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (v: boolean) => void;
};

export default function MobileHeader({
  navLinks,
  services,
  menuState,
  isScrolled,
  toggleMobileMenu,
  closeMobileMenu,
  mobileServicesOpen,
  setMobileServicesOpen,
}: Props) {
  const basicLinks = navLinks.filter((l) => !l.dropdown);

  return (
    <nav
      data-state={menuState && "active"}
      className="fixed z-50 w-full px-2 lg:hidden"
    >
      <div
        className={cn(
          "mx-auto mt-1 max-w-6xl px-6 transition-all duration-300 lg:mt-2 lg:px-12",
          isScrolled &&
            "bg-primary/70 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
        )}
      >
        <div className="relative flex flex-wrap items-center justify-between gap-4 py-2 lg:gap-0 lg:py-4">
          <div className="flex w-full justify-between lg:w-auto">
            <Link
              href="/"
              scroll={false}
              aria-label="home"
              className="flex items-center space-x-2"
            >
              <Logo className="w-[88px] h-auto" />
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
              }}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white hover:text-white rounded-md"
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <div className="absolute inset-0 m-auto hidden size-fit lg:block" />

          <MobileMenu
            basicLinks={basicLinks}
            services={services}
            mobileServicesOpen={mobileServicesOpen}
            setMobileServicesOpen={setMobileServicesOpen}
            onItemClick={closeMobileMenu}
          />
        </div>
      </div>
    </nav>
  );
}
