"use client";

import { AnimatePresence, motion } from "framer-motion";

export const AboutPresentationTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      {children}
    </motion.div>
  </AnimatePresence>
);
