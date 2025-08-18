"use client";

import React, { useEffect, useRef, useState } from "react";

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const splashRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!splashRef.current) return;

    splashRef.current.style.opacity = "0";
    splashRef.current.style.transform = "scale(0.9)";
    splashRef.current.style.filter = "blur(10px)";
    setTimeout(() => {
      setIsReady(true);

      if (!splashRef.current) return;
      splashRef.current.style.opacity = "1";
      splashRef.current.style.transform = "scale(1)";
      splashRef.current.style.filter = "blur(0px)";
    }, 1000);
  }, []);

  if (isReady) return children;
  return (
    <div
      ref={splashRef}
      className={
        "fixed top-0 left-0 z-50 bg-background w-dvw h-dvh grid place-items-center text-6xl font-semibold duration-1000 transition-all"
      }>
      Andy
    </div>
  );
};
