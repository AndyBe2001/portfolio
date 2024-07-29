"use client";

import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

import { useClickOutside } from "@/hooks/use-click-outside";
import { Link } from "@/navigation";
import { cn } from "@/utils/tailwindcss";

export interface MultipleLinkProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  mainClassName?: string;
  menuClassName?: string;
  href: string;
  menu?: { key?: string; label: string; href: string }[];
}
export const MultipleLink = ({
  mainClassName,
  menuClassName,
  className,
  children,
  href,
  menu,
  ...props
}: MultipleLinkProps) => {
  const toogleElement = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useClickOutside(toogleElement, () => setVisible(false));

  return (
    <span className={cn("relative flex h-14", className)} {...props}>
      <Link
        target="_blank"
        className={cn(
          "grid place-items-center bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900 h-full px-4 text-white transition-colors",
          menu ? "rounded-l-xl" : "rounded-xl",
          mainClassName
        )}
        href={href}>
        {children}
      </Link>
      {menu && (
        <button
          ref={toogleElement}
          className={cn(
            "rounded-r-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 dark:active:bg-primary-900 h-full px-4 text-white border-l border-white transition-colors",
            menuClassName
          )}
          onClick={() => setVisible(!visible)}>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      )}
      <AnimatePresence initial={false}>
        {visible && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={cn(
              "absolute right-0 top-[calc(100%+4px)] overflow-hidden bg-primary-600 p-1.5 rounded-xl dark:bg-primary-700 grid"
            )}>
            {menu &&
              menu.map(link => (
                <a
                  key={link.key || link.label}
                  className="hover:bg-primary-700 active:bg-primary-800 dark:hover:bg-primary-800 dark:active:bg-primary-900 px-2 py-1 rounded-lg text-center text-sm"
                  target="_blank"
                  href={link.href}>
                  {link.label}
                </a>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
