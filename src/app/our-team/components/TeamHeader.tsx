"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export const TeamHeader = () => {
  return (
    <PageHeader
      titleKey="pages.ourTeam.title"
      titleFallback="Meet Our Expert Team"
      subtitleKey="pages.ourTeam.subtitle"
      subtitleFallback="Our team of experienced legal professionals brings together deep expertise, local knowledge, and international best practices to deliver exceptional results."
    />
  );
};
