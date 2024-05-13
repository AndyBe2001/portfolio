"use client";

import { AnimatePresence, motion } from "framer-motion";

export const AboutPresentationDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div className="bg-primary-50 dark:bg-primary-950 grid h-fit grid-flow-row grid-cols-1 gap-8 rounded-2xl py-12 px-8 lg:grid-cols-[auto_auto] lg:grid-rows-[auto_auto]">
      {children}
    </motion.div>
  </AnimatePresence>
);
