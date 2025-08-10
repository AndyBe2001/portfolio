import {
  BriefcaseBusiness,
  GalleryHorizontal,
  Info,
  LucideIcon,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { ScrollFloat } from "@/ui/scroll-float";
import { SpotlightCard } from "@/ui/spotlight-card";

const NavigationCard = (props: {
  href: string;
  icon: LucideIcon;
  title: string;
  quote: string;
  description: string;
}) => {
  return (
    <Link href={props.href}>
      <SpotlightCard className={"pt-10 pr-10 pb-20 h-full"}>
        <props.icon size={42} />
        <h3 className={"text-2xl font-semibold mt-6"}>{props.title}</h3>
        <h5 className={"italic text-foreground/60 mt-4"}>{props.quote}</h5>
        <p>{props.description}</p>
      </SpotlightCard>
    </Link>
  );
};

export const HomeNavigation = () => {
  return (
    <section className={"flex flex-col items-center justify-center gap-4"}>
      <ScrollFloat>Discover my journey</ScrollFloat>
      <ul className={"grid lg:grid-cols-3 gap-4"}>
        <li>
          <NavigationCard
            href={"/about"}
            icon={Info}
            title={"About Me"}
            quote={"The person behind the code"}
            description={
              "Get to know my background, passions, and what drives me to create. A quick look at the values and experiences that shape my work."
            }
          />
        </li>
        <li>
          <NavigationCard
            href={"/experience"}
            icon={BriefcaseBusiness}
            title={"My Experiences"}
            quote={"Lessons from the field"}
            description={
              "From high school projects to professional challenges, explore the milestones, skills, and insights I’ve gained along the way."
            }
          />
        </li>
        <li>
          <NavigationCard
            href={"/showcase"}
            icon={GalleryHorizontal}
            title={"Project Showcase"}
            quote={"Ideas brought to life"}
            description={
              "A curated selection of my favorite projects—each with its story, challenges, and creative solutions."
            }
          />
        </li>
      </ul>
    </section>
  );
};
