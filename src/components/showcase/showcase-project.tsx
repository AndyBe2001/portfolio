import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

const items = [
  {
    image: "/showcase/deep-learning/banner.webp",
    title: "Deep learning technology for object detection in libraries",
    description:
      "A deep dive into image recognition and object detection, this project combined dataset preparation, model training, and real-time inference optimization to transform raw visuals into actionable insights. It was as much about building accurate AI models as it was about making results clear, efficient, and usable.",
    url: "/showcase/deep-learning-for-library-surveillance-and-management",
  },
];
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
            width={1200}
            height={600}
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
    <section>
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
