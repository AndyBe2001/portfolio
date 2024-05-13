export const SLIDE_ON_VIEW = {
  initial: "invisible",
  whileInView: "visible",
  exit: "invisible",
  viewport: { once: true },
  variants: {
    visible: { translateY: 0, opacity: 1 },
    invisible: { translateY: 50, opacity: 0 },
  },
  transition: {
    delay: 0.2,
    duration: 0.4,
    ease: [0.04, 0.62, 0.23, 0.98],
  },
};
export const FADE_IN_ON_VIEW = {
  initial: "invisible",
  whileInView: "visible",
  exit: "invisible",
  viewport: { once: true },
  variants: {
    visible: { opacity: 1 },
    invisible: { opacity: 0 },
  },
  transition: {
    delay: 0.2,
    duration: 0.4,
    ease: [0.04, 0.62, 0.23, 0.98],
  },
};
export const ZOOM_ON_HOVER = {
  initial: "normal",
  whileHover: "hovered",
  exit: "normal",
  variants: {
    normal: { scale: 1 },
    hovered: { scale: 1.02 },
  },
  transition: {
    duration: 0.4,
    ease: [0.04, 0.62, 0.23, 0.98],
  },
};
