import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { ShinyText } from "@/ui/shiny-text";

export default async function DefaultHeader() {
  return (
    <header className="top-0 w-full h-16 flex justify-between items-center z-20 sticky">
      <div
        className={
          "absolute top-0 left-1/2 w-dvw h-full bg-background -translate-x-1/2"
        }
      />
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
        <div className={"flex gap-4 items-center"}>
          <ThemeSwitcher />
          <Button>
            <ShinyText>Download CV</ShinyText>
          </Button>
        </div>
      </div>
    </header>
  );
}
