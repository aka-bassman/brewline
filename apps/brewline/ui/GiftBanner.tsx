"use client";

import { cn } from "akanjs/client";
import type { ReactNode } from "react";
import { useState } from "react";
import { jellyButtonRecipe } from "./Recipe";

let dismissed = false;

interface GiftBannerProps {
  className?: string;
  closeLabel: string;
  children: ReactNode;
}

export const GiftBanner = ({ className, closeLabel, children }: GiftBannerProps) => {
  const [hidden, setHidden] = useState(dismissed);

  if (hidden) {
    return null;
  }

  return (
    <div className={cn(className)}>
      {children}
      <button
        type="button"
        aria-label={closeLabel}
        className={jellyButtonRecipe(
          { variant: "ghost", size: "icon" },
          "absolute top-1/2 right-2 size-8 -translate-y-1/2",
        )}
        onClick={() => {
          dismissed = true;
          setHidden(true);
        }}
      >
        ×
      </button>
    </div>
  );
};
