"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeBannerAction = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div className="flex items-center gap-4" {...SLIDE_ON_VIEW}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
