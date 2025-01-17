import { Box, ChevronRight } from "lucide-react";

import { Link } from "@/navigation";

export const LandingPageFeature = () => {
  return (
    <section className="py-28 grid gap-20">
      <h3 className="text-4xl font-bold">
        Explore My Core Skills in Web Development and Engineering
      </h3>
      <p>
        As a web engineer, I specialize in creating seamless user experiences
        through frontend development. My backend skills ensure robust
        server-side functionality, while my DevOps expertise optimizes
        deployment and maintenance. Together, these skills allow me to deliver
        comprehensive web solutions tailored to your needs.
      </p>
      <ul className="col-span-2 grid grid-cols-3 gap-12">
        <li className="space-y-6">
          <Box size="1.5rem" />
          <h5 className="text-lg font-bold">
            Frontend Development: Crafting Engaging User Interfaces
          </h5>
          <p>
            I design responsive and intuitive interfaces that enhance user
            engagement.
          </p>
          <Link
            className="pt-1 flex gap-2 items-center AnimateUnderline w-fit"
            href="/works">
            Explore Works <ChevronRight size="1rem" />
          </Link>
        </li>
        <li className="space-y-6">
          <Box size="1.5rem" />
          <h5 className="text-lg font-bold">
            Backend Development: Building Reliable Server Solutions
          </h5>
          <p>
            I create scalable and secure backend systems to support your
            applications.
          </p>
          <Link
            className="pt-1 flex gap-2 items-center AnimateUnderline w-fit"
            href="/works">
            Explore Works <ChevronRight size="1rem" />
          </Link>
        </li>
        <li className="space-y-6">
          <Box size="1.5rem" />
          <h5 className="text-lg font-bold">
            DevOps: Streamlining Development and Operations
          </h5>
          <p>
            I implement best practices to ensure efficient workflows and
            deployment.
          </p>
          <Link
            className="pt-1 flex gap-2 items-center AnimateUnderline w-fit"
            href="/works">
            Explore Works <ChevronRight size="1rem" />
          </Link>
        </li>
      </ul>
    </section>
  );
};
