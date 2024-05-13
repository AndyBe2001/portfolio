"use client";

import { Link } from "@/navigation";

export const HeaderLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="after:bg-primary-600 relative whitespace-nowrap px-1 after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:translate-y-1 after:scale-x-0 after:opacity-0 after:transition-all  after:content-[''] after:hover:scale-x-100 after:hover:opacity-100">
      {children}
    </Link>
  );
};
