import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

import SplitText from "@/ui/split-text";

export const HomeHero = async () => {
  const translation = await getTranslations("components.home.home-hero");

  return (
    <section
      className={
        "flex flex-col items-center justify-center gap-4 min-h-[calc(100vh-384px)]"
      }>
      <SplitText
        as={"h5"}
        duration={0.5}
        splitType={"words"}
        className={"text-sm sm:text-base"}>
        {translation("greeting")}
      </SplitText>
      <SplitText
        as={"h1"}
        className={"text-3xl sm:text-4xl md:text-5xl font-semibold max-w-4xl"}
        delay={100}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
      <span className={"flex gap-2 items-center mt-20"}>
        {`${translation("scroll")} `}
        <ChevronDown className={"text-primary animate-bounce"} size={18} />
      </span>
    </section>
  );
};
