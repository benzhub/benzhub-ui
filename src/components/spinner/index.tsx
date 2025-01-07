import classNames from "classnames";

export interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
}

const Spinner = ({
  size = "medium",
  color = "blue",
  text = "",
}: SpinnerProps) => {
  return (
    <div className="w-max flex flex-col items-center gap-2">
      <div
        className={classNames(
          "border border-solid border-t-transparent rounded-full animate-spin",
          {
            "h-10 w-10 border-2": size === "small",
            "h-16 w-16 border-4": size === "medium",
            "h-24 w-24 border-8": size === "large",
          }
        )}
        style={{ borderColor: color, borderTopColor: "transparent" }}
      ></div>
      {text && <p className="text-sm text-gray-500">{text}</p>}
    </div>
  );
};

export default Spinner;
