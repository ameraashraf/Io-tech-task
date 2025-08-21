import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge CSS classes with conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 * @param inputs - CSS classes to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility function to conditionally apply RTL-aware classes
 * Automatically switches between LTR and RTL classes based on text direction
 * @param isRTL - Whether the current direction is RTL
 * @param ltrClasses - Classes to apply for LTR (left-to-right)
 * @param rtlClasses - Classes to apply for RTL (right-to-left)
 * @returns Combined class string for the appropriate direction
 */
export function rtlClass(
  isRTL: boolean,
  ltrClasses: string,
  rtlClasses: string
) {
  return isRTL ? rtlClasses : ltrClasses;
}

/**
 * Utility function to get text alignment based on direction
 * Automatically adjusts text alignment for RTL languages
 * @param isRTL - Whether the current direction is RTL
 * @param alignment - Base alignment ('left', 'right', 'center')
 * @returns RTL-aware alignment class
 */
export function rtlTextAlign(
  isRTL: boolean,
  alignment: "left" | "right" | "center" = "left"
) {
  if (alignment === "center") return "text-center";
  if (isRTL) {
    return alignment === "left" ? "text-right" : "text-left";
  }
  return alignment === "left" ? "text-left" : "text-right";
}

/**
 * Utility function to get flex justify alignment based on direction
 * Automatically adjusts flex justification for RTL languages
 * @param isRTL - Whether the current direction is RTL
 * @param alignment - Base alignment ('start', 'end', 'center')
 * @returns RTL-aware justify alignment class
 */
export function rtlJustify(
  isRTL: boolean,
  alignment: "start" | "end" | "center" = "start"
) {
  if (alignment === "center") return "justify-center";
  if (isRTL) {
    return alignment === "start" ? "justify-end" : "justify-start";
  }
  return alignment === "start" ? "justify-start" : "justify-end";
}
