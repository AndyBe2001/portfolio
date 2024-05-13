"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeBannerDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.h3
        className="mb-9 mt-5 text-4xl text-gray-600 dark:text-gray-300"
        {...SLIDE_ON_VIEW}>
        {children}
      </motion.h3>
    </AnimatePresence>
  );
};
