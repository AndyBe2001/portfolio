"use client";

import { AnimatePresence, motion } from "framer-motion";

interface SlideOnViewProps {
  tag?: keyof typeof motion;
  className?: string;
  children: React.ReactNode;
}
export const SlideOnView = ({
  tag = "div",
  className,
  children,
}: SlideOnViewProps) => {
  const MotionComponent = motion[tag];

  return (
    <AnimatePresence>
      <MotionComponent
        initial="invisible"
        whileInView="visible"
        exit="invisible"
        viewport={{ once: true }}
        variants={{
          visible: { translateY: 0, opacity: 1 },
          invisible: { translateY: 50, opacity: 0 },
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
