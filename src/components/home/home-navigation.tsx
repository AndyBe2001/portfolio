import {
  BriefcaseBusiness,
  GalleryHorizontal,
  Info,
  LucideIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { ScrollFloat } from "@/ui/scroll-float";
import { SpotlightCard } from "@/ui/spotlight-card";

const NAVIGATION_ROUTES = [
  { key: "about", icon: Info },
  { key: "experience", icon: BriefcaseBusiness },
  { key: "showcase", icon: GalleryHorizontal },
];

const NavigationCard = (props: {
  href: string;
  icon: LucideIcon;
  title: string;
  quote: string;
  description: string;
}) => {
  return (
    <Link href={props.href}>
      <SpotlightCard className={"h-full pt-10 pr-10 pb-20"}>
        <props.icon size={42} />
        <h3 className={"mt-6 text-2xl font-semibold"}>{props.title}</h3>
        <p className={"text-foreground/60 mt-4 italic"}>{props.quote}</p>
        <p>{props.description}</p>
      </SpotlightCard>
    </Link>
  );
};

export const HomeNavigation = async () => {
  const translation = await getTranslations("components.home.home-navigation");

  return (
    <section className={"flex flex-col items-center justify-center gap-4"}>
      <ScrollFloat>{translation("title")}</ScrollFloat>
      <ul className={"grid gap-4 lg:grid-cols-3"}>
        {NAVIGATION_ROUTES.map(item => (
          <li key={item.key}>
            <NavigationCard
              href={`/${item.key}`}
              icon={item.icon}
              title={translation(`${item.key}.title`)}
              quote={translation(`${item.key}.quote`)}
              description={translation(`${item.key}.description`)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
