import classNames from "classnames";

function Input({
  value,
  onChange,
  name = "",
  placeholder = "",
  label = "",
  disabled = false,
  type = "text",
  size = "medium",
  rounded = "none",
  error = "",
  gap = 1,
}: InputProps) {
  return (
    <div
      className={classNames("flex flex-col w-max", {
        "gap-1": gap === 1,
        "gap-2": gap === 2,
        "gap-3": gap === 3,
        "gap-4": gap === 4,
      })}
    >
      <label htmlFor="input">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={classNames("px-5", {
          "h-8": size === "small",
          "h-10": size === "medium",
          "h-12": size === "large",
          "rounded-sm": rounded === "small",
          "rounded-md": rounded === "medium",
          "rounded-lg": rounded === "large",
          "rounded-full": rounded === "full",
          "border border-red-500 border-solid": error,
          "cursor-not-allowed pointer-events-none bg-gray-100": disabled,
        })}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}

export default Input;

export interface InputProps {
  value: string | number;
  onChange: (value: string | number) => void;
  name?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  type?: "text" | "number" | "password";
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  error?: string;
  gap?: 1 | 2 | 3 | 4;
}
