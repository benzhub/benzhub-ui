import classNames from "classnames";

function Button({ title, variant = "contained", onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames("py-2 px-5 cursor-pointer", {
        "border border-solid border-black bg-white text-black":
          variant === "outlined",
        "bg-black text-white": variant === "contained",
        "pointer-events-none bg-gray-300 border-none cursor-not-allowed": disabled
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
}
