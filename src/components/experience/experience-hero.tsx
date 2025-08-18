import { getTranslations } from "next-intl/server";

import SplitText from "@/ui/split-text";

export const ExperienceHero = async () => {
  const translation = await getTranslations(
    "components.experience.experience-hero"
  );

  return (
    <section className="text-center relative pt-16 pb-80 grid">
      <SplitText
        className={"text-4xl font-bold mb-10"}
        as={"h1"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground max-w-2xl mx-auto"}
        splitType={"words"}>
        {translation("description")}
      </SplitText>
      <div
        className={
          "size-10 bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full"
        }
      />
    </section>
  );
};
