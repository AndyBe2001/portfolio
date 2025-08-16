import { ResumeDownload } from "@/components/resume-download";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "@/i18n/navigation";

export default async function DefaultHeader() {
  return (
    <header className="top-0 w-full h-16 bg-background z-20 sticky border-b transition-colors">
      <div
        className={
          "mx-auto max-w-7xl px-5 flex justify-between items-center h-full"
        }>
        <Link href={"/"} className={"font-semibold text-xl z-10"}>
          Andy
        </Link>
        <div className={"flex gap-6 items-center z-10"}>
          <nav className="gap-4 items-center hidden md:flex">
            <Link className="animate-link" href="/about">
              About
            </Link>
            <Link className="animate-link" href="/experience">
              Experience
            </Link>
            <Link className="animate-link" href="/showcase">
              Showcase
            </Link>
          </nav>
          <div className={"flex gap-2 items-center"}>
            <ThemeSwitcher />
            <ResumeDownload />
          </div>
        </div>
      </div>
    </header>
  );
}
