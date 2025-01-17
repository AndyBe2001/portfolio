import Image from "next/image";

import { Button } from "@/components/button";
import { Link } from "@/navigation";

export const LandingPageHero = () => {
  return (
    <section className="py-28 grid gap-20">
      <h1 className="font-bold text-5xl">
        Create Seamless Web Experiences Just For You
      </h1>
      <div className="space-y-8">
        <p>
          Welcome to my portfolio, where innovation meets functionality. Explore
          my work and discover how I can bring your digital vision to life.
        </p>
        <div className="space-x-2">
          <Button size="lg" asChild>
            <Link href="/works">Explore</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      <Image
        className="col-span-2 aspect-video w-full rounded-2xl"
        src="/background.webp"
        alt="temp"
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
};
