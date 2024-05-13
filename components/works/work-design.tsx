"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const WorkDesign = ({
  title,
  imageSrc,
  imageAlt,
  children,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.div {...SLIDE_ON_VIEW}>
        <h5 className="mb-5 text-center text-xl text-gray-600 dark:text-gray-400">
          {title}
        </h5>
        <div className="bg-primary-50/50 dark:bg-primary-950/50 grid place-items-center gap-x-8 gap-y-4 rounded-2xl border p-4 lg:grid-cols-[calc(65%-16px)_calc(35%-16px)]">
          <Image
            src={imageSrc}
            width="0"
            height="0"
            alt={imageAlt}
            sizes="100vw"
            className="rounded-xl"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
          <div className="w-full">{children}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
