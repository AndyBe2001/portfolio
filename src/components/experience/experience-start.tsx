import { getTranslations } from "next-intl/server";

import { cn } from "@/utils/tailwindcss";

export const ExperienceStart = async () => {
  const translation = await getTranslations(
    "components.experience.experience-start"
  );

  return (
    <section className="grid place-items-center">
      <div className="p-6 rounded-xl border border-border shadow-lg max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{translation("title")}</h2>
        {["curiosity", "school", "habit"].map((item, index) => (
          <p key={item} className={cn(index > 0 && "mt-2")}>
            {translation(item)}
          </p>
        ))}
      </div>
    </section>
  );
};
