import { getFormatter, getTranslations } from "next-intl/server";
import React, { Fragment } from "react";

import { Badge } from "@/ui/badge";
import { TimelineSection } from "@/ui/timeline-section";
import { cn } from "@/utils/tailwindcss";

interface ExperienceTimelineProps {
  side: "left" | "right";
  organization: string;
  title: string;
  fromDate: string;
  toDate: string;
  location: string;
  children: React.ReactNode;
}
export const ExperienceTimelineItem = async ({
  children,
  ...props
}: ExperienceTimelineProps) => {
  const formatter = await getFormatter();

  return (
    <TimelineSection
      side={props.side}
      contentClassName={cn("bg-card flex flex-col md:flex-row gap-10")}>
      <div className="relative shrink-0 text-sm md:w-fit">
        <Badge className={"mb-2"}>{props.organization}</Badge>
        <h3 className="mb-2 max-w-xs text-xl">{props.title}</h3>
        <p>
          {[
            formatter.dateTime(new Date(props.fromDate), {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            props.toDate === "present"
              ? "Present"
              : formatter.dateTime(new Date(props.toDate), {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
          ].join(" - ")}
        </p>
        <p>{props.location}</p>
      </div>
      {children}
    </TimelineSection>
  );
};

export const ExperienceTimeline = async () => {
  const translation = await getTranslations(
    "components.experience.experience-timeline"
  );
  return (
    <section>
      <ExperienceTimelineItem
        side={"right"}
        organization={translation("overclockr.organization")}
        title={translation("overclockr.title")}
        location={translation("overclockr.location")}
        fromDate={"2024-09-12"}
        toDate={"present"}>
        <div className={"space-y-4"}>
          {["challenge", "solution", "learning"].map((item, index) => (
            <p key={index} className="text-muted-foreground">
              <span className={"text-foreground mr-2 font-semibold"}>
                {translation(`overclockr.contents.${item}.title`)}
              </span>
              {translation(`overclockr.contents.${item}.description`)}
            </p>
          ))}
        </div>
      </ExperienceTimelineItem>
      <ExperienceTimelineItem
        side={"left"}
        organization={translation("frontend.organization")}
        title={translation("frontend.title")}
        fromDate={"2023-07-03"}
        toDate={"2024-06-07"}
        location={translation("frontend.location")}>
        <div className={"space-y-4"}>
          {["core", "development"].map((item, index) => (
            <Fragment key={index}>
              <h3 className="text-xl">
                {translation(`frontend.contents.${item}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {translation(`frontend.contents.${item}.description`)}
              </p>
            </Fragment>
          ))}
        </div>
      </ExperienceTimelineItem>
      <ExperienceTimelineItem
        side={"right"}
        organization={translation("deep-learning.organization")}
        title={translation("deep-learning.title")}
        fromDate={"2021-08-03"}
        toDate={"2023-01-16"}
        location={translation("deep-learning.location")}>
        <div className={"text-muted-foreground"}>
          {translation(`deep-learning.contents`)}
        </div>
      </ExperienceTimelineItem>
    </section>
  );
};
