"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkTitle = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    <motion.h3 className="mb-5 text-center text-4xl" {...SLIDE_ON_VIEW}>
      {children}
    </motion.h3>
  </AnimatePresence>
);
