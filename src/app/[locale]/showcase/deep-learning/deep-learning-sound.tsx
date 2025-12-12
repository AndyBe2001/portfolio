"use client";

import { Pause, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

import { Button } from "@/ui/button";

export const DeepLearningSound = () => {
  const translation = useTranslations("components.showcase.deep-learning");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSound = useCallback(() => {
    const audio = new Audio(
      "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/computer-vision_alarm.wav"
    );
    setIsPlaying(true);
    audio
      .play()
      .then(() => {
        audio.onended = () => setIsPlaying(false);
      })
      .catch(err => {
        console.error("Failed to play sound:", err);
        setIsPlaying(false);
      });
  }, []);

  return (
    <Button
      className={"w-full"}
      disabled={isPlaying}
      onClick={handleSound}
      aria-label={translation("deep-learning-sound")}>
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
};
