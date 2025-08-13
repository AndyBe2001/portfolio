import { ChevronDown } from "lucide-react";

import SplitText from "@/ui/split-text";

export const HomeHero = () => {
  return (
    <section
      className={
        "flex flex-col items-center justify-center gap-4 h-[calc(100vh-384px)]"
      }>
      <SplitText as={"h5"} duration={0.5} splitType={"words"}>
        {"Hi, I'm Andy!"}
      </SplitText>
      <SplitText
        as={"h1"}
        className={"text-4xl md:text-5xl font-semibold max-w-4xl"}
        delay={100}
        splitType={"words"}>
        Full stack developer with a solid foundation in system design and
        development. Quick learner, adaptable to fast-paced environments.
      </SplitText>
      <span className={"flex gap-2 items-center mt-20"}>
        Scroll down{" "}
        <ChevronDown className={"text-primary animate-bounce"} size={18} />
      </span>
    </section>
  );
};
