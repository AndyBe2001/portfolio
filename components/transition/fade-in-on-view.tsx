"use client";

import { AnimatePresence, motion } from "framer-motion";

interface FadeInOnViewProps {
  tag?: keyof typeof motion;
  className?: string;
  children: React.ReactNode;
}
export const FadeInOnView = ({
  tag = "div",
  className,
  children,
}: FadeInOnViewProps) => {
  const MotionComponent = motion[tag];

  return (
    <AnimatePresence>
      <MotionComponent
        initial="invisible"
        whileInView="visible"
        exit="invisible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1 },
          invisible: { opacity: 0 },
        }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className={className}>
        {children}
      </MotionComponent>
    </AnimatePresence>
  );
};
