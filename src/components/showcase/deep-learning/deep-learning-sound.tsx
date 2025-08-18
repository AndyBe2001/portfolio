"use client";

import { Pause, Play } from "lucide-react";
import { useCallback, useState } from "react";

import { Button } from "@/ui/button";

export const DeepLearningSound = () => {
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
    <Button className={"w-full"} disabled={isPlaying} onClick={handleSound}>
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
};
