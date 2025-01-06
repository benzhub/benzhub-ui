import { ReactNode, useState } from "react";
import ThemeProvider from "../theme-provider";
import { ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";

interface OptionProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

export interface SelectProps {
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: OptionProps[];
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large";
}

const Select = ({
  value = "",
  onChange = () => {},
  options = [],
  name = "",
  placeholder = "",
  disabled = false,
  size = "medium",
  rounded = "none",
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);

  let selectedOption = null;

  if (value) {
    selectedOption = options.find((option) => option.value === value);
  }

  let labelToShow = selectedOption ? (
    <div className="flex gap-2 items-center">
      {selectedOption.icon && selectedOption.icon}
      {selectedOption.label}
    </div>
  ) : (
    placeholder
  );

  return (
    <ThemeProvider>
      <div className="w-max box-border" id={name}>
        <div
          className={classNames(
            "border border-solid border-primary cursor-pointer flex justify-between items-center gap-2",
            {
              "bg-gray-100 pointer-events-none cursor-not-allowed": disabled,
              "rounded-sm": rounded === "small",
              "rounded-md": rounded === "medium",
              "rounded-lg": rounded === "large",
              "p-2": size === "small",
              "p-3": size === "medium",
              "p-4": size === "large",
            }
          )}
          onClick={() => setShowOptions((prev) => !prev)}
        >
          {labelToShow}

          {showOptions ? (
            <ChevronUp size={15} className="text-primary" />
          ) : (
            <ChevronDown size={15} className="text-primary" />
          )}
        </div>
        {showOptions && (
          <div className="flex flex-col gap-3 border border-solid rounded-sm p-2 cursor-pointer mt-1">
            {options.map((option) => (
              <div
                key={`select-${option.label}`}
                className={classNames(
                  "hover:bg-gray-300 p-1 rounded flex items-center gap-2 justify-start",
                  {
                    "bg-gray-300": option.value === value,
                  }
                )}
                onClick={() => {
                  onChange(option.value);
                  setShowOptions(false);
                }}
              >
                {option?.icon}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Select;
