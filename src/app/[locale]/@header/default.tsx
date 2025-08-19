import { Menu } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { ResumeDownload } from "@/components/resume-download";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { cn } from "@/utils/tailwindcss";

export default async function DefaultHeader() {
  const translation = await getTranslations(
    "components.header.header-navigation"
  );

  return (
    <header className="bg-background sticky top-0 z-20 h-16 w-full border-b transition-colors">
      <div
        className={
          "mx-auto flex h-full max-w-7xl items-center gap-2 px-5 md:gap-4"
        }>
        <div>
          <Button
            variant={"outline"}
            size={"icon"}
            className={"peer md:hidden"}>
            <Menu />
          </Button>
          <ul
            className={cn(
              "bg-background fixed top-0 left-0 w-full -translate-y-full space-y-4 border-b p-4 text-center transition-transform peer-focus:translate-y-0",

              "*:leading-loose"
            )}>
            <li>
              <Link className={"block"} href="/about">
                {translation("about")}
              </Link>
            </li>
            <li>
              <Link className={"block"} href="/experience">
                {translation("experience")}
              </Link>
            </li>
            <li>
              <Link className={"block"} href="/showcase">
                {translation("showcase")}
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className={"flex-1 text-xl font-semibold"}>
          Andy
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link className="animate-link" href="/about">
            {translation("about")}
          </Link>
          <Link className="animate-link" href="/experience">
            {translation("experience")}
          </Link>
          <Link className="animate-link" href="/showcase">
            {translation("showcase")}
          </Link>
        </nav>
        <ThemeSwitcher />
        <ResumeDownload />
      </div>
    </header>
  );
}
