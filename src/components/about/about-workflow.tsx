import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollStack, ScrollStackItem } from "@/ui/scroll-stack";

export const AboutWorkflow = () => {
  return (
    <section className={"relative overflow-x-visible"}>
      <ScrollFloat containerClassName="mb-4 text-center">
        How I Work
      </ScrollFloat>
      <ScrollStack
        className={
          "absolute bottom-0 left-1/2 -translate-x-1/2 !w-[min(560px, calc(100%-3rem))] max-w-5xl !h-120 no-scrollbar"
        }>
        {[
          {
            title: "Clean Code, Clean Mind",
            description:
              "I believe code should be as easy to read as it is to run. This means consistent structure, meaningful naming, and thoughtful organization—making it easier to maintain, scale, and collaborate on.",
          },
          {
            title: "User-First Approach",
            description:
              "Technology only matters if it solves a real problem. I start by understanding the needs, behaviors, and expectations of the people using the product, ensuring the final solution feels natural and intuitive.",
          },
          {
            title: "Scalable by Design",
            description:
              "I design systems with tomorrow in mind. Whether it’s database structure, API architecture, or cloud deployment, I ensure solutions can grow without sacrificing performance.",
          },
          {
            title: "Iterate and Improve",
            description:
              "No first version is ever the final one. I work in cycles—design, test, get feedback, and refine—so the end result is polished and truly meets its goals.",
          },
          {
            title: "Clear and Open Communication",
            description:
              "Whether I’m working solo or collaborating with others, I keep communication transparent. This helps prevent misunderstandings and keeps projects moving forward smoothly.",
          },
        ].map((value, index) => (
          <ScrollStackItem
            key={value.title}
            itemClassName={
              "bg-card border border-card-foreground/10 max-w-5xl w-full mx-auto"
            }>
            <h5 className={"text-3xl font-semibold mb-4"}>
              <span>{index + 1}. </span>
              {value.title}
            </h5>
            <p className={"text-lg"}>{value.description}</p>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};
