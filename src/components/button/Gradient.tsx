import classNames from "classnames";
import { ReactNode } from "react";
import ThemeProvider from "../theme-provider";
import { motion } from "framer-motion";
import Color from "color";

export type GradientButtonType = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
};

function GradientButton({
  title,
  onClick,
  color = "",
  disabled,
  size = "medium",
  rounded = "none",
  icon,
  iconPosition = "left",
  isLoading = false,
}: GradientButtonType) {
  const rootStyle = getComputedStyle(document.documentElement);
  const primaryColor = color || rootStyle.getPropertyValue("--primary-color").trim();

  const lightened = Color(primaryColor).lighten(0.65).hex();

  return (
    <ThemeProvider>
      <motion.button
        onClick={onClick}
        disabled={disabled || isLoading}
        className={classNames(
          "border-none text-white placeholder:text-white cursor-pointer shadow-none text-sm px-5 transition-all ease-in-out duration-200 active:scale-90",
          {
            "pointer-events-none bg-gray-300 border-none cursor-not-allowed text-gray-500":
              disabled || isLoading,
            "h-8": size === "small",
            "h-10": size === "medium",
            "h-12": size === "large",
            "rounded-none": rounded === "none",
            "rounded-sm": rounded === "small",
            "rounded-md": rounded === "medium",
            "rounded-lg": rounded === "large",
            "rounded-full": rounded === "full",
            "flex justify-center gap-3 items-center": icon || isLoading,
            "flex-row-reverse": icon && iconPosition === "right",
          }
        )}
        style={{
          background: `linear-gradient(45deg, ${lightened}, ${primaryColor}, ${lightened})`,
          backgroundSize: "200% 150%",
        }}
        whileHover={{
          backgroundPosition: "100% 10%",
          transition: { duration: 0.01, ease: "easeInOut" },
        }}
      >
        {icon && icon}
        {title}
        {isLoading && (
          <div
            data-testid="loading-spinner"
            className={classNames(
              "w-3 h-3 border-2 border-solid border-t-transparent animate-spin rounded-full"
            )}
          />
        )}
      </motion.button>
    </ThemeProvider>
  );
}

export default GradientButton;
