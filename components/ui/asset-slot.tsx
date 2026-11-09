"use client";

import Image from "next/image";
import { useState } from "react";

type AssetSlotProps = {
  alt: string;
  className: string;
  fallback: string;
  sizes: string;
  src?: string;
};

export function AssetSlot({ alt, className, fallback, sizes, src }: AssetSlotProps) {
  const [available, setAvailable] = useState(true);

  return (
    <div className={className} data-asset-slot>
      {src && available ? <Image src={src} alt={alt} fill sizes={sizes} onError={() => setAvailable(false)} /> : null}
      <span>{fallback}</span>
    </div>
  );
}
