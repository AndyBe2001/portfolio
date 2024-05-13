import { HeaderContainer } from "./header-container";
import { HeaderLinks } from "./header-links";
import { HeaderOptions } from "./header-options";
import { HeaderSeparator } from "./header-separator";
import { HeaderTitle } from "./header-title";

export const HeaderView = async () => {
  return (
    <header className="dark:bg-dark bg-light sticky left-0 top-0 z-10 h-20 w-full px-5 transition-colors">
      <HeaderContainer>
        <HeaderTitle />
        <HeaderLinks />
        <HeaderSeparator />
        <HeaderOptions />
      </HeaderContainer>
    </header>
  );
};
