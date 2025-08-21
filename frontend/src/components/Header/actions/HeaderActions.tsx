"use client";
/**
 * Header actions with search functionality
 */
import * as React from "react";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { AnimatePresence } from "framer-motion";

import BookAppointmentButton from "./BookAppointmentButton";
import { useSearchKeyboard } from "../search/useSearchKeyboard";
import SearchTrigger from "../search/SearchTrigger";
import SearchBox from "../search/SearchBox";

type Props = {
  isServicesOpen?: boolean;
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
};

export default function HeaderActions({ open, onOpenChange }: Props) {
  const { i18n } = useHydrationSafeTranslation();
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = open ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const boxRef = React.useRef<HTMLDivElement | null>(null);

  // Keyboard and interaction handling
  const { handleOpen, handleClose } = useSearchKeyboard({
    isOpen,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    triggerRef,
    inputRef,
    boxRef,
  });

  return (
    <div className="flex items-center gap-4 sm:gap-8 lg:gap-10">
      <AnimatePresence initial={false} mode="wait">
        {!isOpen ? (
          <SearchTrigger onOpen={handleOpen} triggerRef={triggerRef} />
        ) : (
          <SearchBox
            isOpen={isOpen}
            onClose={handleClose}
            inputRef={inputRef}
            boxRef={boxRef}
          />
        )}
      </AnimatePresence>

      <LanguageSwitcher
        defaultLanguage="en"
        onLanguageChange={(language) => {
          i18n.changeLanguage(language);
        }}
      />

      <BookAppointmentButton />
    </div>
  );
}
