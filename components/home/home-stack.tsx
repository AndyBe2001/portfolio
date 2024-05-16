import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { SlideOnView } from "@/components/transition/slide-on-view";
import { cn } from "@/utils/tailwindcss";

const HomeStackIcon = ({ src, alt }: { src: string; alt: string }) => {
  return (
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
        maxHeight: "50px",
      }}
    />
  );
};

interface HomeStackContainerProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}
const HomeStackContainer = ({
  title,
  className,
  children,
}: HomeStackContainerProps) => {
  return (
    <SlideOnView
      tag="article"
      className={cn(
        "bg-primary-50/50 flex min-h-full w-full max-w-xs flex-col gap-5 rounded-2xl border px-8 py-10",
        className
      )}>
      <div
        className={cn(
          "mx-auto flex flex-1 flex-col items-center justify-center gap-4 rounded-xl p-4",
          className
        )}>
        {children}
      </div>
      <h3 className="text-center text-2xl dark:text-gray-900">{title}</h3>
    </SlideOnView>
  );
};

export const HomeStack = async () => {
  const t = await getTranslations("Index.stack");

  return (
    <section
      id="stacks"
      className="flex w-full flex-col items-center justify-center gap-16 pb-8 pt-24">
      <div className="w-full max-w-3xl text-center">
        <SlideOnView tag="h3" className="text-4xl">
          {t("title")}
        </SlideOnView>
        <SlideOnView tag="h4" className="mt-2 text-gray-600 dark:text-gray-400">
          {t("subtitle")}
        </SlideOnView>
      </div>
      <div className="grid w-fit max-w-5xl grid-rows-5 gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
        <HomeStackContainer title={t("language")}>
          <HomeStackIcon src="/stacks/typescript.png" alt="typescript" />
          <HomeStackIcon src="/stacks/python.png" alt="python" />
        </HomeStackContainer>
        <HomeStackContainer title={t("frontend")}>
          <HomeStackIcon src="/stacks/react.png" alt="react" />
          <HomeStackIcon src="/stacks/nextjs.png" alt="nextjs" />
          <HomeStackIcon src="/stacks/vuejs.png" alt="vue" />
          <HomeStackIcon src="/stacks/nuxtjs.png" alt="nuxtjs" />
        </HomeStackContainer>
        <HomeStackContainer title={t("backend")}>
          <HomeStackIcon src="/stacks/expressjs.png" alt="expressjs" />
          <HomeStackIcon src="/stacks/nestjs.png" alt="nestjs" />
        </HomeStackContainer>
        <HomeStackContainer title={t("dbandorm")}>
          <HomeStackIcon src="/stacks/mysql.png" alt="mysql" />
          <HomeStackIcon src="/stacks/prisma.png" alt="prisma" />
          <HomeStackIcon src="/stacks/mongodb.png" alt="mongodb" />
          <HomeStackIcon src="/stacks/mongoose.png" alt="mongoose" />
        </HomeStackContainer>
        <HomeStackContainer
          title={t("python")}
          className="lg:col-span-4 lg:w-full lg:max-w-none lg:!flex-row lg:items-center">
          <HomeStackIcon src="/stacks/tensorflow.png" alt="tensorflow" />
          <HomeStackIcon src="/stacks/opencv.png" alt="opencv" />
        </HomeStackContainer>
      </div>
    </section>
  );
};
