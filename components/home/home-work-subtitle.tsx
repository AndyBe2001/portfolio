"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeWorkSubtitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.h4
      className="mt-2 text-gray-600 dark:text-gray-400"
      {...SLIDE_ON_VIEW}>
      {children}
    </motion.h4>
  </AnimatePresence>
);
