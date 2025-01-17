import { getLocale } from "next-intl/server";
import { headers } from "next/headers";

import { Link } from "@/navigation";
import { HeaderLanguage } from "./header-language";

export const Header = async () => {
  const locale = await getLocale();

  return (
    <header className="sticky top-0 h-14 flex justify-between items-center border-b bg-white">
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
    </header>
  );
};
