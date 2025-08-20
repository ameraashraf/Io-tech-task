"use client";
/**
 * Main Header component that combines MobileHeader and DesktopHeader
 * Uses shared header state to ensure consistent behavior across different screen sizes
 * Manages responsive navigation, services dropdown, and search functionality
 */
import React from "react";
import { navLinks, services } from "../data/headerData";
import { useHeaderState } from "../hooks/useHeaderState";
import MobileHeader from "../mobile/MobileHeader";
import DesktopHeader from "../desktop/DesktopHeader";

export default function Header() {
  // Get shared header state from custom hook
  // This ensures consistent state management across mobile and desktop headers
  const {
    isServicesOpen,
    setIsServicesOpen,
    menuState,
    toggleMobileMenu,
    closeMobileMenu,
    isScrolled,
    mobileServicesOpen,
    setMobileServicesOpen,
  } = useHeaderState();

  // Local state for search functionality
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <header className="z-50">
      {/* Mobile Header - Renders on smaller screens */}
      <MobileHeader
        navLinks={navLinks}
        services={services}
        menuState={menuState}
        isScrolled={isScrolled}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
        mobileServicesOpen={mobileServicesOpen}
        setMobileServicesOpen={setMobileServicesOpen}
      />

      {/* Desktop Header - Renders on larger screens */}
      <DesktopHeader
        navLinks={navLinks}
        services={services}
        isServicesOpen={isServicesOpen}
        setIsServicesOpen={setIsServicesOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        isScrolled={isScrolled}
      />
    </header>
  );
}
