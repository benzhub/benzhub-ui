import ThemeProvider from "./";
import { ThemeProviderProps } from "./";

export default {
  title: "ThemeProvider",
  component: ThemeProvider,
};

export const BasicTheme = {
  args: {
    primaryColor: "#000",
  },
} as { args: ThemeProviderProps };
