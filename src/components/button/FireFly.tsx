import classNames from "classnames";
import { ReactNode } from "react";

export type FireFlyButtonType = {
  title: string;
  onClick?: () => void;
  color?: string;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  disabled?: boolean;
};

const FireFlyButton = ({
  title,
  onClick,
  color = "var(--primary-color)",
  size = "medium",
  rounded = "none",
  icon,
  iconPosition = "left",
  isLoading = false,
  disabled = false,
}: FireFlyButtonType) => {
  const getRgbColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const buttonClassName = classNames(
    "flex justify-center items-center gap-3 border-none text-base text-white tracking-[4px] font-bold uppercase transition-[box-shadow] duration-500",
    {
      "px-4 py-3": size === "small",
      "px-6 py-4": size === "medium",
      "px-8 py-6": size === "large",
      "rounded-none": rounded === "none",
      "rounded-sm": rounded === "small",
      "rounded-md": rounded === "medium",
      "rounded-lg": rounded === "large",
      "cursor-pointer": !disabled,
      "pointer-events-none bg-opacity-10 border-none cursor-not-allowed text-gray-500":
        disabled || isLoading,
    }
  );

  const rgbColor = getRgbColor(color);

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      style={{
        backgroundColor: color,
        boxShadow: `0 0 25px ${color}`,
        ["--firefly-color" as string]: color,
        ["--firefly-rgb" as string]: rgbColor,
      }}
      onMouseOver={(e) => {
        const btn = e.currentTarget;
        btn.style.boxShadow = `
          0 0 5px var(--firefly-color),
          0 0 25px var(--firefly-color),
          0 0 50px var(--firefly-color),
          0 0 100px var(--firefly-color)
        `;
      }}
      onMouseOut={(e) => {
        const btn = e.currentTarget;
        btn.style.boxShadow = `0 0 25px var(--firefly-color)`;
      }}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && icon}
      {title}
      {icon && iconPosition === "right" && icon}

      {isLoading && (
        <div
          data-testid="loading-spinner"
          className={classNames(
            "w-3 h-3 border-2 border-solid border-t-transparent border-white animate-spin rounded-full"
          )}
        ></div>
      )}
    </button>
  );
};

export default FireFlyButton;
