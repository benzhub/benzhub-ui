import { ReactNode, useEffect } from "react";

const ThemeProvider = ({
  children,
  primaryColor = document.documentElement.style.getPropertyValue(
    "--primary-color"
  ) || "#26aaeb",
}: ThemeProviderProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  return <>{children}</>;
};

export default ThemeProvider;

export interface ThemeProviderProps {
  primaryColor?: string;
  children: ReactNode;
}

