import { getTranslations } from "next-intl/server";
import React from "react";

import { cn } from "@/utils/tailwindcss";

const gridSpan = ["", "", "sm:col-span-2", "sm:col-span-3"];
const gridDimension = [
  "",
  "",
  "sm:grid-cols-[auto_auto]",
  "sm:grid-cols-[auto_auto_auto]",
];

interface TimelineProps {
  size: number;
  duration: string;
  title: string;
  contents: string[];
  end?: boolean;
}
const Timeline = ({ size, duration, title, contents, end }: TimelineProps) => {
  return (
    <>
      <div
        className={cn(
          "border-border bg-primary text-primary-foreground mx-auto h-full w-4 border-b px-0.5 pt-2 pb-2.5 text-center leading-none tracking-wide break-words",
          "sm:h-fit sm:w-full sm:border-r sm:border-b-0 sm:py-0 sm:pl-2 sm:text-left sm:leading-normal",
          gridSpan[size ?? 1],
          end ? "relative" : ""
        )}>
        {duration}
        {end && (
          <div
            className={cn(
              "border-t-primary absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-[20px] border-t-[20px] border-x-transparent",
              "sm:top-1/2 sm:left-full sm:-translate-x-4 sm:-translate-y-1/2 sm:-rotate-90"
            )}></div>
        )}
      </div>
      <div className={cn(gridSpan[size ?? 1])}>
        <h5 className={cn("mb-2 text-base font-semibold")}>{title}</h5>
        <ul
          className={cn(
            gridDimension[size ?? 1],
            "mb-5 grid grid-cols-1 gap-y-1 sm:gap-x-4 sm:pr-4"
          )}>
          {contents.map(content => (
            <li key={`timeline-content_${title}_${content}`}>{content}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export const DeepLearningTimeline = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-timeline"
  );

  return (
    <section>
      <h3 className="mb-10 text-center text-4xl">{translation("title")}</h3>
      <article className="mx-auto grid w-fit grid-cols-[auto_auto] grid-rows-[auto_auto_auto] gap-x-8 sm:w-full sm:grid-flow-col sm:grid-cols-4 sm:grid-rows-[auto_auto] sm:gap-x-0 sm:gap-y-4">
        <Timeline
          size={2}
          title={translation("contents.research.title")}
          duration={translation("contents.research.duration")}
          contents={[
            translation("contents.research.contents.0"),
            translation("contents.research.contents.1"),
            translation("contents.research.contents.2"),
            translation("contents.research.contents.3"),
          ]}
        />
        <Timeline
          size={1}
          title={translation("contents.design.title")}
          duration={translation("contents.design.duration")}
          contents={[
            translation("contents.design.contents.0"),
            translation("contents.design.contents.1"),
          ]}
        />
        <Timeline
          size={1}
          title={translation("contents.development.title")}
          duration={translation("contents.development.duration")}
          contents={[translation("contents.development.contents.0")]}
          end
        />
      </article>
    </section>
  );
};
