import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollReveal } from "@/ui/scroll-reveal";

export const AboutJourney = () => {
  return (
    <section>
      <ScrollFloat containerClassName={"mb-4"}>My Journey</ScrollFloat>
      <ScrollReveal textClassName="!text-[clamp(1.2rem,4vw,1.2rem)] leading-relaxed">
        {
          "I’ve been building and tinkering with ideas since high school—turning curiosity into websites, apps, and cloud-powered tools. I love creating things that feel smooth, work reliably, and make people’s lives a little easier."
        }
      </ScrollReveal>
      <ScrollReveal textClassName="!text-[clamp(1.2rem,4vw,1.2rem)] leading-relaxed">
        {
          "Whether it’s a sleek interface or a system running quietly in the background, I enjoy finding the right balance between design and function. My multicultural background helps me see problems from different angles and connect easily with others."
        }
      </ScrollReveal>
      <ScrollReveal textClassName="!text-[clamp(1.2rem,4vw,1.2rem)] leading-relaxed">
        {
          "Away from the screen, I’m drawn to organized spaces, fresh air, and the hum of airports. Aviation has always inspired me—there’s something about the mix of engineering and adventure that fuels my creativity."
        }
      </ScrollReveal>
    </section>
  );
};
