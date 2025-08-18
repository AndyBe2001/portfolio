import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

import { DeepLearningSound } from "@/components/showcase/deep-learning/deep-learning-sound";

interface ResultProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}
export const Result = ({
  title,
  imageSrc,
  imageAlt,
  children,
}: ResultProps) => {
  return (
    <li className={"bg-primary/10 border-border rounded-2xl border p-4"}>
      <h5 className="mb-4 text-center text-xl">{title}</h5>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={600}
          className="border-border aspect-video shrink-0 rounded-xl border lg:w-2/3"
        />
        <div>{children}</div>
      </div>
    </li>
  );
};

export const DeepLearningResult = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-result"
  );

  return (
    <section>
      <h3 className="mb-10 text-center text-4xl">{translation("title")}</h3>
      <ul className={"space-y-6"}>
        {/* Footage */}
        <Result
          title={translation("contents.0.title")}
          imageSrc="/showcase/deep-learning/detection.webp"
          imageAlt={translation("contents.0.title")}>
          {translation("contents.0.contents.0")}
          <br />
          <br />
          {translation("contents.0.contents.1")}
          <br />
          <br />
          {translation("contents.0.contents.2")}
          <br />
          <br />
          <DeepLearningSound />
        </Result>
        {/* Features */}
        <Result
          title={translation("contents.1.title")}
          imageSrc="/showcase/deep-learning/count.webp"
          imageAlt={"main.title"}>
          {translation("contents.1.contents.0")}
          <br />
          <br />
          <ol className={"list-decimal"}>
            <li>{translation("contents.1.contents.1")}</li>
            <li>{translation("contents.1.contents.2")}</li>
          </ol>
        </Result>
        {/* Analyze */}
        <Result
          title={translation("contents.2.title")}
          imageSrc="/showcase/deep-learning/statistic.webp"
          imageAlt={translation("contents.2.title")}>
          {translation("contents.2.contents.0")}
          <br />
          <br />
          <ol className={"list-decimal"}>
            <li>{translation("contents.2.contents.0")}</li>
            <li>{translation("contents.2.contents.1")}</li>
          </ol>
        </Result>
        {/* Setting */}
        <Result
          title={translation("contents.3.title")}
          imageSrc="/showcase/deep-learning/setting.webp"
          imageAlt={translation("contents.3.title")}>
          {translation("contents.3.contents.0")}
          <br />
          <br />
          {translation("contents.3.contents.1")}
          <br />
          <br />
          {translation("contents.3.contents.2")}
        </Result>
      </ul>
    </section>
  );
};
