function Button({ title, variant = "contained", onClick }: ButtonProps) {
  let className = "py-2 px-5 cursor-pointer";

  if (variant === "outlined") className += " border border-solid border-black bg-white text-black";
  if (variant === "contained") className += " bg-black text-white";
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
}

export default Button;

export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
}
