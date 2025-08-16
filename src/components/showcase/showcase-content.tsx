import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

const items = [
  {
    image: "/works/computer-vision/banner.png",
    title: "Deep learning technology for object detection in libraries",
    description:
      "A deep dive into image recognition and object detection, this project combined dataset preparation, model training, and real-time inference optimization to transform raw visuals into actionable insights. It was as much about building accurate AI models as it was about making results clear, efficient, and usable.",
    id: 1,
    url: "/showcase/deep-learning-for-library-surveillance-and-management",
    icon: <Eye className="h-[16px] w-[16px] text-foreground" />,
  },
];
const ShowcaseContentItem = (props: (typeof items)[number]) => {
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
              "w-full aspect-video mb-4 group-hover:blur-xs transition-filter duration-500"
            }
          />
          <div
            className={
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-primary rounded-full grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            }>
            <ExternalLink className={"text-primary-foreground"} />
          </div>
        </div>
        <h3 className={"text-xl font-semibold mb-2"}>{props.title}</h3>
        <p className={"text-muted-foreground text-sm"}>{props.description}</p>
      </Link>
    </li>
  );
};
export const ShowcaseContent = () => {
  return (
    <section>
      <ul className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
        {items.map(item => (
          <ShowcaseContentItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};
