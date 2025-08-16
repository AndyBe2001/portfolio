import SplitText from "@/ui/split-text";

export const ShowcaseHero = () => {
  return (
    <section className="text-center py-16 grid">
      <SplitText
        className={"text-4xl font-bold mb-10"}
        as={"h1"}
        splitType={"words"}>
        {"Discover the work I've done"}
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground"}
        splitType={"words"}>
        Dive in and see where curiosity, creativity, and code meet — each
        project is a small adventure.
      </SplitText>
    </section>
  );
};
