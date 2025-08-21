/**
 * Custom hook for centralized header state management
 * Handles scroll detection, responsive behavior, and menu state coordination
 * Ensures consistent behavior across mobile and desktop header variants
 */
import * as React from "react";

export function useHeaderState() {
  // State for services dropdown visibility (desktop)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  // State for mobile menu visibility
  const [menuState, setMenuState] = React.useState(false);
  // State for scroll detection (used for header styling)
  const [isScrolled, setIsScrolled] = React.useState(false);
  // State for mobile services dropdown visibility
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  // State to track if component is mounted (prevents hydration issues)
  const [isMounted, setIsMounted] = React.useState(false);

  // Handle mounting to prevent hydration mismatch
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll detection for header styling
  React.useEffect(() => {
    if (!isMounted) return;

    const onScroll = () => setIsScrolled(window.scrollY > 50);
    // Set initial scroll state based on current scroll position
    setIsScrolled(window.scrollY > 50);

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMounted]);

  // Handle responsive behavior - close menus when screen size changes
  React.useEffect(() => {
    if (!isMounted) return;

    const onResize = () => {
      // Close mobile menu when switching to desktop
      if (window.innerWidth >= 1024 && menuState) {
        setMenuState(false);
      }
      // Close desktop services dropdown when switching to mobile
      if (window.innerWidth < 1024 && isServicesOpen) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuState, isServicesOpen, isMounted]);

  // Close mobile services dropdown when mobile menu opens
  React.useEffect(() => {
    if (menuState) setMobileServicesOpen(false);
  }, [menuState]);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMenuState((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => setMenuState(false);

  return {
    isServicesOpen,
    setIsServicesOpen,
    menuState,
    toggleMobileMenu,
    closeMobileMenu,
    isScrolled,
    mobileServicesOpen,
    setMobileServicesOpen,
  };
}
