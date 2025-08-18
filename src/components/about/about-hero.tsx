import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { AnimatedContent } from "@/ui/animated-content";
import SplitText from "@/ui/split-text";

export const AboutHero = async () => {
  const translation = await getTranslations("components.about.about-hero");

  return (
    <section className="text-center py-16 grid">
      <AnimatedContent>
        <figure className="relative size-50 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/about/portrait.webp"
            alt={translation("alt")}
            width={200}
            height={200}
            className="object-cover"
          />
        </figure>
      </AnimatedContent>
      <SplitText
        className={"text-4xl font-bold mb-2"}
        as={"h1"}
        splitType={"words"}>
        {translation("greeting")}
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
    </section>
  );
};
