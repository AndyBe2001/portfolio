import { getFormatter } from "next-intl/server";
import React from "react";

import { Badge } from "@/ui/badge";
import { TimelineSection } from "@/ui/timeline-section";
import { cn } from "@/utils/tailwindcss";

type TimelineItem = {
  information: {
    organization: string;
    title: string;
    date: { from: string; to: string };
    location: string;
  };
  content: React.ReactNode;
};
const TIMELINES: TimelineItem[] = [
  {
    information: {
      organization: "Infotech Corporation",
      title: "Frontend Engineer",
      date: { from: "2023-02-01", to: "2024-06-07" },
      location: "Taipei, Taiwan",
    },
    content: (
      <div>
        <h3 className="mb-4 text-xl">Core - Optimization</h3>
        <p className="mb-4 text-justify text-muted-foreground">
          Throughout the development lifecycle, our collective experiences drove
          us to enhance the deployment system. We automated everything—from
          end-to-end testing and component testing to containerization.
          Similarly, during the deployment phase, I acquired proficiency in
          continuous integration and continuous deployment using GitLab's native
          tools.
        </p>
        <h3 className="mb-4 text-xl">Web application - Development</h3>
        <p className="text-justify text-muted-foreground">
          As a contributor to the company's new project, I actively participated
          in all phases of application development. From collaborating with
          software architects, UI/UX design to meticulously overseeing quality
          assurance, I worked closely with each production team member. This
          hands-on involvement provided invaluable insights into the entire
          development lifecycle.
        </p>
      </div>
    ),
  },
  {
    information: {
      organization: "Ming Chuan University",
      title: "Computer Vision",
      date: { from: "2021-08-03", to: "2023-01-16" },
      location: "Taoyuan, Taiwan",
    },
    content: (
      <div className={"text-muted-foreground"}>
        {
          "In our final university project, my team and I delved deep into neural networks and computer vision technology. Our mission? To create an automated software solution for efficient library management. From accurately counting students in the library to detecting prohibited items, our system lightened the load for library staff. Managers gained better control over resource allocation, ensuring optimal staffing levels. Our vision was simple: empower libraries with smart technology."
        }
      </div>
    ),
  },
];
export const ExperienceTimelineItem = async (
  props: TimelineItem & React.ComponentProps<typeof TimelineSection>
) => {
  const formatter = await getFormatter();

  return (
    <TimelineSection
      side={props.side}
      contentClassName={cn("bg-card flex flex-col md:flex-row gap-10")}>
      <div className="md:w-fit shrink-0 text-sm relative">
        <Badge>{props.information.organization}</Badge>
        <h3 className="text-xl leading-loose">{props.information.title}</h3>
        <p>
          {[
            formatter.dateTime(new Date(props.information.date.from), {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            formatter.dateTime(new Date(props.information.date.to), {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
          ].join(" - ")}
        </p>
        <p>Taipei, Taiwan</p>
      </div>
      {props.content}
    </TimelineSection>
  );
};

export const ExperienceTimeline = async () => {
  return (
    <section>
      {TIMELINES.map((item, index) => (
        <ExperienceTimelineItem
          key={index}
          side={Boolean(index % 2) ? "right" : "left"}
          {...item}
        />
      ))}
    </section>
  );
};
