"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";
import { cn } from "@/utils/tailwindcss";

export const HomeStackContainer = ({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.article
        className={cn(
          "bg-primary-50/50 flex min-h-full w-full max-w-xs flex-col gap-5 rounded-2xl border px-8 py-10",
          className
        )}
        {...SLIDE_ON_VIEW}>
        <div
          className={cn(
            "mx-auto flex flex-1 flex-col items-center justify-center gap-4 rounded-xl p-4",
            className
          )}>
          {children}
        </div>
        <h3 className="text-center text-2xl dark:text-gray-900">{title}</h3>
      </motion.article>
    </AnimatePresence>
  );
};
