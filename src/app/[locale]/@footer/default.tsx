import { Mail } from "lucide-react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";
import { GithubIcon, LinkedinIcon } from "@/ui/icon";

export default async function DefaultFooter() {
  return (
    <footer className="space-y-20 border-t py-20">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <span className={"text-lg font-semibold"}>Andy</span>
        <LocaleSwitcher />
      </div>
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <ul className="flex gap-4">
          <li>
            <Link
              href="https://www.linkedin.com/in/andybe2001/"
              aria-label={"LinkedIn"}>
              <LinkedinIcon fill={"var(--foreground)"} />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/AndyBe2001" aria-label={"Github"}>
              <GithubIcon fill={"var(--foreground)"} />
            </Link>
          </li>
          <li>
            <Link href="mailto:andybe034@gmail.com" aria-label={"Mail"}>
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
