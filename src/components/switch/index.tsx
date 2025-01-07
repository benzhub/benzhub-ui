import classNames from "classnames";
import ThemeProvider from "../theme-provider";

export interface SwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  direction?: "vertical" | "horizontal";
}

const Switch = ({
  label = "",
  checked,
  onChange,
  disabled = false,
  direction = "horizontal",
}: SwitchProps) => {
  return (
    <ThemeProvider>
      <div
        className={classNames("flex gap-1", {
          "flex-row items-center": direction === "horizontal",
          "flex-col": direction === "vertical",
        })}
      >
        <span className="text-sm">{label}</span>

        <div
          className={classNames(
            "bg-gray-400 w-10 p-1 rounded-full flex cursor-pointer",
            {
              "bg-primary justify-end": checked,
              "opacity-50 pointer-events-none cursor-not-allowed": disabled,
            }
          )}
          onClick={() => onChange(!checked)}
        >
          <div className="w-4 h-4 rounded-full bg-white"></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Switch;
