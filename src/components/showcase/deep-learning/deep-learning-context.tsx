import { getTranslations } from "next-intl/server";
import React from "react";

import { cn } from "@/utils/tailwindcss";

interface DeepLearningContextItemProps {
  title: string;
  children: React.ReactNode;
}
const DeepLearningContextItem = ({
  title,
  children,
}: DeepLearningContextItemProps) => {
  return (
    <article
      className={cn(
        "group peer transition-flex relative py-5 duration-300 lg:h-80",
        "lg:flex-1/3 lg:p-5 lg:peer-hover:flex-1/5 lg:hover:flex-3/5",
        "xl:flex-1/3 xl:p-10 xl:peer-hover:flex-1/6 xl:hover:flex-2/3"
      )}>
      <div className={"grid h-full grid-cols-1"}>
        <div className={"h-10 w-full"}></div>
        <h3
          className={cn(
            "absolute h-10 text-2xl font-semibold transition-[top_left_translate]",
            "top-5 left-0 text-center lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",
            "lg:group-hover:top-5 lg:group-hover:left-5",
            "xl:group-hover:top-10 xl:group-hover:left-10",
            "lg:group-hover:translate-x-0 lg:group-hover:translate-y-0 lg:group-hover:text-left"
          )}>
          {title}
        </h3>
        <p
          className={
            "text-muted-foreground transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100"
          }>
          {children}
        </p>
      </div>
    </article>
  );
};

export const DeepLearningContext = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-context"
  );
  return (
    <section>
      <h3 className="mb-10 text-center text-4xl">{translation("title")}</h3>
      <article
        className={
          "border-border bg-card flex flex-col overflow-hidden rounded-xl border max-lg:divide-y lg:flex-row lg:divide-x"
        }>
        {[0, 1, 2].map(item => (
          <DeepLearningContextItem
            key={item}
            title={translation(`contents.${item}.title`)}>
            {translation(`contents.${item}.description`)}
          </DeepLearningContextItem>
        ))}
      </article>
    </section>
  );
};
