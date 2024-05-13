"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const AboutPresentationPicture = ({ imageAlt }: { imageAlt: string }) => (
  <AnimatePresence>
    <motion.div
      className="my-auto mx-auto h-fit w-full max-w-xs md:row-span-2"
      {...SLIDE_ON_VIEW}>
      <Image
        className="!static rounded-2xl"
        src="/portrait.webp"
        alt={imageAlt}
        layout="fill"
        objectFit="contain"
      />
    </motion.div>
  </AnimatePresence>
);
