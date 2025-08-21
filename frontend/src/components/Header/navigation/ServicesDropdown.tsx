"use client";
/**
 * Desktop Services mega-menu
 */
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ServiceColumn } from "@/app/types/types";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface Props {
  services: ServiceColumn[];
  name: string;
  href?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function ServicesDropdown({
  services,
  name,
  href,
  open,
  onOpenChange,
}: Props) {
  const { t, ready } = useHydrationSafeTranslation();

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && open) {
        onOpenChange?.(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open, onOpenChange]);

  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button className="outline-none cursor-pointer bg-transparent flex items-center gap-1">
          <span>{name}</span>
          {open ? (
            <ChevronDownIcon className="size-4" />
          ) : (
            <ChevronUpIcon className="size-4" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={12}
        className="w-screen max-w-none text-primary-foreground p-0 shadow-none border-none data-[state=open]:animate-slide-down bg-transparent"
      >
        <div className="container mx-auto rounded-2xl rounded-t-none bg-primary">
          <div className="px-6 py-8 pb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((col, index) => (
              <div key={index} className="space-y-8 cursor-pointer">
                {col.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${item.id}`}
                    className="block"
                    onClick={() => onOpenChange?.(false)}
                  >
                    <DropdownMenuLabel>
                      {item.translationKey
                        ? t(item.translationKey, item.name)
                        : item.name}
                    </DropdownMenuLabel>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
