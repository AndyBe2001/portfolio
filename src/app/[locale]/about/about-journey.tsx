import { getTranslations } from "next-intl/server";

import { ScrollFloat } from "@/ui/scroll-float";
import { ScrollReveal } from "@/ui/scroll-reveal";

export const AboutJourney = async () => {
  const translation = await getTranslations("components.about.about-journey");

  return (
    <section>
      <ScrollFloat containerClassName={"mb-4"}>
        {translation("title")}
      </ScrollFloat>
      {[0, 1, 2].map(item => (
        <ScrollReveal
          key={item}
          textClassName="text-[clamp(1.2rem,4vw,1.2rem)]! leading-relaxed">
          {translation(`contents.${item}`)}
        </ScrollReveal>
      ))}
    </section>
  );
};
