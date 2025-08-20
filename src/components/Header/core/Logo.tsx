"use client";
/**
 * Logo image component (no internal link).
 */
import Image from "next/image";

type LogoProps = { className?: string };

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/header_Logo_a8e3ad3d02 (1).svg"
      alt="Logo"
      width={120}
      height={80}
      className={className}
    />
  );
}
