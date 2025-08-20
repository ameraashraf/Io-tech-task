"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export const AboutUsHeader = () => {
  return (
    <PageHeader
      titleKey="pages.aboutUs.title"
      titleFallback="About Our Company"
      subtitleKey="pages.aboutUs.subtitle"
      subtitleFallback="We are a leading legal services company dedicated to providing comprehensive legal solutions for businesses and individuals across the region."
    />
  );
};
