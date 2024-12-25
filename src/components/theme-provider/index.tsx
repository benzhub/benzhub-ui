import { ReactNode, useEffect } from "react";

const ThemeProvider = ({
  children,
  primaryColor = document.documentElement.style.getPropertyValue(
    "--primary-color"
  ) || "#000",
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

const defaultTheme = {
  "--primary-color": "#3b82f6", // 藍色
  // ... 其他主題變量
};
