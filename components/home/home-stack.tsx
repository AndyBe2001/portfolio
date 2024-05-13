import { getTranslations } from "next-intl/server";

import { HomeStackContainer } from "./home-stack-container";
import { HomeStackIcon } from "./home-stack-icon";
import { HomeStackTitle } from "./home-stack-title";

export const HomeStack = async () => {
  const t = await getTranslations("Index.stack");

  return (
    <section
      id="stacks"
      className="flex w-full flex-col items-center justify-center gap-16 pb-8 pt-24">
      <HomeStackTitle title={t("title")} subtitle={t("subtitle")} />
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
