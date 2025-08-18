import { getTranslations } from "next-intl/server";

import SplitText from "@/ui/split-text";

export const ShowcaseHero = async () => {
  const translation = await getTranslations(
    "components.showcase.showcase-hero"
  );
  return (
    <section className="text-center py-16 grid">
      <SplitText
        className={"text-4xl font-bold mb-10"}
        as={"h1"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground"}
        splitType={"words"}>
        {translation("description")}
      </SplitText>
    </section>
  );
};
