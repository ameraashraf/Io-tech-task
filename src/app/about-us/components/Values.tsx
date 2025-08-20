"use client";

import { IconGrid } from "@/components/shared/IconGrid";
import { valuesData } from "../data/valuesData";

export const Values = () => {
  const valuesWithTranslations = valuesData.map((value) => ({
    ...value,
    titleKey: `pages.aboutUs.values.${value.key}.title`,
    descriptionKey: `pages.aboutUs.values.${value.key}.description`,
  }));

  return (
    <IconGrid
      titleKey="pages.aboutUs.values.title"
      titleFallback="Our Values"
      items={valuesWithTranslations}
    />
  );
};
