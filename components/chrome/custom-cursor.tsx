"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (!media.matches || coarsePointer.matches) return;

    let frame = 0;
    let position = { x: -100, y: -100 };

    const paint = () => {
      cursorRef.current?.style.setProperty("transform", `translate3d(${position.x}px, ${position.y}px, 0)`);
      frame = 0;
    };

    const onMove = (event: PointerEvent) => {
      position = { x: event.clientX, y: event.clientY };
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
