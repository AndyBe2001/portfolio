import { Link } from "@/navigation";

export const Header = async () => {
  return (
    <header className="flex justify-between items-center py-4">
      <h3 className="font-semibold flex items-center gap-2">
        <div className="size-6 rounded-full bg-primary-400"></div>Andy Tsai
      </h3>
      <nav>
        <ul className="flex gap-6">
          <li className="font-semibold text-gray-700">
            <Link href="/#" className="AnimateUnderline">
              About
            </Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/#projects" className="AnimateUnderline">
              Projects
            </Link>
          </li>
          <li className="font-semibold text-gray-700">
            <Link href="/#contact" className="AnimateUnderline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
