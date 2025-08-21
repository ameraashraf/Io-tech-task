"use client";
/**
 * Mobile menu content block including basic links and the Services accordion.
 */
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeaderActions from "../actions/HeaderActions";
import { ServiceColumn, NavLink } from "@/app/types/types";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";

type Props = {
  basicLinks: NavLink[];
  services: ServiceColumn[];
  mobileServicesOpen: boolean;
  setMobileServicesOpen: (v: boolean) => void;
  onItemClick: () => void;
};

export default function MobileMenu({
  basicLinks,
  services,
  mobileServicesOpen,
  setMobileServicesOpen,
  onItemClick,
}: Props) {
  const { t, ready } = useHydrationSafeTranslation();

  return (
    <div
      className="
        bg-primary text-white
        in-data-[state=active]:block lg:in-data-[state=active]:flex
        mb-6 hidden w-full flex-wrap items-center justify-end
        space-y-8 rounded-3xl border border-white/10 p-6
        shadow-2xl shadow-black/20
        md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0
        lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none
        dark:shadow-none dark:lg:bg-transparent
      "
    >
      <div className="lg:hidden w-full">
        <ul className="space-y-6 text-base">
          {basicLinks.map((item) => (
            <li key={item.name}>
              {item.disabled ? (
                <span className="block rounded-lg px-3 py-2 text-white/80">
                  {item.translationKey
                    ? t(item.translationKey, item.name)
                    : item.name}
                </span>
              ) : (
                <Link
                  href={item.href!}
                  className="block rounded-lg px-3 py-2 text-white hover:bg-white/10 transition"
                  onClick={onItemClick}
                >
                  <span>
                    {item.translationKey
                      ? t(item.translationKey, item.name)
                      : item.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Accordion
            type="single"
            collapsible
            value={mobileServicesOpen ? "services" : undefined}
            onValueChange={(v) => setMobileServicesOpen(v === "services")}
          >
            <AccordionItem value="services" className="border-none">
              <AccordionTrigger className="rounded-xl border-2 border-white bg-transparent px-4 py-3 text-left text-white hover:no-underline hover:bg-white/10 transition">
                {t("header.nav.services", "Services")}
              </AccordionTrigger>

              <AccordionContent className="pt-3">
                <ul className="max-h-64 overflow-auto space-y-2">
                  {services
                    .flatMap((col) => col.items)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/services/${item.id}`}
                          onClick={onItemClick}
                          className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10 hover:text-white transition"
                        >
                          {item.translationKey
                            ? t(item.translationKey, item.name)
                            : item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
        <HeaderActions />
      </div>
    </div>
  );
}
