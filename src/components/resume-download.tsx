"use client";

import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

import { Button } from "@/ui/button";
import { ShinyText } from "@/ui/shiny-text";

const RESUME_URL: Record<string, string> = {
  en: "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_EN.pdf",
  fr: "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_FR.pdf",
  "zh-cn":
    "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_ZH-CN.pdf",
  "zh-tw":
    "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_ZH-TW.pdf",
};
export const ResumeDownload = () => {
  const translation = useTranslations("components");
  const locale = useLocale();

  const handleDownload = useCallback(async () => {
    const response = await fetch(RESUME_URL[locale]);

    if (!response.ok) throw new Error("Failed to fetch file");

    // Get blob from response
    const blob = await response.blob();

    // Create a temporary object URL
    const blobUrl = window.URL.createObjectURL(blob);

    // Create a hidden <a> element and trigger click
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `cv_${locale}`;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    a.remove();
    window.URL.revokeObjectURL(blobUrl);
  }, [locale]);

  return (
    <Button onClick={handleDownload}>
      <ShinyText>{translation("resume-download")}</ShinyText>
    </Button>
  );
};
