import { getTranslations } from "next-intl/server";

import { ResumeDownload } from "@/components/resume-download";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "@/i18n/navigation";

export default async function DefaultHeader() {
  const translation = await getTranslations(
    "components.header.header-navigation"
  );

  return (
    <header className="bg-background sticky top-0 z-20 h-16 w-full border-b transition-colors">
      <div
        className={
          "mx-auto flex h-full max-w-7xl items-center justify-between px-5"
        }>
        <Link href={"/"} className={"z-10 text-xl font-semibold"}>
          Andy
        </Link>
        <div className={"z-10 flex items-center gap-6"}>
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
          <div className={"flex items-center gap-2"}>
            <ThemeSwitcher />
            <ResumeDownload />
          </div>
        </div>
      </div>
    </header>
  );
}
