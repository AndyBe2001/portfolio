import React from "react";

import { cn } from "@/utils/tailwindcss";

interface TimelineSectionProps {
  side?: "left" | "right";
  contentClassName?: string;
  children?: React.ReactNode;
}
export const TimelineSection: React.FC<TimelineSectionProps> = ({
  side = "left",
  contentClassName,
  children,
}) => {
  const isLeft = side === "left";

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* SVG curve */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-full pointer-events-none"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none">
        <path
          d={
            isLeft
              ? "M50 0 C 0 250, 0 750, 50 1000"
              : "M50 0 C 100 250, 100 750, 50 1000"
          }
          stroke="var(--color-primary)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Content area */}
      <div
        className={cn(
          "relative z-10 max-w-full md:max-w-[calc(100%-12rem)] lg:max-w-[calc(100%-16rem)] p-6 rounded-xl border border-border shadow-lg",
          isLeft ? "mr-auto md:ml-48 lg:ml-64" : "ml-auto md:mr-48 lg:mr-64",
          contentClassName
        )}>
        {children}
      </div>
    </div>
  );
};
