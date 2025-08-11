import { Binary, Cloud, CodeXml, Database } from "lucide-react";

import { CardSwap, CardSwapItem } from "@/ui/card-swap";
import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollReveal } from "@/ui/scroll-reveal";

export const AboutSkill = () => {
  return (
    <section
      className={
        "grid lg:grid-cols-2 place-items-center overflow-y-clip relative"
      }>
      <div
        className={
          "absolute bg-foreground/10 top-0 left-1/2 w-dvw h-full -translate-x-1/2 border-t border-b border-border"
        }
      />
      <article>
        <ScrollFloat containerClassName="mt-16 lg:mt-0 mb-4">
          What I Do
        </ScrollFloat>
        <ScrollReveal textClassName={"!text-[clamp(1.2rem,4vw,1.2rem)]"}>
          I craft digital experiences from concept to deployment, blending
          intuitive design with scalable technology. Whether it’s building a
          pixel-perfect interface or architecting complex systems, my goal is
          always the same: deliver solutions that work beautifully and perform
          flawlessly.
        </ScrollReveal>
      </article>
      <article
        className={"relative w-full lg:flex-1 h-72 xs:h-72 sm:h-84 md:h-112"}>
        <CardSwap verticalDistance={52}>
          {[
            {
              icon: CodeXml,
              title: "Frontend",
              skills: "React, Next.js, Tailwind CSS",
            },
            {
              icon: Binary,
              title: "Backend",
              skills: "NestJS, Node.js, TypeScript",
            },
            { icon: Cloud, title: "Cloud", skills: "Docker, NGINX, CI/CD" },
            {
              icon: Database,
              title: "Database",
              skills: "PostgreSQL, MongoDB",
            },
          ].map(cat => (
            <CardSwapItem key={cat.title}>
              <h3 className="font-semibold flex gap-2 items-center mb-1 border-b p-2">
                <cat.icon size={18} />
                {cat.title}
              </h3>
              <p className="text-sm text-gray-600">{cat.skills}</p>
            </CardSwapItem>
          ))}
        </CardSwap>
      </article>
    </section>
  );
};
