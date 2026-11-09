"use client";

import { useLayoutEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

type EditorialDialogProps = {
  children: ReactNode;
  labelledBy: string;
  onClose: () => void;
};

export function EditorialDialog({ children, labelledBy, onClose }: EditorialDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  useLayoutEffect(() => {
    if (!mounted) return;
    const bodyStyle = document.body.style;
    const rootStyle = document.documentElement.style;
    const previousBodyStyle = {
      overflow: bodyStyle.overflow,
      rootOverflowY: rootStyle.overflowY,
    };
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const main = document.querySelector("main");
    const hadInert = main?.hasAttribute("inert");

    bodyStyle.overflow = "hidden";
    rootStyle.overflowY = "hidden";
    main?.setAttribute("inert", "");
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      bodyStyle.overflow = previousBodyStyle.overflow;
      rootStyle.overflowY = previousBodyStyle.rootOverflowY;
      if (!hadInert) main?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="editorial-dialog" role="presentation" onPointerDown={onClose}>
      <div
        ref={dialogRef}
        aria-labelledby={labelledBy}
        aria-modal="true"
        className="editorial-dialog__panel"
        onPointerDown={(event) => event.stopPropagation()}
        role="dialog"
        tabIndex={-1}
      >
        <button className="editorial-dialog__close" type="button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
