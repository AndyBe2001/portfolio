"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeWorkContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.article
        className="flex w-full max-w-5xl flex-col items-center justify-between gap-5 lg:flex-row lg:gap-10"
        {...SLIDE_ON_VIEW}>
        {children}
      </motion.article>
    </AnimatePresence>
  );
};
