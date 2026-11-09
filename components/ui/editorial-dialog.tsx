"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
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

  useEffect(() => {
    if (!mounted) return;
    const scrollY = window.scrollY;
    const bodyStyle = document.body.style;
    const previousBodyStyle = {
      left: bodyStyle.left,
      overflow: bodyStyle.overflow,
      position: bodyStyle.position,
      right: bodyStyle.right,
      top: bodyStyle.top,
      width: bodyStyle.width,
    };
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const main = document.querySelector("main");
    const hadInert = main?.hasAttribute("inert");

    bodyStyle.left = "0";
    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.right = "0";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.width = "100%";
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
      bodyStyle.left = previousBodyStyle.left;
      bodyStyle.overflow = previousBodyStyle.overflow;
      bodyStyle.position = previousBodyStyle.position;
      bodyStyle.right = previousBodyStyle.right;
      bodyStyle.top = previousBodyStyle.top;
      bodyStyle.width = previousBodyStyle.width;
      if (!hadInert) main?.removeAttribute("inert");
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus({ preventScroll: true });
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
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
