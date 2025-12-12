import { Globe } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

import { AnimatedContent } from "@/ui/animated-content";
import { ScrollFloat } from "@/ui/scroll-float";
import { cn } from "@/utils/tailwindcss";

export const AboutWorkflow = async () => {
  const translation = await getTranslations("components.about.about-workflow");

  return (
    <section>
      <ScrollFloat containerClassName="mb-20 text-center">
        {translation("title")}
      </ScrollFloat>
      <ul>
        {[0, 1, 2, 3, 4].map(value => (
          <AnimatedContent
            key={value}
            as={"li"}
            className={cn(
              "mx-auto flex max-w-2xl flex-col items-center",
              value < 4 &&
                "after:mx-auto after:my-3 after:h-36 after:w-[2px] after:bg-left after:bg-repeat-y",
              value < 4 &&
                "after:bg-[linear-gradient(to_bottom,var(--color-foreground)_10%,transparent_0%)] after:bg-[length:3px_15px]"
            )}
            reverse>
            <span className="border-foreground flex size-24 items-center justify-center rounded-full border-2">
              <Globe />
            </span>
            <h2 className="my-2 text-3xl font-medium">
              {translation(`contents.${value}.title`)}
            </h2>
            <p className="text-muted-foreground text-center">
              {translation(`contents.${value}.description`)}
            </p>
          </AnimatedContent>
        ))}
      </ul>
    </section>
  );
};
