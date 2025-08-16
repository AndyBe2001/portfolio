import SplitText from "@/ui/split-text";

export const ExperienceHero = () => {
  return (
    <section className="text-center relative pt-16 pb-80 grid">
      <SplitText
        className={"text-4xl font-bold mb-10"}
        as={"h1"}
        splitType={"words"}>
        From today to where it all started
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground max-w-2xl mx-auto"}
        splitType={"words"}>
        A journey from today’s milestones back to the first sparks that set my
        path in motion. Each step shaped the skills and passion I bring to my
        work.
      </SplitText>
      <div
        className={
          "py-2 px-10 z-10 bg-primary absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full text-primary-foreground"
        }>
        {"Aujourd'hui"}
      </div>
    </section>
  );
};
