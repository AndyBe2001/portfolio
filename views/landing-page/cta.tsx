import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Link } from "@/navigation";

export const LandingPageCta = () => {
  return (
    <section className="py-28 grid grid-cols-2 gap-20 place-items-center">
      <div>
        <h3 className="text-4xl font-bold">Let's Bring Your Vision to Life</h3>
        <p className="mt-4">
          Ready to elevate your project? Get in touch for tailored web solutions
          that drive results.
        </p>
        <Link
          className="mt-8 flex gap-2 items-center AnimateUnderline w-fit"
          href="/contact">
          Contact <ChevronRight size="1rem" />
        </Link>
      </div>
      <Image
        className="aspect-video w-full rounded-2xl"
        src="/background.webp"
        alt="temp"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};
