"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

export const HeaderTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <FontAwesomeIcon
        icon={mounted && theme === "light" ? faSun : faMoon}
        className="hover:text-primary-600"
      />
    </button>
  );
};
