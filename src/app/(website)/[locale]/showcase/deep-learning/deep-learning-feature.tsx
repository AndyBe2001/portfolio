import {
  Calculator,
  ChartColumn,
  Crosshair,
  FileUp,
  LucideIcon,
  TvMinimalPlay,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

interface FeatureProps {
  icon: LucideIcon;
  children: React.ReactNode;
}
const Feature = ({ children, ...props }: FeatureProps) => {
  return (
    <li className="bg-primary/10 border-border flex h-48 w-full flex-col items-center justify-center rounded-2xl border px-4">
      <props.icon size={32} />
      <span className="mt-3 text-center font-semibold">{children}</span>
    </li>
  );
};

export const DeepLearningFeature = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-feature"
  );

  return (
    <section>
      <h3 className="mb-10 text-center text-4xl">{translation("title")}</h3>
      <ul
        className={
          "grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 lg:grid-cols-5"
        }>
        <Feature icon={TvMinimalPlay}>{translation("contents.0")}</Feature>
        <Feature icon={Calculator}>{translation("contents.1")}</Feature>
        <Feature icon={Crosshair}>{translation("contents.2")}</Feature>
        <Feature icon={ChartColumn}>{translation("contents.3")}</Feature>
        <Feature icon={FileUp}>{translation("contents.4")}</Feature>
      </ul>
    </section>
  );
};
