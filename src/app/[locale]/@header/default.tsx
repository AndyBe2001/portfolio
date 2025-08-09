import { Link } from "@/i18n/navigation";
import { Button } from "@/ui/button";
import ShinyText from "@/ui/shiny-text";

export default async function DefaultHeader() {
  return (
    <header className="sticky top-0 bg-white w-full h-16 flex justify-between items-center z-20">
      <span className={"font-semibold text-xl"}>Andy</span>
      <div className={"flex gap-4 items-center"}>
        <nav className="flex gap-4 items-center">
          <Link className="AnimateUnderline" href="/about">
            About
          </Link>
          <Link className="AnimateUnderline" href="/services">
            Service
          </Link>
          <Link className="AnimateUnderline" href="/works">
            Work
          </Link>
          <Link className="AnimateUnderline" href="/contact">
            Contact
          </Link>
        </nav>
        <Button>
          <ShinyText>Download CV</ShinyText>
        </Button>
      </div>
    </header>
  );
}
