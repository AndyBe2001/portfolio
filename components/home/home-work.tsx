import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";
import { Link } from "@/navigation";

const HomeWorkThumbnail = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="shrink-0">
      <Image
        src={src}
        width="0"
        height="0"
        alt={alt}
        sizes="100vw"
        style={{
          display: "block",
          width: "auto",
          height: "auto",
          maxHeight: "480px",
        }}
      />
    </div>
  );
};
interface HomeWorkDetailProps {
  title: string;
  description: string;
  link: string;
}
const HomeWorkDetail = async ({
  title,
  description,
  link,
}: HomeWorkDetailProps) => {
  const t = await getTranslations("Index.works");

  return (
    <div className="flex w-full flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:max-w-2xl lg:flex-col lg:items-start">
      <div>
        <h3 className="mb-2 text-center text-xl sm:text-left">{title}</h3>
        <p className="text-center text-gray-600 dark:text-gray-400 sm:text-left">
          {description}
        </p>
      </div>
      <Link href={link}>
        <button className="bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900 h-10 rounded-xl px-4 text-white transition-colors md:h-14">
          {t("viewproject")}
        </button>
      </Link>
    </div>
  );
};
const HomeWorkContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <SlideOnView
      tag="article"
      className="flex w-full max-w-5xl flex-col items-center justify-between gap-5 lg:flex-row lg:gap-10">
      {children}
    </SlideOnView>
  );
};

export const HomeWork = async () => {
  const t = await getTranslations("Index.works");

  return (
    <section
      id="works"
      className="flex w-full flex-col items-center justify-center gap-16 pb-8 pt-24">
      <div className="w-full max-w-3xl text-center">
        <SlideOnView tag="h3" className="text-4xl">
          {t("title")}
        </SlideOnView>
        <SlideOnView tag="h4" className="mt-2 text-gray-600 dark:text-gray-400">
          {t("subtitle")}
        </SlideOnView>
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
