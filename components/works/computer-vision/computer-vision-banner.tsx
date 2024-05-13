import { getTranslations } from "next-intl/server";

import { WorkBanner } from "../work-banner";

export const ComputerVisionBanner = async () => {
  const t = await getTranslations("Work.computervision");

  return (
    <WorkBanner
      title={t("title")}
      imageUrl="/works/computer-vision/banner.png"
    />
  );
};
