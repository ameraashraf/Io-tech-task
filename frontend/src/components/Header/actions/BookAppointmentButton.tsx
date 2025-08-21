"use client";
import { Button } from "@/components/ui/button";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

export default function BookAppointmentButton() {
  const { t } = useHydrationSafeTranslation();

  return (
    <Button className="border border-white text-white text-xs font-medium p-2 sm:p-3 bg-transparent hover:bg-white/10">
      {t("header.bookAppointment", "Book Appointment")}
    </Button>
  );
}
