import {
  ChartColumn,
  ClipboardCheck,
  FileUp,
  FileUser,
  Filter,
  Fullscreen,
  Group,
  Layers,
  LucideIcon,
  MapPin,
  RulerDimensionLine,
  TrendingUpDown,
  Video,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

import { cn } from "@/utils/tailwindcss";

interface ArchitectureItemProps {
  icon: LucideIcon;
  className?: string;
  children: React.ReactNode;
}
const ArchitectureItem = ({
  children,
  className,
  ...props
}: ArchitectureItemProps) => {
  return (
    <div
      className={cn(
        "bg-primary/10 border-border flex h-48 w-full flex-col items-center justify-center rounded-2xl border p-4",
        className
      )}>
      <props.icon size={40} />
      <span className="mt-3 text-center font-semibold">{children}</span>
    </div>
  );
};

interface ArchitectureProps {
  className?: string;
  children: React.ReactNode;
}
const Architecture = ({ className, children }: ArchitectureProps) => {
  return (
    <div
      className={cn(
        "bg-primary/10 border-border rounded-2xl border p-4",
        className
      )}>
      {children}
    </div>
  );
};

export const DeepLearningArchitecture = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-architecture"
  );

  return (
    <section>
      <h3 className="mb-10 text-center text-4xl">{translation("title")}</h3>
      <article className={"space-y-5"}>
        {/* Camera */}
        <ArchitectureItem
          className="flex h-48 w-full flex-col items-center"
          icon={Video}>
          {translation("camera.title")}
        </ArchitectureItem>
        {/* Yolo v4 */}
        <Architecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {translation("detection.title")}
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <ArchitectureItem icon={Group}>
              {translation("detection.contents.0")}
            </ArchitectureItem>
            <ArchitectureItem icon={Layers}>
              {translation("detection.contents.1")}
            </ArchitectureItem>
            <ArchitectureItem icon={MapPin}>
              {translation("detection.contents.2")}
            </ArchitectureItem>
            <ArchitectureItem icon={Filter}>
              {translation("detection.contents.3")}
            </ArchitectureItem>
          </div>
        </Architecture>
        {/* DeepSORT */}
        <Architecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {translation("tracking.title")}
          </h3>
          <div className="grid gap-4 lg:grid-cols-4">
            <ArchitectureItem icon={TrendingUpDown}>
              {translation("tracking.contents.0")}
            </ArchitectureItem>
            <Architecture
              className={"grid gap-4 sm:grid-rows-[1fr_16px] lg:col-span-2"}>
              <ArchitectureItem icon={RulerDimensionLine} className={"h-full"}>
                {translation("tracking.contents.1-0")}
              </ArchitectureItem>
              <ArchitectureItem icon={FileUser} className={"h-full"}>
                {translation("tracking.contents.1-1")}
              </ArchitectureItem>
              <h5 className="text-center leading-none font-semibold sm:col-span-2">
                {translation("tracking.contents.1")}
              </h5>
            </Architecture>
            <ArchitectureItem icon={ClipboardCheck}>
              {translation("tracking.contents.2")}
            </ArchitectureItem>
          </div>
        </Architecture>
        {/* Processing */}
        <Architecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {translation("process.title")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <ArchitectureItem icon={ChartColumn}>
              {translation("process.contents.0")}
            </ArchitectureItem>
            <ArchitectureItem icon={Fullscreen}>
              {translation("process.contents.1")}
            </ArchitectureItem>
            <ArchitectureItem icon={FileUp}>
              {translation("process.contents.2")}
            </ArchitectureItem>
          </div>
        </Architecture>
      </article>
    </section>
  );
};
