"use client";

import { AnimatePresence, motion } from "framer-motion";

import { FADE_IN_ON_VIEW } from "@/configs/motion";

export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.nav
      className="mx-auto flex h-full w-full max-w-6xl items-center"
      {...FADE_IN_ON_VIEW}>
      {children}
    </motion.nav>
  </AnimatePresence>
);
