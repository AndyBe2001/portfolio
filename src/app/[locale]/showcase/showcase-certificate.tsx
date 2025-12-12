import { getFormatter, getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

import { Link } from "@/i18n/navigation";
import SplitText from "@/ui/split-text";

const ShowcaseCertificateItem = async ({
  children,
  ...props
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  children?: React.ReactNode;
}) => {
  const formatter = await getFormatter();

  return (
    <li>
      <Image
        src={props.image}
        alt={props.title}
        width={320}
        height={180}
        className={"mx-auto mb-4 max-h-24 object-contain"}
      />
      <h3 className={"text-center text-xl font-semibold"}>{props.title}</h3>
      <p className={"text-muted-foreground mb-4 text-center text-sm"}>
        {formatter.dateTime(new Date(props.date), {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p className={"text-muted-foreground text-sm"}>{props.description}</p>
      {children}
    </li>
  );
};
export const ShowcaseCertificate = async () => {
  const translation = await getTranslations(
    "components.showcase.showcase-certificate"
  );

  return (
    <section className={"space-y-10"}>
      <SplitText
        className={"w-full text-2xl font-semibold"}
        as={"h3"}
        textAlign={"center"}>
        {translation("title")}
      </SplitText>
      <ul className={"mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"}>
        <ShowcaseCertificateItem
          image={"/showcase/aws-cloud-practitioner.webp"}
          title={translation("contents.0.title")}
          description={translation("contents.0.description")}
          date={"2023-12-7"}>
          <Link
            href={
              "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/AWS%20Certified%20Cloud%20Practitioner%20Certificate.pdf"
            }
            target={"_blank"}
            className={"mt-4 block text-center text-sm underline"}>
            {translation("view")}
          </Link>
        </ShowcaseCertificateItem>
        <ShowcaseCertificateItem
          image={"/showcase/mingchuan-university.webp"}
          title={translation("contents.1.title")}
          description={translation("contents.1.description")}
          date={"2023-6-11"}>
          <Link
            href={
              "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/Excellence%20in%20Research%20Project.jpg"
            }
            target={"_blank"}
            className={"mt-4 block text-center text-sm underline"}>
            {translation("view")}
          </Link>
        </ShowcaseCertificateItem>
        <ShowcaseCertificateItem
          image={"/showcase/mingchuan-university.webp"}
          title={translation("contents.2.title")}
          description={translation("contents.2.description")}
          date={"2022-12-9"}>
          <Link
            href={
              "https://qj1affpgixr8zsed.public.blob.vercel-storage.com/Jury%20Favorite%20Research%20Project.jpg"
            }
            target={"_blank"}
            className={"mt-4 block text-center text-sm underline"}>
            {translation("view")}
          </Link>
        </ShowcaseCertificateItem>
      </ul>
    </section>
  );
};
