"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export const BlogsHeader = () => {
  return (
    <PageHeader
      titleKey="pages.blogs.title"
      titleFallback="Legal Insights & Updates"
      subtitleKey="pages.blogs.subtitle"
      subtitleFallback="Stay informed with the latest legal developments, industry insights, and expert analysis from our team of legal professionals."
    />
  );
};
