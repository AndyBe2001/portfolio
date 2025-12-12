import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { AnimatedContent } from "@/ui/animated-content";
import SplitText from "@/ui/split-text";

export const AboutHero = async () => {
  const translation = await getTranslations("components.about.about-hero");

  return (
    <section className="grid py-16 text-center">
      <AnimatedContent>
        <figure className="relative mx-auto mb-6 size-50 overflow-hidden rounded-full">
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
        className={"mb-2 text-4xl font-bold"}
        as={"h1"}
        splitType={"words"}>
        {translation("greeting")}
      </SplitText>
      <SplitText
        className={"text-muted-foreground text-lg"}
        as={"h2"}
        splitType={"words"}>
        {translation("title")}
      </SplitText>
    </section>
  );
};
