"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { SLIDE_ON_VIEW } from "@/configs/motion";

export const AboutCertificateItem = ({
  title,
  date,
  imageSrc,
  imageAlt,
  children,
}: {
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}) => (
  <AnimatePresence>
    <motion.div
      className="bg-primary-50/50 dark:bg-primary-950/50 flex w-full flex-col items-center gap-4 rounded-2xl border px-8 py-4"
      {...SLIDE_ON_VIEW}>
      <div className="grid h-24 place-items-center">
        <Image
          src={imageSrc}
          width="0"
          height="0"
          alt={imageAlt}
          className="mb-3 rounded-xl"
          sizes="100vw"
          style={{
            display: "block",
            width: "auto",
            height: "auto",
            maxHeight: "96px",
          }}
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl leading-normal">{title}</h3>
        <h5 className="text-gray-600 dark:text-gray-300">{date}</h5>
      </div>
      <p className="mt-3 text-justify">{children}</p>
    </motion.div>
  </AnimatePresence>
);
