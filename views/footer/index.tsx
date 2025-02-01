import { Github, Linkedin, Mail } from "lucide-react";

import { Link } from "@/navigation";

export const Footer = () => {
  return (
    <footer className="py-20 space-y-20">
      <div className="flex justify-between items-center px-4 w-full mx-auto max-w-7xl">
        <span>Andy</span>
        <ul className="flex gap-4">
          <li>
            <Link href="/about">
              <Linkedin />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Github />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Mail />
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t pt-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
