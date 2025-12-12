import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Link } from "@/i18n/navigation";
import SplitText from "@/ui/split-text";

const ShowcaseProjectItem = (props: {
  image: string;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <li className={""}>
      <Link href={props.url} className={"group"}>
        <div className={"relative"}>
          <Image
            src={props.image}
            alt={props.title}
            width={768}
            height={432}
            className={
              "transition-filter mb-4 aspect-video w-full duration-500 group-hover:blur-xs"
            }
          />
          <div
            className={
              "bg-primary absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            }>
            <ExternalLink className={"text-primary-foreground"} />
          </div>
        </div>
        <h3 className={"mb-2 text-xl font-semibold"}>{props.title}</h3>
        <p className={"text-muted-foreground text-sm"}>{props.description}</p>
      </Link>
    </li>
  );
};
export const ShowcaseProject = async () => {
  const translation = await getTranslations(
    "components.showcase.showcase-project"
  );

  return (
    <section className={"space-y-10"}>
      <SplitText
        className={"w-full text-2xl font-semibold"}
        as={"h3"}
        textAlign={"center"}>
        {translation("title")}
      </SplitText>
      <ul className={"mx-auto grid max-w-3xl grid-cols-1 gap-4"}>
        <ShowcaseProjectItem
          image={"/showcase/deep-learning/banner.webp"}
          title={translation("contents.0.title")}
          description={translation("contents.0.description")}
          url={"/showcase/deep-learning"}
        />
      </ul>
    </section>
  );
};
