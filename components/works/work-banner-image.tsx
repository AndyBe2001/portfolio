"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkBannerImage = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div className="text-center" {...SLIDE_ON_VIEW}>
      {children}
    </motion.div>
  </AnimatePresence>
);
