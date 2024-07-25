"use client";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/utils/tailwindcss";
import { FadeInOnView } from "./fade-in-on-view";

export interface CollapseOnTriggerProps {
  open?: boolean;
  onChange?: (open: boolean) => void;
  className?: string;
  contentClassName?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}
export const CollapseOnTrigger = ({
  open,
  onChange,
  className,
  contentClassName,
  trigger,
  children,
}: CollapseOnTriggerProps) => {
  const [visible, setVisible] = useState<boolean>(open || false);
  const handleVisible = () => {
    setVisible(!visible);
    onChange && onChange(!visible);
  };
  return (
    <>
      <FadeInOnView tag="button" className={cn("w-full mt-4", className)}>
        <span onClick={handleVisible}>
          {trigger}
          <FontAwesomeIcon
            className="ml-2 transition-transform duration-200"
            icon={faAngleDown}
            rotation={visible ? 180 : undefined}
          />
        </span>
      </FadeInOnView>
      <AnimatePresence initial={false}>
        {visible && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={cn("overflow-hidden", contentClassName)}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
