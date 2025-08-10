import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import { ShinyText } from "@/ui/shiny-text";

export default async function DefaultHeader() {
  return (
    <header className="sticky top-0 bg-background w-full h-16 flex justify-between items-center z-20">
      <Link href={"/"} className={"font-semibold text-xl"}>
        Andy
      </Link>
      <div className={"flex gap-6 items-center"}>
        <nav className="flex gap-4 items-center">
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
