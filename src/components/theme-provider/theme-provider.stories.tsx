import ThemeProvider from "./";
import { ThemeProviderProps } from "./";

export default {
  title: "ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
};

export const BasicTheme = {
  args: {
    primaryColor: "#26aaeb",
  },
} as { args: ThemeProviderProps };
