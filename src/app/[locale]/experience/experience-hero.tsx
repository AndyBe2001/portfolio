import { getTranslations } from "next-intl/server";

import SplitText from "@/ui/split-text";

export const ExperienceHero = async () => {
  const translation = await getTranslations(
    "components.experience.experience-hero"
  );

  return (
    <section className="relative grid pt-16 pb-80 text-center">
      <SplitText
        className={"mb-10 text-4xl font-bold"}
        as={"h1"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
      <SplitText
        className={"text-muted-foreground mx-auto max-w-2xl text-lg"}
        as={"h2"}
        splitType={"words"}>
        {translation("description")}
      </SplitText>
      <div
        className={
          "bg-primary absolute bottom-0 left-1/2 size-10 -translate-x-1/2 translate-y-1/2 rounded-full"
        }
      />
    </section>
  );
};
