import { Link } from "@/navigation";
import { HeaderLanguage } from "./header-language";

export const Header = async () => {
  return (
    <header className="sticky top-0 border-b bg-white">
      <div className="flex justify-between items-center h-14">
        <span>Andy</span>
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
          <HeaderLanguage />
        </nav>
      </div>
    </header>
  );
};
