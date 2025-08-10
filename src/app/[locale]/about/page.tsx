import Link from "next/link";

import { AboutHero } from "@/components/about/about-hero";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutSkill } from "@/components/about/about-skill";
import { CardSwap, CardSwapItem } from "@/ui/card-swap";

export default function AboutMe() {
  return (
    <main className={"space-y-16"}>
      <AboutHero />
      <AboutJourney />
      <AboutSkill />
      {/* Values & Approach */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">How I Work</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "Clean Code",
              desc: "Writing maintainable, scalable, and readable code.",
            },
            {
              title: "User-Centric Design",
              desc: "Creating interfaces with the end-user in mind.",
            },
            {
              title: "Scalable Solutions",
              desc: "Architecting systems that grow with your needs.",
            },
          ].map(value => (
            <div
              key={value.title}
              className="p-4 shadow rounded-lg border border-gray-100">
              <h3 className="font-semibold mb-1">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond the Code */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Beyond the Code</h2>
        <p className="text-gray-700 leading-relaxed">
          Outside of work, I maintain a clean and organized lifestyle, stay
          active, and pursue my passion for aviation. You’ll often find me at
          the airport, soaking in the atmosphere and enjoying moments of
          reflection.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
          View My Projects
        </Link>
      </section>
    </main>
  );
}
