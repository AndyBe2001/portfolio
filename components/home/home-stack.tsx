import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { CollapseOnTrigger } from "@/components/transition/collapse-on-trigger";
import { SlideOnView } from "@/components/transition/slide-on-view";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/utils/tailwindcss";

interface HomeStackContainerProps {
  title: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}
const HomeStackContainer = ({
  title,
  className,
  delay,
  children,
}: HomeStackContainerProps) => {
  return (
    <SlideOnView
      tag="article"
      className={cn("min-h-full w-full space-y-2 px-4 py-2", className)}
      delay={delay}>
      <h3 className="text-center text-xl">{title}</h3>
      <div
        className={cn(
          "rounded-xl flex gap-2 flex-wrap justify-center",
          className
        )}>
        {children}
      </div>
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
      <div>
        <HomeStackContainer title={t("language")}>
          <Tag className="bg-[#e5532d80]">HTML</Tag>
          <Tag className="bg-[#2d53e580]">CSS</Tag>
          <Tag className="bg-[#f7e02580]">Javascript</Tag>
          <Tag className="bg-[#377cc880]">Typescript</Tag>
          <Tag className="bg-[#254f7380]">Python</Tag>
        </HomeStackContainer>
        <HomeStackContainer title={t("framework")}>
          <Tag className="bg-[#08d9ff80]">React</Tag>
          <Tag className="bg-[#00000020] dark:bg-[#FFFFFF20]">Next 14</Tag>
          <Tag className="bg-[#08c38480]">Vue</Tag>
          <Tag className="bg-[#08dd8680]">Nuxt</Tag>
          <Tag className="bg-[#00000020] dark:bg-[#FFFFFF20]">Express</Tag>
          <Tag className="bg-[#e12a5480]">Nest</Tag>
        </HomeStackContainer>
        <HomeStackContainer title={t("dbandorm")}>
          <Tag className="bg-[#3e6e9380]">MySQL</Tag>
          <Tag className="bg-[#33679180]">Postgres</Tag>
          <Tag className="bg-[#5a67d880]">Prisma</Tag>
          <Tag className="bg-[#00800080]">MongoDB</Tag>
          <Tag className="bg-[#a0333380]">Mongoose</Tag>
          <Tag className="bg-[#ff006480]">TypeORM</Tag>
        </HomeStackContainer>
        <HomeStackContainer title={t("tool")}>
          <Tag className="bg-[#e84d3180]">Git</Tag>
          <Tag className="bg-[#088db280]">Visual Studio Code</Tag>
          <Tag className="bg-[#ed5e4a80]">Postman</Tag>
          <Tag className="bg-[#1d63ed80]">Docker</Tag>
          <Tag className="bg-[#33679180]">PGAdmin</Tag>
          <Tag className="bg-[#00800080]">MongoDB Compas</Tag>
        </HomeStackContainer>
        <CollapseOnTrigger
          trigger={t("more")}
          className="mt-4 w-full"
          contentClassName="grid md:grid-cols-2">
          <HomeStackContainer title={t("3d")} delay={0}>
            <Tag className="bg-[#f0660380]">Blender</Tag>
            <Tag className="bg-[#049ef480]">Three.js</Tag>
          </HomeStackContainer>
          <HomeStackContainer title={t("ai")} delay={0}>
            <Tag className="bg-[#ff6f0080]">Tensorflow</Tag>
            <Tag className="bg-[#138dff80]">OpenCV</Tag>
            <Tag className="bg-[#6504d180]">Yolo v4</Tag>
          </HomeStackContainer>
        </CollapseOnTrigger>
      </div>
    </section>
  );
};
