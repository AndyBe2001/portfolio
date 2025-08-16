import Image from "next/image";

import { AnimatedContent } from "@/ui/animated-content";
import SplitText from "@/ui/split-text";

export const AboutHero = () => {
  return (
    <section className="text-center py-16 grid">
      <AnimatedContent>
        <figure className="relative size-50 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/portrait.webp"
            alt="Profile"
            fill
            className="object-cover"
          />
        </figure>
      </AnimatedContent>
      <SplitText
        className={"text-4xl font-bold mb-2"}
        as={"h1"}
        splitType={"words"}>
        {"Hi, I'm Andy"}
      </SplitText>
      <SplitText
        className={"text-lg text-muted-foreground"}
        splitType={"words"}>
        Full-stack developer passionate about building things that matter.
      </SplitText>
    </section>
  );
};
