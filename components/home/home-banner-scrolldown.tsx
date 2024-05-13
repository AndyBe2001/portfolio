"use client";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const HomeBannerScrolldown = ({ text }: { text: string }) => {
  return (
    <AnimatePresence>
      <motion.div className="pb-20" {...SLIDE_ON_VIEW}>
        <span className="pr-2">{text}</span>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-primary-600 animate-bounce"
        />
      </motion.div>
    </AnimatePresence>
  );
};
