"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeStackTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="w-full max-w-3xl text-center">
    <AnimatePresence>
      <motion.h3 className="text-4xl" {...SLIDE_ON_VIEW}>
        {title}
      </motion.h3>
    </AnimatePresence>
    <AnimatePresence>
      <motion.h4
        className="mt-2 text-gray-600 dark:text-gray-400"
        {...SLIDE_ON_VIEW}>
        {subtitle}
      </motion.h4>
    </AnimatePresence>
  </div>
);
