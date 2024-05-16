import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";

interface WorkBannerProps {
  title: string;
  imageUrl?: string;
}
export const WorkBanner = async ({ title, imageUrl }: WorkBannerProps) => {
  const t = await getTranslations("Work.computervision");

  return (
    <section className="mx-auto mb-10 flex min-h-[calc(100dvh-80px)] max-w-6xl flex-col items-center justify-center gap-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
      <SlideOnView tag="h1" className="text-center">
        {title}
      </SlideOnView>
      {imageUrl && (
        <SlideOnView className="text-center">
          <Image
            src={imageUrl}
            width="0"
            height="0"
            alt={title}
            sizes="100vw"
            style={{
              display: "block",
              width: "720px",
              height: "auto",
              maxHeight: "100%",
            }}
          />
        </SlideOnView>
      )}
    </section>
  );
};
