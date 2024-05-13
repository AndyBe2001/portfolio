"use client";

import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkFact = ({
  title,
  contents,
  children,
}: {
  title: string;
  contents?: string[];
  children?: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.div {...SLIDE_ON_VIEW}>
        <h5 className="leading-loose text-gray-600 dark:text-gray-400">
          {title}
        </h5>
        {contents && (
          <ul>
            {contents.map(item => (
              <li key={`${title}_${item}`}>{item}</li>
            ))}
          </ul>
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
