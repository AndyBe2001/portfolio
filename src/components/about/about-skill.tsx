import { Binary, CodeXml, Database, Ellipsis, Server } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { CardSwap, CardSwapItem } from "@/ui/card-swap";
import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollReveal } from "@/ui/scroll-reveal";

const skills = [
  {
    icon: CodeXml,
    key: "frontend",
    skills: [
      "css-3",
      "cypress",
      "daisyUI",
      "expo",
      "html-5",
      "nextjs",
      "nuxt",
      "pinia",
      "pug",
      "react",
      "react-query",
      "recaptcha",
      "tailwindcss",
      "vue",
    ],
  },
  {
    icon: Binary,
    key: "backend",
    skills: ["express", "nestjs", "nodejs", "openapi", "stripe", "swagger"],
  },
  {
    icon: Server,
    key: "devops",
    skills: [
      "auth0",
      "aws",
      "aws-ec2",
      "aws-s3",
      "docker",
      "github-actions",
      "jenkins",
    ],
  },
  {
    icon: Database,
    key: "database",
    skills: [
      "mongodb",
      "mysql",
      "postgresql",
      "prisma",
      "redis",
      "typeorm",
      "supabase",
    ],
  },
  {
    icon: Ellipsis,
    key: "other",
    skills: [
      "eslint",
      "github-copilot",
      "nx",
      "opencv",
      "prettier",
      "python",
      "snyk",
      "tensorflow",
      "threejs",
      "typescript",
    ],
  },
];

export const AboutSkill = async () => {
  const translation = await getTranslations("components.about.about-skill");

  return (
    <section
      className={
        "bg-primary/10 border-border relative grid place-items-center overflow-hidden overflow-y-clip rounded-xl border p-10 lg:grid-cols-2"
      }>
      <article>
        <ScrollFloat containerClassName="mt-16 lg:mt-0 mb-4">
          {translation("title")}
        </ScrollFloat>
        <ScrollReveal textClassName={"!text-[clamp(1.2rem,4vw,1.2rem)]"}>
          {translation("description")}
        </ScrollReveal>
      </article>
      <article className={"relative h-60 w-full md:h-112 lg:flex-1"}>
        <CardSwap verticalDistance={52}>
          {skills.map(cat => (
            <CardSwapItem key={cat.key}>
              <h3 className="mb-1 flex items-center gap-2 border-b border-[#e5e7eb] p-2 font-semibold">
                <cat.icon size={18} />
                {translation(`contents.${cat.key}`)}
              </h3>
              <ul
                className={"grid place-items-center gap-4 p-4"}
                style={{
                  gridTemplateColumns: `repeat(${Math.floor(cat.skills.length / 2)}, 1fr)`,
                }}>
                {cat.skills.map(skill => (
                  <li key={skill}>
                    <Image
                      src={`/about/skill/${cat.key}/${skill}.svg`}
                      width={60}
                      height={60}
                      alt={skill}
                    />
                  </li>
                ))}
              </ul>
            </CardSwapItem>
          ))}
        </CardSwap>
      </article>
    </section>
  );
};
