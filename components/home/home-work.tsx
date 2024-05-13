import { getTranslations } from "next-intl/server";

import { HomeWorkContainer } from "./home-work-container";
import { HomeWorkDetail } from "./home-work-detail";
import { HomeWorkSubtitle } from "./home-work-subtitle";
import { HomeWorkThumbnail } from "./home-work-thumbnail";
import { HomeWorkTitle } from "./home-work-title";

export const HomeWork = async () => {
  const t = await getTranslations("Index.works");

  return (
    <section
      id="works"
      className="flex w-full flex-col items-center justify-center gap-16 pb-8 pt-24">
      <div className="w-full max-w-3xl text-center">
        <HomeWorkTitle>{t("title")}</HomeWorkTitle>
        <HomeWorkSubtitle>{t("subtitle")}</HomeWorkSubtitle>
      </div>
      <HomeWorkContainer>
        <HomeWorkDetail
          title={t("computervision.title")}
          description={t("computervision.description")}
          link="/works/computer-vision"
        />
        <HomeWorkThumbnail
          src="/works/computer-vision/banner.png"
          alt={t("computervision.title")}
        />
      </HomeWorkContainer>
    </section>
  );
};
