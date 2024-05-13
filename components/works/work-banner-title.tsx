"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkBannerTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.h1 className="text-center" {...SLIDE_ON_VIEW}>
      {children}
    </motion.h1>
  </AnimatePresence>
);
