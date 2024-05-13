import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const setup = () => {
  config.autoAddCss = false;
};

const fontawesomeConfig = {
  setup,
};
export default fontawesomeConfig;
