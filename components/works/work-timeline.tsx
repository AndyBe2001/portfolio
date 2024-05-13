"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkTimeline = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.div className={className} {...SLIDE_ON_VIEW}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
