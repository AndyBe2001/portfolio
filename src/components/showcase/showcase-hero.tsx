import { getTranslations } from "next-intl/server";

import SplitText from "@/ui/split-text";

export const ShowcaseHero = async () => {
  const translation = await getTranslations(
    "components.showcase.showcase-hero"
  );
  return (
    <section className="grid py-16 text-center">
      <SplitText
        className={"mb-10 text-4xl font-bold"}
        as={"h1"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
      <SplitText
        className={"text-muted-foreground text-lg"}
        as={"h2"}
        splitType={"words"}>
        {translation("description")}
      </SplitText>
    </section>
  );
};
