import classNames from "classnames";
import { AlertTriangle, Check, Info, X } from "lucide-react";
import { useState } from "react";

export interface AlertProps {
  type?: "success" | "error" | "warning" | "info";
  message: string;
  description?: string;
  isShowIcon?: boolean;
  closeAble?: boolean;
}

const Alert = ({
  type = "info",
  message,
  description,
  isShowIcon = true,
  closeAble = false,
}: AlertProps) => {
  const [isShowAlert, setIsShowAlert] = useState(true);
  if (!isShowAlert) return <></>;
  return (
    <div
      className={classNames("p-3 border border-solid rounded-sm", {
        "bg-blue-500 bg-opacity-20 border-blue-500": type === "info",
        "bg-green-500 bg-opacity-20 border-green-500": type === "success",
        "bg-red-500 bg-opacity-20 border-red-500": type === "error",
        "bg-yellow-500 bg-opacity-20 border-yellow-500": type === "warning",
      })}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold flex items-center gap-2">
          {isShowIcon && type === "info" && (
            <Info size={16} className="text-blue-500" />
          )}
          {isShowIcon && type === "success" && (
            <Check size={16} className="text-green-500" />
          )}
          {isShowIcon && type === "error" && (
            <X size={16} className="text-red-500" />
          )}
          {isShowIcon && type === "warning" && (
            <AlertTriangle size={16} className="text-yellow-500" />
          )}
          {message}
        </span>

        {closeAble && (
          <X
            size={18}
            className="cursor-pointer"
            onClick={() => setIsShowAlert(false)}
          />
        )}
      </div>
      {description && <p className="text-xs">{description}</p>}
    </div>
  );
};

export default Alert;
