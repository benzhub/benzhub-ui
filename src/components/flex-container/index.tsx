import classNames from "classnames";
import { ReactNode } from "react";

export interface FlexContainerProps {
  children: ReactNode;
  direction?: "row" | "column";
  justify?: "start" | "end" | "center";
  align?: "top" | "bottom" | "center";
  gap?: number;
  height?: number;
  showBorder?: boolean;
}

const FlexContainer = ({
  children,
  direction = "column",
  justify = "start",
  align = "top",
  gap = 0,
  height = 0,
  showBorder = false,
}: FlexContainerProps) => {
  return (
    <div
      style={{
        height,
        gap,
      }}
      className={classNames("flex", {
        "flex-col": direction === "column",
        "flex-row": direction === "row",
        "justify-start": justify === "start",
        "justify-center": justify === "center",
        "justify-end": justify === "end",
        "items-start": align === "top",
        "items-center": align === "center",
        "items-end": align === "bottom",
        "border border-solid border-gray-500": showBorder,
      })}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
