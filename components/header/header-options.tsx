import { HeaderLanguage } from "./header-language";
import { HeaderTheme } from "./header-theme";

export const HeaderOptions = () => (
  <div className="flex items-center gap-4 sm:gap-6">
    <HeaderTheme />
    <HeaderLanguage />
  </div>
);
