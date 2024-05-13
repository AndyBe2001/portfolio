"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const AboutExperienceItem = ({
  title,
  duration,
  location,
  children,
}: {
  title: string;
  duration: string;
  location: string;
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div
      className="bg-primary-50/50 dark:bg-primary-950/50 flex w-full flex-col gap-10 rounded-2xl border px-8 py-8 md:flex-row"
      {...SLIDE_ON_VIEW}>
      <div className="w-60 shrink-0">
        <h3 className="text-xl leading-loose">{title}</h3>
        <h5>{duration}</h5>
        <h5>{location}</h5>
      </div>
      <div>{children}</div>
    </motion.div>
  </AnimatePresence>
);
