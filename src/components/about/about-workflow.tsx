import { Globe } from "lucide-react";
import React from "react";

import { AnimatedContent } from "@/ui/animated-content";
import { ScrollFloat } from "@/ui/scroll-float";

const WORKFLOWS = [
  {
    title: "Clean Code, Clean Mind",
    description:
      "I believe code should be as easy to read as it is to run. This means consistent structure, meaningful naming, and thoughtful organization—making it easier to maintain, scale, and collaborate on.",
  },
  {
    title: "User-First Approach",
    description:
      "Technology only matters if it solves a real problem. I start by understanding the needs, behaviors, and expectations of the people using the product, ensuring the final solution feels natural and intuitive.",
  },
  {
    title: "Scalable by Design",
    description:
      "I design systems with tomorrow in mind. Whether it’s database structure, API architecture, or cloud deployment, I ensure solutions can grow without sacrificing performance.",
  },
  {
    title: "Iterate and Improve",
    description:
      "No first version is ever the final one. I work in cycles—design, test, get feedback, and refine—so the end result is polished and truly meets its goals.",
  },
  {
    title: "Clear and Open Communication",
    description:
      "Whether I’m working solo or collaborating with others, I keep communication transparent. This helps prevent misunderstandings and keeps projects moving forward smoothly.",
  },
];

export const AboutWorkflow = () => {
  return (
    <section>
      <ScrollFloat containerClassName="mb-20 text-center">
        How I Work
      </ScrollFloat>
      <ul>
        {WORKFLOWS.map((value, index) => (
          <React.Fragment key={value.title}>
            <AnimatedContent
              as={"li"}
              className={"flex flex-col items-center max-w-2xl mx-auto"}
              reverse>
              <span className="flex size-24 items-center justify-center rounded-full border-2 border-foreground">
                <Globe />
              </span>
              <h2 className="my-2 text-3xl font-medium">{value.title}</h2>
              <p className="text-muted-foreground text-center">
                {value.description}
              </p>
            </AnimatedContent>
            {index < WORKFLOWS.length - 1 && (
              <AnimatedContent reverse>
                <div
                  className="my-3 h-36 w-[2px] mx-auto bg-left bg-repeat-y"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #000 10%, rgba(255, 255, 255, 0) 0%)",
                    backgroundSize: "3px 15px",
                  }}
                />
              </AnimatedContent>
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
