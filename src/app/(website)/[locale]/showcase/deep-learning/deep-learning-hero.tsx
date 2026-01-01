import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { AnimatedContent } from "@/ui/animated-content";
import SplitText from "@/ui/split-text";

interface FactProps {
  title: string;
  contents: string[];
}
const Fact = ({ title, contents }: FactProps) => {
  return (
    <AnimatedContent>
      <h5 className="text-muted-foreground mb-2 text-lg leading-loose">
        {title}
      </h5>
      <ul>
        {contents.map(item => (
          <li key={`${title}_${item}`}>{item}</li>
        ))}
      </ul>
    </AnimatedContent>
  );
};

export const DeepLearningHero = async () => {
  const translation = await getTranslations(
    "components.showcase.deep-learning.deep-learning-hero"
  );

  return (
    <section className="space-y-20">
      <article className={"mx-auto w-full max-w-3xl space-y-10"}>
        <SplitText
          className={"w-full overflow-visible text-4xl font-bold"}
          as={"h1"}
          textAlign={"center"}
          splitType={"words"}>
          {translation("title")}
        </SplitText>
        <Image
          src={"/showcase/deep-learning/banner.webp"}
          alt={translation("alt")}
          width={1200}
          height={600}
          className={"aspect-video"}
        />
      </article>
      <article className="border-border bg-card grid w-full grid-cols-1 gap-4 rounded-xl border p-4 text-center sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
        <Fact
          title={translation("contents.role.title")}
          contents={[0, 1, 2].map(item =>
            translation(`contents.role.contents.${item}`)
          )}
        />
        <Fact
          title={translation("contents.tool.title")}
          contents={[0, 1, 2].map(item =>
            translation(`contents.tool.contents.${item}`)
          )}
        />
        <Fact
          title={translation("contents.duration.title")}
          contents={[translation(`contents.duration.contents`)]}
        />
        <Fact
          title={translation("contents.platform.title")}
          contents={[0, 1, 2].map(item =>
            translation(`contents.platform.contents.${item}`)
          )}
        />
      </article>
    </section>
  );
};
