import { Box, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/navigation";

export const LandingPageShowcase = () => {
  return (
    <section className="py-28 grid gap-20 grid-cols-2 place-items-center">
      <div>
        <h5 className="font-semibold">Innovative</h5>
        <h3 className="font-bold text-4xl mt-4">
          Showcasing My Latest Development Projects
        </h3>
        <p className="mt-6">
          Explore my recent projects that blend creativity and technology. Each
          project demonstrates my commitment to quality and impactful solutions.
        </p>
        <ul className="mt-8 space-y-4">
          <li className="flex items-center gap-4">
            <Box size="1rem" />
            Transforming ideas into functional web applications.
          </li>
          <li className="flex items-center gap-4">
            <Box size="1rem" />
            Enhancing user experience through intuitive design.
          </li>
          <li className="flex items-center gap-4">
            <Box size="1rem" />
            Delivering robust backend solutions for seamless performance.
          </li>
        </ul>
        <Link
          className="mt-8 flex gap-2 items-center AnimateUnderline w-fit"
          href="/works">
          Learn more <ChevronRight size="1rem" />
        </Link>
      </div>
      <Image
        className="aspect-square w-full rounded-2xl"
        src="/background.webp"
        alt="temp"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};
