import classNames from "classnames";

function Button({
  title,
  variant = "contained",
  onClick,
  disabled,
  size = "medium",
  rounded = "none",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames("cursor-pointer shadow-none text-sm px-5", {
        "border border-solid border-black bg-white text-black":
          variant === "outlined",
        "bg-black text-white": variant === "contained",
        "pointer-events-none bg-gray-300 border-none cursor-not-allowed":
          disabled,
        "h-8": size === "small",
        "h-10": size === "medium",
        "h-12": size === "large",
        "rounded-none": rounded === "none",
        "rounded-sm": rounded === "small",
        "rounded-md": rounded === "medium",
        "rounded-lg": rounded === "large",
      })}
    >
      {title}
    </button>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large";
}
