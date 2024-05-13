"use client";

import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkFeature = ({
  icon,
  children,
}: {
  icon: FontAwesomeIconProps["icon"];
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div
      className="bg-primary-50 dark:bg-primary-950/50 flex h-48 w-48 flex-col items-center rounded-2xl border px-4"
      {...SLIDE_ON_VIEW}>
      <FontAwesomeIcon icon={icon} className="mt-10 text-6xl" />
      <span className="mt-3 text-center font-semibold">{children}</span>
    </motion.div>
  </AnimatePresence>
);
