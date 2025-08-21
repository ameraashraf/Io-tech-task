import { useEffect, useState } from "react";

/**
 * Custom hook to track component mounting state
 * Used to prevent hydration mismatches between server and client rendering
 * Ensures animations and client-side features only run after component is mounted
 * This is crucial for preventing layout shifts and animation inconsistencies
 * @returns boolean indicating if component is mounted and ready for client-side features
 */
export function useServicePageMount() {
  const [isMounted, setIsMounted] = useState(false);

  // Mark component as mounted after initial render
  // This ensures client-side features like animations only run after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
