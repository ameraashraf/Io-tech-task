"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export const ContactUsHeader = () => {
  return (
    <PageHeader
      titleKey="pages.contactUs.title"
      titleFallback="Get in Touch"
      subtitleKey="pages.contactUs.subtitle"
      subtitleFallback="Ready to discuss your legal needs? Our team is here to help. Contact us today for a consultation or to learn more about our services."
    />
  );
};
