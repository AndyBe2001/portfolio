"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";
import { cn } from "@/utils/tailwindcss";

export const WorkContext = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "bg-primary-50 dark:bg-primary-950/50 rounded-2xl border p-6",
          className
        )}
        {...SLIDE_ON_VIEW}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
