import classNames from "classnames";
import { CircleX } from "lucide-react";
import { ReactNode } from "react";
import Button from "../button";

export interface ModalProps {
  showModal: boolean;
  onCancel?: () => void;
  footer?: boolean;
  title?: string;
  children: ReactNode;
  footerChildren?: ReactNode;
  size?: "small" | "medium" | "large";
}

const Modal = ({
  title,
  children,
  footerChildren,
  showModal,
  onCancel,
  footer = true,
  size = "medium",
}: ModalProps) => {
  if (!showModal) return null;
  return (
    <div className="absolute inset-0 bg-black/30 flex justify-center items-center">
      <div
        className={classNames(
          "bg-white shadow-sm rounded-lg p-4 flex flex-col gap-3",
          {
            "w-1/4": size === "small",
            "w-1/2": size === "medium",
            "w-3/4": size === "large",
          }
        )}
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-normal">{title}</h2>
          <CircleX onClick={onCancel} className="cursor-pointer" />
        </div>

        <hr />

        <div className="text-sm">{children}</div>

        {footer && (
          <div className="flex justify-end gap-2">
            {footerChildren}
            <Button
              title="Cancel"
              onClick={onCancel}
              variant="outlined"
              rounded="medium"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
