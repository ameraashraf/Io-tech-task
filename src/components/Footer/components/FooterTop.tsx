"use client";

import React from "react";
import EmailSubscriptionForm from "./EmailSubscriptionForm";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { useDirection } from "@/hooks/useDirection";

interface FooterTopProps {
  children?: React.ReactNode;
}

export default function FooterTop({ children }: FooterTopProps) {
  const { t, ready } = useHydrationSafeTranslation();
  const { isRTL, isHydrated } = useDirection();

  // Use a consistent className during SSR and hydration to prevent mismatch
  // For RTL (Arabic): justify-end, For LTR (English): justify-start
  const justifyClass = isRTL ? "md:justify-end" : "md:justify-end";

  return (
    <div
      className={`footer-section fade-in-up flex flex-col md:flex-row items-center  ${justifyClass} gap-4 md:gap-8 pt-6 md:pt-17 pb-6 md:pb-15`}
    >
      <div className="flex justify-center w-full md:w-auto">
        <EmailSubscriptionForm />
      </div>
      <p>{t("footer.contacts", "Contacts")}</p>
      <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center">
        {children}
      </div>
    </div>
  );
}
