import { addons } from "@storybook/manager-api";
import designTheme from "./designTheme";

addons.setConfig({
  theme: designTheme,
});
