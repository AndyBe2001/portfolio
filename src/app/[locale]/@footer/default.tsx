import { Mail } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";
import { GithubIcon, LinkedinIcon } from "@/ui/icon";

export default async function DefaultFooter() {
  return (
    <footer className="py-20 space-y-20 border-t">
      <div className="flex justify-between items-center px-4 w-full mx-auto max-w-7xl">
        <span className={"font-semibold text-lg"}>Andy</span>
        <LocaleSwitcher />
      </div>
      <div className={"flex justify-center items-center flex-col gap-4"}>
        <ul className="flex gap-4">
          <li>
            <Link href="https://www.linkedin.com/in/andybe2001/">
              <LinkedinIcon fill={"var(--foreground)"} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/AndyBe2001">
              <GithubIcon fill={"var(--foreground)"} />
            </Link>
          </li>
          <li>
            <Link href="mailto:andybe034@gmail.com">
              <Mail />
            </Link>
          </li>
        </ul>
        {/*<p className="text-center text-sm">*/}
        {/*  &copy; {new Date().getFullYear()} All rights reserved.*/}
        {/*</p>*/}
      </div>
    </footer>
  );
}
