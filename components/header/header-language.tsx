"use client";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { locales, localesName } from "@/configs/i18n";
import { usePathname, useRouter } from "@/navigation";

export const HeaderLanguage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string>("");

  const [open, setOpen] = React.useState<boolean>(false);

  const handleChangeLanguage = (locale: string) => {
    router.push(pathname, { locale });
  };

  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; NEXT_LOCALE=`);
    if (parts.length === 2) {
      const temp = parts.pop();
      if (temp) setCurrentLocale(temp.split(";").shift() ?? "");
    }
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      <span
        className={["cursor-pointer", open ? "text-primary-600" : ""].join(
          " "
        )}>
        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
        <span className="hidden sm:inline-block">
          {localesName[currentLocale as keyof typeof localesName]}
        </span>
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute -right-3 overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}>
            <div className="dark:border-primary-950 bg-light dark:bg-dark mt-2 flex flex-col gap-1 rounded-2xl border p-1">
              {locales
                .filter(locale => locale !== currentLocale)
                .map(locale => (
                  <button
                    key={`language_${locale}`}
                    className="hover:bg-primary-100 dark:hover:bg-primary-950 w-full whitespace-nowrap rounded-xl px-4 py-1 text-center text-sm"
                    onClick={() => handleChangeLanguage(locale)}>
                    {localesName[locale as keyof typeof localesName]}
                  </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
