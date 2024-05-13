"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const AboutCertificateTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.h1 className="mb-10 text-4xl" {...SLIDE_ON_VIEW}>
      {children}
    </motion.h1>
  </AnimatePresence>
);
