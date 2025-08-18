import { Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

import { AnimatedContent } from "@/ui/animated-content";
import { ScrollFloat } from "@/ui/scroll-float";

export const AboutWorkflow = async () => {
  const translation = await getTranslations("components.about.about-workflow");

  return (
    <section>
      <ScrollFloat containerClassName="mb-20 text-center">
        {translation("title")}
      </ScrollFloat>
      <ul>
        {[0, 1, 2, 3, 4].map(value => (
          <React.Fragment key={value}>
            <AnimatedContent
              as={"li"}
              className={"flex flex-col items-center max-w-2xl mx-auto"}
              reverse>
              <span className="flex size-24 items-center justify-center rounded-full border-2 border-foreground">
                <Globe />
              </span>
              <h2 className="my-2 text-3xl font-medium">
                {translation(`contents.${value}.title`)}
              </h2>
              <p className="text-muted-foreground text-center">
                {translation(`contents.${value}.description`)}
              </p>
            </AnimatedContent>
            {value !== 4 && (
              <AnimatedContent reverse>
                <div
                  className="my-3 h-36 w-[2px] mx-auto bg-left bg-repeat-y"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, var(--color-foreground) 10%, transparent 0%)",
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
