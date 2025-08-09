import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";

export default async function DefaultHeader() {
  return (
    <header className="sticky top-0 border-b bg-white w-full">
      <div className="flex justify-between items-center h-14 px-4 w-full mx-auto max-w-7xl">
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
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
