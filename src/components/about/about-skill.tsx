import { CardSwap, CardSwapItem } from "@/ui/card-swap";
import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollReveal } from "@/ui/scroll-reveal";

export const AboutSkill = () => {
  return (
    <section className={"flex lg:flex-row flex-col items-center"}>
      <article>
        <ScrollFloat containerClassName="mb-4">What I Do</ScrollFloat>
        <ScrollReveal textClassName={"!text-[clamp(1.2rem,4vw,1.2rem)]"}>
          Lorem ipsum
        </ScrollReveal>
      </article>
      <article className={"relative w-full h-60 lg:h-120"}>
        <CardSwap pauseOnHover={false} verticalDistance={50}>
          {[
            { title: "Frontend", skills: "React, Next.js, Tailwind CSS" },
            { title: "Backend", skills: "NestJS, Node.js, TypeScript" },
            { title: "Cloud", skills: "Docker, NGINX, CI/CD" },
            { title: "Database", skills: "PostgreSQL, MongoDB" },
          ].map(cat => (
            <CardSwapItem key={cat.title}>
              <h3 className="font-semibold mb-1 border-b p-2">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.skills}</p>
            </CardSwapItem>
          ))}
        </CardSwap>
      </article>
    </section>
  );
};
