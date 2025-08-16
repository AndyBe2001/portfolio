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
      organization: "Overclockr",
      title: "CTO & Co-Founder",
      date: { from: "2024-09-12", to: "present" },
      location: "Remote",
    },
    content: (
      <div className={"space-y-4"}>
        <p className="text-muted-foreground">
          <span className={"text-foreground font-semibold mr-2"}>
            The Challenge:
          </span>
          {
            "Overclockr managed multiple projects simultaneously, including web platforms, inventory systems, and native apps. Coordinating development across these varied products while maintaining scalability, reliability, and user experience posed significant challenges."
          }
        </p>
        <p className="text-muted-foreground">
          <span className={"text-foreground font-semibold mr-2"}>
            The Solution:
          </span>
          {
            "Full-stack development practices were applied across React/Next.js frontends, NestJS backends, and PostgreSQL databases. Streamlined architecture, reusable components, and cross-platform design patterns ensured consistency and efficiency across all projects."
          }
        </p>
        <p className="text-muted-foreground">
          <span className={"text-foreground font-semibold mr-2"}>
            What Was Learned:
          </span>
          {
            "This experience reinforced the importance of scalable design, effective project organization, and the ability to adapt solutions to diverse project requirements. It demonstrated how thoughtful architecture and collaboration can produce robust, multi-platform applications."
          }
        </p>
      </div>
    ),
  },
  {
    information: {
      organization: "Infotech Corporation",
      title: "Frontend Engineer",
      date: { from: "2023-07-03", to: "2024-06-07" },
      location: "Taipei, Taiwan",
    },
    content: (
      <div className={"space-y-4"}>
        <h3 className="text-xl">Core - Optimization</h3>
        <p className="text-muted-foreground">
          Throughout the development lifecycle, our collective experiences drove
          us to enhance the deployment system. We automated everything—from
          end-to-end testing and component testing to containerization.
          Similarly, during the deployment phase, I acquired proficiency in
          continuous integration and continuous deployment using GitLab's native
          tools.
        </p>
        <h3 className="text-xl">Web application - Development</h3>
        <p className="text-muted-foreground">
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
      organization: "Infotech Corporation",
      title: "Frontend Engineer Internship",
      date: { from: "2023-02-01", to: "2023-06-16" },
      location: "Taipei, Taiwan",
    },
    content: (
      <div className={"space-y-4"}>
        <h3 className="text-xl">Core - Optimization</h3>
        <p className="text-muted-foreground">
          Throughout the development lifecycle, our collective experiences drove
          us to enhance the deployment system. We automated everything—from
          end-to-end testing and component testing to containerization.
          Similarly, during the deployment phase, I acquired proficiency in
          continuous integration and continuous deployment using GitLab's native
          tools.
        </p>
        <h3 className="text-xl">Web application - Development</h3>
        <p className="text-muted-foreground">
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
      title: "Deep learning technology for object detection in libraries",
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
        <Badge className={"mb-2"}>{props.information.organization}</Badge>
        <h3 className="text-xl max-w-xs mb-2">{props.information.title}</h3>
        <p>
          {[
            formatter.dateTime(new Date(props.information.date.from), {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            props.information.date.to === "present"
              ? "Present"
              : formatter.dateTime(new Date(props.information.date.to), {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
          ].join(" - ")}
        </p>
        <p>{props.information.location}</p>
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
