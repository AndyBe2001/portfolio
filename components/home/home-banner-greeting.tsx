"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeBannerGreeting = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.h5 {...SLIDE_ON_VIEW}>{children}</motion.h5>
    </AnimatePresence>
  );
};
