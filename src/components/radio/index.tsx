import classNames from "classnames";
import { ReactNode } from "react";

interface OptionProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

export interface RadioProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: OptionProps[];
  label?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  direction?: "vertical" | "horizontal";
}

const Radio = ({
  value = "",
  onChange = () => {},
  options = [],
  label = "",
  disabled = false,
  size = "medium",
  direction = "horizontal",
}: RadioProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className={classNames("", {
        "text-sm": size === "small",
        "text-base": size === "medium",
        "text-lg": size === "large",
      })}>{label}</span>
      <div
        className={classNames("flex gap-5", {
          "flex-col": direction === "vertical",
          "bg-gray-100 pointer-events-none cursor-not-allowed": disabled,
          "p-2": size === "small",
          "p-3": size === "medium",
          "p-4": size === "large"
        })}
      >
        {options.map((option) => (
          <div
            key={option.label}
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            <div
              className={classNames(
                "w-4 h-4 border border-solid rounded-full box-border",
                {
                  "border-primary": option.value === value && !disabled,
                  "border-gray-300": disabled,
                  "border-[5px]": option.value === value,
                }
              )}
            ></div>
            <span
              className={classNames("mt-[2px]", {
                "text-gray-500": disabled,
                "text-sm": size === "small",
                "text-base": size === "medium",
                "text-lg": size === "large",
              })}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
