import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { WorkBannerImage } from "./work-banner-image";
import { WorkBannerTitle } from "./work-banner-title";

export const WorkBanner = async ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl?: string;
}) => {
  const t = await getTranslations("Work.computervision");

  return (
    <section className="mx-auto mb-10 flex min-h-[calc(100dvh-80px)] max-w-6xl flex-col items-center justify-center gap-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
      <WorkBannerTitle>{title}</WorkBannerTitle>
      {imageUrl && (
        <WorkBannerImage>
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
        </WorkBannerImage>
      )}
    </section>
  );
};
