"use client";

import { useEffect, useCallback } from "react";

interface UseSearchKeyboardProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  boxRef: React.RefObject<HTMLDivElement | null>;
}

export function useSearchKeyboard({
  isOpen,
  onOpen,
  onClose,
  triggerRef,
  inputRef,
  boxRef,
}: UseSearchKeyboardProps) {
  // Focus input when search opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, inputRef]);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) {
        onClose();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [isOpen, onClose, triggerRef, boxRef]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }

      const key = (typeof e.key === "string" ? e.key : "").toLowerCase();

      if ((e.ctrlKey || e.metaKey) && key === "k") {
        e.preventDefault();
        onOpen();
      }

      if (key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpen, onClose, triggerRef]);

  const handleOpen = useCallback(() => onOpen(), [onOpen]);

  const handleClose = useCallback(() => {
    onClose();
    triggerRef.current?.focus();
  }, [onClose, triggerRef]);

  return {
    handleOpen,
    handleClose,
  };
}
